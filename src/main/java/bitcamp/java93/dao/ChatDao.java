package bitcamp.java93.dao;

import java.util.List;
import java.util.Map;

import bitcamp.java93.domain.Chat;

public interface ChatDao {
  List<Chat> selectList(int no);
  List<Chat> selectMusiList(int no);
  void insertFirstChat(Map<String, Object> valueMap);
  int selectUnread(int no);
  int selectMusiUnread(int no);
  
//  String selectPhoto(int no);
//  String selectMusiPhoto(int no);
//  List<Chat> selectChatList(Map<String, Object> info);
//  List<Chat> selectMusiChatList(Map<String, Object> info);
//  int insertChat(Chat chat);
}
