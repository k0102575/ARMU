package bitcamp.java93.domain;

import java.util.ArrayList;

public class Musician extends Member  {
  int pay;
  int age;
  boolean isTeam;
  String homepage;
  String intro;
  String photo;
  ArrayList<String> majorList;
  ArrayList<String> genreList;
  ArrayList<String> themeList;
  ArrayList<String> locationList;
  

  @Override
  public String toString() {
    return "Musician [pay=" + pay + ", age=" + age + ", isTeam=" + isTeam + ", homepage=" + homepage + ", intro="
        + intro + ", photo=" + photo + ", majorList=" + majorList + ", genreList=" + genreList + ", themeList="
        + themeList + ", locationList=" + locationList + ", no=" + no + ", name=" + name + ", phone=" + phone
        + ", password=" + password + ", email=" + email + "]";
  }

  
  public ArrayList<String> getMajorList() {
    return majorList;
  }


  public void setMajorList(ArrayList<String> majorList) {
    this.majorList = majorList;
  }


  public ArrayList<String> getGenreList() {
    return genreList;
  }


  public void setGenreList(ArrayList<String> genreList) {
    this.genreList = genreList;
  }


  public ArrayList<String> getThemeList() {
    return themeList;
  }


  public void setThemeList(ArrayList<String> themeList) {
    this.themeList = themeList;
  }


  public ArrayList<String> getLocationList() {
    return locationList;
  }


  public void setLocationList(ArrayList<String> locationList) {
    this.locationList = locationList;
  }


  public int getPay() {
    return pay;
  }

  public void setPay(int pay) {
    this.pay = pay;
  }

  public int getAge() {
    return age;
  }

  public void setAge(int age) {
    this.age = age;
  }

  public boolean isTeam() {
    return isTeam;
  }

  public void setTeam(boolean isTeam) {
    this.isTeam = isTeam;
  }

  public String getHomepage() {
    return homepage;
  }

  public void setHomepage(String homepage) {
    this.homepage = homepage;
  }

  public String getIntro() {
    return intro;
  }

  public void setIntro(String intro) {
    this.intro = intro;
  }

  public String getPhoto() {
    return photo;
  }

  public void setPhoto(String photo) {
    this.photo = photo;
  }
  
  
}
