package bitcamp.java93.domain;

import java.sql.Date;
import java.util.ArrayList;

public class Event {
  int no;
  String title;
  int writer;
  String theme;
  String major;
  String genre;
  String location;
  String address;
  int pay;
  String requirement;
  String contents;
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
  public int getWriter() {
    return writer;
  }
  public void setWriter(int writer) {
    this.writer = writer;
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
    return "Event [no=" + no + ", title=" + title + ", writer=" + writer + ", theme=" + theme + ", major=" + major
        + ", genre=" + genre + ", location=" + location + ", address=" + address + ", pay=" + pay + ", requirement="
        + requirement + ", contents=" + contents + ", downPay=" + downPay + ", date=" + date + ", applicantList="
        + applicantList + ", pickedList=" + pickedList + ", musician=" + musician + "]";
  }
  
  
  }
