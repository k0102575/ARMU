package bitcamp.java93.service;

import java.util.List;

import bitcamp.java93.domain.Member;
import bitcamp.java93.domain.Musician;

public interface MusicianService {
  List<Musician> listRecommand(Member member) throws Exception;
  List<Musician> listSurf() throws Exception;
  List<Musician> listSurfFilter(int minAge, int maxAge) throws Exception;
  List<Musician> listSurfGenderFilter(String gender, int minAge, int maxAge) throws Exception;
  Musician getProfile(Member member) throws Exception;
  Musician get(int no) throws Exception;
  Musician getReview(int no) throws Exception;
  Musician reviewCount(int no) throws Exception;
  Musician getIntroduce(int no) throws Exception;
  Musician getPortfolio(int no) throws Exception;
  List<Musician> listLocation() throws Exception;
  void updatePhoto(int no, String photoPath) throws Exception;
}


