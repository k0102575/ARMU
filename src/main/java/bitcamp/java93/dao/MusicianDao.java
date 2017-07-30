package bitcamp.java93.dao;

import java.util.HashMap;
import java.util.List;

import bitcamp.java93.domain.Member;
import bitcamp.java93.domain.Musician;

public interface MusicianDao {
  List<Musician> selectRecommandList(Member member);
  List<Musician> selectSurfList();
  Musician selectOne(Member member);
  Musician selectMusi(int no);
  Musician selectMusiReview(int no);
  Musician selectMusiReviewCount(int no);
  Musician selectMusiIntroduce(int no);
  List<Musician> musicianLocation();
  int updatePhoto(HashMap<String, Object> valueMap);
//  void insertPhoto(Map<String,Object> valueMap);
  List<String> selectPhotoList(int musicianNo);
//  void deletePhoto(int musicianNo);
}
