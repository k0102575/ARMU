# 16. 뮤지션모드 - 이벤트 탐색/검색

## 페이지 소개
* 이벤트 탐색 : 뮤지션 회원이 원하는 조건을 걸어, 이벤트를 탐색하는 화면입니다.
* 이벤트 검색 : 키워드를 입력하여 이벤트를 검색하여 화면입니다.

## 구동원리 
* 추천/탐색/내 활동 탭 이동시 마다 데이터를 가져올때 loading spinner를 이용 & <br>
   fadein/fadeout을 이용하여 부드럽게 화면 이동이 일어나도록 함
* 탐색 : mybatis에서 choose when을 통하여 필터링하여 데이터를 조건에 맞게 조회합니다.
* 검색 : 검색어를 입력할 때 마다 DB에서 like문을 이용하여 검색합니다.
<br><br>

## 페이지 화면
&nbsp;<img src="/README%20Image/page16-1.PNG" width="270" height="500">&emsp;
<img src="/README%20Image/page16-2.PNG" width="270" height="500">&emsp;
<img src="/README%20Image/page16-3.PNG" width="270" height="500"><br><br>
&nbsp;<img src="/README%20Image/page16-4.PNG" width="270" height="500">&emsp;
<br><br>

## 사용기술
* handlebars, handlebars-intl,jindo component, jqueryUI<br><br>

## [ARMU (돌아가기)](https://github.com/k0102575/ARMU)<br>
