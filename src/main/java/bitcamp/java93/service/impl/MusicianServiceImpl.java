package bitcamp.java93.service.impl;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import bitcamp.java93.dao.MemberDao;
import bitcamp.java93.dao.MusicianDao;
import bitcamp.java93.domain.Member;
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
  public Musician get(int myNo, int muNo) throws Exception {
    HashMap<String,Object> valueMap = new HashMap<>();
    valueMap.put("myNo", myNo);
    valueMap.put("muNo", muNo);
    return musicianDao.selectMusi(valueMap);
  }
  
  @Override
  public Musician getMyPortfolio(int myNo) throws Exception {
    return musicianDao.myMusiInfo(myNo);
  }
  
  @Override
  public List<Musician> listReview(int no) throws Exception {
    return musicianDao.selectMusiReview(no);
  }
  
  @Override
  public Musician getIntroduce(int no) throws Exception {
    return musicianDao.selectMusiIntroduce(no);
  }
  
  @Override
  public Musician getPortfolio(int no) throws Exception {
    return musicianDao.selectMusiPortfolio(no);
  }
  
  @Override
  public List<Musician> searchMusician(int no, String location, String major, String genre, int indexL,int indexM,int indexG) throws Exception {
    HashMap<String,Object> valueMap = new HashMap<>();
    valueMap.put("no", no);
    valueMap.put("location", location);
    valueMap.put("major", major);
    valueMap.put("genre", genre);
    valueMap.put("indexL", indexL);
    valueMap.put("indexM", indexM);
    valueMap.put("indexG", indexG);
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
  
  public void updateNick(Musician member) throws Exception {
    musicianDao.updateNick(member);
  }
  
  public void changeMusiInfo(int no, Musician musician) throws Exception {
    HashMap<String,Object> valueMap = new HashMap<>();
    valueMap.put("no", no);
    valueMap.put("homepage", musician.getHomepage());
    valueMap.put("intro", musician.getIntro());
    
    musicianDao.updateInfo(valueMap);
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
}







