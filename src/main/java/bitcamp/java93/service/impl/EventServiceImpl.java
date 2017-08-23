package bitcamp.java93.service.impl;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
  }
  
  // 이벤트 변경 > 뮤지션 지원 상태 변경, 홍보 상태 변경 및 변경 메시지 발송
  public void update(Event event) throws Exception {
    HashMap<String,Object> valueMap = new HashMap<>();
    valueMap.put("eventNo", event.getNo());
    
    eventDao.update(event);
    
    Musician musicianPrList = musicianDao.myEventPrList(event.getNo());
    if(musicianPrList != null) {
      for (String muNo : musicianPrList.getMuNoList()) {
        valueMap.put("musicianNo", muNo);
        matchDao.updateAllPrActiveN(valueMap);
      }
    }
    
    Musician musicianAppyList = musicianDao.myEventAppyList(event.getNo());

    if(musicianAppyList != null) {
      for (String muNo : musicianAppyList.getMuNoList()) {
        valueMap.put("musicianNo", muNo);
        matchDao.updateAllAppyActiveN(valueMap);
        notificationDao.insertEventEditNoti(valueMap);
      }
    }
  }
  
  // 이벤트 삭제 > 뮤지션 지원 상태 변경, 홍보 상태 변경 및 삭제 메시지 발송
  public void delete(int eno) throws Exception {
    HashMap<String,Object> valueMap = new HashMap<>();
    valueMap.put("eventNo", eno);
    eventDao.delete(eno);
    
    Musician musicianPrList = musicianDao.myEventPrList(eno);

    if(musicianPrList != null) {
      for (String muNo : musicianPrList.getMuNoList()) {
        valueMap.put("musicianNo", muNo);
        matchDao.updateAllPrActiveN(valueMap);
      }
    }
    
    Musician musicianAppyList = musicianDao.myEventAppyList(eno);

    if(musicianAppyList != null) {
      for (String muNo : musicianAppyList.getMuNoList()) {
        valueMap.put("musicianNo", muNo);
        matchDao.updateAllAppyActiveN(valueMap);
        notificationDao.insertEventDeleteNoti(valueMap);
      }
    }
  }
  
  // 이벤트 리허설 삭제
  public  void deleteEventReherse(int eno) throws Exception {   
    eventDao.deleteReherse(eno);
  }
  
  // 이벤트 리허설 추가
  public  void registEventReherse(Event event) throws Exception {   
    eventDao.insertReherse(event);
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

  // // 1. 뮤지션에게 홍보(pr)
  public void prEvent(int musicianNo, int eventNo) throws Exception {
    HashMap<String,Object> valueMap = new HashMap<>();
    valueMap.put("musicianNo", musicianNo);
    valueMap.put("eventNo", eventNo);
    
    int prno = matchDao.selectExistPrCount(valueMap);
    
    if(prno != 0) {
      valueMap.put("prno", prno);
      matchDao.updatePrActiveY(prno);
      notificationDao.insertEventPrNoti(valueMap);
      return;
    }
    
    matchDao.insertPr(valueMap);
    valueMap.put("prno", valueMap.get("prno"));
    notificationDao.insertEventPrNoti(valueMap);
    
  }

  //뮤지션 모드 > 이벤트 상세페이지 > 뮤지션 지원 추가 - pr을 받았으면 pr status 'Y'변경
  public void requestEvent(int muNo, int eNo) throws Exception {
    HashMap<String,Object> valueMap = new HashMap<>();
    valueMap.put("musicianNo", muNo);
    valueMap.put("eventNo", eNo);
    /*    Musician musician = matchDao.receivePrCheck(valueMap);
     */
    matchDao.insertAppy(valueMap);
    valueMap.put("appyno", valueMap.get("appyno"));
    notificationDao.insertEventAppyNoti(valueMap);
  }
  
  // 뮤지션이 재지원(appy.active = "Y") && 일반인에게 뮤지션이 appy 알림 추가
  public void requestEventCheck(int muNo, int eNo, int appyNo) throws Exception {
    HashMap<String,Object> valueMap = new HashMap<>();
    valueMap.put("musicianNo", muNo);
    valueMap.put("eventNo", eNo);
    valueMap.put("appyno", appyNo);
    matchDao.updateAppyActiveY(appyNo);
    notificationDao.insertEventAppyNoti(valueMap);
  }
  
  // 12.뮤지션이 지원 취소(appy.active = "N") && 12.뮤지션이 appy 취소시 있던 noti 삭제
  public String requestEventCancel(HashMap<String, Object> valueMap) throws Exception {
    int appyno = matchDao.selectExistAppyCount(valueMap);
    int isRejected = matchDao.checkPrStatus(appyno);

    if(isRejected != 0) return "rejected";
    
    matchDao.updateAppyActiveN(appyno);
    valueMap.put("appyno", appyno);
    notificationDao.deleteEventAppyNoti(appyno);
    return "success";
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

  public Event myEventDetail(int eNo) throws Exception {
    return eventDao.selectMyEvent(eNo);
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
  public String decideMatch(HashMap<String, Object> valueMap) throws Exception {
    int appyno = matchDao.selectExistAppyCount(valueMap);
    int isCanceled = matchDao.checkAppyActive(appyno);

    if(isCanceled != 0) return "canceled";

    matchDao.updateAppyStatusY(appyno);
    matchDao.insertMatch(valueMap);
    notificationDao.insertEventMtcNoti(valueMap);
    chatDao.insertFirstChat(valueMap);

    return "success";
  }

  //일반모드 > 이벤트 상세페이지 > 종료 - 리뷰 추가 리뷰 메시지 작성
  public void updateReview(Event event, int musicianNo) throws Exception {
    System.out.println(event);
    System.out.println(musicianNo);
    matchDao.updateReview(event);
    HashMap<String,Object> valueMap = new HashMap<>();
    valueMap.put("musicianNo", musicianNo);
    valueMap.put("eventNo", event.getNo());
    valueMap.put("mtcno", event.getMtcno());
    notificationDao.insertEventRevNoti(valueMap);
  }

  /*11. 일반인이 홍보(PR) 취소*/
  public String cancelPr(HashMap<String, Object> valueMap) throws Exception {
    int prno = matchDao.selectExistPrCount(valueMap);
    int isRejected = matchDao.checkPrStatus(prno);

    if(isRejected != 0) return "rejected";
    
    System.out.println(valueMap);
    System.out.println(prno);

    matchDao.updatePrActiveN(prno);
    valueMap.put("prno", prno);
    notificationDao.deleteEventPrNoti(prno);
    return "success";
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
  public String acceptPr(HashMap<String, Object> valueMap) throws Exception {
    int prno = matchDao.selectExistPrCount(valueMap);
    int isCanceled = matchDao.checkPrActive(prno);

    if(isCanceled != 0) return "canceled";

    matchDao.updatePrStatusY(prno);
    valueMap.put("prno", prno);
    notificationDao.acceptEventPrNoti(valueMap);

    return "success";
  }
  
  /*4. 뮤지션이 이벤트에 지원(APPY)하기*/
  public String appyEvent(HashMap<String, Object> valueMap) throws Exception {
    int appyno = matchDao.selectExistAppyCount(valueMap);
    if(appyno == 0) {//처음 지원한 경우
      matchDao.insertAppy(valueMap);
    } else {
      int isCanceled = matchDao.checkAppyActive(appyno);
      if(isCanceled != 0) {//재지원인 경우
        matchDao.updateAppyActiveY(appyno);
      }

      int isRejected = matchDao.checkAppyStatus(appyno);
      if(isRejected != 0) {//상대가 거절하여 지원을 할 수 없는 경우
        return "rejected";
      }
    }
    
    int prno = matchDao.selectExistPrCount(valueMap);
    if(prno != 0) {//prno가 있는 경우
      valueMap.put("prno", prno);
      int isPrCanceled = matchDao.checkPrActive(prno);
      if(isPrCanceled == 0) {//pr이 유효한 경우, 즉 취소 상태가 아닌 경우
        matchDao.updatePrStatusY(prno);
      }
    }

    notificationDao.insertEventAppyNoti(valueMap);

    return "success";
  }

}

