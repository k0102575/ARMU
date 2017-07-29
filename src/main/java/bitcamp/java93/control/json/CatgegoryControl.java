package bitcamp.java93.control.json;

import java.util.HashMap;

import javax.servlet.ServletContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import bitcamp.java93.service.CategoryService;
import bitcamp.java93.service.EventService;

@RestController
@RequestMapping("/category/")
public class CatgegoryControl {
  
  @Autowired ServletContext servletContext;
  @Autowired CategoryService categoryService;
  
  @RequestMapping("listTheme")
  public JsonResult listTheme() throws Exception {
    HashMap<String,Object> dataMap = new HashMap<>();
    dataMap.put("listTheme", categoryService.listTheme());
    return new JsonResult(JsonResult.SUCCESS, dataMap);
  }
  
  @RequestMapping("listMajor")
  public JsonResult listMajor() throws Exception {
    HashMap<String,Object> dataMap = new HashMap<>();
    dataMap.put("listMajor", categoryService.listMajor());
    return new JsonResult(JsonResult.SUCCESS, dataMap);
  }
  
  @RequestMapping("listGenre")
  public JsonResult listGenre() throws Exception {
    HashMap<String,Object> dataMap = new HashMap<>();
    dataMap.put("listGenre", categoryService.listGenre());
    return new JsonResult(JsonResult.SUCCESS, dataMap);
  }
  
  @RequestMapping("listLocationType")
  public JsonResult listLocationType() throws Exception {
    HashMap<String,Object> dataMap = new HashMap<>();
    dataMap.put("listLocationType", categoryService.listLocationType());
    return new JsonResult(JsonResult.SUCCESS, dataMap);
  }
  
  @RequestMapping("listLocation")
  public JsonResult listLocation(int loctno) throws Exception {
    HashMap<String,Object> dataMap = new HashMap<>();
    dataMap.put("listLocation", categoryService.listLocation(loctno));
    return new JsonResult(JsonResult.SUCCESS, dataMap);
  }
  
}









