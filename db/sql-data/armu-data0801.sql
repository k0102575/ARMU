
-- 뮤지션
insert into memb (name, nick, phone, pwd, email, path) values ('조승우', '조승우', '010-1234-1234',  password('1111'), 'seungwoojo@daum.net', '/image/musician/photo/0choi2.jpg');
insert into memb (name, nick, phone, pwd, email, path) values ('차지연', 'JIYEON CHA', '010-2424-3234',  password('1111'), 'jiyeon@daum.net', '/image/musician/photo/m1.jpg');
insert into memb (name, nick, phone, pwd, email, path) values ('오호라', '오호라밴드', '010-5555-5050',  password('1111'), 'ohora@gmail.com', '/image/musician/photo/band.jpg');

insert into musi (muno, age, team, gender, hpg, intro) values (1, 35, 'N', 'M','http://tistory.seungwoo.com', '저는 짱짱맨 조승우입니다. 조각같은 외모와 매력적인 목소리로 당신의 이벤트를 아름답게 만들어드리겠습니다!');
insert into musi (muno, age, team, gender, hpg, intro) values (2, 34, 'Y', 'F', 'http://tistory.jhlee.com', '안녕하세요. 임정희입니다. 저로 말할 것 같으면, 화려한 외모와 옥구슬같은 목소리로 당신의 이벤트를 아름답게 만들어드리겠습니다!');
insert into musi (muno, age, team, gender, hpg, intro) values (3, 28, 'Y', 'M', 'http://tistory.ohora.com', '저희 오호라 밴드는 다른 아마추어 팀들과는 차원이 다른 프로 밴드 그 이상의 실력으로 감동을 드리는 밴드입니다. 다재다능한 팀원들과 5년간 호흡을 맞춰 각종 공연을 많이 해봤습니다. 언제든 알뮤를 통해 연락주세요!!');

-- 전공 분류(mjr_type), 전공(mjr)
insert into mjr_type (name) values ('보컬');
insert into mjr_type (name) values ('피아노');
insert into mjr_type (name) values ('밴드');
insert into mjr_type (name) values ('현악');

insert into mjr (name, mjrtno) values ('남성 보컬', 1);
insert into mjr (name, mjrtno) values ('여성 보컬', 1);
insert into mjr (name, mjrtno) values ('보컬(팀)', 1);
insert into mjr (name, mjrtno) values ('성악 소프라노', 1);
insert into mjr (name, mjrtno) values ('성악 알토', 1);
insert into mjr (name, mjrtno) values ('성악 테너', 1);
insert into mjr (name, mjrtno) values ('성악 바리톤', 1);
insert into mjr (name, mjrtno) values ('성악 베이스', 1);
insert into mjr (name, mjrtno) values ('성악(팀)', 1);

insert into mjr (name, mjrtno) values ('클래식 피아노', 2);
insert into mjr (name, mjrtno) values ('실용음악 피아노', 2);

insert into mjr (name, mjrtno) values ('어쿠스틱 밴드(팀)', 3);
insert into mjr (name, mjrtno) values ('록 밴드(팀)', 3);

insert into mjr (name, mjrtno) values ('바이올린', 4);
insert into mjr (name, mjrtno) values ('비올라', 4);
insert into mjr (name, mjrtno) values ('첼로', 4);
insert into mjr (name, mjrtno) values ('콘트라베이스', 4);


-- 장르 분류(gnr_type), 장르(gnr)
insert into gnr_type (name) values ('클래식');
insert into gnr_type (name) values ('대중음악');
insert into gnr_type (name) values ('종교음악');
insert into gnr_type (name) values ('재즈/뉴에이지');
insert into gnr_type (name) values ('OST');
insert into gnr_type (name) values ('기타');

insert into gnr (name, gnrtno) values ('발라드', 2);
insert into gnr (name, gnrtno) values ('R&B', 2);
insert into gnr (name, gnrtno) values ('록/포크', 2);
insert into gnr (name, gnrtno) values ('힙합', 2);
insert into gnr (name, gnrtno) values ('어쿠스틱', 2);

