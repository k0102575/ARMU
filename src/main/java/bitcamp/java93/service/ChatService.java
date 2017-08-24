package bitcamp.java93.service;

import java.util.List;

import bitcamp.java93.domain.Chat;

public interface ChatService {
  List<Chat> list(int no) throws Exception;
  List<Chat> listMusi(int no) throws Exception;
  int getUnread(int no) throws Exception;
  int getMusiUnread(int no) throws Exception;
//  String getPhoto(int no) throws Exception;
//  String getMusiPhoto(int no) throws Exception;
//  List<Chat> listChat(Map<String, Object> info) throws Exception;
//  List<Chat> listMusiChat(Map<String, Object> info) throws Exception;
//  int addChat(Chat chat) throws Exception;
}
