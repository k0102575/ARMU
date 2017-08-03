package bitcamp.java93.domain;

import java.sql.Date;

public class Chat {
  int no;
  Member writer;
  Member musician;
  boolean isRead;
  String message;
  Date date;
  int senderNo;
  public int getNo() {
    return no;
  }
  public void setNo(int no) {
    this.no = no;
  }
  public Member getWriter() {
    return writer;
  }
  public void setWriter(Member writer) {
    this.writer = writer;
  }
  public Member getMusician() {
    return musician;
  }
  public void setMusician(Member musician) {
    this.musician = musician;
  }
  public boolean isRead() {
    return isRead;
  }
  public void setRead(boolean isRead) {
    this.isRead = isRead;
  }
  public String getMessage() {
    return message;
  }
  public void setMessage(String message) {
    this.message = message;
  }
  public Date getDate() {
    return date;
  }
  public void setDate(Date date) {
    this.date = date;
  }
  public int getSenderNo() {
    return senderNo;
  }
  public void setSenderNo(int senderNo) {
    this.senderNo = senderNo;
  }
  @Override
  public String toString() {
    return "Chat [no=" + no + ", writer=" + writer + ", musician=" + musician + ", isRead=" + isRead + ", message="
        + message + ", date=" + date + ", senderNo=" + senderNo + "]";
  }
  
  
}
