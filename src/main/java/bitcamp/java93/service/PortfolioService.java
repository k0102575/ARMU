package bitcamp.java93.service;

import java.util.List;

import bitcamp.java93.domain.Musician;

public interface PortfolioService {
  Musician get(int myNo, int muNo) throws Exception;
  List<Musician> getPortfolio(int no) throws Exception;
  Musician getIntroduce(int no) throws Exception;
  List<Musician> listReview(int no) throws Exception;
  Musician myInfo(int myNo) throws Exception;
  void changeMusiInfo(int no, Musician musician) throws Exception;
  
  void addSpec(int muno, Musician musician) throws Exception;
  Musician getSpec(int spno) throws Exception;
  void updateSpec(Musician musician) throws Exception;
  void deleteSpec(int spno) throws Exception;
}


