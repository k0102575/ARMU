insert into appy (muno, eno, active) values (50, 28, 'Y');

insert into pr (muno, eno, active) values (43, 28, 'Y');
insert into pr (muno, eno, active) values (60, 28, 'Y');
insert into pr (muno, eno, active) values (68, 28, 'Y');



-----------------------------------------------------------------------------


update evn set date='2017-08-29' where eno=28;


insert into noti (muno, eno, type, date, cont, isread, whom) 
values (1, 28, 'evn_today', now(), '이벤트 당일', 'N', 'both');


insert into spec (muno, spdt, dscp) values(1, '2017-08-29', '"결혼식 축가 구해요" 이벤트에 참여한 내용입니다.');

