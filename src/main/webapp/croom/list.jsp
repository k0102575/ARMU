<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset='UTF-8'>
<title>교실관리</title>
<jsp:include page="/coreStyle.jsp"></jsp:include>
</head>
<body>
<jsp:include page="/header.jsp"></jsp:include>
<h1>교실 목록</h1>
<a href='form'>새교실</a>
<a href='../member/list'>회원목록</a>
<table border='1'>
<thead>
<tr><th>번호</th><th>이름</th></tr>
<tbody>
<c:forEach items="${list}" var="item">
<tr><td>${item.no}</td><td><a href='detail?no=${item.no}'>${item.name}</a></td></tr>
</c:forEach>
</tbody>
</table>
<jsp:include page="/footer.jsp"></jsp:include>
</body>
</html>
