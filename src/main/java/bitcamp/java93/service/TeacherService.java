package bitcamp.java93.service;

import java.util.List;

import bitcamp.java93.domain.Teacher;

public interface TeacherService {
  
  List<Teacher> list(int pageNo, int pageSize) throws Exception; // list()
  
  Teacher get(int no) throws Exception; // get()
  
  Teacher getByEmailPassword(String email, String password) throws Exception; // getByEmailPassword()
  
  int getSize() throws Exception;
  
  void add(Teacher teacher) throws Exception; // add()
  
  void update(Teacher teacher) throws Exception; // update()
   
  void remove(int no) throws Exception; // remove()
  
}
