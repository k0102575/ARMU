/* 회원 관리 만들기 : 게시물 목록 출력하기 페이지 번호 및 사이즈 */

package bitcamp.java93.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import javax.servlet.GenericServlet;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.annotation.WebServlet;

import bitcamp.java93.domain.Croom;
import bitcamp.java93.domain.Manager;
import bitcamp.java93.service.CroomService;
import bitcamp.java93.service.ManagerService;

@WebServlet(urlPatterns="/lect/form")
public class LectFormServlet extends GenericServlet {
  
  private static final long serialVersionUID = 1L;
  
  @Override
  public void service(ServletRequest req, ServletResponse res) throws ServletException, IOException {
    res.setContentType("text/html;charset=UTF-8");
    PrintWriter out = res.getWriter();
    
    
    
    out.println("</body>");
    out.println("</html>");
    
    try {
      CroomService croomService = (CroomService) this.getServletContext().getAttribute("croomService");
      ManagerService managerService = (ManagerService) this.getServletContext().getAttribute("managerService");
    
    List<Croom> croom = croomService.allList();
    List<Manager> manager = managerService.allList();
    
    out.println("<!DOCTYPE html>");
    out.println("<html>");
    out.println("<head>");
    out.println("<meta charset='UTF-8'>");
    out.println("<title>강의관리</title>");
    out.println("</head>");
    out.println("<body>");
    out.println("<h1>강의 등록</h1>");
    out.println("<form action='add' method='POST'>");
    out.println("타이틀:<input type='text' name='titl'><br>");
    out.println("설명:<input type='text' name='dscp'><br>");
    out.println("시작일:<input type='date' name='sdt'><br>");
    out.println("종료일:<input type='date' name='edt'><br>");
    out.println("수강가능인원:<input type='text' name='qty'><br>");
    out.println("가격:<input type='text' name='pric'><br>");
    out.println("총시간:<input type='text' name='thrs'><br>");
    
    out.println("<select name='crmno'><br>");
    out.println("<option value='0'>강의실을 선택하세요!</option><br>\n");
    for (Croom c : croom) {
      out.printf("<option value='%d'>%s</option>", c.getNo(), c.getName());
    }
    out.println("</select><br>");
    
    out.println("<select name='mrno'><br>");
    out.println("<option value='0'>매니저를 선택하세요!</option><br>\n");
    for (Manager m : manager) {
      out.printf("<option value='%d'>%s</option>", m.getNo(), m.getName());
    }
    out.println("</select><br>");

    out.println("<button>등록</button>");
    out.println("</form>");
        
    } catch (Exception e){
      out.print("오류 발생!");
      out.println("<pre>");
      e.printStackTrace(out);
      out.println("</pre>");
    }
    
    out.println("<a href='list'>목록</a>");
    out.println("</body>");
    out.println("</html>");
    
    
  } // service()
  
}
