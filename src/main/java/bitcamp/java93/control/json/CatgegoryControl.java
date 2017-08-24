package bitcamp.java93.control.json;

import java.util.HashMap;

import javax.servlet.ServletContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import bitcamp.java93.service.CategoryService;

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

  @RequestMapping("listTop10")
  public JsonResult listTop10() {
    HashMap<String,Object> dataMap = new HashMap<>();
    JsonResult result = new JsonResult();

    try {
      dataMap.put("listTop10", categoryService.listTop10());
      result.setData(dataMap);
      result.setStatus(JsonResult.SUCCESS);
    } catch (Exception e) {
      result.setStatus(JsonResult.ERROR);
      e.printStackTrace();
    }
    return result;
  }

  @RequestMapping("listEventLocation")
  public JsonResult listEventLocation() throws Exception {
    HashMap<String,Object> dataMap = new HashMap<>();
    dataMap.put("listEventLocation", categoryService.listEventLocation());
    return new JsonResult(JsonResult.SUCCESS, dataMap);
  }
  
  @RequestMapping("listEventTheme")
  public JsonResult listEventTheme() throws Exception {
    HashMap<String,Object> dataMap = new HashMap<>();
    dataMap.put("listEventTheme", categoryService.listEventTheme());
    return new JsonResult(JsonResult.SUCCESS, dataMap);
  }

  @RequestMapping("listEventMajor")
  public JsonResult listEventMajor() throws Exception {
    HashMap<String,Object> dataMap = new HashMap<>();
    dataMap.put("listEventMajor", categoryService.listEventMajor());
    return new JsonResult(JsonResult.SUCCESS, dataMap);
  }

  @RequestMapping("listEventGenre")
  public JsonResult listEventGenre() throws Exception {
    HashMap<String,Object> dataMap = new HashMap<>();
    dataMap.put("listEventGenre", categoryService.listEventGenre());
    return new JsonResult(JsonResult.SUCCESS, dataMap);
  }
  
  @RequestMapping("getEventCategory")
  public JsonResult getEventCategory(int eno) throws Exception {
    HashMap<String,Object> dataMap = new HashMap<>();
    dataMap.put("getEventCategory", categoryService.getEventCategory(eno));
    return new JsonResult(JsonResult.SUCCESS, dataMap);
  }
  
}
