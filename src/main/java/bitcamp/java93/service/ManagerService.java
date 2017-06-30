package bitcamp.java93.service;

import java.util.List;

import bitcamp.java93.dao.ManagerDao;
import bitcamp.java93.domain.Manager;

public class ManagerService {
  
  ManagerDao managerDao;
  
  public void setManagerDao(ManagerDao managerDao) {
    this.managerDao = managerDao;
  }

  public List<Manager> allList() throws Exception {
    
    return managerDao.selectList();
  } // list()

  
}
