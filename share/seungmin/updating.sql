select even.eno, even.pay, even.date, even.title, loct.name as loctname, loc.name as locname, even.addr
from evn even
left outer join loc loc on even.locno = loc.locno
left outer join loc_type loct on loc.loctno = loct.loctno
left outer join pr pr on even.eno = pr.eno where even.mno = 6 and pr.muno = 1



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
