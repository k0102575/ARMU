/* 로그인 여부를 검사하는 필터 */

package bitcamp.java93.filter;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import bitcamp.java93.domain.Member;

@WebFilter({"/member/*", "/croom/*", "/lect/* , /teacher/*"})
public class AuthCheckFilter implements Filter{

  @Override
  public void init(FilterConfig filterConfig) throws ServletException {
    
  }

  @Override
  public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
      throws IOException, ServletException {
    HttpServletRequest httpRequest = (HttpServletRequest) request;
    HttpServletResponse httpResponse = (HttpServletResponse) response;
    
    Member loginMember = (Member) httpRequest.getSession().getAttribute("loginMember");
    
    if (loginMember == null) {
      httpResponse.sendRedirect("../auth/login.do");
      return;
    }
    
    chain.doFilter(request, response);
  }

  @Override
  public void destroy() {
    
  }

}
