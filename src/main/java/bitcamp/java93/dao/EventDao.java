package bitcamp.java93.dao;

import java.util.List;
import java.util.Map;

import bitcamp.java93.domain.Event;

public interface EventDao {
  List<Event> selectOngoingList();
  int insert(Event event);
  int insertTheme(Map<String,Object> themeMap);
  int insertMajor(Map<String,Object> majorMap);
  int insertGenre(Map<String,Object> genreMap);
  int insertReherse(Event event);
}
