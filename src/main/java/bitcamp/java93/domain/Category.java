package bitcamp.java93.domain;

import java.util.List;
import java.util.Map;

public class Category {
  Map<Integer , String> themeMap;
  List<Map<Integer , String>> list;
  String thmtname;
  String thmname;
  int thmno;
  @Override
  public String toString() {
    return "Category [themeMap=" + themeMap + ", list=" + list + ", thmtname=" + thmtname + ", thmname=" + thmname
        + ", thmno=" + thmno + "]";
  }
  public Map<Integer, String> getThemeMap() {
    return themeMap;
  }
  public void setThemeMap(Map<Integer, String> themeMap) {
    this.themeMap = themeMap;
  }
  public List<Map<Integer, String>> getList() {
    return list;
  }
  public void setList(List<Map<Integer, String>> list) {
    this.list = list;
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
  public int getThmno() {
    return thmno;
  }
  public void setThmno(int thmno) {
    this.thmno = thmno;
  }
  
  
}
