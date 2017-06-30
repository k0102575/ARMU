package bitcamp.java93.dao;

import java.util.List;
import java.util.Map;

import bitcamp.java93.domain.Member;

public interface MemberDao {
  List<Member> selectList(Map<String,Object> valueMap); // selectList()

  List<Member> selectListByNames(Map<String,Object> valueMap); // selectListByNames()

  Member selectOne(int no); // selectOne()

  Member selectOneByEmailPassword(Map<String,Object> valueMap); // selectOneByEmailPassword()

  int insert(Member member); // insert()

  int update(Member member); // update()

  int delete(int no); // delete()
}
