<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<!DOCTYPE html>
<html>
<head>
<meta charset='UTF-8'>
<title>회원관리</title>
<jsp:include page="/coreStyle.jsp"></jsp:include>
</head>
<body>
<jsp:include page="/header.jsp"></jsp:include>
<h1>회원 목록</h1>
<a href='form.html'>새회원</a>
<a href='../lect/list'>강의목록</a>
<a href='../teacher/list'>강사목록</a>
<a href='../croom/list'>교실목록</a><br>
<table border='1'>
<thead>
<tr><th>번호</th><th>이름</th><th>전화</th><th>이메일</th></tr>
<tbody>
<c:forEach items="${list}" var="item">
<tr><td>${item.no}</td><td><a href='detail?no=${item.no}'>${item.name}</a></td><td>${item.tel}</td><td>${item.email}</td></tr>
</c:forEach>
</tbody>

</table>
<jsp:include page="/footer.jsp"></jsp:include>
</body>
</html>

    