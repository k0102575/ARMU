package bitcamp.java93.service.impl;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import bitcamp.java93.dao.CategoryDao;
import bitcamp.java93.domain.Category;
import bitcamp.java93.domain.Musician;
import bitcamp.java93.service.CategoryService;

@Service
public class CategoryServiceImpl implements CategoryService {

  @Autowired
  CategoryDao categoryDao;

  public List<Category> listTheme() throws Exception {
    return categoryDao.selectListTheme();
  }

  public List<Category> listMajor() throws Exception {
    return categoryDao.selectListMajor();
  }

  public List<Category> listGenre() throws Exception {
    return categoryDao.selectListGenre();
  }

  public List<Category> listLocationType() throws Exception {
    return categoryDao.selectListLocationType();
  }

  public List<Category> listLocation(int no) throws Exception {
    return categoryDao.selectListLocation(no);
  }

  public List<Category> listTop10() throws Exception {
    return categoryDao.selectTop10CategoryList();
  }

  public void addMusiCategory(Musician musician) throws Exception {
    this.MusicianCategory(musician.getNo(), musician.getThemeList(), musician.getMajorList(), musician.getGenreList(), musician.getLocationList());
  }

  public void changeMusiCategory(int no, Musician musician) throws Exception {
    this.MusicianCategory(no, musician.getThemeList(), musician.getMajorList(), musician.getGenreList(), musician.getLocationList());
  }

  public void deleteMusiCategory(int no) throws Exception {
    categoryDao.deleteMusiTheme(no);
    categoryDao.deleteMusiMajor(no);
    categoryDao.deleteMusiGenre(no);
    categoryDao.deleteMusilocation(no);
  }

  private void MusicianCategory(int musiNo, List<String> themeList, List<String> majorList, List<String> genreList, List<String> locationList) {
    HashMap<String,Object> themeMap = new HashMap<>();
    HashMap<String,Object> majorMap = new HashMap<>();
    HashMap<String,Object> genreMap = new HashMap<>();
    HashMap<String,Object> locationMap = new HashMap<>();

    themeMap.put("musiNo", musiNo);
    majorMap.put("musiNo", musiNo);
    genreMap.put("musiNo", musiNo);
    locationMap.put("musiNo", musiNo);

    for (String musiTheme : themeList) {
      themeMap.put("musiTheme", musiTheme);
      categoryDao.themeMusi(themeMap);
    }

    for (String musiMajor : majorList) {
      majorMap.put("musiMajor", musiMajor);
      categoryDao.majorMusi(majorMap);
    }

    for (String musiGenre : genreList) {
      genreMap.put("musiGenre", musiGenre);
      categoryDao.genreMusi(genreMap);
    }

    for (String musiLocation : locationList) {
      locationMap.put("musiLocation", musiLocation);
      categoryDao.locationMusi(locationMap);
    }
  }

  public List<Category> listEventMajor() throws Exception {
    return categoryDao.selectListEventMajor();
  }

  public List<Category> listEventGenre() throws Exception {
    return categoryDao.selectListEventGenre();
  }

  public List<Category> listEventTheme() throws Exception {
    return categoryDao.selectListEventTheme();
  }
  
  public Category getEventCategory(int eno) throws Exception {
    return categoryDao.selectEventCategory(eno);
  }
  
  
}
