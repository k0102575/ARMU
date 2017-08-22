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
import bitcamp.java93.service.EventService;
import bitcamp.java93.service.MusicianService;

@RestController
@RequestMapping("/musician/")
public class MusicianControl {
  
  @Autowired ServletContext ctx;

  @Autowired ServletContext servletContext;
  @Autowired MusicianService musicianService;
  @Autowired CategoryService categoryService;
  @Autowired EventService eventService;

  @RequestMapping("listRecommand")
  public JsonResult list(HttpSession session) {

    JsonResult result = new JsonResult();
    Member loginMember = (Member)session.getAttribute("loginMember");

    if(loginMember != null) {
      try {
        if(hasEvent(loginMember.getNo())) {
          List<Musician> musicianList = musicianService.listRecommand(loginMember.getNo());
          
          result.setStatus(JsonResult.SUCCESS);
          
          HashMap<String,Object> dataMap = new HashMap<>();
          dataMap.put("listRecommand", musicianList);
          result.setData(dataMap);
        } else {//event가 없으면
          result.setStatus(JsonResult.SUCCESS);
          result.setData("noEvent");
        }
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
  
  /*일반모드 > 추천탭 > 나에게 꼭 맞는 이벤트 리스트 - 이벤트 유무 확인*/
  private boolean hasEvent(int no) {
    boolean result = false;
    try {
      if(eventService.getEventCount(no) > 0) result = true;
    } catch (Exception e) {
      e.printStackTrace();
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

  @RequestMapping("searchMusician")
  public JsonResult searchMusician(HttpSession session, int locno, int mjrno, int gnrno, int indexL,int indexM,int indexG,String gender, int minAge, int maxAge) throws Exception {
    HashMap<String,Object> dataMap = new HashMap<>();
    List<Musician> search= (List<Musician>)musicianService.searchMusician(getLoginMember(session).getNo() ,locno,mjrno,gnrno,indexL,indexM,indexG,gender, minAge, maxAge);
    dataMap.put("listSurf", search);
    System.out.println(search);
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
    
    try {
      musicianService.add(musician);
      categoryService.addMusiCategory(musician); 
      return new JsonResult(JsonResult.SUCCESS, "ok");
      
    } catch (Exception e) {
      return new JsonResult(JsonResult.FAIL, "fail");
    }
  }

  @RequestMapping("updateNick")
  public JsonResult updateNick(Musician musician) throws Exception {
    musicianService.updateNick(musician);
    return new JsonResult(JsonResult.SUCCESS, "ok");
  }
  
  @RequestMapping("delete")
  public JsonResult delete(int no) throws Exception {
    musicianService.remove(no);
    return new JsonResult(JsonResult.SUCCESS, "ok");
  }  
  
  private Member getLoginMember(HttpSession session) {
    Member loginMember = (Member) session.getAttribute("loginMember");
    return loginMember;
  }
  
  @RequestMapping("listSearchResult")
  public JsonResult listSearchResult(HttpSession session, String search) {
    JsonResult result = new JsonResult();

    try {
      List<Musician> musicianList = musicianService.listSearchResult(search);

      result.setStatus(JsonResult.SUCCESS);

      HashMap<String,Object> dataMap = new HashMap<>();
      dataMap.put("listSearchResult", musicianList);
      result.setData(dataMap);

    } catch (Exception e) {
      e.printStackTrace();
      result.setStatus(JsonResult.ERROR);
    }
    return result;
  }
  
  @RequestMapping("listPr")
  public JsonResult listPr(int eventNo, HttpSession session) {

    JsonResult result = new JsonResult();
    Member loginMember = (Member)session.getAttribute("loginMember");

    if(loginMember != null) {
      try {
        HashMap<String,Object> param = new HashMap<>();
        param.put("memberNo", loginMember.getNo());
        param.put("eventNo", eventNo);
        List<Musician> musicianList = musicianService.listPr(param);

        result.setStatus(JsonResult.SUCCESS);

        HashMap<String,Object> dataMap = new HashMap<>();
        dataMap.put("listPr", musicianList);
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
  
  
  @RequestMapping("listAppy")
  public JsonResult listAppy(int eventNo, HttpSession session) {

    JsonResult result = new JsonResult();
    Member loginMember = (Member)session.getAttribute("loginMember");

    if(loginMember != null) {
      try {
        HashMap<String,Object> param = new HashMap<>();
        param.put("memberNo", loginMember.getNo());
        param.put("eventNo", eventNo);
        List<Musician> musicianList = musicianService.listAppy(param);

        result.setStatus(JsonResult.SUCCESS);

        HashMap<String,Object> dataMap = new HashMap<>();
        dataMap.put("listAppy", musicianList);
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
  
  // 내 이벤트에 매칭된 뮤지션 정보
  @RequestMapping("myEventMatchMusician")
  public JsonResult myEventMatchMusician(int eNo, HttpSession session) {
    JsonResult result = new JsonResult();

      try {
        Musician musician = musicianService.myEventMatchMusician(eNo, getLoginMember(session).getNo());

        result.setStatus(JsonResult.SUCCESS);

        HashMap<String,Object> dataMap = new HashMap<>();
        dataMap.put("matchMusician", musician);
        result.setData(dataMap);

      } catch (Exception e) {
        e.printStackTrace();
        result.setStatus(JsonResult.ERROR);
      }
    return result;
  }
  
  
  
}


