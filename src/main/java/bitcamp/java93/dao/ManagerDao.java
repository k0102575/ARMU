package bitcamp.java93.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import bitcamp.java93.domain.Manager;
import bitcamp.java93.util.DBConnectionPool;

public class ManagerDao {
	DBConnectionPool conPool;

	public ManagerDao(DBConnectionPool conPool){
		this.conPool = conPool;
	} // 생성자

	public List<Manager> selectList() throws Exception {
		Connection con = conPool.getConnection();

		try (
				PreparedStatement stmt = con.prepareStatement("select mr.mrno, m.name from mgr mr inner join memb m on mr.mrno = m.mno order by m.name asc");
				) {

			ArrayList<Manager> list = new ArrayList<>();
			try(      ResultSet rs = stmt.executeQuery();) {
				Manager manager = null;

				while (rs.next()) {
					manager = new Manager();
					manager.setNo(rs.getInt("mr.mrno"));
					manager.setName(rs.getString("m.name"));
					list.add(manager);
				} // while

			} // try
			return list;
		} finally {
			conPool.returnConnection(con);
		}

	} // selectList()
}
