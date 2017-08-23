package bitcamp.java93.domain;

import java.util.HashMap;

public class Member {
  int no;
  String name;
  String phone;
  String password;
  String email;
  String photo;
  int isMusician;
  HashMap<String , String> valueMap;
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
  public int getIsMusician() {
    return isMusician;
  }
  public void setIsMusician(int isMusician) {
    this.isMusician = isMusician;
  }
  public HashMap<String, String> getValueMap() {
    return valueMap;
  }
  public void setValueMap(HashMap<String, String> valueMap) {
    this.valueMap = valueMap;
  }
  @Override
  public String toString() {
    return "Member [no=" + no + ", name=" + name + ", phone=" + phone + ", password=" + password + ", email=" + email
        + ", photo=" + photo + ", isMusician=" + isMusician + ", valueMap=" + valueMap + "]";
  }
  
  
  
  }
