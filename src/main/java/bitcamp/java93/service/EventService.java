package bitcamp.java93.service;

import java.util.List;

import bitcamp.java93.domain.Event;

public interface EventService {
  List<Event> listOngoing() throws Exception;//일반모드 > 나의이벤트 > 진행중 이벤트 리스트
  void add(Event event) throws Exception;
  void RegistEventCategory(Event event) throws Exception;
  void RegistEventReherse(Event event) throws Exception;
  List<Event> listRecommand(int no) throws Exception;//뮤지션모드 > 추천탭 > 나에게 꼭 맞는 이벤트 리스트
  List<Event> listRecent(int no) throws Exception;//뮤지션모드 > 추천탭 > 최근 이벤트 리스트
  List<Event> checkEvent(int no) throws Exception;
  void prEvent(int muNo, int eNo) throws Exception;
}
