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
import bitcamp.java93.service.CategoryService;
import bitcamp.java93.service.PortfolioService;
import net.coobird.thumbnailator.Thumbnails;

@RestController
@RequestMapping("/portfolio/")
public class PortfolioControl {
  @Autowired ServletContext ctx;

  @Autowired ServletContext servletContext;
  @Autowired CategoryService categoryService;
  @Autowired PortfolioService portfolioService;

  @RequestMapping("musiInfo")
  public JsonResult musiInfo(HttpSession session, int no) throws Exception {
    JsonResult result = new JsonResult();
    try {
      Musician musician = portfolioService.get(getLoginMember(session).getNo(), no);
      HashMap<String,Object> dataMap = new HashMap<>();
      dataMap.put("musician", musician);
      result.setData(dataMap);
    } catch (Exception e) {
      result.setStatus(JsonResult.ERROR);
      result.setData(e.getMessage());
    }
    return result;
  }
  
  @RequestMapping("musiInfoPortfolio")
  public JsonResult musiInfoPortfolio(int no) throws Exception {
    JsonResult result = new JsonResult();
    HashMap<String,Object> dataMap = new HashMap<>();
    List<Musician> musicianPortfolio = portfolioService.getPortfolio(no);
    if (musicianPortfolio == null) {
      return new JsonResult(JsonResult.SUCCESS, "0");
    }
    result.setStatus(JsonResult.SUCCESS);
    dataMap.put("getPortfolio", musicianPortfolio);
    result.setData(dataMap);
    return result;
  }
  
  // 일반모드 > 뮤지션 상세페이지 > 뮤지션 정보가져오기
  @RequestMapping("musiInfoIntroduce")
  public JsonResult musiInfoReviewIntroduce(int no) throws Exception {
    JsonResult result = new JsonResult();
    HashMap<String,Object> dataMap = new HashMap<>();
    Musician musicianIntroduce = portfolioService.getIntroduce(no);
    if (musicianIntroduce == null) {
      return new JsonResult(JsonResult.SUCCESS, "0");
    }
    result.setStatus(JsonResult.SUCCESS);
    dataMap.put("getIntroduce", musicianIntroduce);
    result.setData(dataMap);
    return result;
  }
  
  @RequestMapping("musiInfoReview")
  public JsonResult musiInfoReview(int no) {
    JsonResult result = new JsonResult();
    try {
      List<Musician> musicianReview = (List<Musician>) portfolioService.listReview(no);
      HashMap<String,Object> dataMap = new HashMap<>();
      dataMap.put("musicianReview", musicianReview);
      result.setData(dataMap);
    } catch (Exception e) {
      result.setStatus(JsonResult.ERROR);
      result.setData(e.getMessage());
    }
    return result;
  }
  
  @RequestMapping("myInfo")
  public JsonResult myInfo(HttpSession session) throws Exception {
    JsonResult result = new JsonResult();
    try {
      Musician musician = portfolioService.myInfo(getLoginMember(session).getNo());
      HashMap<String,Object> dataMap = new HashMap<>();
      dataMap.put("musician", musician);
      result.setData(dataMap);
    } catch (Exception e) {
      result.setStatus(JsonResult.ERROR);
      result.setData(e.getMessage());
    }
    return result;
  }
  
  @RequestMapping("myPortfolio")
  public JsonResult myPortfolio(HttpSession session) throws Exception {
    JsonResult result = new JsonResult();
    HashMap<String,Object> dataMap = new HashMap<>();
    List<Musician> musicianPortfolio = portfolioService.getPortfolio(getLoginMember(session).getNo());
    if (musicianPortfolio == null) {
      return new JsonResult(JsonResult.SUCCESS, "0");
    }
    result.setStatus(JsonResult.SUCCESS);
    dataMap.put("getPortfolio", musicianPortfolio);
    result.setData(dataMap);
    return result;
  }
  
  @RequestMapping("myIntroduce")
  public JsonResult myIntroduce(HttpSession session) throws Exception {
    JsonResult result = new JsonResult();
    HashMap<String,Object> dataMap = new HashMap<>();
    Musician musicianIntroduce = portfolioService.getIntroduce(getLoginMember(session).getNo());
    if (musicianIntroduce == null) {
      return new JsonResult(JsonResult.SUCCESS, "0");
    }
    result.setStatus(JsonResult.SUCCESS);
    dataMap.put("getIntroduce", musicianIntroduce);
    result.setData(dataMap);
    return result;
  }
  
  @RequestMapping("myReview")
  public JsonResult myReview(HttpSession session) {
    JsonResult result = new JsonResult();
    try {
      List<Musician> musicianReview = (List<Musician>) portfolioService.listReview(getLoginMember(session).getNo());
      HashMap<String,Object> dataMap = new HashMap<>();
      dataMap.put("musicianReview", musicianReview);
      result.setData(dataMap);
    } catch (Exception e) {
      result.setStatus(JsonResult.ERROR);
      result.setData(e.getMessage());
    }
    return result;
  }
  
