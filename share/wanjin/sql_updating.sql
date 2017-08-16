-- 전공, 테마, 장르를 or조건으로 검사하여 하나라도 같은게 있으면 해당 이벤트를 추천함. >= 오늘날짜 & exclude 매칭된 이벤트
select e.title, e.eno, e.date,  concat(lt.name, ' ', l.name) as location, e.addr, e.pay,
  mj.name as major, g.name as genre, t.name as theme,
  fe.fav, m.mno, m.name, m.path
  from (select * from evn where date >= curdate() and eno not in (select eno from mtc) order by date asc) e
  left outer join (
    select count(if(muno is not null, 1, 0)) as fav, muno, eno
    from fav_evn where muno=3 group by eno
  ) fe on fe.eno=e.eno
  inner join memb m on e.gno=m.mno
  inner join loc l on e.locno=l.locno inner join loc_type lt on l.loctno=lt.loctno
  left outer join mjr_evn me on e.eno=me.eno inner join mjr mj on me.mjrno=mj.mjrno
  left outer join gnr_evn ge on e.eno=ge.eno inner join gnr g on ge.gnrno=g.gnrno
  left outer join thm_evn te on e.eno=te.eno inner join thm t on te.thmno=t.thmno
  left outer join mjr_musi mjm on mj.mjrno=mjm.mjrno
  left outer join gnr_musi gm on g.gnrno=gm.gnrno
  left outer join thm_musi tm on t.thmno=tm.thmno
  where (mjm.muno=3 or gm.muno=3 or tm.muno=3)



-- 지역 전체 구하기
select concat(lt.name, ' ', l.name) as location
from loc l left outer join loc_type lt on l.loctno=lt.loctno


-- 특정 뮤지션의 관심 이벤트 구하기
select count(if(muno is not null, 1, 0)) as fav, muno, eno
from fav_evn
where muno=3
group by eno

-- 특정 일반인의 관심 뮤지션 구하기
select count(if(mno is not null, 1, 0)) as fav, mno, muno
from fav_musi
where mno = 4
group by muno

-- 관심 뮤지션 데이터를 통해 인기 있는 뮤지션 구하기
select count(if(muno is not null, 1, 0)) as popu, muno
from fav_musi
group by muno


-- 인기 테마
select pt.no as theme_no, t.name as theme, count(pt.no) as theme_count
from (
select tm.thmno as no, fm.muno
from thm_musi tm inner join fav_musi fm on tm.muno=fm.muno
) pt inner join thm t on pt.no=t.thmno
group by pt.no;

-- 인기 전공
select pmj.no as major_no, mj.name as major, count(pmj.no) as major_count
from (
select mjm.mjrno as no, fm.muno
from mjr_musi mjm inner join fav_musi fm on mjm.muno=fm.muno
) pmj inner join mjr mj on pmj.no=mj.mjrno
group by pmj.no;

-- 인기 장르
select pg.no as genre_no, g.name as genre, count(pg.no) as genre_count
from (
select gm.gnrno as no, fm.muno
from gnr_musi gm inner join fav_musi fm on gm.muno=fm.muno
) pg inner join gnr g on pg.no=g.gnrno
group by pg.no;


-- 인기 분야 탑10 구하기 - 기준: 관심 뮤지션이 많은 뮤지션의 분야
select pt.no as no, t.name as tag, count(pt.no) as count, if(pt.no is not null, "theme", "") as type
from (
select tm.thmno as no, fm.muno
from thm_musi tm inner join fav_musi fm on tm.muno=fm.muno
) pt inner join thm t on pt.no=t.thmno
group by pt.no

union

select pmj.no as no, mj.name as tag, count(pmj.no) as count, if(pmj.no is not null, "major", "") as type
from (
select mjm.mjrno as no, fm.muno
from mjr_musi mjm inner join fav_musi fm on mjm.muno=fm.muno
) pmj inner join mjr mj on pmj.no=mj.mjrno
group by pmj.no

