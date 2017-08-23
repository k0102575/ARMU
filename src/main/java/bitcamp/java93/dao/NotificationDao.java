package bitcamp.java93.dao;

import java.util.List;
import java.util.Map;

import bitcamp.java93.domain.Notification;

public interface NotificationDao {
  List<Notification> selectNotiList(int no);
  List<Notification> selectMusiNotiList(int no);
  void insertEventPrNoti(Map<String,Object> valueMap); // 1.뮤지션에게 일반인이 pr
  void rejectEventPrNoti(Map<String,Object> valueMap); // 2.뮤지션이 pr 거절
  void acceptEventPrNoti(Map<String,Object> valueMap); // 3. 뮤지션이 pr 수락
  void insertEventAppyNoti(Map<String,Object> valueMap); // 4.일반인에게 뮤지션이 appy
  void rejectEventAppyNoti(Map<String,Object> valueMap); // 5.일반인이 appy 거절
  void insertEventMtcNoti(Map<String,Object> valueMap); // 6.일반인이 매칭 확정
  void insertEventExpiredNoti(Map<String,Object> valueMap); // 7.미확정 이벤트 당일 지남
  void insertEventTodayNoti(Map<String,Object> valueMap); // 8.확정 이벤트 당일
  void insertEventEditNoti(Map<String,Object> valueMap); // 9.뮤지션에게 이벤트 편집
  void insertEventDeleteNoti(Map<String,Object> valueMap); // 10.뮤지션에게 이벤트 삭제
  void deleteEventPrNoti(int prno); // 11.일반인이 pr 취소
  void deleteEventAppyNoti(int appyno); // 12.뮤지션이 appy 취소시 있던 noti 삭제
  void insertEventRevNoti(Map<String,Object> valueMap); // 13.뮤지션에게 리뷰 입력
}
