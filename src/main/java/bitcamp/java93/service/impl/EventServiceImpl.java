package bitcamp.java93.service.impl;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import bitcamp.java93.dao.CategoryDao;
import bitcamp.java93.dao.ChatDao;
import bitcamp.java93.dao.EventDao;
import bitcamp.java93.dao.MatchDao;
import bitcamp.java93.dao.MusicianDao;
import bitcamp.java93.dao.NotificationDao;
import bitcamp.java93.domain.Event;
import bitcamp.java93.domain.Musician;
import bitcamp.java93.service.EventService;

@Service
public class EventServiceImpl implements EventService {

  @Autowired
  EventDao eventDao;

  @Autowired
  CategoryDao categoryDao;

  @Autowired
  MatchDao matchDao;

  @Autowired
  NotificationDao notificationDao;

  @Autowired
  MusicianDao musicianDao;

  @Autowired
  ChatDao chatDao;

  public List<Event> listOngoing() throws Exception {   
    return eventDao.selectOngoingList();
  }

  // 이벤트 추가
  public void add(Event event) throws Exception {
    eventDao.insert(event);
    this.registCategory(event.getNo(), event.getEventRegistTheme(), event.getEventRegistMajor(), event.getEventRegistGenre());

    if(event.getRhsinfo() != null && event.getRhspay() != 0 && event.getRhsnum() != 0) {
      eventDao.insertReherse(event);
    }
  }
  
  // 1. 뮤지션에게 홍보(pr)
  public String acceptAppyAndPr(HashMap<String, Object> valueMap) throws Exception {
    String result = "success";
    
    if(this.decideMatch(valueMap) == "success") {
      result = "decideMatch";
    }
    
    int prno = matchDao.selectExistPrCount(valueMap);
    if(prno == 0) {//처음 홍보한 경우
      matchDao.insertPr(valueMap);
    } else {
      
      int isRejected = matchDao.checkPrStatus(prno);
      if(isRejected != 0) {//상대가 거절하여 홍보를 할 수 없는 경우
        return "rejected";
      }
      
      int isCanceled = matchDao.checkPrActive(prno);
      if(isCanceled != 0) {//재홍보인 경우
        matchDao.updatePrActiveY(prno);
      }
    }
    
    if(result != "decideMatch") notificationDao.insertEventPrNoti(valueMap);

    return result;
  }
  
  /*2. 뮤지션이 홍보(PR) 거절하기*/
  public String rejectPr(HashMap<String, Object> valueMap) throws Exception {
    int prno = matchDao.selectExistPrCount(valueMap);
    int isCanceled = matchDao.checkPrActive(prno);

    if(isCanceled != 0) return "canceled";

    matchDao.updatePrStatusN(prno);
    valueMap.put("prno", prno);
    notificationDao.rejectEventPrNoti(valueMap);

    return "success";
  }
  
  /*3. 뮤지션이 홍보(PR) 수락하기*/
  private String acceptPr(HashMap<String, Object> valueMap) throws Exception {
    int prno = matchDao.selectExistPrCount(valueMap);
    if(prno == 0) {
      return "noData";
    }
    
    int isCanceled = matchDao.checkPrActive(prno);
    if(isCanceled != 0) return "canceled";

    matchDao.updatePrStatusY(prno);
    valueMap.put("prno", prno);
    notificationDao.acceptEventPrNoti(valueMap);

    return "success";
  }
  
  /*4. 뮤지션이 이벤트에 지원(APPY)하기*/
  public String acceptPrAndAppy(HashMap<String, Object> valueMap) throws Exception {
    String result = "success";
    
    if(this.acceptPr(valueMap) == "success") {
      result = "acceptPr";
    }
    
    int appyno = matchDao.selectExistAppyCount(valueMap);
    if(appyno == 0) {//처음 지원한 경우
      matchDao.insertAppy(valueMap);
    } else {
      
      int isRejected = matchDao.checkAppyStatus(appyno);
      if(isRejected != 0) {//상대가 거절하여 지원을 할 수 없는 경우
        return "rejected";
      }
      
      int isCanceled = matchDao.checkAppyActive(appyno);
      if(isCanceled != 0) {//재지원인 경우
        matchDao.updateAppyActiveY(appyno);
      }
    }
    
    if(result != "acceptPr") notificationDao.insertEventAppyNoti(valueMap);

    return result;
  }
  
