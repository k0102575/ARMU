insert into evn (active, title, mno, locno, pay, addr, date, cont, req)
values ("Y", "결혼식 축가구해요", 71, 23, 200000, '비트캠프 웨딩홀', '2017-09-30',
'결혼식 축가 구합니다', '신청곡은 10월의 어느 좋은날로 불러주세요');

insert into mjr_evn (eno, mjrno) values (28, 1);

insert into gnr_evn (eno, gnrno) values (28, 1);
insert into gnr_evn (eno, gnrno) values (28, 2);

insert into thm_evn (eno, thmno) values (28, 2);

insert into mtc (muno, eno, mtcdt, score, rev) values (1, 28, '2017-09-01', null,
null);