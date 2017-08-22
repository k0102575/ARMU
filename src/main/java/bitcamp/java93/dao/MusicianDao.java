package bitcamp.java93.dao;

import java.util.HashMap;
import java.util.List;

import bitcamp.java93.domain.Musician;

public interface MusicianDao {
  List<Musician> selectRecommandList(int no);
  List<Musician> selectFavorList(int no);
  void favorMusiRemove(HashMap<String,Object> valueMap);
  void favorMusiAdd(HashMap<String,Object> valueMap);
  List<Musician> surfList(int no);
  List<Musician> selectSurfListFilter(HashMap<String,Object> valueMap);
  List<Musician> musicianSearch(HashMap<String,Object> valueMap);
  List<Musician> selectBestReviewList();
  List<Musician> selectPopularList();
  List<Musician> selectSearchResultList(String search);
  int insert(Musician musician);
  void updateNick(Musician musician);
  Musician selectMusiNo(int no);
  int delete(int no);
  List<Musician> selectPrList(HashMap<String,Object> valueMap);
  List<Musician> selectAppyList(HashMap<String,Object> valueMap);
  Musician myEventAppyList(int eNo);
  Musician myEventPrList(int eNo);
}
