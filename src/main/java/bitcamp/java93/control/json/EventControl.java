package bitcamp.java93.control.json;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import bitcamp.java93.domain.Event;
import bitcamp.java93.domain.Member;
import bitcamp.java93.service.CategoryService;
import bitcamp.java93.service.EventService;
import bitcamp.java93.service.NotificationService;

@RestController
@RequestMapping("/event/")
public class EventControl {
  
  @Autowired ServletContext servletContext;
  @Autowired EventService eventService;
  @Autowired CategoryService categoryService;
  @Autowired NotificationService notificationService;
  
  // 리허설 있는 이벤트 추가
  @RequestMapping("addReherse")
  public JsonResult addReherse(Event event, String eventRegistTheme, String eventRegistMajor, String eventRegistGenre, HttpSession session) throws Exception {
    event.setEventRegistTheme(setArrayList(eventRegistTheme));
    event.setEventRegistMajor(setArrayList(eventRegistMajor));
    event.setEventRegistGenre(setArrayList(eventRegistGenre));
    event.setWriter(getLoginMember(session).getNo());
    
    eventService.add(event);
    categoryService.registEventCategory(event);
    eventService.registEventReherse(event);
    return new JsonResult(JsonResult.SUCCESS, "ok");
  }
  
//리허설 없는 이벤트 추가
  @RequestMapping("add")
  public JsonResult add(Event event, String eventRegistTheme, String eventRegistMajor, String eventRegistGenre, HttpSession session) throws Exception {
    event.setEventRegistTheme(setArrayList(eventRegistTheme));
    event.setEventRegistMajor(setArrayList(eventRegistMajor));
    event.setEventRegistGenre(setArrayList(eventRegistGenre));
    event.setWriter(getLoginMember(session).getNo());
    
    eventService.add(event);
    categoryService.registEventCategory(event);
    return new JsonResult(JsonResult.SUCCESS, "ok");
  }
  
  //리허설 있는 이벤트 변경
  @RequestMapping("updateReherse")
  public JsonResult updateReherse(Event event, String eventRegistTheme, String eventRegistMajor, String eventRegistGenre, HttpSession session) throws Exception {
    event.setEventRegistTheme(setArrayList(eventRegistTheme));
    event.setEventRegistMajor(setArrayList(eventRegistMajor));
    event.setEventRegistGenre(setArrayList(eventRegistGenre));
    event.setWriter(getLoginMember(session).getNo());
    
    eventService.update(event);
    categoryService.deleteEventCategory(event.getNo());
    categoryService.registEventCategory(event);
    eventService.deleteEventReherse(event.getNo());
    eventService.registEventReherse(event);
    return new JsonResult(JsonResult.SUCCESS, "ok");
  }
  
  //리허설 없는 이벤트 변경
  @RequestMapping("update")
  public JsonResult update(Event event, String eventRegistTheme, String eventRegistMajor, String eventRegistGenre, HttpSession session) throws Exception {
    event.setEventRegistTheme(setArrayList(eventRegistTheme));
    event.setEventRegistMajor(setArrayList(eventRegistMajor));
    event.setEventRegistGenre(setArrayList(eventRegistGenre));
    event.setWriter(getLoginMember(session).getNo());
    
    eventService.update(event);
    categoryService.deleteEventCategory(event.getNo());
    categoryService.registEventCategory(event);
    eventService.deleteEventReherse(event.getNo());
    return new JsonResult(JsonResult.SUCCESS, "ok");
  }
  
  // 이벤트 삭제
  @RequestMapping("deleteEvent")
  public JsonResult deleteEvent(int eno) throws Exception {
    categoryService.deleteEventCategory(eno);
    eventService.deleteEventReherse(eno);
    eventService.delete(eno);
    return new JsonResult(JsonResult.SUCCESS, "ok");
  }
  
  /* musimode 나에게 꼭 맞는 이벤트*/
  @RequestMapping("listRecommand")
  public JsonResult listRecommand(HttpSession session) {
    JsonResult result = new JsonResult();
    try {
      HashMap<String,Object> dataMap = new HashMap<>();
      dataMap.put("listRecommand",eventService.listRecommand(getLoginMember(session).getNo()));

      result.setData(dataMap);
      result.setStatus(JsonResult.SUCCESS);
    } catch (Exception e) {
      result.setStatus(JsonResult.ERROR);
      e.printStackTrace();
    }
    return result;
  }
  
  /* musimode 최근 이벤트*/
  @RequestMapping("listRecent")
  public JsonResult listRecent(HttpSession session) {
    JsonResult result = new JsonResult();
    try {
      HashMap<String,Object> dataMap = new HashMap<>();
      dataMap.put("listRecent",eventService.listRecent(getLoginMember(session).getNo()));

      result.setData(dataMap);
      result.setStatus(JsonResult.SUCCESS);
    } catch (Exception e) {
      result.setStatus(JsonResult.ERROR);
      e.printStackTrace();
    }
    return result;
  }

