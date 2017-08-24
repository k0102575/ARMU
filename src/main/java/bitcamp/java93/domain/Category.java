package bitcamp.java93.domain;

import java.util.List;
import java.util.Map;

public class Category {
  int thmno;
  int thmtno;
  String thmtname;
  String thmname;
  int mjrno;
  int mjrtno;
  String mjrtname;
  String mjrname;
  int gnrno;
  int gnrtno;
  String gnrtname;
  String gnrname;
  int loctno;
  String loctname;
  int locno;
  String locname;
  String type;
  int typeNo;
  int no;
  String name;
  int count;
  Map<Integer , String> themeMap;
  Map<Integer , String> majorMap;
  Map<Integer , String> genreMap;
  List<Map<Integer , String>> list;
  public int getThmno() {
    return thmno;
  }
  public void setThmno(int thmno) {
    this.thmno = thmno;
  }
  public int getThmtno() {
    return thmtno;
  }
  public void setThmtno(int thmtno) {
    this.thmtno = thmtno;
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
  public int getMjrtno() {
    return mjrtno;
  }
  public void setMjrtno(int mjrtno) {
    this.mjrtno = mjrtno;
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
  public int getGnrtno() {
    return gnrtno;
  }
  public void setGnrtno(int gnrtno) {
    this.gnrtno = gnrtno;
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
  public String getType() {
    return type;
  }
  public void setType(String type) {
    this.type = type;
  }
  public int getTypeNo() {
    return typeNo;
  }
  public void setTypeNo(int typeNo) {
    this.typeNo = typeNo;
  }
  public int getNo() {
    return no;
  }
  public void setNo(int no) {
    this.no = no;
  }
  public String getName() {
    return name;
  }
  public void setName(String name) {
    this.name = name;
  }
  public int getCount() {
    return count;
  }
  public void setCount(int count) {
    this.count = count;
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
  public List<Map<Integer, String>> getList() {
    return list;
  }
  public void setList(List<Map<Integer, String>> list) {
    this.list = list;
  }
  @Override
  public String toString() {
    return "Category [thmno=" + thmno + ", thmtno=" + thmtno + ", thmtname=" + thmtname + ", thmname=" + thmname
        + ", mjrno=" + mjrno + ", mjrtno=" + mjrtno + ", mjrtname=" + mjrtname + ", mjrname=" + mjrname + ", gnrno="
        + gnrno + ", gnrtno=" + gnrtno + ", gnrtname=" + gnrtname + ", gnrname=" + gnrname + ", loctno=" + loctno
        + ", loctname=" + loctname + ", locno=" + locno + ", locname=" + locname + ", type=" + type + ", typeNo="
        + typeNo + ", no=" + no + ", name=" + name + ", count=" + count + ", themeMap=" + themeMap + ", majorMap="
        + majorMap + ", genreMap=" + genreMap + ", list=" + list + "]";
  }
 
  
  
}
