/* 회원 관리 만들기 : 회원 등록하기 */
package bitcamp.java93.servlet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import bitcamp.java93.domain.Croom;
import bitcamp.java93.service.CroomService;

@WebServlet(urlPatterns="/croom/detail")
public class CroomDetailServlet extends HttpServlet {

  private static final long serialVersionUID = 1L;

  @Override
  public void doGet(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {

    res.setContentType("text/html;charset=UTF-8");
    PrintWriter out = res.getWriter();

    out.println("<!DOCTYPE html>");
    out.println("<html>");
    out.println("<head>");
    out.println("<meta charset='UTF-8'>");
    out.println("<title>교실관리</title>");
    
    RequestDispatcher rd = req.getRequestDispatcher("/style/core");
    rd.include(req, res);
    
    out.println("</head>");
    out.println("<body>");
    out.println("<h1>교실 조회</h1>");


    try {
      CroomService croomService = (CroomService) this.getServletContext().getAttribute("croomService");

      int no = Integer.parseInt(req.getParameter("no"));

      Croom croom = croomService.get(no);
      if (croom == null) {
        throw new Exception(no + "번 교실을 찾지 못했습니다.");
      }

      out.printf("<form action='update' method='POST'>\n");
      out.printf("번호:<input type='text' name='no' value='%d' readonly><br>\n", croom.getNo());
      out.printf("이름:<input type='text' name='name' value='%s'><br>\n", croom.getName());
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
