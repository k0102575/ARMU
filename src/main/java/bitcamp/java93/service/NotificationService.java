package bitcamp.java93.service;

import java.util.List;

import bitcamp.java93.domain.Notification;

public interface NotificationService {
  List<Notification> listNoti(int no) throws Exception;
}