  // 매칭요청하기 > 이벤트 목록 가져오기
  @RequestMapping("prCheckEvent")
  public JsonResult prCheckEvent(HttpSession session, int no){
    JsonResult result = new JsonResult();
      try {
        List<Event> eventList = eventService.prCheckEvent(getLoginMember(session).getNo(), no);
        
        if (eventList != null) {
          result.setStatus(JsonResult.SUCCESS);

          HashMap<String,Object> dataMap = new HashMap<>();
          dataMap.put("eventList", eventList);

          result.setData(dataMap);
        } else { 
          return new JsonResult(JsonResult.SUCCESS, "noEvent");
        }
        
      } catch (Exception e) {
        e.printStackTrace();
        result.setStatus(JsonResult.ERROR);
      }
    return result;
  }

  // 1. 뮤지션에게 홍보(pr)
  @RequestMapping("prEvent")
  public JsonResult prEvent(int musicianNo, int eventNo){
    JsonResult result = new JsonResult();
    try {
      eventService.prEvent(musicianNo, eventNo);
      return new JsonResult(JsonResult.SUCCESS, "success");

    } catch (Exception e) {
      e.printStackTrace();
      result.setStatus(JsonResult.ERROR);
    }
    return result;
  }
  
  // 뮤지션모드 > 이벤트 상세페이지 > 이벤트 지원
  @RequestMapping("requestEvent")
  public JsonResult requestEvent(HttpSession session, int eNo, int appyNo){
    Integer muNo = getLoginMember(session).getNo();
    JsonResult result = new JsonResult();
    
    if(hasAppy(muNo, eNo) == true) {
      
      try {
        eventService.requestEventCheck(muNo, eNo, appyNo);
        return new JsonResult(JsonResult.SUCCESS, "success");
      } catch (Exception e) {
        result.setStatus(JsonResult.ERROR);
      }
      
    } else {
      try {
        eventService.requestEvent(muNo, eNo);
        return new JsonResult(JsonResult.SUCCESS, "success");
      } catch (Exception e) {
        System.out.println(e.getMessage());
      }
    }
    return result;
  }
  
  //뮤지션모드 > 이벤트 상세페이지 > 이벤트 지원 취소
  @RequestMapping("requestEventCancel")
  public JsonResult requestEventCancel(HttpSession session, int eventNo) {
    JsonResult result = new JsonResult();
    try {
      HashMap<String,Object> param = new HashMap<>();
      param.put("eventNo", eventNo);
      param.put("musicianNo", getLoginMember(session).getNo());
      
      result.setData(eventService.requestEventCancel(param));
      result.setStatus(JsonResult.SUCCESS);
    } catch (Exception e) {
      result.setStatus(JsonResult.ERROR);
      e.printStackTrace();
    }
    return result;
  }
  
  @RequestMapping("listSurf")
  public JsonResult listSurf() throws Exception {
    JsonResult result = new JsonResult();

      try {
        List<Event> listSurf = (List<Event>) eventService.listSurf();

        result.setStatus(JsonResult.SUCCESS);

        HashMap<String,Object> dataMap = new HashMap<>();
        dataMap.put("listSurf", listSurf);
        result.setData(dataMap);

      } catch (Exception e) {
        result.setStatus(JsonResult.ERROR);
      }
    return result;
  }
  

  @RequestMapping("listSearchResult")
  public JsonResult listSearchResult(HttpSession session, String search) {
    JsonResult result = new JsonResult();

    try {
      List<Event> eventList = eventService.listSearchResult(search);

      result.setStatus(JsonResult.SUCCESS);

      HashMap<String,Object> dataMap = new HashMap<>();
      dataMap.put("listSearchResult", eventList);
      result.setData(dataMap);

    } catch (Exception e) {
      e.printStackTrace();
      result.setStatus(JsonResult.ERROR);
    }
  return result;
}

  /*일반모드 > 나의이벤트 > 모집중 이벤트 리스트*/
  @RequestMapping("listRecruiting")
  public JsonResult listRecruiting(HttpSession session) {
    JsonResult result = new JsonResult();
    try {
      HashMap<String,Object> dataMap = new HashMap<>();
      dataMap.put("listRecruiting",eventService.listRecruiting(getLoginMember(session).getNo()));

      result.setData(dataMap);
      result.setStatus(JsonResult.SUCCESS);
    } catch (Exception e) {
      result.setStatus(JsonResult.ERROR);
      e.printStackTrace();
    }
    return result;
  }
  
  
  /*일반모드 > 나의 이벤트 > 모집중 > 지원자 > 지원 거절*/
  @RequestMapping("rejectAppy")
  public JsonResult rejectAppy(int musicianNo, int eventNo) {
    JsonResult result = new JsonResult();
    try {
      HashMap<String,Object> param = new HashMap<>();
      param.put("eventNo", eventNo);
      param.put("musicianNo", musicianNo);
      
      result.setData(eventService.rejectAppy(param));
      result.setStatus(JsonResult.SUCCESS);
    } catch (Exception e) {
      result.setStatus(JsonResult.ERROR);
      e.printStackTrace();
    }
    return result;
  }
  