union
select pg.no as no, g.name as tag, count(pg.no) as count, if(pg.no is not null, "genre", "") as type
from (
select gm.gnrno as no, fm.muno
from gnr_musi gm inner join fav_musi fm on gm.muno=fm.muno
) pg inner join gnr g on pg.no=g.gnrno
group by pg.no

order by count desc
limit 10;



-- 최근 이벤트 리스트 가져오기
select e.title, e.eno, e.date,  concat(lt.name, ' ', l.name) as location, e.addr, e.pay,
 mj.name as major, g.name as genre, t.name as theme,
 fe.fav, m.mno, m.name, m.path
 from (select * from evn where date >= curdate() and eno not in (select eno from mtc) order by date desc limit 3) e
 inner join memb m on e.gno=m.mno
 inner join loc l on e.locno=l.locno inner join loc_type lt on l.loctno=lt.loctno
 left outer join mjr_evn me on e.eno=me.eno
 left outer join gnr_evn ge on e.eno=ge.eno
 left outer join thm_evn te on e.eno=te.eno
 inner join mjr mj on me.mjrno=mj.mjrno
 inner join gnr g on ge.gnrno=g.gnrno
 inner join thm t on te.thmno=t.thmno
left outer join (
select count(if(muno is not null, 1, 0)) as fav, muno, eno
from fav_evn
where muno=3
group by eno
) fe on fe.eno=e.eno


-- 최근 등록된 이벤트 가져오기
 select e.eno, e.title, e.date
 from evn e
 where e.date >=curdate()


-- 특정 뮤지션의 알림 최신순으로 가져오기
select  notino, n.type, n.date, n.cont, gm.mno as gmno, gm.name gmname, n.eno, e.title, n.muno as musino, m.name as musiname
from noti n
inner join memb m on n.muno=m.mno
inner join evn e on n.eno=e.eno inner join memb gm on e.mno=gm.mno
where muno=3
order by date desc

-- 특정 회원의 알림 최신순으로 가져오기
select  notino, n.type, n.date, n.cont, gm.mno as gmno, gm.name gmname, n.eno, e.title, n.muno as musino, m.name as musiname
from noti n
inner join memb m on n.muno=m.mno
inner join evn e on n.eno=e.eno inner join memb gm on e.mno=gm.mno
where gm.mno=4
order by date desc

select  notino, n.type, n.date, n.cont, n.eno, e.title,
  gm.mno as gmno, gm.name as gmname, gm.path as gmphoto,
  n.muno as musino, m.name as musiname, m.path as musiphoto
from noti n
inner join memb m on n.muno=m.mno
inner join evn e on n.eno=e.eno inner join memb gm on e.gno=gm.mno
where n.muno=3
order by date desc


-- list Recommand 추천 뮤지션 리스트 가져오기
  select mum.mno, mum.name, mum.nick, mu.team, mum.path, fm.fav, if(mtc.score is not null, mtc.score, 0) as score,
  tag.mjrno, tag.thmno, tag.gnrno, tag.major, tag.theme, tag.genre
  from musi mu
  inner join memb mum on mu.muno=mum.mno
  left outer join mjr_musi mjm on mu.muno=mjm.muno
  left outer join thm_musi tm on mu.muno=tm.muno
  left outer join gnr_musi gm on mu.muno=gm.muno
  inner join (
    select e.eno, e.title, m.name as writer,
    mjr.mjrno, mjr.name as major, thm.thmno, thm.name as theme, gnr.gnrno, gnr.name as genre
    from (
      select * from evn where date >= curdate() order by date asc
    ) e inner join memb m on m.mno=e.mno
    left outer join mjr_evn on e.eno=mjr_evn.eno inner join mjr on mjr.mjrno=mjr_evn.mjrno
    left outer join thm_evn on e.eno=thm_evn.eno inner join thm on thm.thmno=thm_evn.thmno
    left outer join gnr_evn on e.eno=gnr_evn.eno inner join gnr on gnr.gnrno=gnr_evn.gnrno
    where e.mno=4
  ) tag on (tag.mjrno=mjm.mjrno and tag.thmno=tm.thmno) or
           (tag.gnrno=gm.gnrno and tag.thmno=tm.thmno) or
           (tag.gnrno=gm.gnrno and tag.mjrno=mjm.mjrno)
  left outer join (
    select count(if(mno is not null, 1, 0)) as fav, mno, muno
    from fav_musi
    where mno = 4
    group by muno
  ) fm on fm.muno=mu.muno
  left outer join (
    select avg(score) as score, muno
    from mtc
    group by muno
  ) mtc on mtc.muno=mu.muno


