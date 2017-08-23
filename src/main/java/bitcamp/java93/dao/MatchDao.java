package bitcamp.java93.dao;

import java.util.HashMap;
import java.util.Map;

import bitcamp.java93.domain.Event;
import bitcamp.java93.domain.Musician;

public interface MatchDao {
  void prEvent(Map<String,Object> valueMap); // 일반모드 > 뮤지션 상세 페이지 > 뮤지션 홍보
  void prUpdate(HashMap<String, Object> valueMap); // 일반모드 > 뮤지션 상세 페이지 > 뮤지션 홍보
  void appyEvent(Map<String,Object> valueMap); // 뮤지션 모드 > 이벤트 상세페이지 > 뮤지션 지원 추가
  void appyEventCheckUpdate(Map<String,Object> valueMap); // 뮤지션 모드 > 이벤트 상세페이지 > 뮤지션 지원 활성"Y"변경
  Musician receivePrCheck(int eNo); // 뮤지션 모드 지원할때 pr체크
  void appyEventCancelUpdate(Map<String,Object> valueMap); // 뮤지션 모드 > 이벤트 상세페이지 > 뮤지션 지원 활성"N"변경
  void prEventCheckUpdate(Map<String,Object> valueMap); // 일반 모드 > 뮤지션 상세페이지 > 뮤지션 홍보 활성"N"변경
  void prEventCancelUpdate(Map<String,Object> valueMap); // 일반 모드 > 뮤지션 상세페이지 > 뮤지션 홍보 활성"N"변경
  void updateAppyReject(HashMap<String,Object> valueMap);//일반모드 > 나의 이벤트 > 모집중 > 지원자 > 지원 거절
  void insertMatch(HashMap<String,Object> valueMap);//일반모드 > 나의 이벤트 > 모집중 > 지원자 > 매칭 확정
  void deletePr(HashMap<String,Object> valueMap);//일반모드 > 나의 이벤트 > 모집중 > 내가 요청한 뮤지션 > 요청 취소
  int selectAppyCount(HashMap<String, Object> valueMap); /* 뮤지션 모드 > 이벤트 상세페이지 > 지원 활성여부 확인 */
  void updateReview(Event event); // 리뷰 추가
}
