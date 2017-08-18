package bitcamp.java93.service.impl;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import bitcamp.java93.dao.EventDao;
import bitcamp.java93.dao.NotificationDao;
import bitcamp.java93.domain.Event;
import bitcamp.java93.service.EventService;

@Service
public class EventServiceImpl implements EventService {
 
  @Autowired
  EventDao eventDao;
  
  @Autowired
  NotificationDao notificationDao;
  
  public List<Event> listOngoing() throws Exception {   
    return eventDao.selectOngoingList();
  }
  
  public void add(Event event) throws Exception {   
    eventDao.insert(event);
  }
  
  public  void RegistEventCategory(Event event) throws Exception {   
    this.registCategory(event.getNo(), event.getEventRegistTheme(), event.getEventRegistMajor(), event.getEventRegistGenre());
  }
  
  public  void RegistEventReherse(Event event) throws Exception {   
    eventDao.insertReherse(event);
  }
  
  private void registCategory(int eventNo, List<String> eventRegistTheme, List<String> eventRegistMajor, List<String> eventRegistGenre) {
    /*if (eventRegistTheme == null){
      return;
    }
    
    if (eventRegistMajor == null){
      return;
    }
    
    if (eventRegistGenre == null){
      return;
    }*/
    
    HashMap<String,Object> themeMap = new HashMap<>();
    HashMap<String,Object> majorMap = new HashMap<>();
    HashMap<String,Object> genreMap = new HashMap<>();
    
    themeMap.put("eventNo", eventNo);
    majorMap.put("eventNo", eventNo);
    genreMap.put("eventNo", eventNo);
    
    for (String eventTheme : eventRegistTheme) {
      themeMap.put("eventTheme", eventTheme);
      eventDao.insertTheme(themeMap);
    }
    
    for (String eventMajor : eventRegistMajor) {
      majorMap.put("eventMajor", eventMajor);
      eventDao.insertMajor(majorMap);
    }
    
    for (String eventGenre : eventRegistGenre) {
      genreMap.put("eventGenre", eventGenre);
      eventDao.insertGenre(genreMap);
    }
    
  }

  /*뮤지션모드 > 추천탭 > 나에게 꼭 맞는 이벤트*/
  public List<Event> listRecommand(int no) throws Exception {
    return eventDao.selectRecommandList(no);
  }

  /*뮤지션모드 > 추천탭 > 최근 이벤트*/
  public List<Event> listRecent(int no) throws Exception {
    return eventDao.selectRecentList(no);
  }
  
  public List<Event> checkEvent(int myNo, int muNo) throws Exception {
    HashMap<String,Object> valueMap = new HashMap<>();
    valueMap.put("myNo", myNo);
    valueMap.put("muNo", muNo);
    return eventDao.selectEventList(valueMap);
  }
  
  public void prEvent(int muNo, int eNo) throws Exception {
    HashMap<String,Object> valueMap = new HashMap<>();
    valueMap.put("muNo", muNo);
    valueMap.put("eNo", eNo);
    eventDao.eventRequest(valueMap);
    valueMap.put("prNo", valueMap.get("prno"));
    notificationDao.insertEventPrNoti(valueMap);
  }
  
  public List<Event> listFavor(int no) throws Exception {   
    return eventDao.selectFavorList(no);
  }
  
  @Override
  public void favorRemove(int myNo, int eNo) throws Exception {
    HashMap<String,Object> valueMap = new HashMap<>();
    valueMap.put("myNo", myNo);
    valueMap.put("eNo", eNo);
    eventDao.favorEventRemove(valueMap);
  }
  
  @Override
  public void favorAdd(int myNo, int eNo) throws Exception {
    HashMap<String,Object> valueMap = new HashMap<>();
    valueMap.put("myNo", myNo);
    valueMap.put("eNo", eNo);
    System.out.println(valueMap);
    eventDao.favorEventAdd(valueMap);
  }
  
  @Override
  public List<Event> listSurf(int no) throws Exception {
    return eventDao.selectSurfList(no);
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
  
  @Override
  public List<Event> searchEvent(int no,int thmno, int mjrno, int gnrno, int indexT,int indexM,int indexG) throws Exception {
    HashMap<String,Object> valueMap = new HashMap<>();
    valueMap.put("no", no);
    valueMap.put("thmno", thmno);
    valueMap.put("mjrno", mjrno);
    valueMap.put("gnrno", gnrno);
    valueMap.put("indexL", indexT);
    valueMap.put("indexM", indexM);
    valueMap.put("indexG", indexG);
    return eventDao.eventSearch(valueMap);
  }
  
}

