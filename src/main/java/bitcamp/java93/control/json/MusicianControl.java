package bitcamp.java93.control.json;

import java.util.ArrayList;
import java.util.HashMap;

import javax.servlet.ServletContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import bitcamp.java93.domain.Musician;
import bitcamp.java93.service.MusicianService;

@RestController
@RequestMapping("/musician/")
public class MusicianControl {
  
  @Autowired ServletContext servletContext;
  @Autowired MusicianService musicianService;
  
  @RequestMapping("listRecommand")
  public JsonResult list() throws Exception {
    
    HashMap<String,Object> dataMap = new HashMap<>();
    ArrayList<Musician> musicianList = (ArrayList<Musician>) musicianService.listRecommand();
    
    dataMap.put("listRecommand", musicianList);
    
    return new JsonResult(JsonResult.SUCCESS, dataMap);
  }
  
  @RequestMapping("getProfile")
  public JsonResult getProfile() throws Exception {
    
    HashMap<String,Object> dataMap = new HashMap<>();
    
    dataMap.put("profile", musicianService.getProfile());
    
    return new JsonResult(JsonResult.SUCCESS, dataMap);
  }
  
}