insert into gnr (name, gnrtno) values ('CCM', 3);
insert into gnr (name, gnrtno) values ('교회합창', 3);

insert into gnr (name, gnrtno) values ('뮤지컬', 5);

insert into gnr (name, gnrtno) values ('보사노바', 4);
insert into gnr (name, gnrtno) values ('모던재즈', 4);
insert into gnr (name, gnrtno) values ('뉴에이지', 4);

insert into gnr (name, gnrtno) values ('실내악', 1);
insert into gnr (name, gnrtno) values ('가곡', 1);
insert into gnr (name, gnrtno) values ('아리아', 1);
insert into gnr (name, gnrtno) values ('클래식 연주곡', 1);
insert into gnr (name, gnrtno) values ('협주곡', 1);
insert into gnr (name, gnrtno) values ('교향곡', 1);




-- 테마 분류(thm_type), 테마(thm)
insert into thm_type (name) values ('결혼식');
insert into thm_type (name) values ('종교행사');
insert into thm_type (name) values ('연주회/공연');
insert into thm_type (name) values ('기타');

insert into thm (name, thmtno) values ('웨딩연주', 1);
insert into thm (name, thmtno) values ('결혼식 축가', 1);

insert into thm (name, thmtno) values ('교회 예배', 2);
insert into thm (name, thmtno) values ('교회 찬양대', 2);

insert into thm (name, thmtno) values ('연주회', 3);
insert into thm (name, thmtno) values ('축하공연', 3);

insert into thm (name, thmtno) values ('기업행사', 4);
insert into thm (name, thmtno) values ('대학교 축제', 4);
insert into thm (name, thmtno) values ('파티', 4);

insert into thm (name, thmtno) values ('졸업연주', 3);



-- 뮤지션 전공(mjr_musi)
insert into mjr_musi (muno, mjrno) values (1, 1);
insert into mjr_musi (muno, mjrno) values (2, 2);
insert into mjr_musi (muno, mjrno) values (3, 12);
insert into mjr_musi (muno, mjrno) values (3, 13);

-- 뮤지션 장르(gnr_musi)
insert into gnr_musi (muno, gnrno) values (1, 1);
insert into gnr_musi (muno, gnrno) values (1, 6);

insert into gnr_musi (muno, gnrno) values (2, 1);
insert into gnr_musi (muno, gnrno) values (2, 2);

insert into gnr_musi (muno, gnrno) values (3, 11);

-- 뮤지션 테마(thm_musi)
insert into thm_musi (muno, thmno) values(1, 2);
insert into thm_musi (muno, thmno) values(1, 6);

insert into thm_musi (muno, thmno) values(2, 2);
insert into thm_musi (muno, thmno) values(2, 6);
insert into thm_musi (muno, thmno) values(2, 7);
insert into thm_musi (muno, thmno) values(2, 8);

insert into thm_musi (muno, thmno) values(3, 6);
insert into thm_musi (muno, thmno) values(3, 7);
insert into thm_musi (muno, thmno) values(3, 8);
insert into thm_musi (muno, thmno) values(3, 1);


-- 지역 분류(loc_type), 지역(loc)
insert into loc_type (name) values ('서울');
insert into loc_type (name) values ('부산');
insert into loc_type (name) values ('대구');
insert into loc_type (name) values ('인천');
insert into loc_type (name) values ('광주');
insert into loc_type (name) values ('대전');
insert into loc_type (name) values ('울산');
insert into loc_type (name) values ('세종');
insert into loc_type (name) values ('경기');
insert into loc_type (name) values ('강원');
insert into loc_type (name) values ('충북');
insert into loc_type (name) values ('충남');
insert into loc_type (name) values ('전북');
insert into loc_type (name) values ('전남');
insert into loc_type (name) values ('경북');
insert into loc_type (name) values ('경남');
insert into loc_type (name) values ('제주');

