package bitcamp.java93.control.json;

import java.io.File;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import bitcamp.java93.domain.Member;
import bitcamp.java93.domain.Musician;
import bitcamp.java93.service.MusicianService;
import net.coobird.thumbnailator.Thumbnails;

@RestController
@RequestMapping("/musician/")
public class MusicianControl {
  
  @Autowired ServletContext ctx;

  @Autowired ServletContext servletContext;
  @Autowired MusicianService musicianService;

  @RequestMapping("listRecommand")
  public JsonResult list(HttpSession session) {

    JsonResult result = new JsonResult();
    Member loginMember = (Member)session.getAttribute("loginMember");

    if(loginMember != null) {
      try {
        List<Musician> musicianList = musicianService.listRecommand(loginMember);

        result.setStatus(JsonResult.SUCCESS);

        HashMap<String,Object> dataMap = new HashMap<>();
        dataMap.put("listRecommand", musicianList);
        result.setData(dataMap);

      } catch (Exception e) {
        result.setStatus(JsonResult.ERROR);
      }
    } else {//loginMember가 없으면
      result.setStatus(JsonResult.SUCCESS);
      result.setData("browse");
    }

    return result;
  }
  
  @RequestMapping("listFavor")
  public JsonResult listFavor(HttpSession session) throws Exception {
    JsonResult result = new JsonResult();
    
    try {
      List<Musician> listFavor = (List<Musician>) musicianService.listFavor(getLoginMember(session).getNo());
      HashMap<String,Object> dataMap = new HashMap<>();
      dataMap.put("listFavor", listFavor);
      result.setData(dataMap);
    } catch (Exception e) {
      result.setStatus(JsonResult.ERROR);
      result.setData(e.getMessage());
    }
    return result;
  }
  
  @RequestMapping("favorRemove")
  public JsonResult favorRemove(HttpSession session, int no) throws Exception {
     musicianService.favorRemove(getLoginMember(session).getNo(), no);
    return new JsonResult(JsonResult.SUCCESS, "ok");
  }
  
  @RequestMapping("favorAdd")
  public JsonResult favorAdd(HttpSession session, int no) throws Exception {
    musicianService.favorAdd(getLoginMember(session).getNo(), no);
    return new JsonResult(JsonResult.SUCCESS, "ok");
  }

  @RequestMapping("listSurf")
  public JsonResult listSurf(HttpSession session) throws Exception {
    JsonResult result = new JsonResult();
    Member loginMember = (Member)session.getAttribute("loginMember");

    if(loginMember != null) {
      try {
        List<Musician> listSurf = (List<Musician>) musicianService.listSurf(loginMember.getNo());

        result.setStatus(JsonResult.SUCCESS);

        HashMap<String,Object> dataMap = new HashMap<>();
        dataMap.put("listSurf", listSurf);
        result.setData(dataMap);

      } catch (Exception e) {
        result.setStatus(JsonResult.ERROR);
      }
    } else {//loginMember가 없으면
      result.setStatus(JsonResult.SUCCESS);
      result.setData("browse");
    }

    return result;
    
  }
  
  @RequestMapping("listSurfFilter")
  public JsonResult listSurfFilter(String gender, int minAge, int maxAge) throws Exception {
    HashMap<String,Object> dataMap = new HashMap<>();
      List<Musician> musicianFilterList = (List<Musician>) musicianService.listSurfFilter(gender, minAge, maxAge);
      dataMap.put("listSurf", musicianFilterList);
      return new JsonResult(JsonResult.SUCCESS, dataMap);
  }
  
  @RequestMapping("musiInfo")
  public JsonResult musiInfo(HttpSession session, int no) throws Exception {
    JsonResult result = new JsonResult();
    try {
      Musician musician = musicianService.get(getLoginMember(session).getNo(), no);
      HashMap<String,Object> dataMap = new HashMap<>();
      dataMap.put("musician", musician);
      result.setData(dataMap);
    } catch (Exception e) {
      result.setStatus(JsonResult.ERROR);
      result.setData(e.getMessage());
    }
    return result;
  }
  