  /*5. 일반인이 지원(APPY) 거절*/
  public String rejectAppy(HashMap<String, Object> valueMap) throws Exception {
    int appyno = matchDao.selectExistAppyCount(valueMap);
    int isCanceled = matchDao.checkAppyActive(appyno);

    if(isCanceled != 0) return "canceled"; 

    matchDao.updateAppyStatusN(appyno);
    valueMap.put("appyno", appyno);
    notificationDao.rejectEventAppyNoti(valueMap);

    return "success";
  }

  /*6. 일반인이 매칭 확정하기*/
  private String decideMatch(HashMap<String, Object> valueMap) throws Exception {
    int appyno = matchDao.selectExistAppyCount(valueMap);
    if(appyno == 0) {
      return "noData";
    }
    
    int isCanceled = matchDao.checkAppyActive(appyno);
    if(isCanceled != 0) return "canceled";

    matchDao.updateAppyStatusY(appyno);
    matchDao.insertMatch(valueMap);
    notificationDao.insertEventMtcNoti(valueMap);
    chatDao.insertFirstChat(valueMap);

    return "success";
  }

  //이벤트 변경 > 9. 일반인이 미확정 이벤트 편집
  public void update(Event event) throws Exception {
    int eventNo = event.getNo();

    eventDao.update(event);
    this.deleteCategory(eventNo);
    this.registCategory(eventNo, event.getEventRegistTheme(), event.getEventRegistMajor(), event.getEventRegistGenre());
    eventDao.deleteReherse(eventNo);
    if(event.getRhsinfo() != null && event.getRhspay() != 0 && event.getRhsnum() != 0) {
      eventDao.insertReherse(event);
    }

    this.deleteActive(eventNo, "Edit");
  }

  //이벤트 삭제 > 10. 일반인이 미확정 이벤트 삭제
  public void delete(int eno) throws Exception {
    eventDao.delete(eno);
    this.deleteCategory(eno);
    eventDao.deleteReherse(eno);

    this.deleteActive(eno, "Delete");
  }
  
  /* 11. 일반인이 홍보(PR) 취소*/
  public String cancelPr(HashMap<String, Object> valueMap) throws Exception {
    int prno = matchDao.selectExistPrCount(valueMap);
    int isRejected = matchDao.checkPrStatus(prno);

    if(isRejected != 0) return "rejected";

    matchDao.updatePrActiveN(prno);
    valueMap.put("prno", prno);
    notificationDao.deleteEventPrNoti(prno);
    return "success";
  }
  
  // 12. 뮤지션이 지원(Appy) 취소
  public String cancelAppy(HashMap<String, Object> valueMap) throws Exception {
    int appyno = matchDao.selectExistAppyCount(valueMap);
    int isRejected = matchDao.checkPrStatus(appyno);

    if(isRejected != 0) return "rejected";

    matchDao.updateAppyActiveN(appyno);
    valueMap.put("appyno", appyno);
    notificationDao.deleteEventAppyNoti(appyno);
    return "success";
  }
  
  // 13. 리뷰 작성
  public void updateReview(Event event, int musicianNo) throws Exception {
    matchDao.updateReview(event);
    HashMap<String,Object> valueMap = new HashMap<>();
    valueMap.put("musicianNo", musicianNo);
    valueMap.put("eventNo", event.getNo());
    valueMap.put("mtcno", event.getMtcno());
    notificationDao.insertEventRevNoti(valueMap);
  }
  

