
package bitcamp.java93.domain;

public class Notification {
  int no;
  Member musician;
  Event event;
  Member writer;
  String date;
  String type;
  String contents;
  String whom;
  @Override
  public String toString() {
    return "Notification [no=" + no + ", musician=" + musician + ", event=" + event + ", writer=" + writer + ", date="
        + date + ", type=" + type + ", contents=" + contents + ", whom=" + whom + "]";
  }
  public int getNo() {
    return no;
  }
  public void setNo(int no) {
    this.no = no;
  }
  public Member getMusician() {
    return musician;
  }
  public void setMusician(Member musician) {
    this.musician = musician;
  }
  public Event getEvent() {
    return event;
  }
  public void setEvent(Event event) {
    this.event = event;
  }
  public Member getWriter() {
    return writer;
  }
  public void setWriter(Member writer) {
    this.writer = writer;
  }
  public String getDate() {
    return date;
  }
  public void setDate(String date) {
    this.date = date;
  }
  public String getType() {
    return type;
  }
  public void setType(String type) {
    this.type = type;
  }
  public String getContents() {
    return contents;
  }
  public void setContents(String contents) {
    this.contents = contents;
  }
  public String getWhom() {
    return whom;
  }
  public void setWhom(String whom) {
    this.whom = whom;
  }
  
  
  
  
}
