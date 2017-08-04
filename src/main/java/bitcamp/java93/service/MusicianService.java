package bitcamp.java93.service;

import java.util.List;

import bitcamp.java93.domain.Member;
import bitcamp.java93.domain.Musician;

public interface MusicianService {
  List<Musician> listRecommand(int no) throws Exception;
  List<Musician> listBestReview() throws Exception;
  List<Musician> listPopular() throws Exception;
  List<Musician> listFavor(int no) throws Exception;
  void favorRemove(int myNo, int muNo) throws Exception;
  void favorAdd(int myNo, int muNo) throws Exception;
  List<Musician> listSurf(int no) throws Exception;
  List<Musician> listSurfFilter(String gender, int minAge, int maxAge) throws Exception;
  Musician get(int myNo, int muNo) throws Exception;
  List<Musician> listReview(int no) throws Exception;
  Musician getIntroduce(int no) throws Exception;
  Musician getPortfolio(int no) throws Exception;
  List<Musician> searchMusician(int no, String location) throws Exception;
//  void updatePhoto(int no, String photoPath) throws Exception;
  void updateNick(Member member) throws Exception;
}


