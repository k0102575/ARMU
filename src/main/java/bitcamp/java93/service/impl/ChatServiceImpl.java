package bitcamp.java93.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import bitcamp.java93.dao.ChatDao;
import bitcamp.java93.domain.Chat;
import bitcamp.java93.service.ChatService;

@Service
public class ChatServiceImpl implements ChatService {
 
  @Autowired
  ChatDao chatDao;

  public List<Chat> listMusiChat(int no) throws Exception {
    return chatDao.selectMusiChatList(no);
  }
  
  public List<Chat> listChat(int no) throws Exception {
    return chatDao.selectMusiChatList(no);
  }
  
  
}