-- 특정 일반회원이 작성한 이벤트(>오늘날짜)의 모든 장르, 테마, 전공 리스트 가져오기
select e.eno, e.title, m.name as writer,
mjr.mjrno, mjr.name as major, thm.thmno, thm.name as theme, gnr.gnrno, gnr.name as genre
from (select * from evn where date >= curdate() order by date asc) e inner join memb m on m.mno=e.mno
left outer join mjr_evn on e.eno=mjr_evn.eno inner join mjr on mjr.mjrno=mjr_evn.mjrno
left outer join thm_evn on e.eno=thm_evn.eno inner join thm on thm.thmno=thm_evn.thmno
left outer join gnr_evn on e.eno=gnr_evn.eno inner join gnr on gnr.gnrno=gnr_evn.gnrno
where e.mno=4

-- 위와 같음
select e.eno, e.title, mjr.name, thm.name, gnr.name
from evn e
inner join memb m on m.mno=e.mno
left outer join mjr_evn on e.eno=mjr_evn.eno inner join mjr on mjr.mjrno=mjr_evn.mjrno
left outer join thm_evn on e.eno=thm_evn.eno inner join thm on thm.thmno=thm_evn.thmno
left outer join gnr_evn on e.eno=gnr_evn.eno inner join gnr on gnr.gnrno=gnr_evn.gnrno
where date >= curdate() and e.mno=4 order by date asc



-- 뮤지션별로 별점 가져오기
select avg(score) as score, muno
from mtc
group by muno


-- list BestReview Musicians 높은 평점의 리뷰를 받은 뮤지션의 정보와 해당 리뷰 가져오기
select mt.mtcno, mt.eno, mt.muno, mt.score,
mum.nick, mum.path, mj.name as major, g.name as genre, t.name as theme
from musi mu inner join (
  select m.mtcno, m.eno, m.muno, m.score, m.rev
  from (
    select max(score) as score, muno,
    substring_index(group_concat(mtcno order by score desc), ',', 1) as mtcno
    from mtc
    group by muno
    order by score desc
  ) dmtc inner join mtc m on dmtc.mtcno=m.mtcno
  order by m.score desc
  limit 3
) mt on mt.muno=mu.muno
inner join memb mum on mu.muno=mum.mno
left outer join mjr_musi mjm on mu.muno=mjm.muno
left outer join gnr_musi gm on mu.muno=gm.muno
left outer join thm_musi tm on mu.muno=tm.muno
inner join mjr mj on mjm.mjrno=mj.mjrno
inner join gnr g on gm.gnrno=g.gnrno
inner join thm t on tm.thmno=t.thmno



-- list popular musicians 관심 뮤지션으로 가장 많이 등록된 뮤지션부터 4명 가져오기
select mum.mno, mum.nick, mum.path, sc.score, mj.name as major, g.name as genre, t.name as theme
from musi mu
inner join memb mum on mu.muno=mum.mno
inner join (
  select count(if(muno is not null, 1, 0)) as popu, muno
  from fav_musi
  group by muno
  order by popu desc
  limit 4
) pomu on pomu.muno = mu.muno
left outer join (
  select avg(score) as score, muno
  from mtc
  group by muno
) sc on sc.muno=mu.muno
left outer join mjr_musi mjm on mu.muno=mjm.muno
left outer join gnr_musi gm on mu.muno=gm.muno
left outer join thm_musi tm on mu.muno=tm.muno
inner join mjr mj on mjm.mjrno=mj.mjrno
inner join gnr g on gm.gnrno=g.gnrno
inner join thm t on tm.thmno=t.thmno
order by mu.muno desc



