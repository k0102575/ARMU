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

  public List<Musician> listSurf() throws Exception {   
    return musicianDao.selectSurfList();
  }

  @Override
  public Musician getProfile(Member member) throws Exception {
    return musicianDao.selectOne(member);
  }

  @Override
  public List<Musician> listLocation() throws Exception {
    return musicianDao.musicianLocation();
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

  @Override
  public void updatePhoto(int no, String photoPath) throws Exception {
    HashMap<String,Object> valueMap = new HashMap<>();
  valueMap.put("musicianNo", no);
  valueMap.put("photoPath", photoPath);
    System.out.println(photoPath);
    musicianDao.updatePhoto(valueMap);
  }

  //  public void updatePhoto(Musician musician) throws Exception {
  //    musicianDao.getClass()Photo(musician.getNo()); // 강사의 모든 사진을 지운다.
  //    this.insertPhoto(teacher.getNo(), teacher.getPhotoList()); // 강사 사진 추가
  //  }



}







