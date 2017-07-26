package bitcamp.java93.control.json;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import javax.servlet.ServletContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
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
  public JsonResult list(int no) {
    
    JsonResult result = new JsonResult();
    
    try {
      List<Musician> musicianList = musicianService.listRecommand(no);

//       if(musicianList == null) {
//         result.setStatus(JsonResult.FAIL);
//       } else {
//       }
      
       result.setStatus(JsonResult.SUCCESS);
       
       HashMap<String,Object> dataMap = new HashMap<>();
       dataMap.put("listRecommand", musicianList);
       result.setData(dataMap);
       
    } catch (Exception e) {
      result.setStatus(JsonResult.ERROR);
    }
    
    return result;
  }
  
  @RequestMapping("listSurf")
  public JsonResult listSurf() throws Exception {
    
    HashMap<String,Object> dataMap = new HashMap<>();
    ArrayList<Musician> musicianList = (ArrayList<Musician>) musicianService.listSurf();
    
    dataMap.put("listSurf", musicianList);
    return new JsonResult(JsonResult.SUCCESS, dataMap);
  }
  
  @RequestMapping("getProfile")
  public JsonResult getProfile() throws Exception {
    
    HashMap<String,Object> dataMap = new HashMap<>();
    
    dataMap.put("profile", musicianService.getProfile());
    
    return new JsonResult(JsonResult.SUCCESS, dataMap);
  }
  
}









