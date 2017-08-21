package bitcamp.java93.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import bitcamp.java93.domain.Event;

public interface EventDao {
  List<Event> selectOngoingList();
  int insert(Event event);
  void update(Event event);
  void deleteReherse(int no);
  int insertReherse(Event event);
  void delete(int eno);
  List<Event> selectRecommandList(int no);//뮤지션모드 > 추천탭 > 나에게 꼭 맞는 이벤트 리스트
  List<Event> selectRecentList(int no);//뮤지션모드 > 추천탭 > 최근 이벤트 리스트 (파라미터 받는 이유는 관심 이벤트 정보 가져오려고)
  List<Event> prCheckList(Map<String,Object> valueMap);  // 이벤트 매칭요청 리스트
  void prEvent(Map<String,Object> valueMap);
  void appyEvent(Map<String,Object> valueMap);
  void deleteAppyEventZero();
  void deleteAppyEvent(int eNo);
  void deleteAppyEventOne();
  List<Event> selectSurfList();
  List<Event> selectSearchResultList(String search);
  List<Event> selectRecruitingList(int no);//나의이벤트 > 모집중 이벤트 리스트
  List<Event> selectOngoingList(int no);//나의이벤트 > 진행중 이벤트 리스트
  List<Event> selectEndList(int no);//나의이벤트 > 종료 이벤트 리스트
  List<Event> selectMusiOngoingList(int no);//뮤지션모드 - 매칭이벤트 > 진행중 이벤트 리스트
  List<Event> selectMusiEndList(int no);//뮤지션모드 - 매칭이벤트 > 종료 이벤트 리스트
  List<Event> eventSearch(HashMap<String,Object> valueMap);
  Event selectEvent(int eNo); // 이벤트 상세정보
}
