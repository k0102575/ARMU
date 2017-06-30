package bitcamp.java93.domain;
// 역활: memb 테이블의 값을 보관할 떄 사용할 클래스

public class Member {
  int no;
  String name;
  String tel;
  String email;
  String password;
  
  public String toString() {
    return "Member [no=" + no + ", name=" + name + ", tel=" + tel + ", email=" + email + ", password=" + password + "]";
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
  public String getTel() {
    return tel;
  }
  public void setTel(String tel) {
    this.tel = tel;
  }
  public String getEmail() {
    return email;
  }
  public void setEmail(String email) {
    this.email = email;
  }
  public String getPassword() {
    return password;
  }
  public void setPassword(String password) {
    this.password = password;
  }
  
  
}
