이벤트 홍보 리스트 받아오기
select even.eno, even.pay, even.date, even.title, loct.name as loctname, loc.name as locname, even.addr, if(prc.prno is not null, 1, 0) as pr_count, if(mtc.mtcno is not null, 1, 0) as mtc_info
from evn even
left outer join loc loc on even.locno = loc.locno
left outer join loc_type loct on loc.loctno = loct.loctno
left outer join
(select prno, muno, eno
from pr
group by muno, eno
having muno = 2 
) prc on even.eno = prc.eno
left outer join mtc mtc on even.eno = mtc.eno
where even.mno = 6

이벤트 탐색 리스트

select e.eno, e.locno, e.pay, e.addr, e.date, e.title, fe.fav,
      m.mno, m.path, mj.name as major, g.name as genre, t.name as theme
      from evn e left outer join memb m on e.mno = m.mno
      left outer join (
      select count(if(muno is not null, 1, 0)) as fav, muno, eno
      from fav_evn where muno=#{no} group by eno
      ) fe on fe.eno=e.eno
      left outer join mjr_evn me on e.eno=me.eno inner join mjr mj on me.mjrno=mj.mjrno
      left outer join gnr_evn ge on e.eno=ge.eno inner join gnr g on ge.gnrno=g.gnrno
      left outer join thm_evn te on e.eno=te.eno inner join thm t on te.thmno=t.thmno
