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
select count(if(gno is not null, 1, 0)) as fav, gno, muno
from fav_musi
where gno=6
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
inner join evn e on n.eno=e.eno inner join memb gm on e.gno=gm.mno
where muno=3
order by date desc
