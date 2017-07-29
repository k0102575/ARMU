package bitcamp.java93.domain;

import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

public class Event {
  int no;
  String title;
  int writer;
  ArrayList<String> themeList;
  ArrayList<String> majorList;
  ArrayList<String> genreList;
  String location;
  String address;
  int pay;
  int locno;
  String requirement;
  String contents;
  int downPay;
  int tmnno;
  int eno;
  Date date;
  List<String> EventRegistTheme;
  List<String> EventRegistMajor;
  List<String> EventRegistGenre;
  ArrayList<Musician> applicantList;
  ArrayList<Musician> pickedList;
  public int getNo() {
    return no;
  }
  public void setNo(int no) {
    this.no = no;
  }
  public String getTitle() {
    return title;
  }
  public void setTitle(String title) {
    this.title = title;
  }
  public int getWriter() {
    return writer;
  }
  public void setWriter(int writer) {
    this.writer = writer;
  }
  public ArrayList<String> getThemeList() {
    return themeList;
  }
  public void setThemeList(ArrayList<String> themeList) {
    this.themeList = themeList;
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
  public String getLocation() {
    return location;
  }
  public void setLocation(String location) {
    this.location = location;
  }
  public String getAddress() {
    return address;
  }
  public void setAddress(String address) {
    this.address = address;
  }
  public int getPay() {
    return pay;
  }
  public void setPay(int pay) {
    this.pay = pay;
  }
  public int getLocno() {
    return locno;
  }
  public void setLocno(int locno) {
    this.locno = locno;
  }
  public String getRequirement() {
    return requirement;
  }
  public void setRequirement(String requirement) {
    this.requirement = requirement;
  }
  public String getContents() {
    return contents;
  }
  public void setContents(String contents) {
    this.contents = contents;
  }
  public int getDownPay() {
    return downPay;
  }
  public void setDownPay(int downPay) {
    this.downPay = downPay;
  }
  public int getTmnno() {
    return tmnno;
  }
  public void setTmnno(int tmnno) {
    this.tmnno = tmnno;
  }
  public int getEno() {
    return eno;
  }
  public void setEno(int eno) {
    this.eno = eno;
  }
  public Date getDate() {
    return date;
  }
  public void setDate(Date date) {
    this.date = date;
  }
  public List<String> getEventRegistTheme() {
    return EventRegistTheme;
  }
  public void setEventRegistTheme(List<String> eventRegistTheme) {
    EventRegistTheme = eventRegistTheme;
  }
  public List<String> getEventRegistMajor() {
    return EventRegistMajor;
  }
  public void setEventRegistMajor(List<String> eventRegistMajor) {
    EventRegistMajor = eventRegistMajor;
  }
  public List<String> getEventRegistGenre() {
    return EventRegistGenre;
  }
  public void setEventRegistGenre(List<String> eventRegistGenre) {
    EventRegistGenre = eventRegistGenre;
  }
  public ArrayList<Musician> getApplicantList() {
    return applicantList;
  }
  public void setApplicantList(ArrayList<Musician> applicantList) {
    this.applicantList = applicantList;
  }
  public ArrayList<Musician> getPickedList() {
    return pickedList;
  }
  public void setPickedList(ArrayList<Musician> pickedList) {
    this.pickedList = pickedList;
  }
  @Override
  public String toString() {
    return "Event [no=" + no + ", title=" + title + ", writer=" + writer + ", themeList=" + themeList + ", majorList="
        + majorList + ", genreList=" + genreList + ", location=" + location + ", address=" + address + ", pay=" + pay
        + ", locno=" + locno + ", requirement=" + requirement + ", contents=" + contents + ", downPay=" + downPay
        + ", tmnno=" + tmnno + ", eno=" + eno + ", date=" + date + ", EventRegistTheme=" + EventRegistTheme
        + ", EventRegistMajor=" + EventRegistMajor + ", EventRegistGenre=" + EventRegistGenre + ", applicantList="
        + applicantList + ", pickedList=" + pickedList + "]";
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  }
