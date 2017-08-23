package bitcamp.java93.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import bitcamp.java93.domain.Notification;

public interface NotificationDao {
  List<Notification> selectNotiList(int no);
  List<Notification> selectMusiNotiList(int no);
  int insertEventPrNoti(Map<String,Object> valueMap); // 뮤지션에게 일반인이 pr
  int insertEventAppyNoti(Map<String,Object> valueMap); // 일반인에게 뮤지션이 appy
  int deleteEventAppyNoti(Map<String,Object> valueMap); // 뮤지션이 appy 취소시 있던 noti 삭제
  void insertEventEditNoti(HashMap<String, Object> valueMap); // 뮤지션에게 이벤트 편집
  void insertEventDeleteNoti(HashMap<String, Object> valueMap); // 뮤지션에게 이벤트 삭제
  void insertEventRevNoti(HashMap<String, Object> valueMap);  // 뮤지션에게 리뷰 작성
}
