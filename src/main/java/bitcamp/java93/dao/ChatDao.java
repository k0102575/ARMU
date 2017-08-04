package bitcamp.java93.dao;

import java.util.List;
import java.util.Map;

import bitcamp.java93.domain.Chat;

public interface ChatDao {
  List<Chat> selectList(int no);
  List<Chat> selectChatList(Map<String, Object> info);
  List<Chat> selectMusiChatList(int no);
}
