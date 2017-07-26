package bitcamp.java93.interceptor;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

public class LoginInterCeptor extends HandlerInterceptorAdapter {
  
  List<String> urls;
  
  public void setUrls(List<String> urls) {
    this.urls = urls;
  }

  @Override
  public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
    
    System.out.println("MyInterceptor.preHandle()");
    try {
      //admin이라는 세션key를 가진 정보가 널일경우 로그인페이지로 이동
      if(request.getSession().getAttribute("loginMember") == null ){
              return false;
      }
  } catch (Exception e) {
      e.printStackTrace();
  }
  return true;
  }

  @Override
  public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView) throws Exception {
  }

  @Override
  public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) throws Exception {
  }

  @Override
  public void afterConcurrentHandlingStarted(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
  }


}
