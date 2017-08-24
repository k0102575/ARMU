package bitcamp.java93.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import bitcamp.java93.dao.NotificationDao;
import bitcamp.java93.domain.Notification;
import bitcamp.java93.service.NotificationService;

@Service
public class NotificationServiceImpl implements NotificationService {

  @Autowired 
  NotificationDao notificationDao;

  public List<Notification> listNoti(int no) throws Exception {
    return notificationDao.selectNotiList(no);
  }

  public List<Notification> listMusiNoti(int no) throws Exception {
    return notificationDao.selectMusiNotiList(no);
  }

  @Override
  public int getUnread(int no) throws Exception {
    return notificationDao.selectUnread(no);
  }

  @Override
  public int getMusiUnread(int no) throws Exception {
    return notificationDao.selectMusiUnread(no);
  }

  @Override
  public int setRead(int no) throws Exception {
    return notificationDao.updateRead(no);
  }
  
}

