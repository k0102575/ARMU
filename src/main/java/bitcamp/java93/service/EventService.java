package bitcamp.java93.service;

import java.util.HashMap;
import java.util.List;

import bitcamp.java93.domain.Event;

public interface EventService {
  void add(Event event) throws Exception; // 이벤트 등록
  String acceptAppyAndPr(HashMap<String, Object> valueMap) throws Exception; // 1. 뮤지션에게 홍보(pr) && 6. 일반인이 매칭 확정
  String rejectPr(HashMap<String, Object> valueMap) throws Exception;// 2. 뮤지션이 홍보(PR) 거절하기
  // String acceptPr(HashMap<String, Object> valueMap) throws Exception;// 3. 뮤지션이 홍보(PR) 수락하기
  String acceptPrAndAppy(HashMap<String, Object> valueMap) throws Exception;// 4. 뮤지션이 이벤트에 지원(APPY)하기 && 3. 홍보(pr) 수락하기
  String rejectAppy(HashMap<String,Object> map) throws Exception;// 5. 일반인이 지원(APPY) 거절
  //String decideMatch(HashMap<String,Object> map) throws Exception;// 6. 일반인이 매칭 확정
  void update(Event event) throws Exception; // 이벤트 변경 > 9. 일반인이 미확정 이벤트 편집
  void delete(int eno) throws Exception; // 이벤트 삭제 > 10. 일반인이 미확정 이벤트 삭제
  String cancelPr(HashMap<String,Object> map) throws Exception;// 11. 일반인이 홍보(PR) 취소
  String cancelAppy(HashMap<String, Object> param) throws Exception; // 12. 뮤지션이 지원(Appy) 취소
  void updateReview(Event event, int muno) throws Exception; // 13. 리뷰 작성
  
  void favorAdd(int musicianNo, int eventNo) throws Exception; // 선호이벤트 추가
  void favorRemove(int musicianNo, int eventNo) throws Exception; // 선호이벤트 제거
  
  List<Event> listOngoing() throws Exception;//일반모드 > 나의이벤트 > 진행중 이벤트 리스트
  List<Event> listRecommand(int no) throws Exception;//뮤지션모드 > 추천탭 > 나에게 꼭 맞는 이벤트 리스트
  List<Event> listRecent(int no) throws Exception;//뮤지션모드 > 추천탭 > 최근 이벤트 리스트
  List<Event> prCheckEvent(int myNo, int muNo) throws Exception; // 매칭요청하기 > 이벤트 목록 가져오기
  List<Event> listSurf() throws Exception; // 탐색 이벤트 리스트
  List<Event> listSearchResult(String search) throws Exception;
  List<Event> listRecruiting(int no) throws Exception;//나의이벤트 > 모집중 이벤트 리스트
  List<Event> listOngoing(int no) throws Exception;//나의이벤트 > 진행중 이벤트 리스트
  List<Event> listEnd(int no) throws Exception;//나의이벤트 > 종료 이벤트 리스트
  List<Event> listMusiOngoing(int no) throws Exception;//뮤지션모드 - 매칭이벤트 > 진행중 이벤트 리스트
  List<Event> listMusiEnd(int no) throws Exception;//뮤지션모드 - 매칭이벤트 > 종료 이벤트 리스트
  Event detail(int eNo, int muNo) throws Exception; // 뮤지션 모드 - 이벤트 상세 페이지 
  Event myEventDetail(int eventNo) throws Exception; // 일반모드 - 이벤트 상세 페이지
  List<Event> searchEvent(int no, int thmno, int mjrno, int gnrno,int indexT,int indexM,int indexG,List<String> locFilter) throws Exception;
  List<Event> listMusiAppy(int no) throws Exception;//뮤지션모드 - 지원한 이벤트
  List<Event> listMusiPr(int no) throws Exception;//뮤지션모드 - 제안받은 이벤트
  int getEventCount(int no) throws Exception;//일반모드 > 추천탭 > 나에게 꼭 맞는 이벤트 리스트 - 이벤트 유무 확인
  int getAppyCount(int muNo, int eNo) throws Exception; /* 뮤지션 모드 > 이벤트 상세페이지 > 지원 활성여부 확인 */
  List<Event> MatchingEvent() throws Exception;
  List<Event> EventExpired() throws Exception;
}
