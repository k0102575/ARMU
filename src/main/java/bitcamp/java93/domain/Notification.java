
package bitcamp.java93.domain;

public class Notification {
  int no;
  Member musician;
  Event event;
  Member writer;
  String type;
  String date;
  String contents;
  @Override
  public String toString() {
    return "Notification [no=" + no + ", musician=" + musician + ", event=" + event + ", writer=" + writer + ", type="
        + type + ", date=" + date + ", contents=" + contents + "]";
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
  public String getType() {
    return type;
  }
  public void setType(String type) {
    this.type = type;
  }
  public String getDate() {
    return date;
  }
  public void setDate(String date) {
    this.date = date;
  }
  public String getContents() {
    return contents;
  }
  public void setContents(String contents) {
    this.contents = contents;
  }
  
  
  
}
