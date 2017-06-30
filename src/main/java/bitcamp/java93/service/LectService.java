package bitcamp.java93.service;

import java.util.List;

import bitcamp.java93.dao.CroomDao;
import bitcamp.java93.dao.LectDao;
import bitcamp.java93.dao.ManagerDao;
import bitcamp.java93.domain.Lect;


public class LectService {
  LectDao lectDao;
  CroomDao croomDao;
  ManagerDao managerDao;
  
  public void setLectDao(LectDao lectDao) {
    this.lectDao = lectDao;
  }
  public void setCroomDao(CroomDao croomDao) {
    this.croomDao = croomDao;
  }
  public void setManagerDao(ManagerDao managerDao) {
    this.managerDao = managerDao;
  }
  
  public List<Lect> list(int pageNo, int pageSize) throws Exception {
    return lectDao.selectList(pageNo, pageSize);
    
  }
  
  public Lect get(int no) throws Exception {
    Lect lect = lectDao.selectOne(no);
    lect.setCroomList(croomDao.selectList());
    lect.setManagerList(managerDao.selectList());
    return lect;
  }
  
  public void add(Lect lect) throws Exception {
    lectDao.insert(lect);
    
  }
  
  public void update(Lect lect) throws Exception {
    int count = lectDao.update(lect);
    
    if (count < 1) {
      throw new Exception(lect.getNo() + "강의를 변경하지 못했습니다");
    }
    
  }
  
  public void remove(int no) throws Exception {
    int count = lectDao.delete(no);
    
    if(count < 1) {
      throw new Exception(no + "강의를 삭제하지 못했습니다");
    }
    
  }
  
}
