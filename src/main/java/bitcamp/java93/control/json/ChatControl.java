package bitcamp.java93.control.json;

import java.util.HashMap;
import java.util.List;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import bitcamp.java93.domain.Chat;
import bitcamp.java93.domain.Member;
import bitcamp.java93.service.ChatService;

@RestController
@RequestMapping("/chat/")
public class ChatControl {

  @Autowired ServletContext servletContext;
  @Autowired ChatService chatService;

  @RequestMapping("listChat")
  public JsonResult listChat(int musicianNo, HttpSession session) {
    JsonResult result = new JsonResult();
    try {
      int writerNo = getLoginMember(session).getNo();
      System.out.println(writerNo);
      System.out.println(musicianNo);
      HashMap<String, Object> paramMap = new HashMap<>();
      paramMap.put("mno", writerNo);
      paramMap.put("muno", musicianNo);
      List<Chat> chatList = chatService.listChat(paramMap);

      result.setStatus(JsonResult.SUCCESS);

      HashMap<String,Object> dataMap = new HashMap<>();
      dataMap.put("listChat", chatList);
      result.setData(dataMap);

    } catch (Exception e) {
      e.printStackTrace();
      result.setStatus(JsonResult.ERROR);
    }

    return result;


  }

  @RequestMapping("listMusiChat")
  public JsonResult listMusiChat(HttpSession session) throws Exception {
    JsonResult result = new JsonResult();

    try {
      List<Chat> chatList = chatService.listMusiChat(getLoginMember(session).getNo());

      result.setStatus(JsonResult.SUCCESS);

      HashMap<String,Object> dataMap = new HashMap<>();
      dataMap.put("listChat", chatList);
      result.setData(dataMap);

    } catch (Exception e) {
      e.printStackTrace();
      result.setStatus(JsonResult.ERROR);
    }

    return result;

  }

  private Member getLoginMember(HttpSession session) {
    Member loginMember = (Member) session.getAttribute("loginMember");
    return loginMember;
  }

}









