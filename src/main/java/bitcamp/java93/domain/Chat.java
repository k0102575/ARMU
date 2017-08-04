package bitcamp.java93.domain;

import java.sql.Date;
import java.sql.Time;

public class Chat {
  int no;
  Member writer;
  Member musician;
  boolean isRead;
  String message;
  Date date;
  Time time;
  int senderNo;
  Date eventDate;
  String status;
  int unread;
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
//    SimpleDateFormat dateFormat = new SimpleDateFormat("yyyyy-mm-dd");
//    return dateFormat.format(date);
    return date;
  }
  public void setDate(Date date) {
    this.date = date;
  }
  public Time getTime() {
    return time;
  }
  public void setTime(Time time) {
    this.time = time;
  }
  public int getSenderNo() {
    return senderNo;
  }
  public void setSenderNo(int senderNo) {
    this.senderNo = senderNo;
  }
  public Date getEventDate() {
    return eventDate;
  }
  public void setEventDate(Date eventDate) {
    this.eventDate = eventDate;
  }
  public String getStatus() {
    return status;
  }
  public void setStatus(String status) {
    this.status = status;
  }
  public int getUnread() {
    return unread;
  }
  public void setUnread(int unread) {
    this.unread = unread;
  }
  @Override
  public String toString() {
    return "Chat [no=" + no + ", writer=" + writer + ", musician=" + musician + ", isRead=" + isRead + ", message="
        + message + ", date=" + date + ", time=" + time + ", senderNo=" + senderNo + ", eventDate=" + eventDate
        + ", status=" + status + ", unread=" + unread + "]";
  }
  
  
}
