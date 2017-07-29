package bitcamp.java93.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import bitcamp.java93.dao.CategoryDao;
import bitcamp.java93.domain.Category;
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
  
  
}

