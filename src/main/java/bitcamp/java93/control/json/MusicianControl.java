package bitcamp.java93.control.json;

import java.io.File;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import bitcamp.java93.domain.Member;
import bitcamp.java93.domain.Musician;
import bitcamp.java93.service.MusicianService;

@RestController
@RequestMapping("/musician/")
public class MusicianControl {

  @Autowired ServletContext servletContext;
  @Autowired MusicianService musicianService;

  @RequestMapping("listRecommand")
  public JsonResult list(HttpSession session) {

    JsonResult result = new JsonResult();
    Member loginMember = (Member)session.getAttribute("loginMember");

    if(loginMember != null) {
      try {
        List<Musician> musicianList = musicianService.listRecommand(loginMember);

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
    } else {//loginMember가 없으면
      result.setStatus(JsonResult.SUCCESS);
      result.setData("browse");
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
  public JsonResult getProfile(HttpSession session){

    JsonResult result = new JsonResult();
    Member loginMember = (Member)session.getAttribute("loginMember");

    if(loginMember != null) {
      try {
        Musician musicianProfile = musicianService.getProfile(loginMember);

        //       if(musicianList == null) {
        //         result.setStatus(JsonResult.FAIL);
        //       } else {
        //       }

        result.setStatus(JsonResult.SUCCESS);

        HashMap<String,Object> dataMap = new HashMap<>();
        dataMap.put("profile", musicianProfile);

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
  
  @RequestMapping("musiInfo")
  public JsonResult musiInfo(int no) {
    
    JsonResult result = new JsonResult();
    
    try {
      Musician musician = musicianService.get(no);
      
      if (musician == null) {
        return new JsonResult(JsonResult.FAIL, no + "번 뮤지션이 없습니다.");
      }
      
      result.setStatus(JsonResult.SUCCESS);
      result.setData(musician);
      
    } catch (Exception e) {
      result.setStatus(JsonResult.ERROR);
    }
    
    return result;
  }
  
  @RequestMapping("musiInfoReview")
  public JsonResult musiInfoReview(int no) {
    
    JsonResult result = new JsonResult();
    
    try {
      Musician musicianReview = musicianService.getReview(no);
      Musician musicianReviewCount = musicianService.reviewCount(no);
      
      if (musicianReview == null) {
        return new JsonResult(JsonResult.SUCCESS, "리뷰가 없습니다.");
      }
      
      if (musicianReviewCount == null) {
        return new JsonResult(JsonResult.SUCCESS, "0");
      }
      
      result.setStatus(JsonResult.SUCCESS);
      
      HashMap<String,Object> dataMap = new HashMap<>();

      dataMap.put("musicianReview", musicianReview);
      dataMap.put("musicianReviewCount", musicianReviewCount);
      
      result.setData(dataMap);
      
    } catch (Exception e) {
      result.setStatus(JsonResult.ERROR);
    }
    
    return result;
  }
  
  @RequestMapping("listLocation")
  public JsonResult listLocation() throws Exception {

    HashMap<String,Object> dataMap = new HashMap<>();

    dataMap.put("location", musicianService.listLocation());

    return new JsonResult(JsonResult.SUCCESS, dataMap);
  }

  //  @RequestMapping("update")
  //  public JsonResult update(Musician musician, String photo) throws Exception {
  //    System.out.println(musician);
  //    musicianService.updatePhoto(musician, musician.getPhoto());
  //    return new JsonResult(JsonResult.SUCCESS, "ok");
  //  }


  @RequestMapping("update")
  public JsonResult updatePhoto(@RequestParam int no,MultipartFile[] files) throws Exception {

    ArrayList<Object> fileList = new ArrayList<>();
    for (int i = 0; i < files.length; i++) {
      if (files[i].isEmpty()) 
        continue;

      String filename = getNewFilename();
      musicianService.updatePhoto(no ,filename);
      File file =new File(servletContext.getRealPath("/image/musician/photo/" + filename));
      files[i].transferTo(file);
      fileList.add(filename);
    }
    return new JsonResult(JsonResult.SUCCESS, fileList);
  }

  int count = 0;
  synchronized private String getNewFilename() {
    if (count > 100) {
      count = 0;
    }
    return String.format("%d_%d", System.currentTimeMillis(), ++count); 
  }
}









