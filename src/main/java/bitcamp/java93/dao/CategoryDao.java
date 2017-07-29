package bitcamp.java93.dao;

import java.util.List;

import bitcamp.java93.domain.Category;

public interface CategoryDao {
  List<Category> selectListTheme();
  List<Category> selectListMajor();
  List<Category> selectListGenre();
  List<Category> selectListLocationType();
  List<Category> selectListLocation(int no);
}
