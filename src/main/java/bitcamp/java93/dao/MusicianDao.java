package bitcamp.java93.dao;

import java.util.HashMap;
import java.util.List;

import bitcamp.java93.domain.Member;
import bitcamp.java93.domain.Musician;

public interface MusicianDao {
  List<Musician> selectRecommandList(int no);
  List<Musician> selectBestReviewList();
  List<Musician> selectPopularList();
  List<Musician> selectFavorList(int no);
  void favorMusiRemove(HashMap<String,Object> valueMap);
  void favorMusiAdd(HashMap<String,Object> valueMap);
  List<Musician> surfList(int no);
  List<Musician> selectSurfListFilter(HashMap<String,Object> valueMap);
  Musician selectMusi(HashMap<String, Object> valueMap);
  Musician myMusiInfo(int myNo);
  List<Musician> selectMusiReview(int no);
  Musician selectMusiIntroduce(int no);
  List<Musician> selectMusiPortfolio(int no);
  Musician selectSpec(int spno);
  void updateSpecInfo(Musician musician);
  int insertSpecInfo(HashMap<String, Object> valueMap);
  void deleteSpecPath(int spNo);
  void insertSpecPath(HashMap<String, Object> pathMap);
  List<Musician> musicianSearch(HashMap<String,Object> valueMap);
  int insert(Musician musician);
  void updateNick(Musician musician);
  void updateInfo(HashMap<String, Object> valueMap);
  Musician selectMusiNo(int no);
  int delete(int no);
}
