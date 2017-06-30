package bitcamp.java93.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import bitcamp.java93.domain.Croom;
import bitcamp.java93.domain.Lect;
import bitcamp.java93.domain.Manager;
import bitcamp.java93.service.LectService;

@WebServlet(urlPatterns="/lect/detail")
public class LectDetailServlet extends HttpServlet {

  private static final long serialVersionUID = 1L;

  @Override
  public void doGet(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {

    res.setContentType("text/html;charset=UTF-8");
    PrintWriter out = res.getWriter();

    out.println("<!DOCTYPE html>");
    out.println("<html>");
    out.println("<head>");
    out.println("<meta charset='UTF-8'>");
    out.println("<title>강의관리</title>");
    
    RequestDispatcher rd = req.getRequestDispatcher("/style/core");
    rd.include(req, res);
    
    out.println("</head>");
    out.println("<body>");
    out.println("<h1>강의 조회</h1>");


    try {
      LectService lectService = (LectService) this.getServletContext().getAttribute("lectService");
  
      int no = Integer.parseInt(req.getParameter("no"));
      
      Lect lect = lectService.get(no);
      
      if (lect == null) {
        throw new Exception(no + "번 회원을 찾지 못했습니다.");
      }
      
      List<Manager> manager = lect.getManagerList();
      List<Croom> croom = lect.getCroomList();
      
      out.printf("<form action='update' method='POST'>\n");
      out.printf("번호:<input type='text' name='no' value='%d' readonly><br>\n", lect.getNo());
      out.printf("제목:<input type='text' name='titl' value='%s'><br>\n", lect.getTitl());
      out.printf("설명:<input type='text' name='dscp' value='%s'><br>\n", lect.getDscp());
      out.printf("시작일:<input type='date' name='sdt' value='%s'><br>\n", lect.getSdt());
      out.printf("종료일:<input type='date' name='edt' value='%s'><br>\n", lect.getEdt());
      out.printf("총수강인원:<input type='text' name='qty' value='%d'><br>\n", lect.getQty());
      out.printf("가격:<input type='text' name='pric' value='%d'><br>\n", lect.getPric());
      out.printf("총시간:<input type='text' name='thrs' value='%d'><br>\n", lect.getThrs());
      
      out.println("<select name='crmno'><br>");
      out.println("<option value='0'>강의실을 선택하세요!</option><br>\n");
      
      for (Croom c : croom) {
        if(c.getNo() == lect.getCrmno()) {
          out.printf("<option value='%d' selected>%s</option>", c.getNo(), c.getName());
        } else {
          out.printf("<option value='%d'>%s</option>", c.getNo(), c.getName());
        }
      }
      out.println("</select><br>");
      
      out.println("<select name='mrno'><br>");
      out.println("<option value='0'>매니저를 선택하세요!</option><br>\n");
      
      for (Manager m : manager) {
        if(m.getNo() == lect.getMrno()) {
          out.printf("<option value='%d' selected>%s</option>", m.getNo(), m.getName());
        } else {
          out.printf("<option value='%d'>%s</option>", m.getNo(), m.getName());
        }
      }
      out.println("</select><br>");
      
      out.println("<button>변경</button>");
      out.println("<button type='button' onclick='doDelete()'>삭제</button>");
      out.println("<button type='button' onclick='doList()'>목록</button>");
      out.println("</form>");

    } catch (Exception e) {
      req.setAttribute("error", e);
      rd = req.getRequestDispatcher("/error");
      rd.forward(req, res);
      return;
    }
    
    rd = req.getRequestDispatcher("/footer");
    rd.include(req, res);
    
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
    
    out.println("</body>");
    out.println("</html>");


  } // service()

}