  /*일반모드 > 나의 이벤트 > 모집중 > 지원자 > 매칭 확정*/
  @RequestMapping("decideMatch")
  public JsonResult decideMatch(int musicianNo, int eventNo, HttpSession session) {
    JsonResult result = new JsonResult();
    try {
      int writerNo = getLoginMember(session).getNo();
      HashMap<String,Object> param = new HashMap<>();
      param.put("eventNo", eventNo);
      param.put("musicianNo", musicianNo);
      param.put("writerNo", writerNo);
      
      result.setData(eventService.decideMatch(param));
      result.setStatus(JsonResult.SUCCESS);
    } catch (Exception e) {
      result.setStatus(JsonResult.ERROR);
      e.printStackTrace();
    }
    return result;
  }
  
/*일반모드 > 나의 이벤트 > 모집중 > 내가 요청한 뮤지션 > 요청 취소*/
  @RequestMapping("cancelPr")
  public JsonResult cancelPr(int musicianNo, int eventNo) {
    JsonResult result = new JsonResult();
    try {
      HashMap<String,Object> param = new HashMap<>();
      param.put("eventNo", eventNo);
      param.put("musicianNo", musicianNo);
      
      result.setData(eventService.cancelPr(param));
      result.setStatus(JsonResult.SUCCESS);
    } catch (Exception e) {
      result.setStatus(JsonResult.ERROR);
      e.printStackTrace();
    }
    return result;
  }
  
  /*일반모드 > 나의이벤트 > 진행중 이벤트 리스트*/
  @RequestMapping("listOngoing")
  public JsonResult listOngoing(HttpSession session) {
    JsonResult result = new JsonResult();
    try {
      HashMap<String,Object> dataMap = new HashMap<>();
      dataMap.put("listOngoing",eventService.listOngoing(getLoginMember(session).getNo()));

      result.setData(dataMap);
      result.setStatus(JsonResult.SUCCESS);
    } catch (Exception e) {
      result.setStatus(JsonResult.ERROR);
      e.printStackTrace();
    }
    return result;
  }
  
  /*일반모드 > 나의이벤트 > 종료 이벤트 리스트*/
  @RequestMapping("listEnd")
  public JsonResult listEnd(HttpSession session) {
    JsonResult result = new JsonResult();
    try {
      HashMap<String,Object> dataMap = new HashMap<>();
      dataMap.put("listEnd",eventService.listEnd(getLoginMember(session).getNo()));

      result.setData(dataMap);
      result.setStatus(JsonResult.SUCCESS);
    } catch (Exception e) {
      result.setStatus(JsonResult.ERROR);
      e.printStackTrace();
    }
    return result;
  }
  
  /*뮤지션모드 - 매칭이벤트 > 종료 이벤트 리스트*/
  @RequestMapping("listMusiEnd")
  public JsonResult listMusiEnd(HttpSession session) {
    JsonResult result = new JsonResult();
    try {
      HashMap<String,Object> dataMap = new HashMap<>();
      dataMap.put("listEnd",eventService.listMusiEnd(getLoginMember(session).getNo()));

      result.setData(dataMap);
      result.setStatus(JsonResult.SUCCESS);
    } catch (Exception e) {
      result.setStatus(JsonResult.ERROR);
      e.printStackTrace();
    }
    return result;
  }
  
  /*뮤지션모드 - 매칭이벤트 > 진행중 이벤트 리스트*/
  @RequestMapping("listMusiOngoing")
  public JsonResult listMusiOngoing(HttpSession session) {
    JsonResult result = new JsonResult();
    try {
      HashMap<String,Object> dataMap = new HashMap<>();
      dataMap.put("listOngoing",eventService.listMusiOngoing(getLoginMember(session).getNo()));

      result.setData(dataMap);
      result.setStatus(JsonResult.SUCCESS);
    } catch (Exception e) {
      result.setStatus(JsonResult.ERROR);
      e.printStackTrace();
    }
    return result;
  }
  
