package bitcamp.java93.service;

import java.util.List;

import bitcamp.java93.domain.Event;

public interface EventService {
  List<Event> listOngoing() throws Exception;
  void add(Event event) throws Exception;
  void RegistEventCategory(Event event) throws Exception;
}
