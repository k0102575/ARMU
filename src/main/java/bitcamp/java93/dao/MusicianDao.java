package bitcamp.java93.dao;

import java.util.HashMap;
import java.util.List;

import bitcamp.java93.domain.Member;
import bitcamp.java93.domain.Musician;

public interface MusicianDao {
  List<Musician> selectRecommandList(Member member);
  List<Musician> selectFavorList(int no);
  Musician selectMusiFavorCount(int no);
  void favorMusiRemove(HashMap<String,Object> valueMap);
  void favorMusiAdd(HashMap<String,Object> valueMap);
  List<Musician> surfList(int no);
  List<Musician> selectSurfListFilter(HashMap<String,Object> valueMap);
  List<Musician> selectSurfListGenderFilter(HashMap<String,Object> valueMap);
  Musician selectMusi(HashMap<String, Object> valueMap);
  List<Musician> selectMusiReview(int no);
  Musician selectMusiIntroduce(int no);
  Musician selectMusiPortfolio(int no);
  List<Musician> musicianLocation();
  List<Musician> musicianSearch(HashMap<String,Object> valueMap);
//  int updatePhoto(HashMap<String, Object> valueMap);
//  List<String> selectPhotoList(int memberNo);
//  void insertPhoto(Map<String,Object> valueMap);
 
//  void deletePhoto(int musicianNo);
}
