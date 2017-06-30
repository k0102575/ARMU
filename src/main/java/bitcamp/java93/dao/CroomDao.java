package bitcamp.java93.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import bitcamp.java93.domain.Croom;
import bitcamp.java93.util.DBConnectionPool;

public class CroomDao {
  DBConnectionPool conPool;

  public CroomDao(DBConnectionPool conPool){
    this.conPool = conPool;
  } // 생성자
  
  public List<Croom> selectList() throws Exception {
    Connection con = conPool.getConnection();
    try (
        PreparedStatement stmt = con.prepareStatement("select crmno, name from croom order by crmno asc");
        ) {
      ArrayList<Croom> list = new ArrayList<>();
      try(      ResultSet rs = stmt.executeQuery();) {
        Croom croom = null;

        while (rs.next()) {
          croom = new Croom();
          croom.setNo(rs.getInt("crmno"));
          croom.setName(rs.getString("name"));
          list.add(croom);
        } // while

      } // try
      return list;
    } finally {
      conPool.returnConnection(con);
    }

  } // selectList()

  public List<Croom> selectList(int pageNo, int pageSize) throws Exception {
    Connection con = conPool.getConnection();

    try (
        PreparedStatement stmt = con.prepareStatement("select crmno, name from croom order by crmno asc limit ?, ?");
        ) {
      stmt.setInt(1, (pageNo -1) * pageSize);
      stmt.setInt(2, pageSize);

      ArrayList<Croom> list = new ArrayList<>();
      try(      ResultSet rs = stmt.executeQuery();) {
        Croom croom = null;

        while (rs.next()) {
          croom = new Croom();
          croom.setNo(rs.getInt("crmno"));
          croom.setName(rs.getString("name"));
          list.add(croom);
        } // while

      } // try
      return list;
    } finally {
      conPool.returnConnection(con);
    }

  } // selectList()

  public Croom selectOne(int no) throws Exception {
    Connection con = conPool.getConnection();

    try (
        PreparedStatement stmt = con.prepareStatement("select crmno, name from croom where crmno=?");
        ) {
      stmt.setInt(1, no);

      try(ResultSet rs = stmt.executeQuery();) {
        if (!rs.next()) {
          return null;
        }

        Croom croom = new Croom();
        croom.setNo(rs.getInt("crmno"));
        croom.setName(rs.getString("name"));

        return croom;

      } // try

    } finally {
      conPool.returnConnection(con);
    }

  } // selectOne()

  public int insert(Croom croom) throws Exception {
    Connection con = conPool.getConnection();
    try(
        PreparedStatement stmt = con.prepareStatement(
            "insert into croom(name) values(?)");
        ) {
      stmt.setString(1, croom.getName());
      return stmt.executeUpdate();

    } finally {
      conPool.returnConnection(con);
    }

  } // insert()

  public int delete(int no) throws Exception {
    Connection con = conPool.getConnection();
    try(
        PreparedStatement stmt = con.prepareStatement("delete from croom where crmno= ?");
        ) {
      stmt.setInt(1, no);
      return stmt.executeUpdate();

    } finally {
      conPool.returnConnection(con);
    }

  } // delete()

  public int update(Croom croom) throws Exception {
    Connection con = conPool.getConnection();
    try(
        PreparedStatement stmt = con.prepareStatement(
            "update croom set name=? where crmno=?");
        ) {
      stmt.setString(1, croom.getName());
      stmt.setInt(2, croom.getNo());

      return stmt.executeUpdate();

    } finally {
      conPool.returnConnection(con);
    }

  } // insert()

}
