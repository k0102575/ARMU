// memb 테이블의 데이터를 다루는 메서드를 모아둔 클래스이다.

// try를 쓰는이유는 자동으로 닫기위해 
package bitcamp.java93.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import bitcamp.java93.domain.Lect;
import bitcamp.java93.util.DBConnectionPool;

public class LectDao {
  DBConnectionPool conPool;

  public LectDao(DBConnectionPool conPool){
    this.conPool = conPool;
  } // 생성자

  public List<Lect> selectList(int pageNo, int pageSize) throws Exception {
    Connection con = conPool.getConnection();
    // connection을 닫지 않기 위해 try문 안에 넣지 않는다.

    try (
        PreparedStatement stmt = con.prepareStatement("select lno, titl, dscp, sdt, edt, qty, pric, thrs from lect order by lno limit ?, ?");
        ) {
      stmt.setInt(1, (pageNo -1) * pageSize);
      stmt.setInt(2, pageSize);

      ArrayList<Lect> list = new ArrayList<>();
      try(      ResultSet rs = stmt.executeQuery();) {
        Lect lect = null;

        while (rs.next()) {
          lect = new Lect();
          lect.setNo(rs.getInt("lno"));
          lect.setTitl(rs.getString("titl"));
          lect.setDscp(rs.getString("dscp"));
          lect.setSdt(rs.getString("sdt"));
          lect.setEdt(rs.getString("edt"));
          lect.setQty(rs.getInt("qty"));
          lect.setPric(rs.getInt("pric"));
          lect.setThrs(rs.getInt("thrs"));

          list.add(lect);
        } // while

      } // try
      return list;
    } finally {
      conPool.returnConnection(con);
    }

  } // selectList()

  public Lect selectOne(int no) throws Exception {
    Connection con = conPool.getConnection();

    try (
        PreparedStatement stmt = con.prepareStatement("select lno, titl, dscp, sdt, edt, qty, pric, thrs, crmno, mrno from lect where lno=?");
        ) {
      stmt.setInt(1, no);

      try(ResultSet rs = stmt.executeQuery();) {
        if (!rs.next()) {
          return null;
        }

        Lect lect = new Lect();
        lect.setNo(rs.getInt("lno"));
        lect.setTitl(rs.getString("titl"));
        lect.setDscp(rs.getString("dscp"));
        lect.setSdt(rs.getString("sdt"));
        lect.setEdt(rs.getString("edt"));
        lect.setQty(rs.getInt("qty"));
        lect.setPric(rs.getInt("pric"));
        lect.setThrs(rs.getInt("thrs"));
        lect.setCrmno(rs.getInt("crmno"));
        lect.setMrno(rs.getInt("mrno"));

        return lect;

      } // try

    } finally {
      conPool.returnConnection(con);
    }

  } // selectOne()

  public int insert(Lect lect) throws Exception {
    Connection con = conPool.getConnection();
    try(
        PreparedStatement stmt = con.prepareStatement(
            "insert into lect(titl,dscp,sdt,edt,qty,pric,thrs,crmno,mrno) values(?,?,?,?,?,?,?,?,?)");
        ) {
      stmt.setString(1, lect.getTitl());
      stmt.setString(2, lect.getDscp());
      stmt.setString(3, lect.getSdt());
      stmt.setString(4, lect.getEdt());
      stmt.setInt(5, lect.getQty());
      stmt.setInt(6, lect.getPric());
      stmt.setInt(7, lect.getThrs());
      stmt.setInt(8, lect.getCrmno());
      stmt.setInt(9, lect.getMrno());

      return stmt.executeUpdate();

    } finally {
      conPool.returnConnection(con);
    }

  } // insert()

  public int delete(int no) throws Exception {
    Connection con = conPool.getConnection();
    try(
        PreparedStatement stmt = con.prepareStatement("delete from lect where lno=?");
        ) {
      stmt.setInt(1, no);
      return stmt.executeUpdate();

    } finally {
      conPool.returnConnection(con);
    }

  } // delete()

  public int update(Lect lect) throws Exception {
    Connection con = conPool.getConnection();
    try(
        PreparedStatement stmt = con.prepareStatement(
            "update lect set titl=?, dscp=?, sdt=?, edt=?, qty=?, pric=?, thrs=?, crmno=?, mrno=? where lno=?");
        ) {
      stmt.setString(1, lect.getTitl());
      stmt.setString(2, lect.getDscp());
      stmt.setString(3, lect.getSdt());
      stmt.setString(4, lect.getEdt());
      stmt.setInt(5, lect.getQty());
      stmt.setInt(6, lect.getPric());
      stmt.setInt(7, lect.getThrs());
      stmt.setInt(8, lect.getCrmno());
      stmt.setInt(9, lect.getMrno());
      stmt.setInt(10, lect.getNo());

      return stmt.executeUpdate();

    } finally {
      conPool.returnConnection(con);
    }

  } // insert()

}
