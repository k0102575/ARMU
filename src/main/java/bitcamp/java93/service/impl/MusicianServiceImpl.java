package bitcamp.java93.service.impl;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import bitcamp.java93.dao.MemberDao;
import bitcamp.java93.dao.MusicianDao;
import bitcamp.java93.domain.Musician;
import bitcamp.java93.service.MusicianService;

@Service
public class MusicianServiceImpl implements MusicianService {
  @Autowired
  MemberDao memberDao;

  @Autowired
  MusicianDao musicianDao;

  public List<Musician> listRecommand(int no) throws Exception {   
    return musicianDao.selectRecommandList(no);
  }
  
  public List<Musician> listFavor(int no) throws Exception {   
    return musicianDao.selectFavorList(no);
  }
  
  @Override
  public void favorRemove(int myNo, int muNo) throws Exception {
    HashMap<String,Object> valueMap = new HashMap<>();
    valueMap.put("myNo", myNo);
    valueMap.put("muNo", muNo);
    musicianDao.favorMusiRemove(valueMap);
  }
  
  @Override
  public void favorAdd(int myNo, int muNo) throws Exception {
    HashMap<String,Object> valueMap = new HashMap<>();
    valueMap.put("myNo", myNo);
    valueMap.put("muNo", muNo);
    System.out.println(valueMap);
       musicianDao.favorMusiAdd(valueMap);
  }

  public List<Musician> listSurf(int no) throws Exception {   
    return musicianDao.surfList(no);
  }
  
  public List<Musician> listSurfFilter(String gender, int minAge, int maxAge) throws Exception {   
    HashMap<String,Object> valueMap = new HashMap<>();
    valueMap.put("gender", gender);
    valueMap.put("minAge", minAge);
    valueMap.put("maxAge", maxAge);
    System.out.println(valueMap);
    return musicianDao.selectSurfListFilter(valueMap);
  }
  
  @Override
  public List<Musician> searchMusician(int no,int locno, int mjrno, int gnrno, int indexL,int indexM,int indexG,String gender, int minAge, int maxAge) throws Exception {
    HashMap<String,Object> valueMap = new HashMap<>();
    valueMap.put("no", no);
    valueMap.put("locno", locno);
    valueMap.put("mjrno", mjrno);
    valueMap.put("gnrno", gnrno);
    valueMap.put("indexL", indexL);
    valueMap.put("indexM", indexM);
    valueMap.put("indexG", indexG);
    valueMap.put("gender", gender);
    valueMap.put("minAge", minAge);
    valueMap.put("maxAge", maxAge);
    return musicianDao.musicianSearch(valueMap);
  }

  public List<Musician> listBestReview() throws Exception {
    return musicianDao.selectBestReviewList();
  }

  public List<Musician> listPopular() throws Exception {
    return musicianDao.selectPopularList();
  }
  
  
  public void add(Musician musician) throws Exception {
    musicianDao.insert(musician);
  }
  
  public void updateNick(Musician musician) throws Exception {
    musicianDao.updateNick(musician);
  }
  
  public Musician getByMuno(int no) throws Exception {
    return musicianDao.selectMusiNo(no);
  }

  public void remove(int no) throws Exception {
    int count = musicianDao.delete(no);
    if (count < 1) {
      throw new Exception("회원 정보가 없습니다.");
    }
    
    try {
      count = memberDao.delete(no);
    } catch (Exception e) {}
  }
  
  public List<Musician> listSearchResult(String search) throws Exception {
    System.out.println(search);
    return musicianDao.selectSearchResultList(search);
  }
}







