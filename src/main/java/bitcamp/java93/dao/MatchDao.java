package bitcamp.java93.dao;

import java.util.HashMap;
import java.util.Map;

import bitcamp.java93.domain.Event;

public interface MatchDao {
  int selectExistPrCount(HashMap<String, Object> valueMap);//기존에 홍보한 데이터가 있는지 확인
  int selectExistAppyCount(HashMap<String, Object> valueMap);//기존에 지원한 데이터가 있는지 확인
  int checkPrActive(int prno);//홍보를 취소했는지 확인
  int checkAppyActive(int appyno);//지원을 취소했는지 확인
  int checkPrStatus(int prno);//홍보를 거절했는지 확인
  int checkAppyStatus(int appyno);//지원을 거절했는지 확인
  
  void insertPr(Map<String,Object> valueMap); // 일반인이 홍보하기(pr)
  void updatePrActiveY(int prno); // 일반인이 재홍보(pr.active = "Y")
  void updatePrActiveN(int prno); // 일반인이 홍보 취소(pr.active = "N")
  void updatePrStatusY(int prno); // 뮤지션이 홍보 수락(pr.status = "Y")
  void updatePrStatusN(int prno); // 뮤지션이 홍보 거절(pr.status = "N")
  void insertAppy(Map<String,Object> valueMap); // 뮤지션이 지원(appy)
  void updateAppyActiveY(int appyno); // 뮤지션이 재지원(appy.active = "Y")
  void updateAppyActiveN(int appyno); // 뮤지션이 지원 취소(appy.active = "N")
  void updateAppyStatusY(int appyno); // 일반인이 지원 수락(appy.status = "Y")
  void updateAppyStatusN(int appyno); // 일반인이 지원 거절(appy.status = "N")
  void insertMatch(Map<String,Object> valueMap); // 뮤지션이 매칭 확정(mtc)
  
  int selectAppyCount(HashMap<String, Object> valueMap); /* 뮤지션 모드 > 이벤트 상세페이지 > 지원 활성여부 확인 */
  void updateReview(Event event); // 리뷰 추가
}