  /*뮤지션모드 > 추천탭 > 나에게 꼭 맞는 이벤트*/
  public List<Event> listRecommand(int no) throws Exception {
    return eventDao.selectRecommandList(no);
  }

  /*뮤지션모드 > 추천탭 > 최근 이벤트*/
  public List<Event> listRecent(int no) throws Exception {
    return eventDao.selectRecentList(no);
  }

  //일반모드 > 뮤지션 상세페이지 > 매칭 이벤트 목록 가져오기
  public List<Event> prCheckEvent(int myNo, int muNo) throws Exception {
    HashMap<String,Object> valueMap = new HashMap<>();
    valueMap.put("myNo", myNo);
    valueMap.put("muNo", muNo);
    return eventDao.prCheckList(valueMap);
  }

  @Override
  public List<Event> listSurf() throws Exception {
    return eventDao.selectSurfList();
  }

  /*나의이벤트 > 모집중 이벤트 리스트*/
  public List<Event> listRecruiting(int no) throws Exception {
    return eventDao.selectRecruitingList(no);
  }

  public List<Event> listSearchResult(String search) throws Exception {
    return eventDao.selectSearchResultList(search);
  }

  /*나의이벤트 > 진행중 이벤트 리스트*/
  public List<Event> listOngoing(int no) throws Exception {
    return eventDao.selectOngoingList(no);
  }

  /*나의이벤트 > 종료 이벤트 리스트*/
  public List<Event> listEnd(int no) throws Exception {
    return eventDao.selectEndList(no);
  }

  public List<Event> searchEvent(int no,int thmno, int mjrno, int gnrno, int indexT,int indexM,int indexG,List<String> locFilter) throws Exception {
    HashMap<String,Object> valueMap = new HashMap<>();
    valueMap.put("no", no);
    valueMap.put("thmno", thmno);
    valueMap.put("mjrno", mjrno);
    valueMap.put("gnrno", gnrno);
    valueMap.put("indexT", indexT);
    valueMap.put("indexM", indexM);
    valueMap.put("indexG", indexG);
    valueMap.put("locFilter", locFilter);
    return eventDao.eventSearch(valueMap);

  }

  public Event detail(int eNo, int muNo) throws Exception {
    HashMap<String,Object> valueMap = new HashMap<>();
    valueMap.put("eNo", eNo);
    valueMap.put("muNo", muNo);
    return eventDao.selectEvent(valueMap);
  }

  public Event myEventDetail(int eventNo) throws Exception {
    return eventDao.selectMyEvent(eventNo);
  }

  /*뮤지션모드 - 매칭이벤트 > 진행중 이벤트 리스트*/
  public List<Event> listMusiOngoing(int no) throws Exception {
    return eventDao.selectMusiOngoingList(no);
  }

  /*뮤지션모드 - 매칭이벤트 > 종료 이벤트 리스트*/
  public List<Event> listMusiEnd(int no) throws Exception {
    return eventDao.selectMusiEndList(no);
  }

  /*뮤지션모드 - 지원한 이벤트*/
  public List<Event> listMusiAppy(int no) throws Exception {
    return eventDao.selectMusiAppyList(no);
  }

  /*뮤지션모드 - 제안받은 이벤트*/
  public List<Event> listMusiPr(int no) throws Exception {
    return eventDao.selectMusiPrList(no);
  }

  /*일반모드 > 추천탭 > 나에게 꼭 맞는 이벤트 리스트 - 이벤트 유무 확인*/
  public int getEventCount(int no) throws Exception {
    return eventDao.selectEventCount(no);
  }

  /* 뮤지션 모드 > 이벤트 상세페이지 > 지원 활성여부 확인 */
  public int getAppyCount(int muNo, int eNo) throws Exception {
    HashMap<String,Object> valueMap = new HashMap<>();
    valueMap.put("muNo", muNo);
    valueMap.put("eNo", eNo);
    return matchDao.selectAppyCount(valueMap);
  }

