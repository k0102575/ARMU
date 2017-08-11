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
  Musician getMyPortfolio(int myNo) throws Exception;
  List<Musician> listReview(int no) throws Exception;
  Musician getIntroduce(int no) throws Exception;
  List<Musician> getPortfolio(int no) throws Exception;
  Musician getSpec(int spno) throws Exception;
  void updateSpec(Musician musician) throws Exception;
  void addSpec(int muno, Musician musician) throws Exception;
  List<Musician> searchMusician(int no, int locno, int mjrno, int gnrno,int indexL,int indexM,int indexG, String gender, int minAge, int maxAge) throws Exception;
  void add(Musician musician) throws Exception;
  /*  void musicianAddHope(Musician musician) throws Exception;*/
//  void updatePhoto(int no, String photoPath) throws Exception;
  void updateNick(Musician musician) throws Exception;
  void changeMusiInfo(int no, Musician musician) throws Exception;
  Musician getByMuno(int no) throws Exception;
  void remove(int no) throws Exception;
}


