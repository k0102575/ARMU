package bitcamp.java93.service.impl;

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
  public Musician getProfile() throws Exception {
    return musicianDao.selectOne();
  }

  @Override
  public List<Musician> listLocation() throws Exception {
    return musicianDao.musicianLocation();
  }
  
  
  
}







