package bitcamp.java93.service;

import java.util.List;

import bitcamp.java93.domain.Category;
import bitcamp.java93.domain.Musician;

public interface CategoryService {
  List<Category> listTheme() throws Exception;
  List<Category> listMajor() throws Exception;
  List<Category> listGenre() throws Exception;
  List<Category> listLocationType() throws Exception;
  List<Category> listLocation(int no) throws Exception;
  List<Category> listTop10() throws Exception;//공통 > 추천탭 > 인기분야 탑 10 리스트
  void addMusiCategory(Musician musician) throws Exception;
  void deleteMusiCategory(int no) throws Exception;
  void changeMusiCategory(int no, Musician musician) throws Exception;
}
