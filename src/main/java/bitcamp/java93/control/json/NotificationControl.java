package bitcamp.java93.control.json;

import java.util.HashMap;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import bitcamp.java93.domain.Member;
import bitcamp.java93.service.NotificationService;

@RestController
@RequestMapping("/notification/")
public class NotificationControl {

  @Autowired NotificationService notificationService;

  @RequestMapping("listNoti")
  public JsonResult listRecent(HttpSession session) {
    JsonResult result = new JsonResult();
    try {
      HashMap<String,Object> dataMap = new HashMap<>();
      dataMap.put("listNoti",notificationService.listNoti(getLoginMember(session).getNo()));

      result.setData(dataMap);
      result.setStatus(JsonResult.SUCCESS);
    } catch (Exception e) {
      result.setStatus(JsonResult.ERROR);
      e.printStackTrace();
    }
    return result;
  }

  private Member getLoginMember(HttpSession session) {
    Member loginMember = (Member) session.getAttribute("loginMember");
    return loginMember;
  }
}
