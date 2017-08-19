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
  List<Event> checkEvent(int myNo, int muNo) throws Exception;
  void prEvent(int muNo, int eNo) throws Exception;
  List<Event> listSurf() throws Exception;
  List<Event> listSearchResult(String search) throws Exception;
  List<Event> listRecruiting(int no) throws Exception;//나의이벤트 > 모집중 이벤트 리스트
  List<Event> listOngoing(int no) throws Exception;//나의이벤트 > 진행중 이벤트 리스트
  List<Event> listEnd(int no) throws Exception;//나의이벤트 > 종료 이벤트 리스트
  List<Event> listMusiOngoing(int no) throws Exception;//뮤지션모드 - 매칭이벤트 > 진행중 이벤트 리스트
  List<Event> listMusiEnd(int no) throws Exception;//뮤지션모드 - 매칭이벤트 > 종료 이벤트 리스트
  List<Event> searchEvent(int no, int thmno, int mjrno, int gnrno,int indexT,int indexM,int indexG) throws Exception;
  Event detail(int eNo) throws Exception;
}
