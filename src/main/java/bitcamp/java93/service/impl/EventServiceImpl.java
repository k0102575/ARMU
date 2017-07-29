package bitcamp.java93.service.impl;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import bitcamp.java93.dao.EventDao;
import bitcamp.java93.domain.Event;
import bitcamp.java93.service.EventService;

@Service
public class EventServiceImpl implements EventService {
 
  @Autowired
  EventDao eventDao;
  
  public List<Event> listOngoing() throws Exception {   
    return eventDao.selectOngoingList();
  }
  
  public  void add(Event event) throws Exception {   
    eventDao.insert(event);
  }
  
  public  void RegistEventCategory(Event event) throws Exception {   
    this.registCategory(4, event.getEventRegistTheme(), event.getEventRegistMajor(), event.getEventRegistGenre());
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
  
}

