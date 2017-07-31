package bitcamp.java93.domain;

import java.util.HashMap;

public class Member {
  int no;
  String name;
  String nickName;
  String phone;
  String password;
  String email;
  String photo;
  HashMap<String , String> valueMap;
  @Override
  public String toString() {
    return "Member [no=" + no + ", name=" + name + ", nickName=" + nickName + ", phone=" + phone + ", password="
        + password + ", email=" + email + ", photo=" + photo + "]";
  }
  public int getNo() {
    return no;
  }
  public void setNo(int no) {
    this.no = no;
  }
  public String getName() {
    return name;
  }
  public void setName(String name) {
    this.name = name;
  }
  public String getNickName() {
    return nickName;
  }
  public void setNickName(String nickName) {
    this.nickName = nickName;
  }
  public String getPhone() {
    return phone;
  }
  public void setPhone(String phone) {
    this.phone = phone;
  }
  public String getPassword() {
    return password;
  }
  public void setPassword(String password) {
    this.password = password;
  }
  public String getEmail() {
    return email;
  }
  public void setEmail(String email) {
    this.email = email;
  }
  public String getPhoto() {
    return photo;
  }
  public void setPhoto(String photo) {
    this.photo = photo;
  }
 
  
  
}
