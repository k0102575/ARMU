/* 회원 관리 만들기 : 회원 등록하기 */

package bitcamp.java93.servlet;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import bitcamp.java93.domain.Croom;
import bitcamp.java93.service.CroomService;

@WebServlet(urlPatterns="/croom/add")
public class CroomAddServlet extends HttpServlet {
  
  private static final long serialVersionUID = 1L;
  
  @Override
  public void doPost(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
    Croom c = new Croom();
    
    c.setName(req.getParameter("name"));
    
    
    try {
      CroomService croomService = (CroomService) this.getServletContext().getAttribute("croomService");
      
    croomService.add(c);
    
    res.sendRedirect("list");
    
    
    } catch (Exception e) {
      req.setAttribute("error", e);
      RequestDispatcher  rd = req.getRequestDispatcher("/error");
      rd.forward(req, res);
      
      return;
    }
    
  } // service()
  
}
