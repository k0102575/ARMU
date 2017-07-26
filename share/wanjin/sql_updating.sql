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
