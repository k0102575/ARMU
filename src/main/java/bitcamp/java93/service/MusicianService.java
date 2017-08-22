package bitcamp.java93.service;

import java.util.HashMap;
import java.util.List;

import bitcamp.java93.domain.Musician;

public interface MusicianService {
  List<Musician> listRecommand(int no) throws Exception;
  List<Musician> listFavor(int no) throws Exception;
  void favorRemove(int myNo, int muNo) throws Exception;
  void favorAdd(int myNo, int muNo) throws Exception;
  List<Musician> listSurf(int no) throws Exception;
  List<Musician> listSurfFilter(String gender, int minAge, int maxAge) throws Exception;
  List<Musician> searchMusician(int no, int locno, int mjrno, int gnrno,int indexL,int indexM,int indexG, String gender, int minAge, int maxAge) throws Exception;
  List<Musician> listBestReview() throws Exception;
  List<Musician> listPopular() throws Exception;
  List<Musician> listSearchResult(String search) throws Exception;
  void add(Musician musician) throws Exception;
  void updateNick(Musician musician) throws Exception;
  Musician getByMuno(int no) throws Exception;
  void remove(int no) throws Exception;
  List<Musician> listPr(HashMap<String, Object> map) throws Exception;
  List<Musician> listAppy(HashMap<String, Object> map) throws Exception;
  Musician myEventMatchMusician(int eNo, int myNo) throws Exception; // 내 이벤트 에 매칭된 뮤지션 정보 가져오기
}


