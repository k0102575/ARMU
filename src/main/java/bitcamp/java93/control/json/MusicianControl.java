package bitcamp.java93.control.json;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import bitcamp.java93.domain.Member;
import bitcamp.java93.domain.Musician;
import bitcamp.java93.service.CategoryService;
import bitcamp.java93.service.MusicianService;

@RestController
@RequestMapping("/musician/")
public class MusicianControl {
  
  @Autowired ServletContext ctx;

  @Autowired ServletContext servletContext;
  @Autowired MusicianService musicianService;
  @Autowired CategoryService categoryService;

  @RequestMapping("listRecommand")
  public JsonResult list(HttpSession session) {

    JsonResult result = new JsonResult();
    Member loginMember = (Member)session.getAttribute("loginMember");

    if(loginMember != null) {
      try {
        List<Musician> musicianList = musicianService.listRecommand(loginMember.getNo());

        result.setStatus(JsonResult.SUCCESS);

        HashMap<String,Object> dataMap = new HashMap<>();
        dataMap.put("listRecommand", musicianList);
        result.setData(dataMap);

      } catch (Exception e) {
        e.printStackTrace();
        result.setStatus(JsonResult.ERROR);
      }
    } else {//loginMember가 없으면
      result.setStatus(JsonResult.SUCCESS);
      result.setData("browse");
    }

    return result;
  }

  @RequestMapping("listBestReview")
  public JsonResult listBestReview(HttpSession session) {

    JsonResult result = new JsonResult();

    try {
      List<Musician> musicianList = musicianService.listBestReview();

      result.setStatus(JsonResult.SUCCESS);

      HashMap<String,Object> dataMap = new HashMap<>();
      dataMap.put("listBestReview", musicianList);
      result.setData(dataMap);

    } catch (Exception e) {
      e.printStackTrace();
      result.setStatus(JsonResult.ERROR);
    }

    return result;
  }

  @RequestMapping("listPopular")
  public JsonResult listPopular(HttpSession session) {

    JsonResult result = new JsonResult();

    try {
      List<Musician> musicianList = musicianService.listPopular();

      result.setStatus(JsonResult.SUCCESS);

      HashMap<String,Object> dataMap = new HashMap<>();
      dataMap.put("listPopular", musicianList);
      result.setData(dataMap);

    } catch (Exception e) {
      e.printStackTrace();
      result.setStatus(JsonResult.ERROR);
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
  
  
  @RequestMapping("add")
  public JsonResult add(Musician musician, String musicianAddTheme, String musicianAddMajor,
    String musicianAddGenre, String musicianAddLocation, HttpSession session) throws Exception {
    
    String[] themeList = musicianAddTheme.split(",");
    String[] majorList = musicianAddMajor.split(",");
    String[] genreList = musicianAddGenre.split(",");
    String[] locationList = musicianAddLocation.split(",");
    
    ArrayList<String> addThemeList = new ArrayList<>();
    ArrayList<String> addMajorList = new ArrayList<>();
    ArrayList<String> addGenreList = new ArrayList<>();
    ArrayList<String> addLocationList = new ArrayList<>();
    
    for (String theme : themeList) {
      addThemeList.add(theme);
    } 
    
    for (String major : majorList) {
      addMajorList.add(major);
    } 
    
    for (String genre : genreList) {
      addGenreList.add(genre);
    } 
    
    for (String location : locationList) {
      addLocationList.add(location);
    } 
    
    musician.setThemeList(addThemeList);
    musician.setMajorList(addMajorList);
    musician.setGenreList(addGenreList);
    musician.setLocationList(addLocationList);
    musician.setNo(getLoginMember(session).getNo());
    
    System.out.println(musician);
    
    try {
      musicianService.add(musician);
      categoryService.addMusiCategory(musician); 
      return new JsonResult(JsonResult.SUCCESS, "ok");
      
    } catch (Exception e) {
      return new JsonResult(JsonResult.FAIL, "fail");
    }
  }

  private Member getLoginMember(HttpSession session) {
    Member loginMember = (Member) session.getAttribute("loginMember");
    return loginMember;
  }
  
  @RequestMapping("updateNick")
  public JsonResult updateNick(Member member) throws Exception {
    musicianService.updateNick(member);
    return new JsonResult(JsonResult.SUCCESS, "ok");
  }

}









