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
  public List<Musician> searchMusician(int no, String location) throws Exception {
    HashMap<String,Object> valueMap = new HashMap<>();
    valueMap.put("no", no);
    valueMap.put("location", location);
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
  
  public  void RegistEventCategory(Musician musician) throws Exception {   
    this.registCategory(musician.getNo(), musician.getThemeList(), musician.getMajorList(), musician.getGenreList(), musician.getLocationList());
  }
  
  
  private void registCategory(int musiNo, List<String> themeList, List<String> majorList, List<String> genreList, List<String> locationList) {
    HashMap<String,Object> themeMap = new HashMap<>();
    HashMap<String,Object> majorMap = new HashMap<>();
    HashMap<String,Object> genreMap = new HashMap<>();
    HashMap<String,Object> locationMap = new HashMap<>();
    
    themeMap.put("musiNo", musiNo);
    majorMap.put("musiNo", musiNo);
    genreMap.put("musiNo", musiNo);
    locationMap.put("musiNo", musiNo);
    /*
    for (String musiTheme : themeList) {
      themeMap.put("musiTheme", musiTheme);
      musicianDao.hopeTheme(themeMap);
    }
    
    for (String musiMajor : majorList) {
      majorMap.put("musiMajor", musiMajor);
      musicianDao.hopeMajor(majorMap);
    }
    
    for (String musiGenre : genreList) {
      genreMap.put("musiGenre", musiGenre);
      musicianDao.hopeGenre(genreMap);
    }
    
    for (String musiLocation : locationList) {
      genreMap.put("musiLocation", musiLocation);
      musicianDao.hopeLocation(genreMap);
    }*/
  }
  public void updateNick(Member member) throws Exception {
    musicianDao.updateNick(member);
  }

}







