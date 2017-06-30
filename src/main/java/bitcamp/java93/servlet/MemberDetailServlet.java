package bitcamp.java93.servlet;
/* 회원 관리 만들기 : 회원 조회하기 */


import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import bitcamp.java93.domain.Member;
import bitcamp.java93.service.MemberService;

@WebServlet(urlPatterns="/member/detail")
public class MemberDetailServlet extends HttpServlet {

  private static final long serialVersionUID = 1L;

  @Override
  public void doGet(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
    
    res.setContentType("text/html;charset=UTF-8");
    PrintWriter out = res.getWriter();

    out.println("<!DOCTYPE html>");
    out.println("<html>");
    out.println("<head>");
    out.println("<meta charset='UTF-8'>");
    out.println("<title>회원관리</title>");
    
    RequestDispatcher rd = req.getRequestDispatcher("/style/core");
    rd.include(req, res);
    
    out.println("</head>");
    out.println("<body>");
    
    rd = req.getRequestDispatcher("/header");
    rd.include(req, res);
    
    out.println("<h1>회원 조회</h1>");

    try {
      MemberService memberService = (MemberService) this.getServletContext().getAttribute("memberService");

      int no = Integer.parseInt(req.getParameter("no"));

//      Member member = memberService.get(no);
//      
//      out.printf("<form action='update' method='POST'>\n");
//      out.printf("번호:<input type='text' name='no' value='%d' readonly><br>\n", member.getNo());
//      out.printf("이름:<input type='text' name='name' value='%s'><br>\n", member.getName());
//      out.printf("전화:<input type='text' name='tel' value='%s'><br>\n", member.getTel());
//      out.printf("이메일:<input type='text' name='email' value='%s'><br>\n", member.getEmail());
//      out.println("암호:<input type='password' name='password'><br>\n");
//      out.println("<button>변경</button>");
//      out.println("<button type='button' onclick='doDelete()'>삭제</button>");
//      out.println("<button type='button' onclick='doList()'>목록</button>");
//      out.println("</form>");

      out.println("<script>");
      out.println("function doDelete() {");
      out.printf("  location.href = 'delete?no=%s'\n", req.getParameter("no"));
      out.println("}");
      out.println("</script>");
      
      out.println("<script>");
      out.println("function doList() {");
      out.println("location.href = 'list'");
      out.println("}");
      out.println("</script>");

    } catch (Exception e) {
      req.setAttribute("error", e);

      rd = req.getRequestDispatcher("/error");
      rd.forward(req, res);
      
      return;
    }
    
    rd = req.getRequestDispatcher("/footer");
    rd.include(req, res);
    
    out.println("</body>");
    out.println("</html>");


  } // service()

}
