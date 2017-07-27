package bitcamp.java93.control.json;

import java.util.HashMap;

import javax.servlet.ServletContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
  
  @RequestMapping("listTheme")
  public JsonResult listTheme() throws Exception {
    HashMap<String,Object> dataMap = new HashMap<>();
    dataMap.put("listTheme", eventService.listTheme());
    return new JsonResult(JsonResult.SUCCESS, dataMap);
  }
  
  @RequestMapping("listMajor")
  public JsonResult listMajor() throws Exception {
    HashMap<String,Object> dataMap = new HashMap<>();
    dataMap.put("listMajor", eventService.listMajor());
    return new JsonResult(JsonResult.SUCCESS, dataMap);
  }
  
  @RequestMapping("listGenre")
  public JsonResult listGenre() throws Exception {
    HashMap<String,Object> dataMap = new HashMap<>();
    dataMap.put("listGenre", eventService.listGenre());
    return new JsonResult(JsonResult.SUCCESS, dataMap);
  }
  
  @RequestMapping("listLocationType")
  public JsonResult listLocationType() throws Exception {
    HashMap<String,Object> dataMap = new HashMap<>();
    dataMap.put("listLocationType", eventService.listLocationType());
    return new JsonResult(JsonResult.SUCCESS, dataMap);
  }
  
  @RequestMapping("listLocation")
  public JsonResult listLocation(int loctno) throws Exception {
    HashMap<String,Object> dataMap = new HashMap<>();
    dataMap.put("listLocation", eventService.listLocation(loctno));
    return new JsonResult(JsonResult.SUCCESS, dataMap);
  }
  
}









