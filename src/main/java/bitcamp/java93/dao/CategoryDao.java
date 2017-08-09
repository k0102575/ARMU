package bitcamp.java93.dao;

import java.util.HashMap;
import java.util.List;

import bitcamp.java93.domain.Category;

public interface CategoryDao {
  List<Category> selectListTheme();
  List<Category> selectListMajor();
  List<Category> selectListGenre();
  List<Category> selectListLocationType();
  List<Category> selectListLocation(int no);
  List<Category> selectTop10CategoryList();
  void themeMusi(HashMap<String, Object> themeMap);
  void majorMusi(HashMap<String, Object> majorMap);
  void genreMusi(HashMap<String, Object> genreMap);
  void locationMusi(HashMap<String, Object> locationMap);
  void deleteMusiTheme(int no);
  void deleteMusiMajor(int no);
  void deleteMusiGenre(int no);
  void deleteMusilocation(int no);
}
