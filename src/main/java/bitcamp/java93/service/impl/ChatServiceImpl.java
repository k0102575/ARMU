package bitcamp.java93.service.impl;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import bitcamp.java93.dao.ChatDao;
import bitcamp.java93.domain.Chat;
import bitcamp.java93.service.ChatService;

@Service
public class ChatServiceImpl implements ChatService {
 
  @Autowired
  ChatDao chatDao;

  public List<Chat> list(int no) throws Exception {
    return chatDao.selectList(no);
  }
  
  public List<Chat> listMusi(int no) throws Exception {
    return chatDao.selectMusiList(no);
  }
//  
//  public List<Chat> listChat(Map<String, Object> info) throws Exception {
//    return chatDao.selectChatList(info);
//  }
//  
//  public List<Chat> listMusiChat(Map<String, Object> info) throws Exception {
//    return chatDao.selectMusiChatList(info);
//  }
//
//  public int addChat(Chat chat) throws Exception {
//    return chatDao.insertChat(chat);
//  }

  @Override
  public int getUnread(int no) throws Exception {
    return chatDao.selectUnread(no);
  }

  @Override
  public int getMusiUnread(int no) throws Exception {
    return chatDao.selectMusiUnread(no);
  }

//  public String getPhoto(int no) throws Exception {
//    return chatDao.selectPhoto(no);
//  }
//
//  public String getMusiPhoto(int no) throws Exception {
//    return chatDao.selectMusiPhoto(no);
//  }
}

