select m.name, t.name as theme, mj.name as major, g.name as genre,
eno, title, gno
from musi mu inner join memb m on mu.muno=m.mno
left outer join mjr_musi mjm on mu.muno=mjm.muno left outer join mjr mj on mjm.mjrno=mj.mjrno
left outer join gnr_musi gm on mu.muno=gm.muno left outer join gnr g on gm.gnrno=g.gnrno
left outer join thm_musi tm on mu.muno=tm.muno left outer join thm t on tm.thmno=t.thmno
left outer join evn e on e.thmno=t.thmno or e.mjrno=mj.mjrno
where e.gno=5

from (select title, e.thmno, t.name as theme, e.mjrno, mj.name as major, e.gnrno, g.name as genre, e.gno
from evn e inner join thm t on e.thmno=t.thmno
inner join mjr mj on e.mjrno=mj.mjrno
inner join gnr g on e.gnrno=g.gnrno
where e.gno=5) a
left outer join mjr_musi mjm on a.mjrno=mjm.mjrno

select title, e.thmno, t.name as theme, e.mjrno, mj.name as major, e.gnrno, g.name as genre, e.gno
from evn e inner join thm t on e.thmno=t.thmno
inner join mjr mj on e.mjrno=mj.mjrno
inner join gnr g on e.gnrno=g.gnrno
left outer join mjr_musi mjm on mj.mjrno=mjm.mjrno
left outer join thm_musi tm on t.thmno=tm.thmno
where e.gno=5


left outer join



select m.mno, m.nick, mu.team, mu.path,
mj.name as major, g.name as genre, t.name as theme, mtc.score,
fm.popu, fm2.fav
from musi mu inner join memb m on mu.muno=m.mno
left outer join mjr_musi mjm on mu.muno=mjm.muno left outer join mjr mj on mjm.mjrno=mj.mjrno
left outer join gnr_musi gm on mu.muno=gm.muno left outer join gnr g on gm.gnrno=g.gnrno
left outer join thm_musi tm on mu.muno=tm.muno left outer join thm t on tm.thmno=t.thmno
left outer join mtc on mtc.muno=mu.muno
left outer join (
select count(if(muno is not null, 1, 0)) as popu, muno
from fav_musi
group by muno
) fm on fm.muno=mu.muno left outer join (
  select count(if(muno is not null, 1, 0)) as fav, muno, gno
  from fav_musi
  where gno=5
  group by muno ) fm2 on fm2.muno=mu.muno
order by m.name asc






select e.eno, title, t.name as theme, mj.name as major, g.name as genre,
l.name as location, addr, e.pay, date, m.mno, m.name, mu.path as path,
mj2.name as major2, g2.name as genre2, t2.name as theme2
from evn e inner join thm t on e.thmno=t.thmno
inner join mjr mj on e.mjrno=mj.mjrno
inner join gnr g on e.gnrno=g.gnrno
inner join loc l on e.locno=l.locno
inner join mtc mt on  e.eno=mt.eno
inner join memb m on mt.muno=m.mno
inner join musi mu on m.mno=mu.muno
left outer join mjr_musi mjm on mu.muno=mjm.muno left outer join mjr mj2 on mjm.mjrno=mj2.mjrno
left outer join gnr_musi gm on mu.muno=gm.muno left outer join gnr g2 on gm.gnrno=g2.gnrno
left outer join thm_musi tm on mu.muno=tm.muno left outer join thm t2 on tm.thmno=t2.thmno
order by title asc





mj2.name as major2, g2.name as genre2, t2.name as theme2, m.mno, m.name

-- 전공, 테마, 장르를 or조건으로 검사하여 하나라도 같은게 있으면 해당 이벤트를 추천함.
select e.title, e.eno, mj.name as major, g.name as genre, t.name as theme
from evn e
left outer join mjr_evn me on e.eno=me.eno
left outer join gnr_evn ge on e.eno=ge.eno
left outer join thm_evn te on e.eno=te.eno
left outer join mjr mj on me.mjrno=mj.mjrno
left outer join gnr g on ge.gnrno=g.gnrno
left outer join thm t on te.thmno=t.thmno
left outer join mjr_musi mjm on mj.mjrno=mjm.mjrno
left outer join gnr_musi gm on g.gnrno=gm.gnrno
left outer join thm_musi tm on t.thmno=tm.thmno
where mjm.muno=3 or gm.muno=3 or tm.muno=3
order by title asc


-- 지역 전체 구하기
select concat(lt.name, ' ', l.name) as location
from loc l left outer join loc_type lt on l.loctno=lt.loctno



select e.title, e.eno, l.name, mj.name as major, g.name as genre, t.name as theme, m.name
from evn e
inner join memb m on e.gno=m.mno
inner join loc l on e.locno=l.locno left outer join loc_type lt on l.loctno=lt.loctno
left outer join mjr_evn me on e.eno=me.eno
left outer join gnr_evn ge on e.eno=ge.eno
left outer join thm_evn te on e.eno=te.eno
left outer join mjr mj on me.mjrno=mj.mjrno
left outer join gnr g on ge.gnrno=g.gnrno
left outer join thm t on te.thmno=t.thmno
left outer join mjr_musi mjm on mj.mjrno=mjm.mjrno
left outer join gnr_musi gm on g.gnrno=gm.gnrno
left outer join thm_musi tm on t.thmno=tm.thmno
left outer join (
select count(if(muno is not null, 1, 0)) as fav, muno, eno
from fav_evn
where muno=1
group by eno) fe on fe.eno=e.eno
where mjm.muno=3 or gm.muno=3 or tm.muno=3
		order by title asc
