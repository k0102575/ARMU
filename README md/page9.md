# 9. 일반모드 - 뮤지션 탐색/검색

## 페이지 소개
* 뮤지션 탐색 : 일반회원이 여러 방법으로 원하는 조건을 걸어, 뮤지션을 탐색하는 화면입니다<br>
* 뮤지션 검색 : 일반회원이 키워드를 입력하여 원하는 뮤지션을 검색하는 화면입니다.
<br><br>

## 구동원리 
* 탐색 : mybatis에서 choose when을 통하여 필터링하여 데이터를 조건에 맞게 조회합니다.
* 검색 : 검색어를 입력할 때 마다 DB에서 like문을 이용하여 검색합니다.
<br><br>

## 페이지 화면<br>
&nbsp;<img src="/README%20Image/page9-1.PNG" width="350" height="500">&emsp;&emsp;
<img src="/README%20Image/page9-2.PNG" width="350" height="500"><br><br>
&nbsp;<img src="/README%20Image/page9-3.PNG" width="350" height="500">&emsp;&emsp;
<img src="/README%20Image/page9-4.PNG" width="350" height="500"><br><br>
&nbsp;<img src="/README%20Image/page9-5.PNG" width="350" height="500">&emsp;&emsp;
<br><br>

## 사용기술
* handlebars, jindo component, jqueryUI, sweetalert<br>

## [ARMU (돌아가기)](https://github.com/k0102575/ARMU)<br>