-- 매칭정보 확인하기
select mtcno, e.mno, e.eno,title, muno, mtcdt from mtc inner join evn e on mtc.eno=e.eno order by mtcdt asc;


-- 특정 회원과 뮤지션의 채팅내역 가져오기
select chatno, isread, date, msg, c.muno, c.mno, who,
mu.mno as musino, mu.name as musiname, musi.nick as musinick, mu.path as musiphoto,
m.mno as gmno, m.name as gmname, m.path as gmphoto
from chat c
inner join memb mu on c.muno=mu.mno inner join musi on mu.mno=musi.muno
inner join memb m on c.mno=m.mno
where c.mno=5 and c.muno=1
order by date asc

-- 위와 같음
select chatno, isread, cast(date as date) as date, cast(date as time) as time, msg, c.muno, c.mno, who,
mu.mno as musino, mu.name as musiname, musi.nick as musinick, mu.path as musiphoto,
m.mno as gmno, m.name as gmname, m.path as gmphoto
from chat c
inner join memb mu on c.muno=mu.mno inner join musi on mu.mno=musi.muno
inner join memb m on c.mno=m.mno
where c.mno=4 and c.muno=11
order by date asc



-- 특정 회원의 전체 뮤지션과의 채팅 목록 가져오기
select c.mno as sender, mu.mno as receiver, musi.nick as nick, mu.path,
cast(c.date as date) as date, cast(c.date as time) as time, c.msg, e.date as edate, e.status, c.unread
from memb mu inner join (
  select mno, muno,
  substring_index(group_concat(date order by date desc), ',', 1) as date,
  substring_index(group_concat(msg order by date desc), ',', 1) as msg,
  sum(if(isread='N',if(who=muno, 1, 0), 0)) as unread
  from chat
  group by mno, muno
  having mno=5
) c on mu.mno=c.muno
inner join musi on mu.mno=musi.muno
inner join (
  select muno, max(date) as date, if(max(date) < curdate(), '완료', '진행중') as status
  from (
    select mt.muno, e.eno, e.date as date
    from mtc mt inner join evn e on (mt.eno=e.eno and e.mno=5)
    inner join memb m on e.mno=m.mno
  ) e
  group by e.muno
) e on mu.mno=e.muno
order by e.date desc



-- 날짜 포맷대로 가져오기
select date_format(date, '%Y-%m-%d') from evn;





-- 특정 전공 타입에 따라 뮤지션 정보 가져오기
select memb.mno, memb.name, mj.name, g.name, t.name, mjt.name
from musi mu inner join memb on mu.muno=memb.mno
left outer join mjr_musi mjm on mu.muno=mjm.muno
left outer join gnr_musi gm on mu.muno=gm.muno
left outer join thm_musi tm on mu.muno=tm.muno
inner join mjr mj on mjm.mjrno=mj.mjrno
inner join gnr g on gm.gnrno=g.gnrno
inner join thm t on tm.thmno=t.thmno
left outer join mjr_type mjt on mj.mjrtno=mjt.mjrtno
where mjt.mjrtno=1




