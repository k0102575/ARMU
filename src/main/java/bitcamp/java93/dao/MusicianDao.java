package bitcamp.java93.dao;

import java.util.List;

import bitcamp.java93.domain.Member;
import bitcamp.java93.domain.Musician;

public interface MusicianDao {
  List<Musician> selectRecommandList(Member member);
  List<Musician> selectSurfList();
  Musician selectOne();
  List<Musician> musicianLocation();
}
