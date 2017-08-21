package bitcamp.java93.service.impl;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import bitcamp.java93.dao.EventDao;
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
  NotificationDao notificationDao;
  
  @Autowired
  MusicianDao musicianDao;
  
  public List<Event> listOngoing() throws Exception {   
    return eventDao.selectOngoingList();
  }
  
  public void add(Event event) throws Exception {   
    eventDao.insert(event);
  }
  
  public void update(Event event) throws Exception {   
    eventDao.update(event);
  }
  
  public  void deleteEventReherse(int eno) throws Exception {   
    eventDao.deleteReherse(eno);
  }
  
  public  void registEventReherse(Event event) throws Exception {   
    eventDao.insertReherse(event);
  }
  
  public  void delete(int eno) throws Exception {   
    eventDao.deleteAppyEventZero();
    eventDao.delete(eno);
    eventDao.deleteAppyEventOne();
  }
  
  /*뮤지션모드 > 추천탭 > 나에게 꼭 맞는 이벤트*/
  public List<Event> listRecommand(int no) throws Exception {
    return eventDao.selectRecommandList(no);
  }

  /*뮤지션모드 > 추천탭 > 최근 이벤트*/
  public List<Event> listRecent(int no) throws Exception {
    return eventDao.selectRecentList(no);
  }
  
  public List<Event> prCheckEvent(int myNo, int muNo) throws Exception {
    HashMap<String,Object> valueMap = new HashMap<>();
    valueMap.put("myNo", myNo);
    valueMap.put("muNo", muNo);
    return eventDao.prCheckList(valueMap);
  }
  
  public void prEvent(int muNo, int eNo) throws Exception {
    HashMap<String,Object> valueMap = new HashMap<>();
    valueMap.put("muNo", muNo);
    valueMap.put("eNo", eNo);
    eventDao.prEvent(valueMap);
    valueMap.put("prNo", valueMap.get("prno"));
    notificationDao.insertEventPrNoti(valueMap);
  }
  
  public void deletePrEvent(int eNo) throws Exception {
    eventDao.deletePrEvent(eNo);
  }
  
  public void requestEvent(int muNo, int eNo) throws Exception {
    HashMap<String,Object> valueMap = new HashMap<>();
    valueMap.put("muNo", muNo);
    valueMap.put("eNo", eNo);
    eventDao.appyEvent(valueMap);
    valueMap.put("appyno", valueMap.get("appyno"));
    notificationDao.insertEventAppyNoti(valueMap);
  }
  
  public void updateRequestEvent(int eNo) throws Exception {
    Musician musician = musicianDao.myEventAppyList(eNo);
    
    eventDao.deleteAppyEventZero();
    eventDao.deleteAppyEvent(eNo);
    eventDao.deleteAppyEventOne();
    
    if(musician != null) {
      HashMap<String,Object> valueMap = new HashMap<>();
      valueMap.put("eNo", eNo);
      for (String appyNo : musician.getAppyNoList()) {
        valueMap.put("appyNo", appyNo);
        notificationDao.insertEventEditNoti(valueMap);
      }
      return;
    }
  }
  
  public void deleteRequestEvent(int eNo) throws Exception {
    
    Musician musician = musicianDao.myEventAppyList(eNo);
    
    eventDao.deleteAppyEventZero();
    eventDao.deleteAppyEvent(eNo);
    eventDao.deletePrEvent(eNo);
    eventDao.deleteAppyEventOne();
    
    if(musician != null) {
      HashMap<String,Object> valueMap = new HashMap<>();
      valueMap.put("eNo", eNo);
      for (String appyNo : musician.getAppyNoList()) {
        valueMap.put("appyNo", appyNo);
        notificationDao.insertEventDeleteNoti(valueMap);
      }
      return;
    }
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
  
  public List<Event> searchEvent(int no,int thmno, int mjrno, int gnrno, int indexT,int indexM,int indexG) throws Exception {
    HashMap<String,Object> valueMap = new HashMap<>();
    valueMap.put("no", no);
    valueMap.put("thmno", thmno);
    valueMap.put("mjrno", mjrno);
    valueMap.put("gnrno", gnrno);
    valueMap.put("indexT", indexT);
    valueMap.put("indexM", indexM);
    valueMap.put("indexG", indexG);
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

  
}

