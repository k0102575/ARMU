package bitcamp.java93.service;

import java.util.List;

import bitcamp.java93.domain.Chat;

public interface ChatService {
  List<Chat> listMusiChat(int no) throws Exception;
  List<Chat> listChat(int no) throws Exception;
}
