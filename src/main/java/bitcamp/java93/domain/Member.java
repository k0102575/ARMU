package bitcamp.java93.domain;

public class Member {
  int no;
  String name;
  String phone;
  String password;
  String email;
  
  @Override
  public String toString() {
    return "Member [no=" + no + ", name=" + name + ", phone=" + phone + ", password=" + password + ", email=" + email
        + "]";
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
  
  
}