  @RequestMapping("updateInfo")
  public JsonResult updateInfo(Musician musician, String musicianTheme, String musicianMajor, String musicianGenre, String musicianLocation, HttpSession session) throws Exception {
    String[] themeList = musicianTheme.split(",");
    String[] majorList = musicianMajor.split(",");
    String[] genreList = musicianGenre.split(",");
    String[] locationList = musicianLocation.split(",");
    
    ArrayList<String> changeThemeList = new ArrayList<>();
    ArrayList<String> changeMajorList = new ArrayList<>();
    ArrayList<String> changeGenreList = new ArrayList<>();
    ArrayList<String> changeLocationList = new ArrayList<>();
    
    for (String theme : themeList) {
      changeThemeList.add(theme);
    } 
    
    for (String major : majorList) {
      changeMajorList.add(major);
    } 
    
    for (String genre : genreList) {
      changeGenreList.add(genre);
    } 
    
    for (String location : locationList) {
      changeLocationList.add(location);
    } 
    
    musician.setThemeList(changeThemeList);
    musician.setMajorList(changeMajorList);
    musician.setGenreList(changeGenreList);
    musician.setLocationList(changeLocationList);
    
    categoryService.deleteMusiCategory(getLoginMember(session).getNo()); 
    categoryService.changeMusiCategory(getLoginMember(session).getNo(), musician);
    portfolioService.changeMusiInfo(getLoginMember(session).getNo(), musician);
    
    return new JsonResult(JsonResult.SUCCESS, "ok");
  }
  
  @RequestMapping("addSpec")
  public JsonResult addSpec(HttpSession session, Musician musician, String fiFilenames, String fiMovienames) throws Exception {
    String[] photoPathList = fiFilenames.split(",");
    String[] moviePathList = fiMovienames.split(",");
    
    ArrayList<String> addPhotoList = new ArrayList<>();
    ArrayList<String> addMovieList = new ArrayList<>();
    
    for (String photo : photoPathList) {
      addPhotoList.add(photo);
    } 
    
    for (String movie : moviePathList) {
      addMovieList.add(movie);
    } 
    
    musician.setPhotoList(addPhotoList);
    musician.setMovieList(addMovieList);
    
    portfolioService.addSpec(getLoginMember(session).getNo(), musician);
    return new JsonResult(JsonResult.SUCCESS, "ok");
 }
  
  @RequestMapping("getSpec")
  public JsonResult getSpec(int spno) throws Exception {
    JsonResult result = new JsonResult();
    HashMap<String,Object> dataMap = new HashMap<>();
    Musician getSpec = portfolioService.getSpec(spno);
    result.setStatus(JsonResult.SUCCESS);
    dataMap.put("getSpec", getSpec);
    result.setData(dataMap);
    return result;
  }
  
  @RequestMapping("updateSpec")
  public JsonResult updateSpec(Musician musician, String fiFilenames, String fiMovienames) throws Exception {
    String[] photoPathList = fiFilenames.split(",");
    String[] moviePathList = fiMovienames.split(",");
    
    ArrayList<String> addPhotoList = new ArrayList<>();
    ArrayList<String> addMovieList = new ArrayList<>();
    
    for (String photo : photoPathList) {
      addPhotoList.add(photo);
    } 
    
    for (String movie : moviePathList) {
      addMovieList.add(movie);
    } 
    
    musician.setPhotoList(addPhotoList);
    musician.setMovieList(addMovieList);
    
    portfolioService.updateSpec(musician);
    return new JsonResult(JsonResult.SUCCESS, "ok");
 }
  
  @RequestMapping("deleteSpec")
  public JsonResult deleteSpec(int spno) throws Exception {
    portfolioService.deleteSpec(spno);
    return new JsonResult(JsonResult.SUCCESS, "ok");
 }
  
  @RequestMapping("career")
  public JsonResult career(MultipartFile[] files) throws Exception {
    System.out.println(files);
    ArrayList<Object> fileList = new ArrayList<>();
    for (int i = 0; i < files.length; i++) {
      if (files[i].isEmpty()) 
        continue;

      String filename = getNewFilename();
      File file =new File(servletContext.getRealPath("/image/profile/" + filename));
      files[i].transferTo(file);
      
      File thumbnail = new File(servletContext.getRealPath("image/profile/" + filename + "_80"));
      Thumbnails.of(file).size(80, 80).outputFormat("png").toFile(thumbnail);
      
      thumbnail = new File(servletContext.getRealPath("image/profile/" + filename + "_140"));
      Thumbnails.of(file).size(140, 140).outputFormat("png").toFile(thumbnail);
      
      thumbnail = new File(servletContext.getRealPath("image/profile/" + filename + "_300"));
      Thumbnails.of(file).size(300, 300).outputFormat("png").toFile(thumbnail);
      
      HashMap<String,Object> fileMap = new HashMap<>();
      fileMap.put("filename", filename);
      fileMap.put("filesize", files[i].getSize());
      fileList.add(fileMap);
    }
    return new JsonResult(JsonResult.SUCCESS, fileList);
  }
  
  private Member getLoginMember(HttpSession session) {
    Member loginMember = (Member) session.getAttribute("loginMember");
    return loginMember;
  }
  
  int count = 0;
  synchronized private String getNewFilename() {
    if (count > 100) {
      count = 0;
    }
    return String.format("%d_%d", System.currentTimeMillis(), ++count); 
  }

}