  /*뮤지션모드 - 지원한 이벤트*/
  @RequestMapping("listMusiAppy")
  public JsonResult listMusiAppy(HttpSession session) {
    JsonResult result = new JsonResult();
    try {
      HashMap<String,Object> dataMap = new HashMap<>();
      dataMap.put("listAppy",eventService.listMusiAppy(getLoginMember(session).getNo()));

      result.setData(dataMap);
      result.setStatus(JsonResult.SUCCESS);
    } catch (Exception e) {
      result.setStatus(JsonResult.ERROR);
      e.printStackTrace();
    }
    return result;
  }
  
  /*뮤지션모드 - 제안받은 이벤트*/
  @RequestMapping("listMusiPr")
  public JsonResult listMusiPr(HttpSession session) {
    JsonResult result = new JsonResult();
    try {
      HashMap<String,Object> dataMap = new HashMap<>();
      dataMap.put("listPr",eventService.listMusiPr(getLoginMember(session).getNo()));

      result.setData(dataMap);
      result.setStatus(JsonResult.SUCCESS);
    } catch (Exception e) {
      result.setStatus(JsonResult.ERROR);
      e.printStackTrace();
    }
    return result;
  }
  
  
  
  @RequestMapping("detail")
  public JsonResult detail(int no, HttpSession session) {
    JsonResult result = new JsonResult();
    try {
      HashMap<String,Object> dataMap = new HashMap<>();
      dataMap.put("detail", eventService.detail(no, getLoginMember(session).getNo()));

      result.setData(dataMap);
      result.setStatus(JsonResult.SUCCESS);
    } catch (Exception e) {
      result.setStatus(JsonResult.ERROR);
      e.printStackTrace();
    }
    return result;
  }
  
  @RequestMapping("myEventDetail")
  public JsonResult myEventDetail(int no) {
    JsonResult result = new JsonResult();
    try {
      HashMap<String,Object> dataMap = new HashMap<>();
      dataMap.put("detail", eventService.myEventDetail(no));

      result.setData(dataMap);
      result.setStatus(JsonResult.SUCCESS);
    } catch (Exception e) {
      result.setStatus(JsonResult.ERROR);
      e.printStackTrace();
    }
    return result;
  }
  
  @RequestMapping("searchEvent")
  public JsonResult searchEvent(HttpSession session, int thmno, int mjrno, int gnrno, int indexT,int indexM,int indexG, @RequestParam(value="locFilter[]") List<String> locFilter) throws Exception {
    JsonResult result = new JsonResult();
    try {
      List<Event> search= (List<Event>) eventService.searchEvent(getLoginMember(session).getNo() ,thmno,mjrno,gnrno,indexT,indexM,indexG,locFilter);
      
      result.setStatus(JsonResult.SUCCESS);
      HashMap<String,Object> dataMap = new HashMap<>();
      dataMap.put("listSurf", search);
      result.setData(dataMap);

    } catch (Exception e) {
      result.setStatus(JsonResult.ERROR);
    }
  return result;
  }
  
  // 리뷰 추가
  @RequestMapping("updateReview")
  public JsonResult updateReview(Event event, int musicianNo) throws Exception {
    JsonResult result = new JsonResult();
    try {
      eventService.updateReview(event, musicianNo);
      
      result.setStatus(JsonResult.SUCCESS);
      result.setData("ok");

    } catch (Exception e) {
      e.printStackTrace();
      result.setStatus(JsonResult.ERROR);
    }
  return result;
  }
  
  
  
  
  
  /*로그인 멤버 객체 가져오기*/
  private Member getLoginMember(HttpSession session) {
    Member loginMember = (Member) session.getAttribute("loginMember");
      return loginMember;
  }
  
  /* 뮤지션 모드 > 이벤트 상세페이지 > 지원 활성여부 확인 */
  private boolean hasAppy(int muNo, int eNo) {
    boolean result = false;
    try {
      if(eventService.getAppyCount(muNo, eNo) > 0) result = true;
    } catch (Exception e) {
      e.printStackTrace();
    }
    
    return result;
  }
  
  private ArrayList<String> setArrayList(String list) {
    
    String[] resultList = list.split(",");
    
    ArrayList<String> returnList = new ArrayList<>();
    
    for (String result : resultList) {
      returnList.add(result);
    } 
    
    return returnList;
  }
  
//  @Scheduled(fixedRate=5000) //테스트용
  @Scheduled(cron="0 0 0 * * ? ")
  public void matching(){
    JsonResult result = new JsonResult();
    try {
      HashMap<String,Object> dataMap = new HashMap<>();
      dataMap.put("matchingList", eventService.listMatchingEvent());
//      dataMap.put("expiredList", eventService.listEventExpired());
      result.setData(dataMap);
//      System.out.println("abc"+dataMap);
      result.setStatus(JsonResult.SUCCESS);
//      System.out.println(dataMap);
    } catch (Exception e) {
      result.setStatus(JsonResult.ERROR);
      e.printStackTrace();
    }
  }
  
}









