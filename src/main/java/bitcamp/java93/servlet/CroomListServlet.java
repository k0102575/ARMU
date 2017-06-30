/* 회원 관리 만들기 : 게시물 목록 출력하기 페이지 번호 및 사이즈 */

package bitcamp.java93.servlet;

import java.io.IOException;
import java.util.List;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import bitcamp.java93.domain.Croom;
import bitcamp.java93.service.CroomService;

@WebServlet(urlPatterns="/croom/list")
public class CroomListServlet extends HttpServlet {
  
  private static final long serialVersionUID = 1L;
  
  @Override
  public void doGet(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
    
    int pageNo = 1;
    int pageSize = 100;
    
    try {
      pageNo = Integer.parseInt(req.getParameter("pageNo"));
    } catch (Exception e) {}
    
    try {
      pageSize = Integer.parseInt(req.getParameter("pageSize"));
    } catch (Exception e) {}
    
    res.setContentType("text/html;charset=UTF-8");
    try {
      CroomService croomService = (CroomService) this.getServletContext().getAttribute("croomService");
      
    List<Croom> list = croomService.list(pageNo, pageSize);
    
    req.setAttribute("list", list);
    
    RequestDispatcher rd = req.getRequestDispatcher("/croom/list.jsp");
    rd.include(req, res);
    
    } catch (Exception e){
      req.setAttribute("error", e);
      RequestDispatcher rd = req.getRequestDispatcher("/error");
      rd.forward(req, res);
      
      return;
    }
    
    
  } // service()
  
}
