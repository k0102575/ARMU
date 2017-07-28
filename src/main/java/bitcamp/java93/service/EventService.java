package bitcamp.java93.service;

import java.util.List;

import bitcamp.java93.domain.Category;
import bitcamp.java93.domain.Event;

public interface EventService {
  List<Event> listOngoing() throws Exception;
  List<Category> listTheme() throws Exception;
  List<Category> listMajor() throws Exception;
  List<Category> listGenre() throws Exception;
  List<Category> listLocationType() throws Exception;
  List<Category> listLocation(int no) throws Exception;
  void add(Event event) throws Exception;
  void addTheme(Event event) throws Exception;
}