  @RequestMapping("musiInfoReview")
  public JsonResult musiInfoReview(int no) {
    JsonResult result = new JsonResult();
    try {
      List<Musician> musicianReview = (List<Musician>) musicianService.listReview(no);
      HashMap<String,Object> dataMap = new HashMap<>();
      dataMap.put("musicianReview", musicianReview);
      result.setData(dataMap);
    } catch (Exception e) {
      result.setStatus(JsonResult.ERROR);
      result.setData(e.getMessage());
    }
    return result;
  }
  
  @RequestMapping("musiInfoReviewIntroduce")
  public JsonResult musiInfoReviewIntroduce(int no) throws Exception {
    JsonResult result = new JsonResult();
    HashMap<String,Object> dataMap = new HashMap<>();
      Musician musicianIntroduce = musicianService.getIntroduce(no);
      if (musicianIntroduce == null) {
        return new JsonResult(JsonResult.SUCCESS, "0");
      }
      result.setStatus(JsonResult.SUCCESS);
      dataMap.put("getIntroduce", musicianIntroduce);
      result.setData(dataMap);
    return result;
  }
  
  @RequestMapping("musiInfoReviewPortfolio")
  public JsonResult musiInfoReviewPortfolio(int no) throws Exception {
    JsonResult result = new JsonResult();
    HashMap<String,Object> dataMap = new HashMap<>();
      Musician musicianPortfolio = musicianService.getPortfolio(no);
      if (musicianPortfolio == null) {
        return new JsonResult(JsonResult.SUCCESS, "0");
      }
      result.setStatus(JsonResult.SUCCESS);
      dataMap.put("getPortfolio", musicianPortfolio);
      result.setData(dataMap);
    return result;
  }
  
  @RequestMapping("searchMusician")
  public JsonResult searchMusician(HttpSession session, String location) throws Exception {
    HashMap<String,Object> dataMap = new HashMap<>();
    List<Musician> search= (List<Musician>)musicianService.searchMusician(getLoginMember(session).getNo() ,location);
    dataMap.put("listSurf", search);
    return new JsonResult(JsonResult.SUCCESS, dataMap);
  }
  
  @RequestMapping(path="signUpPhoto")
  public Object upload(MultipartFile[] files) throws Exception {
    
    ArrayList<Object> fileList = new ArrayList<>();
    
    for (int i = 0; i < files.length; i++) {
      if (files[i].isEmpty()) 
        continue;
      
      String newFilename = this.getNewFilename();
      File file = new File(ctx.getRealPath("/upload/" + newFilename));
      files[i].transferTo(file);
      
      File thumbnail = new File(ctx.getRealPath("/musician-signup/" + newFilename + "_80"));
      Thumbnails.of(file).size(80, 80).outputFormat("png").toFile(thumbnail); 

      thumbnail = new File(ctx.getRealPath("/musician-signup/" + newFilename + "_140"));
      Thumbnails.of(file).size(140, 140).outputFormat("png").toFile(thumbnail);
      
      thumbnail = new File(ctx.getRealPath("/musician-signup/" + newFilename + "_200"));
      Thumbnails.of(file).size(200, 200).outputFormat("png").toFile(thumbnail);
        
      HashMap<String,Object> fileMap = new HashMap<>();
      fileMap.put("filename", newFilename);
      fileMap.put("filesize", files[i].getSize());
      fileList.add(fileMap);
    }
    
    HashMap<String,Object> resultMap = new HashMap<>();
    resultMap.put("fileList", fileList);
    return resultMap;
  }
  
  int count = 0;
  synchronized private String getNewFilename() {
    if (count > 100) {
      count = 0;
    }
    return String.format("%d_%d", System.currentTimeMillis(), ++count); 
  }
  
  private Member getLoginMember(HttpSession session) {
    Member loginMember = (Member) session.getAttribute("loginMember");
    return loginMember;
  }
 
}









