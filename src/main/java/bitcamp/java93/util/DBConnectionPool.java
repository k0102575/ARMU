package bitcamp.java93.util;


import java.sql.Connection;
import java.sql.DriverManager;
import java.util.ArrayList;


public class DBConnectionPool {
  String url;
  String username;
  String password;
  ArrayList<Connection> conList = new ArrayList<>();
  
  public DBConnectionPool (String driver, String url, String username, String password) throws Exception {
    
    Class.forName(driver);
    
    this.url = url;
    this.username = username;
    this.password = password;
  }
  
  public Connection getConnection() throws Exception {
    if (conList.size() > 0) {
      return conList.remove(0);
      // remove 0을 주면은 제일앞에것을 제거하고 리턴한다.
    }
    
    return DriverManager.getConnection(this.url, this.username, this.password);
  }
  
  public void returnConnection(Connection con) {
    conList.add(con);
  }
  
}
