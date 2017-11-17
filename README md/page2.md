# 2. 채팅

## 페이지 소개
* 뮤지션 회원과 일반회원이 매칭 후에 연락처를 주고 받거나 이벤트에 대해 이야기를 나누는등 서로 대화 할수있는 화면입니다.
<br><br>

## 구동원리 
* NodeJs 마이크로 서버를 따로 두어, 메인 웹 서버에 발생할 수 있는 과부화 현상을 방지합니다.
* 웹소켓(web socket)통신을 통해 json 형식의 데이터를 주고 받습니다.
* 날짜가 바뀌거나 시간이 바뀌는 경우 표시합니다.
* 읽음/안읽음 상태를 표시합니다.
<br><br>

## 페이지 화면<br>
&nbsp;<img src="/README%20Image/page2-1.PNG" width="350" height="500">&emsp;&emsp;
<img src="/README%20Image/page2-2.PNG" width="350" height="500"><br><br>
&nbsp;<img src="/README%20Image/page2-3.PNG" width="350" height="500">&emsp;&emsp;
<img src="/README%20Image/page2-4.PNG" width="350" height="500">
<br><br>

## 사용기술
* NodeJs, express framework, body-parser, express-ws, animsition, moment.js, jqueryUI<br><br>

## [ARMU (돌아가기)](https://github.com/k0102575/ARMU)<br>
