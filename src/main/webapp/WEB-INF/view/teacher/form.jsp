<%@ page language="java" contentType="text/html; charset=UTF-8"
  pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>강사 관리</title>
<jsp:include page="../coreStyle.jsp"></jsp:include>
</head>
<body>
<jsp:include page="../header.jsp"></jsp:include>
<h1>강사 등록</h1>
<form action="add.do" method="POST" enctype="multipart/form-data">
이름:<input type="text" name="name"><br>
전화:<input type="text" name="tel"><br>
이메일:<input type="text" name="email"><br>
암호:<input type="password" name="password"><br>
홈페이지:<input type="text" name="homepage"><br>
페이스북:<input type="text" name="facebook"><br>
트위터:<input type="text" name="twitter"><br>
파일1:<input type="file" name="photo"><br>
파일2:<input type="file" name="photo"><br>
파일3:<input type="file" name="photo"><br>
<button>보내기</button>
</form>

<jsp:include page="../footer.jsp"></jsp:include>

</body>
</html>