-- 특정 뮤지션의 채팅 리스트 가져오기
select c.mno as receiver, c.muno as sender, gm.name as nick, gm.path,
cast(c.date as date) as date, cast(c.date as time) as time, c.msg, e.date as edate,
e.status, c.unread, 1 as ismusi
from memb gm inner join (
  select mno, muno,
  substring_index(group_concat(date order by date desc), ',', 1) as date,
  substring_index(group_concat(msg order by date desc), ',', 1) as msg,
  sum(if(isread='N', 1, 0)) as unread
  from chat
  group by mno, muno
  having muno=11
) c on gm.mno=c.mno
inner join (
  select mno, max(date) as date, if(max(date) < curdate(), '완료', '진행중') as status
  from (
    select e.mno, e.eno, e.date as date
    from mtc mt inner join evn e on (mt.eno=e.eno and mt.muno=11)
    inner join memb m on e.mno=m.mno
  ) e
  group by e.mno
) e on gm.mno=e.mno
order by e.date desc


-- 특정 뮤지션 채팅내역 가져오기
select chatno, isread, date, msg, c.muno, c.mno, who,
mu.mno as musino, mu.name as musiname, musi.nick as musinick, mu.path as musiphoto,
m.mno as gmno, m.name as gmname, m.path as gmphoto
from chat c
inner join memb mu on c.muno=mu.mno inner join musi on mu.mno=musi.muno
inner join memb m on c.mno=m.mno
where c.mno=5 and c.muno=11
 -- and isread='N'
order by date asc



-- 채팅 테스트용
insert into chat (muno, mno, isread, msg, date, who) values (11, 3, 'N','빨간건현악이 뮤지션임~', '2017-06-19 17:12:03', 11);
insert into chat (muno, mno, isread, msg, date, who) values (11, 3, 'N','빨간건현악이 뮤지션임~', '2017-06-19 17:12:03', 3);
insert into chat (muno, mno, isread, msg, date, who) values (3, 11, 'N','오호라가 뮤지션임~', '2017-06-19 17:12:03', 11);
insert into chat (muno, mno, isread, msg, date, who) values (3, 11, 'N','오호라가 뮤지션임~', '2017-06-19 17:12:03', 3);




-- 채팅 읽음/안읽음 상태 업데이트하기
update chat set isread='N'
where mno=5 and muno=11 and isread='Y'



-- 특정 일반회원의 이벤트 기본정보 가져오기
select e.eno, e.title, e.date,  concat(lt.name, ' ', l.name) as location, e.addr, e.pay
from (select * from evn where date >= curdate() and eno not in (select eno from mtc) order by date asc) e
inner join memb m on e.mno=m.mno
inner join loc l on e.locno=l.locno inner join loc_type lt on l.loctno=lt.loctno
where m.mno=5


-- 나의 모집 중인 이벤트 리스트 가져오기
select e.eno, e.title, e.date, concat(lt.name, ' ', l.name) as location, e.addr, e.pay,
mj.name as major, g.name as genre, t.name as theme
from (select * from evn where date >= curdate() and eno not in (select eno from mtc) order by date asc) e
inner join memb m on e.mno=m.mno
inner join loc l on e.locno=l.locno inner join loc_type lt on l.loctno=lt.loctno
left outer join mjr_evn me on e.eno=me.eno inner join mjr mj on me.mjrno=mj.mjrno
left outer join gnr_evn ge on e.eno=ge.eno inner join gnr g on ge.gnrno=g.gnrno
left outer join thm_evn te on e.eno=te.eno inner join thm t on te.thmno=t.thmno
where m.mno=5



-- 모든 모집 중인 이벤트 리스트 뷰 생성하기
create view recruiting_eventlist as
select e.eno, e.mno, e.title, e.date, concat(lt.name, ' ', l.name) as location, e.addr, e.pay,
mj.name as major, g.name as genre, t.name as theme
from (select * from evn where date >= curdate() and eno not in (select eno from mtc) order by date asc) e
inner join memb m on e.mno=m.mno
inner join loc l on e.locno=l.locno inner join loc_type lt on l.loctno=lt.loctno
left outer join mjr_evn me on e.eno=me.eno inner join mjr mj on me.mjrno=mj.mjrno
left outer join gnr_evn ge on e.eno=ge.eno inner join gnr g on ge.gnrno=g.gnrno
left outer join thm_evn te on e.eno=te.eno inner join thm t on te.thmno=t.thmno

