package bitcamp.java93.control.json;

import java.util.ArrayList;
import java.util.HashMap;

import javax.servlet.ServletContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import bitcamp.java93.domain.Event;
import bitcamp.java93.service.EventService;

@RestController
@RequestMapping("/event/")
public class EventControl {
  
  @Autowired ServletContext servletContext;
  @Autowired EventService eventService;
  
  @RequestMapping("listOngoing")
  public JsonResult list() throws Exception {
    
    HashMap<String,Object> dataMap = new HashMap<>();
    dataMap.put("listOngoing",eventService.listOngoing());
    return new JsonResult(JsonResult.SUCCESS, dataMap);
  }
  
  @RequestMapping("addReherse")
  public JsonResult addReherse(Event event, String eventRegistTheme, String eventRegistMajor, String eventRegistGenre) throws Exception {
    String[] themeList = eventRegistTheme.split(",");
    String[] majorList = eventRegistMajor.split(",");
    String[] genreList = eventRegistGenre.split(",");
    
    ArrayList<String> registThemeList = new ArrayList<>();
    ArrayList<String> registMajorList = new ArrayList<>();
    ArrayList<String> registGenreList = new ArrayList<>();
    
    for (String theme : themeList) {
      registThemeList.add(theme);
    } 
    
    for (String major : majorList) {
      registMajorList.add(major);
    } 
    
    for (String genre : genreList) {
      registGenreList.add(genre);
    } 
    
    event.setEventRegistTheme(registThemeList);
    event.setEventRegistMajor(registMajorList);
    event.setEventRegistGenre(registGenreList);
    
    eventService.add(event);
    eventService.RegistEventCategory(event);
    eventService.RegistEventReherse(event);
    return new JsonResult(JsonResult.SUCCESS, "ok");
  }
  
  @RequestMapping("add")
  public JsonResult add(Event event, String eventRegistTheme, String eventRegistMajor, String eventRegistGenre) throws Exception {
    String[] themeList = eventRegistTheme.split(",");
    String[] majorList = eventRegistMajor.split(",");
    String[] genreList = eventRegistGenre.split(",");
    
    ArrayList<String> registThemeList = new ArrayList<>();
    ArrayList<String> registMajorList = new ArrayList<>();
    ArrayList<String> registGenreList = new ArrayList<>();
    
    for (String theme : themeList) {
      registThemeList.add(theme);
    } 
    
    for (String major : majorList) {
      registMajorList.add(major);
    } 
    
    for (String genre : genreList) {
      registGenreList.add(genre);
    } 
    
    event.setEventRegistTheme(registThemeList);
    event.setEventRegistMajor(registMajorList);
    event.setEventRegistGenre(registGenreList);
    
    eventService.add(event);
    eventService.RegistEventCategory(event);
    return new JsonResult(JsonResult.SUCCESS, "ok");
  }
  
  
}









