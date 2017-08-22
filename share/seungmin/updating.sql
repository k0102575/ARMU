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


      
  매치된 뮤지션 정보
  
select mu.muno, mu.nick, mm.path, fav.fav, score.score,
mj.name as major, g.name as genre, t.name as theme
from mtc mtc
left outer join musi mu on mtc.muno = mu.muno
left outer join memb mm on mu.muno = mm.mno
left outer join evn e on e.eno=mtc.eno 
left outer join mjr_musi mjm on mu.muno=mjm.muno inner join mjr mj on mjm.mjrno=mj.mjrno
left outer join gnr_musi gm on mu.muno=gm.muno inner join gnr g on gm.gnrno=g.gnrno
left outer join thm_musi tm on mu.muno=tm.muno inner join thm t on tm.thmno=t.thmno
left outer join (
  select count(if(mno is not null, 1, 0)) as fav, mno, muno
  from fav_musi
  where mno = #{myNo}
  group by muno
) fav on fav.muno=mu.muno
left outer join (
  select avg(score) as score, muno
  from mtc
  group by muno
) score on score.muno=mu.muno
where mtc.eno = #{eNo}
    
    
    
    
    
    
    
    
    
    
    