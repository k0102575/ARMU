package bitcamp.java93.filter;

/* 역할: HttpSession 객체에 로그인 회원 정보가 있는 검사한다. */

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

@WebFilter({"/mobile/musimode/*","/mobile/chat/*", "/mobile/favor/*", "/mobile/mypage/*", "/mobile/gmode/event/*", "/mobile/gmode/musi-info/*"})
/*@WebFilter({"/mobile/gmode/*"})*/
public class AuthCheckFilter implements Filter {
  
  @Override
  public void init(FilterConfig filterConfig) throws ServletException {}

  @Override
  public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
      throws IOException, ServletException {
    HttpServletRequest httpRequest = (HttpServletRequest) request;
    HttpServletResponse httpResponse = (HttpServletResponse) response;
    
    Member loginMember = (Member)httpRequest.getSession().getAttribute("loginMember");
    if (loginMember == null) { 
      httpResponse.sendRedirect("/mobile/login.html");
      return;
    }
    
    chain.doFilter(request, response);
  }

  @Override
  public void destroy() {}

}
