package bitcamp.java93.domain;

import java.util.ArrayList;
import java.util.List;

public class Musician extends Member  {
  int age;
  boolean isTeam;
  String homepage;
  String intro;
  String photo;
  char gender;
  int score;
  String review;
  boolean isFavorite;
  int popularity;
  ArrayList<String> majorList;
  ArrayList<String> genreList;
  ArrayList<String> themeList;
  ArrayList<String> locationList;
  List<String> photoList;
  
  public List<String> getPhotoList() {
    return photoList;
  }
  public void setPhotoList(List<String> photoList) {
    this.photoList = photoList;
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
  public char getGender() {
    return gender;
  }
  public void setGender(char gender) {
    this.gender = gender;
  }
  public int getScore() {
    return score;
  }
  public void setScore(int score) {
    this.score = score;
  }
  public String getReview() {
    return review;
  }
  public void setReview(String review) {
    this.review = review;
  }
  public boolean isFavorite() {
    return isFavorite;
  }
  public void setFavorite(boolean isFavorite) {
    this.isFavorite = isFavorite;
  }
  public int getPopularity() {
    return popularity;
  }
  public void setPopularity(int popularity) {
    this.popularity = popularity;
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
  @Override
  public String toString() {
    return "Musician [age=" + age + ", isTeam=" + isTeam + ", homepage=" + homepage + ", intro=" + intro + ", photo="
        + photo + ", gender=" + gender + ", score=" + score + ", review=" + review + ", isFavorite=" + isFavorite
        + ", popularity=" + popularity + ", majorList=" + majorList + ", genreList=" + genreList + ", themeList="
        + themeList + ", locationList=" + locationList + ", photoList=" + photoList + "]";
  }
  


  
}
