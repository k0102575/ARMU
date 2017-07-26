package bitcamp.java93.service;

import java.util.List;

import bitcamp.java93.domain.Member;
import bitcamp.java93.domain.Musician;

public interface MusicianService {
  List<Musician> listRecommand(Member member) throws Exception;
  List<Musician> listSurf() throws Exception;
  Musician getProfile() throws Exception;

}







