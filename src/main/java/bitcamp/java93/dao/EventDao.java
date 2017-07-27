package bitcamp.java93.dao;

import java.util.List;

import bitcamp.java93.domain.Category;
import bitcamp.java93.domain.Event;

public interface EventDao {
  List<Event> selectOngoingList();
  List<Category> selectListTheme();
  List<Category> selectListMajor();
  List<Category> selectListGenre();
  List<Category> selectListLocationType();
  List<Category> selectListLocation(int no);
}
