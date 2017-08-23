package bitcamp.java93.service;

import java.util.HashMap;
import java.util.List;

import bitcamp.java93.domain.Event;

public interface EventService {
  List<Event> listOngoing() throws Exception;//일반모드 > 나의이벤트 > 진행중 이벤트 리스트
  void add(Event event) throws Exception; // 일반모드 > 이벤트 등록하기 > 이벤트 등록
  void update(Event event) throws Exception; // 이벤트 변경 뮤지션 지원 상태 변경, 홍보 상태 변경 및 변경 메시지 발송
  void delete(int eno) throws Exception; // 이벤트 삭제 뮤지션 지원 상태 변경, 홍보 상태 변경 및 삭제 메시지 발송
  void deleteEventReherse(int eno) throws Exception; // 이벤트 리허설 삭제
  void registEventReherse(Event event) throws Exception;// 이벤트 리허설 추가
  List<Event> listRecommand(int no) throws Exception;//뮤지션모드 > 추천탭 > 나에게 꼭 맞는 이벤트 리스트
  List<Event> listRecent(int no) throws Exception;//뮤지션모드 > 추천탭 > 최근 이벤트 리스트
  List<Event> prCheckEvent(int myNo, int muNo) throws Exception; // 매칭요청하기 > 이벤트 목록 가져오기
  void prEvent(int muNo, int eNo) throws Exception; // 일반모드 > 뮤지션 상세페이지 > 매칭 요청하기
  void prUpdate(int muNo, int eNo, int prNo) throws Exception; // 일반모드 > 뮤지션 상세페이지 > 홍보 상태 변경
  void requestEvent(int muNo, int eNo) throws Exception; // 뮤지션 모드 > 이벤트 상세페이지 > 뮤지션 지원 추가
  void requestEventCheck(int muNo, int eNo, int appyNo) throws Exception; // 뮤지션 모드 > 이벤트 상세페이지 > 뮤지션 지원 활성"Y"변경
  void requestEventCancel(int muNo, int eNo) throws Exception; // 뮤지션 모드 > 이벤트 상세페이지 > 뮤지션 지원 활성"N"변경
  List<Event> listSurf() throws Exception;
  List<Event> listSearchResult(String search) throws Exception;
  List<Event> listRecruiting(int no) throws Exception;//나의이벤트 > 모집중 이벤트 리스트
  String rejectAppy(HashMap<String,Object> map) throws Exception;//일반인이 지원(APPY) 거절
  String decideMatch(HashMap<String,Object> map) throws Exception;//일반인이 매칭 확정하기
  String cancelPr(HashMap<String,Object> map) throws Exception;//일반인이 홍보(PR) 취소
  List<Event> listOngoing(int no) throws Exception;//나의이벤트 > 진행중 이벤트 리스트
  List<Event> listEnd(int no) throws Exception;//나의이벤트 > 종료 이벤트 리스트
  List<Event> listMusiOngoing(int no) throws Exception;//뮤지션모드 - 매칭이벤트 > 진행중 이벤트 리스트
  List<Event> listMusiEnd(int no) throws Exception;//뮤지션모드 - 매칭이벤트 > 종료 이벤트 리스트
  Event detail(int eNo, int muNo) throws Exception;
  Event myEventDetail(int eNo) throws Exception;
  List<Event> searchEvent(int no, int thmno, int mjrno, int gnrno,int indexT,int indexM,int indexG,List<String> locFilter) throws Exception;
  List<Event> listMusiAppy(int no) throws Exception;//뮤지션모드 - 지원한 이벤트
  List<Event> listMusiPr(int no) throws Exception;//뮤지션모드 - 제안받은 이벤트
  int getEventCount(int no) throws Exception;//일반모드 > 추천탭 > 나에게 꼭 맞는 이벤트 리스트 - 이벤트 유무 확인
  int getAppyCount(int muNo, int eNo) throws Exception; /* 뮤지션 모드 > 이벤트 상세페이지 > 지원 활성여부 확인 */
  void updateReview(Event event, int muno) throws Exception; // 일반모드 > 이벤트 상세페이지 > 종료 - 리뷰 추가
  List<Event> listMatchingEvent() throws Exception;
  String rejectPr(HashMap<String, Object> valueMap) throws Exception;//2. 뮤지션이 홍보(PR) 거절하기
  String acceptPr(HashMap<String, Object> valueMap) throws Exception;//3. 뮤지션이 홍보(PR) 수락하기
}
