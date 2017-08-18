package bitcamp.java93.domain;

import java.util.ArrayList;
import java.util.List;

public class Event {
  int no;
  String title;
  int writer;
  Member writeMember;
  Musician matchMusician;
  ArrayList<String> themeList;
  ArrayList<String> majorList;
  ArrayList<String> genreList;
  String city;
  String location;
  String address;
  int pay;
  int locno;
  String requirement;
  String contents;
  int downPay;
  int tmnno;
  String date;
  int rhspay;
  int rhsnum;
  int pr_count;
  int mtc_info;
  String rhsinfo;
  boolean haveRehearsal;
  List<String> EventRegistTheme;
  List<String> EventRegistMajor;
  List<String> EventRegistGenre;
  ArrayList<Musician> appyList;
  ArrayList<Musician> prList;
  @Override
  public String toString() {
    return "Event [no=" + no + ", title=" + title + ", writer=" + writer + ", writeMember=" + writeMember
        + ", matchMusician=" + matchMusician + ", themeList=" + themeList + ", majorList=" + majorList + ", genreList="
        + genreList + ", city=" + city + ", location=" + location + ", address=" + address + ", pay=" + pay + ", locno="
        + locno + ", requirement=" + requirement + ", contents=" + contents + ", downPay=" + downPay + ", tmnno="
        + tmnno + ", date=" + date + ", rhspay=" + rhspay + ", rhsnum=" + rhsnum + ", pr_count=" + pr_count
        + ", mtc_info=" + mtc_info + ", rhsinfo=" + rhsinfo + ", haveRehearsal=" + haveRehearsal + ", EventRegistTheme="
        + EventRegistTheme + ", EventRegistMajor=" + EventRegistMajor + ", EventRegistGenre=" + EventRegistGenre
        + ", appyList=" + appyList + ", prList=" + prList + ", getClass()=" + getClass() + ", hashCode()=" + hashCode()
        + ", toString()=" + super.toString() + "]";
  }
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
  public Member getWriteMember() {
    return writeMember;
  }
  public void setWriteMember(Member writeMember) {
    this.writeMember = writeMember;
  }
  public Musician getMatchMusician() {
    return matchMusician;
  }
  public void setMatchMusician(Musician matchMusician) {
    this.matchMusician = matchMusician;
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
  public String getCity() {
    return city;
  }
  public void setCity(String city) {
    this.city = city;
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
  public String getDate() {
    return date;
  }
  public void setDate(String date) {
    this.date = date;
  }
  public int getRhspay() {
    return rhspay;
  }
  public void setRhspay(int rhspay) {
    this.rhspay = rhspay;
  }
  public int getRhsnum() {
    return rhsnum;
  }
  public void setRhsnum(int rhsnum) {
    this.rhsnum = rhsnum;
  }
  public int getPr_count() {
    return pr_count;
  }
  public void setPr_count(int pr_count) {
    this.pr_count = pr_count;
  }
  public int getMtc_info() {
    return mtc_info;
  }
  public void setMtc_info(int mtc_info) {
    this.mtc_info = mtc_info;
  }
  public String getRhsinfo() {
    return rhsinfo;
  }
  public void setRhsinfo(String rhsinfo) {
    this.rhsinfo = rhsinfo;
  }
  public boolean isHaveRehearsal() {
    return haveRehearsal;
  }
  public void setHaveRehearsal(boolean haveRehearsal) {
    this.haveRehearsal = haveRehearsal;
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
  public ArrayList<Musician> getAppyList() {
    return appyList;
  }
  public void setAppyList(ArrayList<Musician> appyList) {
    this.appyList = appyList;
  }
  public ArrayList<Musician> getPrList() {
    return prList;
  }
  public void setPrList(ArrayList<Musician> prList) {
    this.prList = prList;
  }
  
  
  }