insert into loc (name, loctno) values ('종로구', 1);
insert into loc (name, loctno) values ('중구', 1);
insert into loc (name, loctno) values ('용산구', 1);
insert into loc (name, loctno) values ('성동구', 1);
insert into loc (name, loctno) values ('광진구', 1);
insert into loc (name, loctno) values ('동대문구', 1);
insert into loc (name, loctno) values ('중랑구', 1);
insert into loc (name, loctno) values ('성북구', 1);
insert into loc (name, loctno) values ('강북구', 1);
insert into loc (name, loctno) values ('도봉구', 1);
insert into loc (name, loctno) values ('노원구', 1);
insert into loc (name, loctno) values ('은평구', 1);
insert into loc (name, loctno) values ('서대문구', 1);
insert into loc (name, loctno) values ('마포구', 1);
insert into loc (name, loctno) values ('양천구', 1);
insert into loc (name, loctno) values ('강서구', 1);
insert into loc (name, loctno) values ('구로구', 1);
insert into loc (name, loctno) values ('금천구', 1);
insert into loc (name, loctno) values ('영등포구', 1);
insert into loc (name, loctno) values ('동작구', 1);
insert into loc (name, loctno) values ('관악구', 1);
insert into loc (name, loctno) values ('서초구', 1);
insert into loc (name, loctno) values ('강남구', 1);
insert into loc (name, loctno) values ('송파구', 1);
insert into loc (name, loctno) values ('강동구', 1);

insert into loc (name, loctno) values ('중구', 2);
insert into loc (name, loctno) values ('서구', 2);
insert into loc (name, loctno) values ('남구', 2);
insert into loc (name, loctno) values ('동구', 2);
insert into loc (name, loctno) values ('영도구', 2);
insert into loc (name, loctno) values ('부산진구', 2);
insert into loc (name, loctno) values ('동래구', 2);
insert into loc (name, loctno) values ('북구', 2);
insert into loc (name, loctno) values ('해운대구', 2);
insert into loc (name, loctno) values ('사하구', 2);
insert into loc (name, loctno) values ('금정구', 2);
insert into loc (name, loctno) values ('강서구', 2);
insert into loc (name, loctno) values ('연제구', 2);
insert into loc (name, loctno) values ('수영구', 2);
insert into loc (name, loctno) values ('사상구', 2);
insert into loc (name, loctno) values ('기장군', 2);

insert into loc (name, loctno) values ('중구', 3);
insert into loc (name, loctno) values ('동구', 3);
insert into loc (name, loctno) values ('서구', 3);
insert into loc (name, loctno) values ('남구', 3);
insert into loc (name, loctno) values ('북구', 3);
insert into loc (name, loctno) values ('수성구', 3);
insert into loc (name, loctno) values ('달서구', 3);
insert into loc (name, loctno) values ('달성군', 3);

-- 일반회원
insert into memb (name, nick, phone, pwd, email, path) values ('엄진영', '엄신랑', '010-1111-2222',  password('1111'), 'jinyoungeom@gmail.com', '/image/musician/default.png');
insert into memb (name, nick, phone, pwd, email, path) values ('노완진', '기요미', '010-1313-7375',  password('1111'), 'wanzargen@gmail.com', '/image/musician/default.png');
insert into memb (name, nick, phone, pwd, email, path) values ('김승민', '몬나니', '010-3333-8091',  password('1111'), 'seungmin@gmail.com', '/image/musician/default.png');
insert into memb (name, nick, phone, pwd, email, path) values ('박규호', '뀨우호', '010-1423-4523',  password('1111'), 'gggyuu@gmail.com', '/image/musician/default.png');

