package bitcamp.java93.service;

import java.util.List;
import java.util.Map;

import bitcamp.java93.domain.Chat;

public interface ChatService {
  List<Chat> listMusiChat(int no) throws Exception;
  List<Chat> listChat(Map<String, Object> info) throws Exception;
}
