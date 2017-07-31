package bitcamp.java93.domain;

import java.sql.Date;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class Musician extends Member  {
  int age;
  String isTeam;
  String homepage;
  String intro;
  char gender;
  int score;
  String review;
  boolean isFavorite;
  int popularity;
  int count;
  String eventTitle;
  Date eventDate;
  Date specDate;
  String specDscp;
  int minAge;
  int maxAge;
  Map<String , String> fileMap;
//  HashMap<String , String> valueMap;
  List<Map<Integer , String>> list;
  ArrayList<String> majorList;
  ArrayList<String> genreList;
  ArrayList<String> themeList;
  ArrayList<String> locationList;
  List<String> photoList;
  @Override
  public String toString() {
    return "Musician [age=" + age + ", isTeam=" + isTeam + ", homepage=" + homepage + ", intro=" + intro + ", gender="
        + gender + ", score=" + score + ", review=" + review + ", isFavorite=" + isFavorite + ", popularity="
        + popularity + ", count=" + count + ", eventTitle=" + eventTitle + ", eventDate=" + eventDate + ", specDate="
        + specDate + ", specDscp=" + specDscp + ", minAge=" + minAge + ", maxAge=" + maxAge + ", fileMap=" + fileMap
        + ", valueMap=" + valueMap + ", list=" + list + ", majorList=" + majorList + ", genreList=" + genreList
        + ", themeList=" + themeList + ", locationList=" + locationList + ", photoList=" + photoList + "]";
  }
  public int getAge() {
    return age;
  }
  public void setAge(int age) {
    this.age = age;
  }
  public String getIsTeam() {
    return isTeam;
  }
  public void setIsTeam(String isTeam) {
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
  public int getCount() {
    return count;
  }
  public void setCount(int count) {
    this.count = count;
  }
  public String getEventTitle() {
    return eventTitle;
  }
  public void setEventTitle(String eventTitle) {
    this.eventTitle = eventTitle;
  }
  public Date getEventDate() {
    return eventDate;
  }
  public void setEventDate(Date eventDate) {
    this.eventDate = eventDate;
  }
  public Date getSpecDate() {
    return specDate;
  }
  public void setSpecDate(Date specDate) {
    this.specDate = specDate;
  }
  public String getSpecDscp() {
    return specDscp;
  }
  public void setSpecDscp(String specDscp) {
    this.specDscp = specDscp;
  }
  public int getMinAge() {
    return minAge;
  }
  public void setMinAge(int minAge) {
    this.minAge = minAge;
  }
  public int getMaxAge() {
    return maxAge;
  }
  public void setMaxAge(int maxAge) {
    this.maxAge = maxAge;
  }
  public Map<String, String> getFileMap() {
    return fileMap;
  }
  public void setFileMap(Map<String, String> fileMap) {
    this.fileMap = fileMap;
  }
  public HashMap<String, String> getValueMap() {
    return valueMap;
  }
  public void setValueMap(HashMap<String, String> valueMap) {
    this.valueMap = valueMap;
  }
  public List<Map<Integer, String>> getList() {
    return list;
  }
  public void setList(List<Map<Integer, String>> list) {
    this.list = list;
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
  public List<String> getPhotoList() {
    return photoList;
  }
  public void setPhotoList(List<String> photoList) {
    this.photoList = photoList;
  }

  
  
  
  
  
  
}
