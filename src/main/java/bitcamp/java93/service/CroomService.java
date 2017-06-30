package bitcamp.java93.service;

import java.util.List;

import bitcamp.java93.dao.CroomDao;
import bitcamp.java93.domain.Croom;

public class CroomService {
  
  CroomDao croomDao;
  
  public void setCroomDao(CroomDao croomDao) {
    this.croomDao = croomDao;
  }
  
  public List<Croom> list(int pageNo, int pageSize) throws Exception {
    
    return croomDao.selectList(pageNo, pageSize);
  } // list()
  
  public List<Croom> allList() throws Exception {
    
    return croomDao.selectList();
  } // list()
  
  public Croom get(int no) throws Exception {
    
    return croomDao.selectOne(no);
  } // get()
  
  public void add(Croom croom) throws Exception {
    croomDao.insert(croom);
  }  // add()
  
  public void update(Croom croom) throws Exception {
    int count = croomDao.update(croom);
    if (count < 1) {
      throw new Exception(croom.getNo() + "번 회원을 변경하지 못했습니다.");
    }
  }  // update()
   
  public void remove(int no) throws Exception {
    int count = croomDao.delete(no);
    
    if (count < 1) {
      throw new Exception(no + "번 회원을 삭제하지 못했습니다.");
    }
    
  } // remove()

  
}
