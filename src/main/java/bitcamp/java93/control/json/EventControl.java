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
}









