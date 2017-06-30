package bitcamp.java93.service;

import java.util.List;

import bitcamp.java93.dao.MemberDao;
import bitcamp.java93.domain.Member;

public class MemberService {
 /*
  
  MemberDao memberDao;
  
  public void setMemberDao(MemberDao memberDao) {
    this.memberDao = memberDao;
  }
  
  public List<Member> list(int pageNo, int pageSize) throws Exception {
    
    return memberDao.selectList(pageNo, pageSize);
  } // list()
  
  public Member get(int no) throws Exception {
    
    return memberDao.selectOne(no);
  } // get()
  
  public void add(Member member) throws Exception {
    memberDao.insert(member);
  }  // add()
  
  public void update(Member member) throws Exception {
    int count = memberDao.update(member);
    if (count < 1) {
      throw new Exception(member.getNo() + "번 회원을 변경하지 못했습니다.");
    }
    
    count = memberDao.update(member);
    
    if (count < 1) {
      throw new Exception(member.getNo() + "번 회원을 변경하지 못했습니다.");
    }
    
  }  // update()
   
  public void remove(int no) throws Exception {
    int count = memberDao.delete(no);
    
    if (count < 1) {
      throw new Exception(no + "번 회원을 삭제하지 못했습니다.");
    }
    
  } // remove()

  public Member getByEmailPassword(String email, String password) throws Exception {
    
    return memberDao.selectOneByEmailPassword(email, password);
    
  }
 */
}
