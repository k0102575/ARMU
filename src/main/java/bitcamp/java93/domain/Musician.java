package bitcamp.java93.domain;

import java.util.ArrayList;
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
  String eventDate;
  int spno;
  String specDate;
  String specDscp;
  int minAge;
  int maxAge;
  String location;
  String sido;
  int fav;
  int indexL;
  int indexM;
  int indexG;
  int locno;
  int mjrno;
  int gnrno;
  int eno;
  String nickName;
  String search;
  String rev;
  Map<String , String> fileMap;
  Map<String , String> appyMap;
  List<Map<Integer , String>> list;
  ArrayList<Musician> reviewList;
  ArrayList<String> majorList;
  ArrayList<String> genreList;
  ArrayList<String> themeList;
  ArrayList<String> locationList;
  ArrayList<String> locationNoList;
  ArrayList<Integer> majorNoList;
  ArrayList<Integer> genreNoList;
  ArrayList<Integer> themeNoList;
  ArrayList<Category> categoryList;
  List<String> photoList;
  List<String> movieList;
  List<String> muNoList;
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
  public String getEventDate() {
    return eventDate;
  }
  public void setEventDate(String eventDate) {
    this.eventDate = eventDate;
  }
  public int getSpno() {
    return spno;
  }
  public void setSpno(int spno) {
    this.spno = spno;
  }
  public String getSpecDate() {
    return specDate;
  }
  public void setSpecDate(String specDate) {
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
  public String getLocation() {
    return location;
  }
  public void setLocation(String location) {
    this.location = location;
  }
  public String getSido() {
    return sido;
  }
  public void setSido(String sido) {
    this.sido = sido;
  }
  public int getFav() {
    return fav;
  }
  public void setFav(int fav) {
    this.fav = fav;
  }
  public int getIndexL() {
    return indexL;
  }
  public void setIndexL(int indexL) {
    this.indexL = indexL;
  }
  public int getIndexM() {
    return indexM;
  }
  public void setIndexM(int indexM) {
    this.indexM = indexM;
  }
  public int getIndexG() {
    return indexG;
  }
  public void setIndexG(int indexG) {
    this.indexG = indexG;
  }
  public int getLocno() {
    return locno;
  }
  public void setLocno(int locno) {
    this.locno = locno;
  }
  public int getMjrno() {
    return mjrno;
  }
  public void setMjrno(int mjrno) {
    this.mjrno = mjrno;
  }
  public int getGnrno() {
    return gnrno;
  }
  public void setGnrno(int gnrno) {
    this.gnrno = gnrno;
  }
  public int getEno() {
    return eno;
  }
  public void setEno(int eno) {
    this.eno = eno;
  }
  public String getNickName() {
    return nickName;
  }
  public void setNickName(String nickName) {
    this.nickName = nickName;
  }
  public String getSearch() {
    return search;
  }
  public void setSearch(String search) {
    this.search = search;
  }
  public String getRev() {
    return rev;
  }
  public void setRev(String rev) {
    this.rev = rev;
  }
  public Map<String, String> getFileMap() {
    return fileMap;
  }
  public void setFileMap(Map<String, String> fileMap) {
    this.fileMap = fileMap;
  }
  public Map<String, String> getAppyMap() {
    return appyMap;
  }
  public void setAppyMap(Map<String, String> appyMap) {
    this.appyMap = appyMap;
  }
  public List<Map<Integer, String>> getList() {
    return list;
  }
  public void setList(List<Map<Integer, String>> list) {
    this.list = list;
  }
  public ArrayList<Musician> getReviewList() {
    return reviewList;
  }
  public void setReviewList(ArrayList<Musician> reviewList) {
    this.reviewList = reviewList;
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
  public ArrayList<String> getLocationNoList() {
    return locationNoList;
  }
  public void setLocationNoList(ArrayList<String> locationNoList) {
    this.locationNoList = locationNoList;
  }
  public ArrayList<Integer> getMajorNoList() {
    return majorNoList;
  }
  public void setMajorNoList(ArrayList<Integer> majorNoList) {
    this.majorNoList = majorNoList;
  }
  public ArrayList<Integer> getGenreNoList() {
    return genreNoList;
  }
  public void setGenreNoList(ArrayList<Integer> genreNoList) {
    this.genreNoList = genreNoList;
  }
  public ArrayList<Integer> getThemeNoList() {
    return themeNoList;
  }
  public void setThemeNoList(ArrayList<Integer> themeNoList) {
    this.themeNoList = themeNoList;
  }
  public ArrayList<Category> getCategoryList() {
    return categoryList;
  }
  public void setCategoryList(ArrayList<Category> categoryList) {
    this.categoryList = categoryList;
  }
  public List<String> getPhotoList() {
    return photoList;
  }
  public void setPhotoList(List<String> photoList) {
    this.photoList = photoList;
  }
  public List<String> getMovieList() {
    return movieList;
  }
  public void setMovieList(List<String> movieList) {
    this.movieList = movieList;
  }
  public List<String> getMuNoList() {
    return muNoList;
  }
  public void setMuNoList(List<String> muNoList) {
    this.muNoList = muNoList;
  }
  @Override
  public String toString() {
    return "Musician [age=" + age + ", isTeam=" + isTeam + ", homepage=" + homepage + ", intro=" + intro + ", gender="
        + gender + ", score=" + score + ", review=" + review + ", isFavorite=" + isFavorite + ", popularity="
        + popularity + ", count=" + count + ", eventTitle=" + eventTitle + ", eventDate=" + eventDate + ", spno=" + spno
        + ", specDate=" + specDate + ", specDscp=" + specDscp + ", minAge=" + minAge + ", maxAge=" + maxAge
        + ", location=" + location + ", sido=" + sido + ", fav=" + fav + ", indexL=" + indexL + ", indexM=" + indexM
        + ", indexG=" + indexG + ", locno=" + locno + ", mjrno=" + mjrno + ", gnrno=" + gnrno + ", eno=" + eno
        + ", nickName=" + nickName + ", search=" + search + ", rev=" + rev + ", fileMap=" + fileMap + ", appyMap="
        + appyMap + ", list=" + list + ", reviewList=" + reviewList + ", majorList=" + majorList + ", genreList="
        + genreList + ", themeList=" + themeList + ", locationList=" + locationList + ", locationNoList="
        + locationNoList + ", majorNoList=" + majorNoList + ", genreNoList=" + genreNoList + ", themeNoList="
        + themeNoList + ", categoryList=" + categoryList + ", photoList=" + photoList + ", movieList=" + movieList
        + ", muNoList=" + muNoList + "]";
  }
  
  
  
  
  
}