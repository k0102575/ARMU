/* 회원 관리 만들기 : 게시물 목록 출력하기 페이지 번호 및 사이즈 */

package bitcamp.java93.servlet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet(urlPatterns="/croom/form")
public class CroomFormServlet extends HttpServlet {
  
  private static final long serialVersionUID = 1L;
  
  @Override
  public void service(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
    res.setContentType("text/html;charset=UTF-8");
    PrintWriter out = res.getWriter();
    
    out.println("</body>");
    out.println("</html>");
    
    out.println("<!DOCTYPE html>");
    out.println("<html>");
    out.println("<head>");
    out.println("<meta charset='UTF-8'>");
    out.println("<title>강의관리</title>");
    out.println("</head>");
    out.println("<body>");
    out.println("<h1>강의 등록</h1>");
    out.println("<form action='add' method='POST'>");
    out.println("강의실 이름:<input type='text' name='name'><br>");
    out.println("<button>등록</button>");
    out.println("</form>");
        
    out.println("<a href='list'>목록</a>");
    out.println("</body>");
    out.println("</html>");
    
  } // service()
  
}
