package bitcamp.java93.dao;

import java.util.List;

import bitcamp.java93.domain.Chat;

public interface ChatDao {
  List<Chat> selectList(int no);
  List<Chat> selectMusiList(int no);
  String selectPhoto(int no);
  String selectMusiPhoto(int no);
//  List<Chat> selectChatList(Map<String, Object> info);
//  List<Chat> selectMusiChatList(Map<String, Object> info);
//  int insertChat(Chat chat);
}