-- 이벤트
insert into evn (title, mno, locno, pay, addr, date, cont)
values ("결혼식 축가 구해요~!", 4, 22, 200000, '딩댕동 553-5', '2017-08-20',
'의정부역 근처 예식장 4월 28일 오후 2시 예식에
축가 구합니다.
성악전공하신분이였으면 좋겠습니다.
학생도 가능하니 연락주세요^^
페이는 20만원입니다^^');

insert into evn (title, mno, locno, pay, addr, date, cont)
values ("결혼식 피아노 반주자를 구합니다!", 4, 14, 150000, '링딩동 113-1 샤이니웨딩홀', '2017-08-20',
'결혼식 피아노 반주자 구합니다.

10월 12일 2013 (SAT) / North Haledon

6:00PM - 6:30PM At the lobby - 피아노 반주
6:30PM : ceremony 키보드 반주 (찬송가 2곡 only/ 나머지 결혼예배때나오는 모든곡은 음향으로 나옵니다)

We have DJ/MC at Reception.

Palisades Park/Fort Lee 출발시 20분 소요

총 반주시간: 1 hour 정도.

용모 단정하신분이셨음 좋겟습니다.
오실때 정장 구두 하셔야 합니다.

쪽지, 이멜로 연락해주세요.
angie8102@gmail.com

연락처 꼭 남겨주세요~~~');

insert into evn (title, mno, locno, pay, addr, date, cont)
values ("창립기념행사에 모실 초청공연 연주자를 구합니다!", 4, 6, 300000, '용두동 222 (주)휴스턴', '2017-07-20',
'(주)휴스턴 창립 11주년 기념식

주제 : 창립 11주년 기념행사

일시 : 7월 20일 오후 8시 30분

장소 : 휴스턴 회사

주소 : 4606 Mangum Rd, Houston, TX 77092
');

insert into evn (title, mno, locno, pay, addr, date, cont)
values ("가든파티 연주자를 구합니다~~", 5, 8, 300000, '몰라동 131 몰라캠핑장', '2017-08-30',
'8월 30일에 모임에서 가든파티를 하는데, 연주가 함께 있는 파티를 하려고 합니다!
약 5시부터 8시까지 신나는 연주를 해주실 밴드를 모시고자 합니다.
금액은 협의하여 더 드릴 수 있습니다.
알뮤 메시지로 연락 부탁드려요!!
');

insert into evn (title, mno, locno, pay, addr, date, cont)
values ("졸업연주를 하는데, 악기연주자가 필요합니다.", 6, 8, 80000, '정릉로 77 국민대학교 경영대 1층 콘서트홀', '2017-11-21',
'저는 국민대학교 작곡과에 다니고 있는, 곧 졸업을 앞둔 학생입니다.
다름이 아니고, 졸업연주를 위해 오케스트라 연주자가 필요해요.
연주 날짜는 11월이지만, 지금부터 연습해서 합을 맞춰봐야 할 것 같습니다.
구하는 파트는 바이올린 파트입니다.
경력이 많이 필요하지는 않으니 전공자시라면 언제든 연락주세요.
학생도 대환영입니다.

아 그리고, 연주 전에 약 5번 정도 함께 맞춰보는 시간이 필요합니다.
당연히 5번의 연습에 대한 보수는 각각 5만원이 있구요,
사정이 있으시면 3번으로 연습 횟수를 줄이는 것도 조정 가능합니다.
날짜와 시간은 정해지면 협의하는 것으로 하겠습니다.
연주날짜는 11월이지만 적어도 10월 초까지는 정해져야 연습을 할 수 있으니 빠른 매칭을 위해
알뮤로 연락 부탁드립니다~!
');

insert into evn (title, mno, locno, pay, addr, date, cont)
values ("성악과 졸업연주 피아노 반주자 급구!", 7, 13, 70000, '연세로 50 연세대학교 예술관 A홀', '2017-11-07',
'안녕하세요.
연세대 성악과 곧 졸업을 앞둔 학생입니다.
다름이 아니고, 졸업연주를 하는데, 아는 피아노반주자가 없어서..
이렇게 알뮤의 힘을 빌려보고자 합니다.

경력은 많이 없어도 되고, 제가 원하는 방향으로 반주를 맞춰주실 수 있는
센스 있는 분이면 환영입니다.

리허설은 따로 필요없을 것 같고, 제가 악보 메일로 보내드리면 연습해주시고,
템포나 그런것도 전화나 녹음을 통해서 알려드릴게요.

당일날 2시간 정도 일찍 오시면 학교 연습실에서 맞춰보는 것으로 하면 될 것 같아요.
11월 7일 시간은 오후 5시이니, 오후 3시까지 와주시면 되고
끝나는 시간은 넉넉잡아 7시가 될 것 같아요~!

지원 부탁드려요~!
');

insert into evn (title, mno, locno, pay, addr, date, cont)
values ("대학교 축제에 모실 밴드 연주자를 모집합니다!", 5, 14, 500000, '와우산로 94 홍익대학교 학생회관 202호', '2017-09-27',
'2017년 홍익대 가을 축제의 노래자랑에서 연주를 해주실 밴드를 모십니다!

노래자랑 코너에서 홍대의 숨어있는 가수들이 맘껏 목소리를 뽐낼 수 있도록
밴드 연주(반주)를 해주시면 됩니다.

신청곡은 한 달 전까지 드리면 연습해서 와주시면 되고,
가능하면 요구사항에 맞춰주시면 감사하겠습니다.

신청곡은 총 5곡이 될 것입니다.

함께 재밌게 축제를 즐길 수 있는 분들이면 좋겠습니다~!
신청곡 외에 혹시 밴드만의 연주가 가능하면 더 감사하겠습니다!!
그러면 보수는 협의 후 재조정 될 것이니 참고해주세요 ^0^

당일날 3시간 정도 일찍 오셔서, 당일 리허설이 필요할 것 같아요.
(보수 포함입니다)

끝나는 시간은 넉넉잡아 10시가 될 것이니 참고해주세요~!!
');

-- 이벤트 전공(mjr_evn)
insert into mjr_evn (eno, mjrno) values (1, 4);
insert into mjr_evn (eno, mjrno) values (1, 5);
insert into mjr_evn (eno, mjrno) values (1, 6);
insert into mjr_evn (eno, mjrno) values (1, 7);
insert into mjr_evn (eno, mjrno) values (1, 8);
insert into mjr_evn (eno, mjrno) values (1, 9);
insert into mjr_evn (eno, mjrno) values (1, 1);
insert into mjr_evn (eno, mjrno) values (1, 2);

insert into mjr_evn (eno, mjrno) values (2, 10);
insert into mjr_evn (eno, mjrno) values (2, 11);
insert into mjr_evn (eno, mjrno) values (2, 12);
insert into mjr_evn (eno, mjrno) values (2, 13);

insert into mjr_evn (eno, mjrno) values (3, 1);
insert into mjr_evn (eno, mjrno) values (3, 2);
insert into mjr_evn (eno, mjrno) values (3, 3);
insert into mjr_evn (eno, mjrno) values (3, 14);

insert into mjr_evn (eno, mjrno) values (4, 3);
insert into mjr_evn (eno, mjrno) values (4, 14);

insert into mjr_evn (eno, mjrno) values (5, 14);
insert into mjr_evn (eno, mjrno) values (5, 15);

insert into mjr_evn (eno, mjrno) values (6, 10);

insert into mjr_evn (eno, mjrno) values (7, 12);
insert into mjr_evn (eno, mjrno) values (7, 13);

-- 이벤트 장르(gnr_evn)
insert into gnr_evn (eno, gnrno) values (1, 13);
insert into gnr_evn (eno, gnrno) values (1, 14);
insert into gnr_evn (eno, gnrno) values (1, 1);

insert into gnr_evn (eno, gnrno) values (2, 1);
insert into gnr_evn (eno, gnrno) values (2, 10);
insert into gnr_evn (eno, gnrno) values (2, 11);
insert into gnr_evn (eno, gnrno) values (2, 12);

insert into gnr_evn (eno, gnrno) values (3, 3);
insert into gnr_evn (eno, gnrno) values (3, 4);
insert into gnr_evn (eno, gnrno) values (3, 5);

insert into gnr_evn (eno, gnrno) values (4, 3);
insert into gnr_evn (eno, gnrno) values (4, 4);
insert into gnr_evn (eno, gnrno) values (4, 5);
insert into gnr_evn (eno, gnrno) values (4, 10);
insert into gnr_evn (eno, gnrno) values (4, 11);

insert into gnr_evn (eno, gnrno) values (5, 15);
insert into gnr_evn (eno, gnrno) values (5, 16);
insert into gnr_evn (eno, gnrno) values (5, 17);

insert into gnr_evn (eno, gnrno) values (6, 12);
insert into gnr_evn (eno, gnrno) values (6, 13);
insert into gnr_evn (eno, gnrno) values (6, 14);
insert into gnr_evn (eno, gnrno) values (6, 15);

insert into gnr_evn (eno, gnrno) values (7, 3);
insert into gnr_evn (eno, gnrno) values (7, 4);
insert into gnr_evn (eno, gnrno) values (7, 5);

-- 이벤트 테마(thm_evn)
insert into thm_evn (eno, thmno) values (1, 2);

insert into thm_evn (eno, thmno) values (2, 1);

insert into thm_evn (eno, thmno) values (3, 6);
insert into thm_evn (eno, thmno) values (3, 7);

insert into thm_evn (eno, thmno) values (4, 6);

insert into thm_evn (eno, thmno) values (5, 10);

insert into thm_evn (eno, thmno) values (6, 10);

insert into thm_evn (eno, thmno) values (7, 6);
insert into thm_evn (eno, thmno) values (7, 8);
insert into thm_evn (eno, thmno) values (7, 9);


-- 이벤트 홍보(pr)
insert into pr (eno, muno) values (1, 1);
insert into pr (eno, muno) values (1, 2);
insert into pr (eno, muno) values (2, 3);

insert noti (muno, eno, type, date, cont, prno) values (1, 1, "참여요청", '2017-07-19', "이벤트 홍보", 1);
insert noti (muno, eno, type, date, cont, prno) values (2, 1, "참여요청", '2017-07-20', "이벤트 홍보", 2);
insert noti (muno, eno, type, date, cont, prno) values (3, 2, "참여요청", '2017-07-28', "이벤트 홍보", 3);

-- 이벤트&뮤지션 매칭정보(mtc)
insert into mtc (muno, eno, mtcdt) values (3, 2, '2017-07-22');
insert into mtc (muno, eno, mtcdt, score, rev) values (2, 3, '2017-07-24', 4,
  '연락도 잘 되고, 뭣보다 센스 넘치는 공연이었습니다! ㅎㅎ
  다음 행사에서도 또 부르고 싶은 보컬이에요~!
  다만, 한 가지 아쉬운게 있었는데, 당일날 약속시간보다 살짝 늦게오셨더라구요 ㅠㅠ
  담부턴 시간을 좀 잘 지켜주세요~!');


-- 관심뮤지션(fav_musi)
insert into fav_musi (muno, mno) values (1, 4);
insert into fav_musi (muno, mno) values (2, 4);
insert into fav_musi (muno, mno) values (1, 5);
insert into fav_musi (muno, mno) values (1, 6);


-- 뮤지션 지역정보(loc_musi)
insert into loc_musi (muno, locno) values (1, 1);
insert into loc_musi (muno, locno) values (1, 2);
insert into loc_musi (muno, locno) values (1, 3);
insert into loc_musi (muno, locno) values (1, 4);
insert into loc_musi (muno, locno) values (1, 5);
insert into loc_musi (muno, locno) values (1, 6);

insert into loc_musi (muno, locno) values (2, 6);
insert into loc_musi (muno, locno) values (2, 7);
insert into loc_musi (muno, locno) values (2, 8);
insert into loc_musi (muno, locno) values (2, 9);
insert into loc_musi (muno, locno) values (2, 10);

insert into loc_musi (muno, locno) values (3, 11);
insert into loc_musi (muno, locno) values (3, 12);
insert into loc_musi (muno, locno) values (3, 13);
insert into loc_musi (muno, locno) values (3, 14);
insert into loc_musi (muno, locno) values (3, 15);


-- 이벤트 홍보 수락(pr, noti)
update pr set status='Y' where muno=3 and eno=2;

insert noti (muno, eno, type, date, cont, prno) values (3, 2, "요청 수락", '2017-07-21', "이벤트 홍보 수락", 3);


-- 뮤지션 경력 파일 (spec, spec_path)
insert into spec (muno, spdt, dscp) values(2, '2017-07-23', '저번 결혼식 이벤트때 찍은 사진입니다.');
insert into spec (muno, spdt, dscp) values(1, '2017-07-22', '짱짱맨 조승우 입니다. 비밀의숲 예고편 영상 올려봅니다.');


insert into spec_path (spno, path, isimg) values(1, '/image/event/spec/sam6.jpg', 'Y');
insert into spec_path (spno, path, isimg) values(1, '/image/event/spec/sam7.jpg', 'Y');
insert into spec_path (spno, path, isimg) values(2, 'https://youtu.be/9F56WWIPGg0', 'N');


-- 뮤지션 관심이벤트(fav_evn)
insert into fav_evn (muno, eno) values (3, 3);
insert into fav_evn (muno, eno) values (3, 4);
insert into fav_evn (muno, eno) values (2, 4);
insert into fav_evn (muno, eno) values (1, 4);

-- 뮤지션 추가
insert into memb (name, nick, phone, pwd, email, path) values ('김랑랑', '랑랑', '010-1234-1234',  password('1111'), 'lang@gmail.com', '/image/musician/photo/m2.jpg');
insert into memb (name, nick, phone, pwd, email, path) values ('장발장', '사라장', '010-4321-4344',  password('1111'), 'sarah@gmail.com', '/image/musician/photo/m17.jpg');

insert into musi (muno, age, team, gender, intro) values (8, 22, 'N', 'F',
'현재 경희대 피아노학과에 다니고 있는 대학생입니다.
나이는 어리지만 선화예고 출신이라서 웬만한 반주나 연주곡은 자신있습니다.
지금 현재 휴학하고 실용음악도 배우고 있어서 재즈피아노에도 관심이 많습니다.
전공은 클래식이지만 실용음악도 가능하니 연락 주세요~!');

insert into musi (muno, age, team, gender, intro) values (9, 27, 'N', 'F',
'안녕하세요. 저는 현재 한세대 작곡과 석사과정을 밟고 있는 대학원생입니다.
대학교는 이화여대에서 바이올린을 전공했습니다.
결혼식 현악 4중주, 교회 앙상블 등 다양하게 아르바이트를 많이 해봤습니다.
특히 웨딩연주의 경우는 함께 하는 친구들이 팀으로도 있어서, 연락주시면 함께 할 수 있습니다.
언제든 연락주세요 ^^
');

-- 뮤지션 전공 추가
insert into mjr_musi (muno, mjrno) values (8, 10);
insert into mjr_musi (muno, mjrno) values (8, 11);

insert into mjr_musi (muno, mjrno) values (9, 14);

-- 뮤지션 장르 추가
insert into gnr_musi (muno, gnrno) values (8, 9);
insert into gnr_musi (muno, gnrno) values (8, 10);
insert into gnr_musi (muno, gnrno) values (8, 11);
insert into gnr_musi (muno, gnrno) values (8, 12);
insert into gnr_musi (muno, gnrno) values (8, 13);
insert into gnr_musi (muno, gnrno) values (8, 14);
insert into gnr_musi (muno, gnrno) values (8, 15);
insert into gnr_musi (muno, gnrno) values (8, 16);

insert into gnr_musi (muno, gnrno) values (9, 6);
insert into gnr_musi (muno, gnrno) values (9, 11);
insert into gnr_musi (muno, gnrno) values (9, 12);
insert into gnr_musi (muno, gnrno) values (9, 15);
insert into gnr_musi (muno, gnrno) values (9, 16);
insert into gnr_musi (muno, gnrno) values (9, 17);

-- 뮤지션 테마 추가
insert into thm_musi (muno, thmno) values (8, 1);
insert into thm_musi (muno, thmno) values (8, 5);
insert into thm_musi (muno, thmno) values (8, 6);
insert into thm_musi (muno, thmno) values (8, 10);

insert into thm_musi (muno, thmno) values (9, 1);
insert into thm_musi (muno, thmno) values (9, 3);
insert into thm_musi (muno, thmno) values (9, 5);
insert into thm_musi (muno, thmno) values (9, 6);
insert into thm_musi (muno, thmno) values (9, 10);
