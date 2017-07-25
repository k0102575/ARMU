package bitcamp.java93.control.json;

import javax.servlet.ServletContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import bitcamp.java93.domain.Member;
import bitcamp.java93.service.MemberService;

@RestController
@RequestMapping("/member/")
public class MemberControl {
  
  @Autowired ServletContext servletContext;
  @Autowired MemberService memberService;
  
  @RequestMapping("add")
  public JsonResult add(Member member) throws Exception {
    
    System.out.println(member);
    
    JsonResult result = new JsonResult();
    
    try {
      memberService.add(member);

      return new JsonResult(JsonResult.SUCCESS, "ok");
       
    } catch (Exception e) {
      result.setStatus(JsonResult.ERROR);
    }
    
    return result;
  }
  
}









