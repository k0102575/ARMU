package bitcamp.java93.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import bitcamp.java93.domain.Category;

public interface CategoryDao {
  List<Category> selectListTheme();
  List<Category> selectListMajor();
  List<Category> selectListGenre();
  List<Category> selectListLocationType();
  List<Category> selectListLocation(int no);
  List<Category> selectTop10CategoryList();
  List<Category> selectListEventLocation();
  List<Category> selectListEventMajor();
  List<Category> selectListEventGenre();
  List<Category> selectListEventTheme();
  void themeMusi(HashMap<String, Object> themeMap);
  void majorMusi(HashMap<String, Object> majorMap);
  void genreMusi(HashMap<String, Object> genreMap);
  void locationMusi(HashMap<String, Object> locationMap);
  void deleteMusiTheme(int no);
  void deleteMusiMajor(int no);
  void deleteMusiGenre(int no);
  void deleteMusilocation(int no);
  Category selectEventCategory(int eno);
  void insertEventTheme(Map<String,Object> themeMap); // 이벤트 테마 카테고리 추가
  void insertEventMajor(Map<String,Object> majorMap); // 이벤트 전공 카테고리 추가
  void insertEventGenre(Map<String,Object> genreMap); // 이벤트 장르 카테고리 추가
  void deleteEventTheme(int eno); // 이벤트 테마 카테고리 삭제
  void deleteEventMajor(int eno); // 이벤트 전공 카테고리 삭제
  void deleteEventGenre(int eno); // 이벤트 장르 카테고리 삭제
}
