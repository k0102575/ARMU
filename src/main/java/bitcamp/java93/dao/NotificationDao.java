package bitcamp.java93.dao;

import java.util.List;

import bitcamp.java93.domain.Notification;

public interface NotificationDao {
  List<Notification> selectNotiList(int no);
}
