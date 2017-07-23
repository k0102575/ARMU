package bitcamp.java93.dao;

import java.util.List;

import bitcamp.java93.domain.Event;

public interface EventDao {
  List<Event> selectOngoingList();
}
