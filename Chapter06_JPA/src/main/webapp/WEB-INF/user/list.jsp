<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<h1><img alt="" src="../img/camera.png" width="100" height="100" style="cursor: pointer;" onclick="location.href='../'">리스트</h1>
<hr>
<table border="1" id="userListTable">
	<tr>
		<th width="150">이름</th>
		<th width="150">아이디</th>
		<th width="200">비밀번호</th>
	</tr>
	<!-- 동적처리 -->
</table>

<div style="margin-top: 20px; width: 470px; text-align: center">
	<form id="searchForm">
		<select id="searchOption" name="searchOption">
			<option value="name">이름</option>
			<option value="id">아이디</option>
		</select>
		<input type="text" id="keyword" name="keyword">
		<input type="button" id="searchBtn" value="검색">
	</form>
</div>

<script type="text/javascript" src="http://code.jquery.com/jquery-3.6.1.min.js"></script>
<script type="text/javascript" src="../js/list.js"></script>

</body>
</html>