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

  public List<Musician> listRecommand(Member member) throws Exception {   
    return musicianDao.selectRecommandList(member);
  }
  
  public List<Musician> listFavor(int no) throws Exception {   
    return musicianDao.selectFavorList(no);
  }
  
  @Override
  public Musician favorCount(int no) throws Exception {
    return musicianDao.selectMusiFavorCount(no);
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
    musicianDao.favorMusiAdd(valueMap);
  }

  public List<Musician> listSurf(int no) throws Exception {   
    return musicianDao.surfList(no);
  }
  
  public List<Musician> listSurfFilter(int minAge, int maxAge) throws Exception {   
    HashMap<String,Object> valueMap = new HashMap<>();
    valueMap.put("minAge", minAge);
    valueMap.put("maxAge", maxAge);
    return musicianDao.selectSurfListFilter(valueMap);
  }
  
  public List<Musician> listSurfGenderFilter(String gender, int minAge, int maxAge) throws Exception {   
    HashMap<String,Object> valueMap = new HashMap<>();
    valueMap.put("gender", gender);
    valueMap.put("minAge", minAge);
    valueMap.put("maxAge", maxAge);
    return musicianDao.selectSurfListGenderFilter(valueMap);
  }

//  @Override
//  public Musician getProfile(Member member) throws Exception {
//    return musicianDao.selectOne(member);
//  }
  
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
  public List<Musician> listLocation() throws Exception {
    return musicianDao.musicianLocation();
  }
  
  @Override
  public List<Musician> search(String location) throws Exception {
    return musicianDao.musicianSearch(location);
  }

//  private void insertPhoto(int musicianNo, String photoPath) {
//    if (photoPath == null)
//      return;
//
//    HashMap<String,Object> valueMap = new HashMap<>();
//    valueMap.put("musicianNo", musicianNo);
//    valueMap.put("photoPath", photoPath);
//    musicianDao.insertPhoto(valueMap);
//  }

//  @Override
//  public void updatePhoto(int no, String photoPath) throws Exception {
//    HashMap<String,Object> valueMap = new HashMap<>();
//  valueMap.put("memberNo", no);
//  valueMap.put("photoPath", photoPath);
//    System.out.println(photoPath);
//    memberDao.updatePhoto(valueMap);
//  }

  //  public void updatePhoto(Musician musician) throws Exception {
  //    musicianDao.getClass()Photo(musician.getNo()); // 강사의 모든 사진을 지운다.
  //    this.insertPhoto(teacher.getNo(), teacher.getPhotoList()); // 강사 사진 추가
  //  }



}







