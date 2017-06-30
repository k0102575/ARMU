package bitcamp.java93.servlet;
/* 회원 관리 만들기 : 회원 등록하기 */



import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import bitcamp.java93.domain.Member;
import bitcamp.java93.service.MemberService;

@WebServlet(urlPatterns="/member/add")
public class MemberAddServlet extends HttpServlet {

  private static final long serialVersionUID = 1L;

  @Override
  public void doPost(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
    
    Member m = new Member();

    m.setName(req.getParameter("name"));
    m.setTel(req.getParameter("tel"));
    m.setEmail(req.getParameter("email"));
    m.setPassword(req.getParameter("password"));

    try {
      MemberService memberService = (MemberService) this.getServletContext().getAttribute("memberService");
      
//      memberService.add(m);
      
      res.sendRedirect("list");
    } catch (Exception e) {
      req.setAttribute("error", e);
      RequestDispatcher rd = req.getRequestDispatcher("/error");
      rd.forward(req, res);
      return;
    }
    
  } // service()

}
