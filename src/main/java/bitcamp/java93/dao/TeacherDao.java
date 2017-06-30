package bitcamp.java93.dao;

import java.util.List;
import java.util.Map;

import bitcamp.java93.domain.Teacher;

public interface TeacherDao {

  List<Teacher> selectList(Map<String,Object> valueMap); // selectList()

  Teacher selectOne(int no); // selectOne()

  Teacher selectOneByEmailPassword(Map<String,Object> valueMap); // selectOneByEmailPassword()
  
  int countAll();
  
  int insert(Teacher teacher); // insert()

  int delete(int no); // delete()

  int update(Teacher teacher); // update()

  void insertPhoto(Map<String,Object> valueMap); // insertPhoto()

  List<String> selectPhotoList(int teacherNo); // selectPhotoList()
  
  void deletePhoto(int teacherNo); // deletePhoto()

}
