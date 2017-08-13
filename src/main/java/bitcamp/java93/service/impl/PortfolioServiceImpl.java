package bitcamp.java93.service.impl;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import bitcamp.java93.dao.PortfolioDao;
import bitcamp.java93.domain.Musician;
import bitcamp.java93.service.PortfolioService;

@Service
public class PortfolioServiceImpl implements PortfolioService {
  @Autowired
  PortfolioDao portfolioDao;

  @Override
  public Musician get(int myNo, int muNo) throws Exception {
    HashMap<String,Object> valueMap = new HashMap<>();
    valueMap.put("myNo", myNo);
    valueMap.put("muNo", muNo);
    return portfolioDao.selectMusi(valueMap);
  }
  
  @Override
  public List<Musician> getPortfolio(int no) throws Exception {
    return portfolioDao.selectMusiPortfolio(no);
  }
  
  @Override
  public Musician getIntroduce(int no) throws Exception {
    return portfolioDao.selectMusiIntroduce(no);
  }
  
  @Override
  public List<Musician> listReview(int no) throws Exception {
    return portfolioDao.selectMusiReview(no);
  }
  
  @Override
  public Musician myInfo(int myNo) throws Exception {
    return portfolioDao.myMusiInfo(myNo);
  }
  
  public void changeMusiInfo(int no, Musician musician) throws Exception {
    HashMap<String,Object> valueMap = new HashMap<>();
    valueMap.put("no", no);
    valueMap.put("homepage", musician.getHomepage());
    valueMap.put("intro", musician.getIntro());
    
    portfolioDao.updateInfo(valueMap);
  }
  
  @Override
  public void addSpec(int muno, Musician musician) throws Exception {
    HashMap<String,Object> valueMap = new HashMap<>();
    valueMap.put("muno", muno);
    valueMap.put("spdt", musician.getSpecDate());
    valueMap.put("dscp", musician.getSpecDscp());
    portfolioDao.insertSpecInfo(valueMap);
    
    HashMap<String,Object> photoMap = new HashMap<>();
    HashMap<String,Object> movieMap = new HashMap<>();
    
    photoMap.put("spno", valueMap.get("spno"));
    movieMap.put("spno", valueMap.get("spno"));
    photoMap.put("isimg", "Y");
    movieMap.put("isimg", "N");
    
    if(musician.getPhotoList().get(0) != "") {
      for (String photoList : musician.getPhotoList()) {
        photoMap.put("specPath", photoList);
        portfolioDao.insertSpecPath(photoMap);
      }
    }
    
    if(musician.getMovieList().get(0) != "") {
      for (String movieList : musician.getMovieList()) {
        movieMap.put("specPath", movieList);
        portfolioDao.insertSpecPath(movieMap);
      }
    }
  }
  
  @Override
  public Musician getSpec(int spno) throws Exception {
    return portfolioDao.selectSpec(spno);
  }
  
  @Override
  public void updateSpec(Musician musician) throws Exception {
    portfolioDao.updateSpecInfo(musician);
    
    HashMap<String,Object> photoMap = new HashMap<>();
    HashMap<String,Object> movieMap = new HashMap<>();
    
    photoMap.put("spno", musician.getSpno());
    photoMap.put("isimg", "Y");
    
    movieMap.put("spno", musician.getSpno());
    movieMap.put("isimg", "N");
    
    portfolioDao.deleteSpecPath(musician.getSpno());
    if(musician.getPhotoList().get(0) != "") {
      for (String photoList : musician.getPhotoList()) {
        photoMap.put("specPath", photoList);
        portfolioDao.insertSpecPath(photoMap);
      }
    }
    
    if(musician.getMovieList().get(0) != "") {
      for (String movieList : musician.getMovieList()) {
        movieMap.put("specPath", movieList);
        portfolioDao.insertSpecPath(movieMap);
      }
    }
  }
  
  @Override
  public void deleteSpec(int spno) throws Exception {
    portfolioDao.deleteSpecPath(spno);
    portfolioDao.deleteSpec(spno);
  }
  
}







