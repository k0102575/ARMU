package bitcamp.java93.dao;

import java.util.HashMap;
import java.util.List;

import bitcamp.java93.domain.Musician;

public interface PortfolioDao {
  Musician selectMusi(HashMap<String, Object> valueMap);
  List<Musician> selectMusiPortfolio(int no);
  Musician selectMusiIntroduce(int no);
  List<Musician> selectMusiReview(int no);
  Musician myMusiInfo(int myNo);
  void updateInfo(HashMap<String, Object> valueMap);
  int insertSpecInfo(HashMap<String, Object> valueMap);
  void insertSpecPath(HashMap<String, Object> pathMap);
  Musician selectSpec(int spno);
  void updateSpecInfo(Musician musician);
  void deleteSpecPath(int spNo);
  void deleteSpec(int spno);
}
