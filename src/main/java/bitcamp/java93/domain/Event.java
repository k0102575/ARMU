package bitcamp.java93.domain;

import java.sql.Date;
import java.util.ArrayList;

public class Event {
  int no;
  String title;
  int memberNo;
  String theme;
  String major;
  String genre;
  String location;
  int pay;
  Date dueDate;
  String requirement;
  String song;
  int downPay;
  Date date;
  ArrayList<Musician> applicantList;
  ArrayList<Musician> pickedList;
  Musician musician;
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
  public int getMemberNo() {
    return memberNo;
  }
  public void setMemberNo(int memberNo) {
    this.memberNo = memberNo;
  }
  public String getTheme() {
    return theme;
  }
  public void setTheme(String theme) {
    this.theme = theme;
  }
  public String getMajor() {
    return major;
  }
  public void setMajor(String major) {
    this.major = major;
  }
  public String getGenre() {
    return genre;
  }
  public void setGenre(String genre) {
    this.genre = genre;
  }
  public String getLocation() {
    return location;
  }
  public void setLocation(String location) {
    this.location = location;
  }
  public int getPay() {
    return pay;
  }
  public void setPay(int pay) {
    this.pay = pay;
  }
  public Date getDueDate() {
    return dueDate;
  }
  public void setDueDate(Date dueDate) {
    this.dueDate = dueDate;
  }
  public String getRequirement() {
    return requirement;
  }
  public void setRequirement(String requirement) {
    this.requirement = requirement;
  }
  public String getSong() {
    return song;
  }
  public void setSong(String song) {
    this.song = song;
  }
  public int getDownPay() {
    return downPay;
  }
  public void setDownPay(int downPay) {
    this.downPay = downPay;
  }
  public Date getDate() {
    return date;
  }
  public void setDate(Date date) {
    this.date = date;
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
  public Musician getMusician() {
    return musician;
  }
  public void setMusician(Musician musician) {
    this.musician = musician;
  }
  @Override
  public String toString() {
    return "Event [no=" + no + ", title=" + title + ", memberNo=" + memberNo + ", theme=" + theme + ", major=" + major
        + ", genre=" + genre + ", location=" + location + ", pay=" + pay + ", dueDate=" + dueDate + ", requirement="
        + requirement + ", song=" + song + ", downPay=" + downPay + ", date=" + date + ", applicantList="
        + applicantList + ", pickedList=" + pickedList + ", musician=" + musician + "]";
  }
  
  

}
