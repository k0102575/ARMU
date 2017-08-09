package bitcamp.java93.domain;

public class Chat {
  int no;
  boolean isRead;
  String message;
  String date;
  String time;

  int senderNo;
  int receiverNo;
  String nickName;
  String photo;
  int isMusician;
  int whose;
  
  String eventStatus;
  String eventDate;
  int unread;
  public int getNo() {
    return no;
  }
  public void setNo(int no) {
    this.no = no;
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
  public String getDate() {
    return date;
  }
  public void setDate(String date) {
    this.date = date;
  }
  public String getTime() {
    return time;
  }
  public void setTime(String time) {
    this.time = time;
  }
  public int getSenderNo() {
    return senderNo;
  }
  public void setSenderNo(int senderNo) {
    this.senderNo = senderNo;
  }
  public int getReceiverNo() {
    return receiverNo;
  }
  public void setReceiverNo(int receiverNo) {
    this.receiverNo = receiverNo;
  }
  public String getNickName() {
    return nickName;
  }
  public void setNickName(String nickName) {
    this.nickName = nickName;
  }
  public String getPhoto() {
    return photo;
  }
  public void setPhoto(String photo) {
    this.photo = photo;
  }
  public int getIsMusician() {
    return isMusician;
  }
  public void setIsMusician(int isMusician) {
    this.isMusician = isMusician;
  }
  public int getWhose() {
    return whose;
  }
  public void setWhose(int whose) {
    this.whose = whose;
  }
  public String getEventStatus() {
    return eventStatus;
  }
  public void setEventStatus(String eventStatus) {
    this.eventStatus = eventStatus;
  }
  public String getEventDate() {
    return eventDate;
  }
  public void setEventDate(String eventDate) {
    this.eventDate = eventDate;
  }
  public int getUnread() {
    return unread;
  }
  public void setUnread(int unread) {
    this.unread = unread;
  }
  @Override
  public String toString() {
    return "Chat [no=" + no + ", isRead=" + isRead + ", message=" + message + ", date=" + date + ", time=" + time
        + ", senderNo=" + senderNo + ", receiverNo=" + receiverNo + ", nickName=" + nickName + ", photo=" + photo
        + ", isMusician=" + isMusician + ", whose=" + whose + ", eventStatus=" + eventStatus + ", eventDate="
        + eventDate + ", unread=" + unread + "]";
  }
    
}
