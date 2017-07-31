package bitcamp.java93.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import bitcamp.java93.domain.Member;

public interface MemberDao {
  List<Member> selectList();
  void insert(Member member);
  Member selectOneByEmailPassword(Map<String,Object> valueMap);
  int updatePhoto(HashMap<String, Object> valueMap);
  List<String> selectPhotoList(int memberNo);
  Member selectOne(Member member);
}