-- 모든 뮤지션의 모든 정보를 담은 뷰 생성하기
create view musicians as
select mu.muno, m.name, m.path, mu.nick, mu.age, mu.team, mu.hpg, mu.intro, mu.gender, score.score,
mj.name as major, g.name as genre, t.name as theme
from memb m inner join musi mu on m.mno=mu.muno
left outer join mjr_musi mjm on mu.muno=mjm.muno inner join mjr mj on mjm.mjrno=mj.mjrno
left outer join gnr_musi gm on mu.muno=gm.muno inner join gnr g on gm.gnrno=g.gnrno
left outer join thm_musi tm on mu.muno=tm.muno inner join thm t on tm.thmno=t.thmno
left outer join (
  select avg(score) as score, muno
  from mtc
  group by muno
) score on score.muno=mu.muno



-- 이벤트 목록과 연결된 PR 뮤지션 리스트 뷰 생성하기
create view eventlist_pr_musicians as
select e.eno, e.mno, e.title, e.date, e.location, e.addr, e.pay, e.major, e.genre, e.theme,
pr.prno, mu.muno, mu.name, mu.path, mu.score,
mu.major as mu_major, mu.genre as mu_genre, mu.theme as mu_theme
from recruiting_eventlist e
left outer join pr on e.eno=pr.eno
left outer join musicians mu on pr.muno=mu.muno



-- 이벤트 목록과 연결된 APPY 뮤지션 리스트 뷰 생성하기
create view eventlist_appy_musicians as
select e.eno, e.mno, e.title, e.date, e.location, e.addr, e.pay, e.major, e.genre, e.theme,
appy.appyno, mu.muno, mu.name, mu.path, mu.score,
mu.major as mu_major, mu.genre as mu_genre, mu.theme as mu_theme
from recruiting_eventlist e
left outer join appy on e.eno=appy.eno
left outer join musicians mu on appy.muno=mu.muno



-- 나의 이벤트(모집 중인 이벤트)에 대하여 내가 지원을 요청한(PR) 뮤지션 리스트 가져오기
select p.eno, p.title, p.date, p.location, p.addr, p.pay, p.major, p.genre, p.theme,
p.prno, p.muno, p.name, p.path, p.score, p.mu_major, p.mu_genre, p.mu_theme, fav.fav
from eventlist_pr_musicians p
left outer join (
  select count(if(mno is not null, 1, 0)) as fav, mno, muno
  from fav_musi
  where mno = 5
  group by muno
) fav on fav.muno=p.muno
where p.mno=5


-- 나의 특정 이벤트(모집 중인 이벤트)에 지원한(APPY) 뮤지션 리스트 가져오기
select ap.eno, ap.title, ap.date, ap.location, ap.addr, ap.pay, ap.major, ap.genre, ap.theme,
ap.appyno, ap.muno, ap.name, ap.path, ap.score, ap.mu_major, ap.mu_genre, ap.mu_theme, fav.fav
from eventlist_appy_musicians ap
left outer join (
  select count(if(mno is not null, 1, 0)) as fav, mno, muno
  from fav_musi
  where mno = 5
  group by muno
) fav on fav.muno=ap.muno
where ap.mno=5


-- 나의 모집 중인 이벤트 리스트 & 각 이벤트의 지원자 리스트 & 각 이벤트의 요청자 리스트 모두 가져오기
select p.eno, p.title, p.date, p.location, p.addr, p.pay, p.major, p.genre, p.theme,
p.prno, p.muno, p.name, p.path, p.score, p.mu_major, p.mu_genre, p.mu_theme,
ap.appyno, ap.muno, ap.name, ap.path, ap.score, ap.mu_major, ap.mu_genre, ap.mu_theme
from eventlist_pr_musicians p left outer join eventlist_appy_musicians ap on p.eno=ap.eno
where p.mno=5
-- => 안됨
