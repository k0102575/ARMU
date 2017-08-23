package bitcamp.java93.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import bitcamp.java93.domain.Event;

public interface EventDao {
  List<Event> selectOngoingList();
  int insert(Event event);
  void update(Event event); // 이벤트 변경
  void deleteReherse(int no);
  int insertReherse(Event event);
  void delete(int eno);
  List<Event> selectRecommandList(int no);//뮤지션모드 > 추천탭 > 나에게 꼭 맞는 이벤트 리스트
  List<Event> selectRecentList(int no);//뮤지션모드 > 추천탭 > 최근 이벤트 리스트 (파라미터 받는 이유는 관심 이벤트 정보 가져오려고)
  List<Event> prCheckList(Map<String,Object> valueMap);  // 이벤트 매칭요청 리스트
  List<Event> selectSurfList();
  List<Event> selectSearchResultList(String search);
  List<Event> selectRecruitingList(int no);//나의이벤트 > 모집중 이벤트 리스트
  List<Event> selectOngoingList(int no);//나의이벤트 > 진행중 이벤트 리스트
  List<Event> selectEndList(int no);//나의이벤트 > 종료 이벤트 리스트
  List<Event> selectMusiOngoingList(int no);//뮤지션모드 - 매칭이벤트 > 진행중 이벤트 리스트
  List<Event> selectMusiEndList(int no);//뮤지션모드 - 매칭이벤트 > 종료 이벤트 리스트
  List<Event> selectMusiAppyList(int no);//뮤지션모드 - 지원한 이벤트
  List<Event> selectMusiPrList(int no);//뮤지션모드 - 제안받은 이벤트
  List<Event> eventSearch(HashMap<String,Object> valueMap);
  Event selectEvent(HashMap<String, Object> valueMap); // 뮤지션 모드 이벤트 상세정보
  Event selectMyEvent(int eNo); // 일반모드 이벤트 상세정보
  int selectEventCount(int no);//일반모드 > 추천탭 > 나에게 꼭 맞는 이벤트 리스트 - 이벤트 유무 확인
  int selectAppyCount(HashMap<String, Object> valueMap); /* 뮤지션 모드 > 이벤트 상세페이지 > 지원 활성여부 확인 */
  void updateReview(Event event); // 리뷰 추가
  List<Event> selectMatchingEventList();
}
