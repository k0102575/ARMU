<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<!DOCTYPE html>
<html>
<head>
<meta charset='UTF-8'>
<title>강의관리</title>
<jsp:include page="/coreStyle.jsp"></jsp:include>
</head>
<body>
<jsp:include page="/header.jsp"></jsp:include>
<h1>강의 목록</h1>
<a href='form.html'>새회원</a>
<a href='../member/list'>회원목록</a>
<table border='1'>
<thead>
<tr>
<th>번호</th><th>강의명</th><th>설명</th><th>시작일</th>
<th>종료일</th><th>총 수강인원</th><th>수강료</th><th>총시간</th>
</tr>
<tbody>
<c:forEach items="${list}" var="item">
<tr>
<td>${item.no}</td>
<td><a href='detail?no=${item.no}'>${item.titl}</a></td>
<td>${item.dscp}</td>
<td>${item.sdt}</td>
<td>${item.edt}</td>
<td>${item.qty}</td>
<td>${item.pric}</td>
<td>${item.thrs}</td>
</tr>
</c:forEach>
</tbody>

</table>
<jsp:include page="/footer.jsp"></jsp:include>
</body>
</html>