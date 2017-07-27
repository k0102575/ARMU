package bitcamp.java93.domain;

import java.util.List;
import java.util.Map;

public class Category {
  int thmno;
  String thmtname;
  String thmname;
  int mjrno;
  String mjrtname;
  String mjrname;
  int gnrno;
  String gnrtname;
  String gnrname;
  int loctno;
  String loctname;
  int locno;
  String locname;
  Map<Integer , String> themeMap;
  Map<Integer , String> majorMap;
  Map<Integer , String> genreMap;
  List<Map<Integer , String>> list;
  public List<Map<Integer, String>> getList() {
    return list;
  }
  public void setList(List<Map<Integer, String>> list) {
    this.list = list;
  }
  public int getThmno() {
    return thmno;
  }
  public void setThmno(int thmno) {
    this.thmno = thmno;
  }
  public String getThmtname() {
    return thmtname;
  }
  public void setThmtname(String thmtname) {
    this.thmtname = thmtname;
  }
  public String getThmname() {
    return thmname;
  }
  public void setThmname(String thmname) {
    this.thmname = thmname;
  }
  public int getMjrno() {
    return mjrno;
  }
  public void setMjrno(int mjrno) {
    this.mjrno = mjrno;
  }
  public String getMjrtname() {
    return mjrtname;
  }
  public void setMjrtname(String mjrtname) {
    this.mjrtname = mjrtname;
  }
  public String getMjrname() {
    return mjrname;
  }
  public void setMjrname(String mjrname) {
    this.mjrname = mjrname;
  }
  public int getGnrno() {
    return gnrno;
  }
  public void setGnrno(int gnrno) {
    this.gnrno = gnrno;
  }
  public String getGnrtname() {
    return gnrtname;
  }
  public void setGnrtname(String gnrtname) {
    this.gnrtname = gnrtname;
  }
  public String getGnrname() {
    return gnrname;
  }
  public void setGnrname(String gnrname) {
    this.gnrname = gnrname;
  }
  public int getLoctno() {
    return loctno;
  }
  public void setLoctno(int loctno) {
    this.loctno = loctno;
  }
  public String getLoctname() {
    return loctname;
  }
  public void setLoctname(String loctname) {
    this.loctname = loctname;
  }
  public Map<Integer, String> getThemeMap() {
    return themeMap;
  }
  public void setThemeMap(Map<Integer, String> themeMap) {
    this.themeMap = themeMap;
  }
  public Map<Integer, String> getMajorMap() {
    return majorMap;
  }
  public void setMajorMap(Map<Integer, String> majorMap) {
    this.majorMap = majorMap;
  }
  public Map<Integer, String> getGenreMap() {
    return genreMap;
  }
  public void setGenreMap(Map<Integer, String> genreMap) {
    this.genreMap = genreMap;
  }
  @Override
  public String toString() {
    return "Category [thmno=" + thmno + ", thmtname=" + thmtname + ", thmname=" + thmname + ", mjrno=" + mjrno
        + ", mjrtname=" + mjrtname + ", mjrname=" + mjrname + ", gnrno=" + gnrno + ", gnrtname=" + gnrtname
        + ", gnrname=" + gnrname + ", loctno=" + loctno + ", loctname=" + loctname + ", locno=" + locno + ", locname="
        + locname + ", themeMap=" + themeMap + ", majorMap=" + majorMap + ", genreMap=" + genreMap + ", list=" + list
        + "]";
  }
  public int getLocno() {
    return locno;
  }
  public void setLocno(int locno) {
    this.locno = locno;
  }
  public String getLocname() {
    return locname;
  }
  public void setLocname(String locname) {
    this.locname = locname;
  }
  
}
