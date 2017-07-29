package bitcamp.java93.service;

import java.util.List;

import bitcamp.java93.domain.Category;

public interface CategoryService {
  List<Category> listTheme() throws Exception;
  List<Category> listMajor() throws Exception;
  List<Category> listGenre() throws Exception;
  List<Category> listLocationType() throws Exception;
  List<Category> listLocation(int no) throws Exception;
}
