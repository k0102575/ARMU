package bitcamp.java93.service;

import java.util.List;

import bitcamp.java93.domain.Notification;

public interface NotificationService {
  List<Notification> listNoti(int no) throws Exception;
  List<Notification> listMusiNoti(int no) throws Exception;
  int getUnread(int no) throws Exception;
  int getMusiUnread(int no) throws Exception;
  int setRead(int no) throws Exception;
}