  public List<Event> listMatchingEvent() throws Exception {
    List<Event> matchingList = eventDao.selectMatchingEventList();
    System.out.println("aaaaa"+matchingList);
    HashMap<String,Object> valueMap = new HashMap<>();
    if(matchingList != null) {
      for (int i = 0; i<matchingList.size(); i++) {
        valueMap.put("eventNo", matchingList.get(i).getNo());
        valueMap.put("musicianNo", matchingList.get(i).getMuno());
        valueMap.put("mtcno", matchingList.get(i).getMtcno());
        System.out.println(valueMap);
        //        notificationDao.insertEventTodayNoti(valueMap);
      }
    }
    return matchingList;
  }

  //  public List<Event> listEventExpired() throws Exception {
  //    List<Event> expiredList = eventDao.selectEventExpiredList();
  //    System.out.println("bbbbb"+expiredList);
  //    HashMap<String,Object> valueMap = new HashMap<>();
  //    for (int i = 0; i<expiredList.size(); i++) {
  //      valueMap.put("eventNo", expiredList.get(i).getNo());
  //      notificationDao.insertEventExpiredNoti(valueMap);
  //      System.out.println(valueMap);
  //    }
  //    return expiredList;
  //  }

  // 이벤트 카테고리 입력 메서드
  private void registCategory(int eventNo, List<String> eventRegistTheme, List<String> eventRegistMajor, List<String> eventRegistGenre) {
    HashMap<String,Object> themeMap = new HashMap<>();
    HashMap<String,Object> majorMap = new HashMap<>();
    HashMap<String,Object> genreMap = new HashMap<>();

    themeMap.put("eventNo", eventNo);
    majorMap.put("eventNo", eventNo);
    genreMap.put("eventNo", eventNo);

    for (String eventTheme : eventRegistTheme) {
      themeMap.put("eventTheme", eventTheme);
      categoryDao.insertEventTheme(themeMap);
    }

    for (String eventMajor : eventRegistMajor) {
      majorMap.put("eventMajor", eventMajor);
      categoryDao.insertEventMajor(majorMap);
    }

    for (String eventGenre : eventRegistGenre) {
      genreMap.put("eventGenre", eventGenre);
      categoryDao.insertEventGenre(genreMap);
    }
  }

  //이벤트 카테고리 삭제 메서드
  private  void deleteCategory(int eno) throws Exception {  
    categoryDao.deleteEventTheme(eno);
    categoryDao.deleteEventMajor(eno);
    categoryDao.deleteEventGenre(eno);
  }

  //이벤트 편집,삭제시 지원 및 홍보 active N 변경 내부 메서드
  private  void deleteActive(int eventNo, String Type) throws Exception {
    HashMap<String,Object> valueMap = new HashMap<>();
    valueMap.put("eventNo", eventNo);

    Musician musicianPrList = musicianDao.myEventPrList(eventNo);
    if(musicianPrList != null) {
      for (String muNo : musicianPrList.getMuNoList()) {
        valueMap.put("musicianNo", muNo);
        matchDao.updateAllPrActiveN(valueMap);
      }
    }

    Musician musicianAppyList = musicianDao.myEventAppyList(eventNo);
    if(musicianAppyList != null) {
      if(Type == "Edit") {
        for (String muNo : musicianAppyList.getMuNoList()) {
          valueMap.put("musicianNo", muNo);
          matchDao.updateAllAppyActiveN(valueMap);
          notificationDao.insertEventEditNoti(valueMap);
        }
        return;
      }
      
      if(Type == "Delete") {
        for (String muNo : musicianAppyList.getMuNoList()) {
          valueMap.put("musicianNo", muNo);
          matchDao.updateAllAppyActiveN(valueMap);
          notificationDao.insertEventDeleteNoti(valueMap);
        }
        return;
      }
    }
  }

}

