# 3. 알림(활동내역)

## 페이지 소개
* 각 유저에게 이벤트 상황에 맞는 알림 목록을 보여주고, 쉽게 관련 화면으로 이동할 수 있는 화면입니다.
<br><br>

## 구동원리 
* DB 알림 테이블의 isRead 컬럼으로 읽기/여부 확인합니다.
* DB 알림 테이블의 whom 컬럼으로 모드에 맞춰 알림 설정합니다.
* SpringMvc Scheduling 설정으로 당일 이벤트에 알림을 표시합니다.
<br><br>

## 페이지 화면<br>
&nbsp;<img src="/README%20Image/page3-1.PNG" width="270" height="500">&emsp;
<img src="/README%20Image/page3-2.PNG" width="270" height="500">&emsp;
<img src="/README%20Image/page3-3.PNG" width="270" height="500"><br><br>

## 사용기술
* Spring scheuler, handlebars, moment.js

## [ARMU (돌아가기)](https://github.com/k0102575/ARMU)<br>
