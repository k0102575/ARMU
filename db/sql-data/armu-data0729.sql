
-- 뮤지션
insert into memb (name, nick, phone, pwd, email, path) values ('조승우', '조승우', '010-1234-1234',  password('1111'), 'seungwoojo@daum.net', '/image/musician/photo/0choi2.jpg');
insert into memb (name, nick, phone, pwd, email, path) values ('임정희', '임정희', '010-2424-3234',  password('1111'), 'jungheelee@daum.net', '/image/musician/photo/m1.jpg');
insert into memb (name, nick, phone, pwd, email, path) values ('오호라', '오호라밴드', '010-5555-5050',  password('1111'), 'ohora@gmail.com', '/image/musician/photo/m2.jpg');


  -- 뮤지션 회원들 사진 경로 수정
insert into musi (muno, age, team, gender, hpg, intro) values (1, 35, 'N', 'M','http://tistory.seungwoo.com', '저는 짱짱맨 조승우입니다. 조각같은 외모와 매력적인 목소리로 당신의 이벤트를 아름답게 만들어드리겠습니다!');
insert into musi (muno, age, team, gender, hpg, intro) values (2, 34, 'Y', 'F', 'http://tistory.jhlee.com', '안녕하세요. 임정희입니다. 저로 말할 것 같으면, 화려한 외모와 옥구슬같은 목소리로 당신의 이벤트를 아름답게 만들어드리겠습니다!');
insert into musi (muno, age, team, gender, hpg, intro) values (3, 28, 'Y', 'M', 'http://tistory.ohora.com', '저희 오호라 밴드는 다른 아마추어 팀들과는 차원이 다른 프로 밴드 그 이상의 실력으로 감동을 드리는 밴드입니다. 다재다능한 팀원들과 5년간 호흡을 맞춰 각종 공연을 많이 해봤습니다. 언제든 알뮤를 통해 연락주세요!!');

-- 전공 분류(mjr_type), 전공(mjr)
insert into mjr_type (name) values ('보컬');
insert into mjr_type (name) values ('피아노');
insert into mjr_type (name) values ('밴드');

insert into mjr (name, mjrtno) values ('남성 보컬', 1);
insert into mjr (name, mjrtno) values ('여성 보컬', 1);
insert into mjr (name, mjrtno) values ('보컬(팀)', 1);
insert into mjr (name, mjrtno) values ('성악 소프라노', 1);
insert into mjr (name, mjrtno) values ('성악 알토', 1);
insert into mjr (name, mjrtno) values ('성악 테너', 1);
insert into mjr (name, mjrtno) values ('성악 바리톤', 1);
insert into mjr (name, mjrtno) values ('성악 베이스', 1);
insert into mjr (name, mjrtno) values ('성악(팀)', 1);

insert into mjr (name, mjrtno) values ('클래식 피아노 반주', 2);
insert into mjr (name, mjrtno) values ('클래식 피아노 연주', 2);
insert into mjr (name, mjrtno) values ('실용음악 피아노 반주', 2);
insert into mjr (name, mjrtno) values ('실용음악 피아노 연주', 2);

insert into mjr (name, mjrtno) values ('어쿠스틱 밴드(팀)', 3);


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



-- 테마 분류(thm_type), 테마(thm)
insert into thm_type (name) values ('결혼식');
insert into thm_type (name) values ('종교행사');
insert into thm_type (name) values ('연주회/공연');
insert into thm_type (name) values ('기타');

insert into thm (name, thmtno) values ('웨딩연주', 1);
insert into thm (name, thmtno) values ('결혼식 축가', 1);

insert into thm (name, thmtno) values ('교회 예배', 2);
insert into thm (name, thmtno) values ('교회 찬양대', 2);

insert into thm (name, thmtno) values ('연주회 오브리', 3);
insert into thm (name, thmtno) values ('축하공연', 3);

insert into thm (name, thmtno) values ('기업행사', 4);
insert into thm (name, thmtno) values ('대학교 축제', 4);



-- 뮤지션 전공(mjr_musi)
insert into mjr_musi (muno, mjrno) values (1, 1);
insert into mjr_musi (muno, mjrno) values (2, 2);
insert into mjr_musi (muno, mjrno) values (3, 14);

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
insert into memb (name, nick, phone, pwd, email, path) values ('엄진영', '엄신랑', '010-1111-2222',  password('1111'), 'jinyoungeom@gmail.com', '/image/logo/ARMU_3.png');
insert into memb (name, nick, phone, pwd, email, path) values ('노완진', '기요미', '010-1313-7375',  password('1111'), 'wanzargen@gmail.com', '/image/logo/ARMU_3.png');
insert into memb (name, nick, phone, pwd, email, path) values ('김승민', '몬나니', '010-3333-8091',  password('1111'), 'seungmin@gmail.com', '/image/logo/ARMU_3.png');
insert into memb (name, nick, phone, pwd, email, path) values ('박규호', '뀨우호', '010-1423-4523',  password('1111'), 'gggyuu@gmail.com', '/image/logo/ARMU_3.png');

insert into gmemb (gno) values (4);
insert into gmemb (gno) values (5);
insert into gmemb (gno) values (6);
insert into gmemb (gno) values (7);

-- 이벤트
insert into evn (title, gno, locno, pay, addr, date, cont)
values ("결혼식 축가 구해요~!", 4, 22, 200000, '딩댕동 553-5', '2017-08-20',
'의정부역 근처 예식장 4월 28일 오후 2시 예식에
축가 구합니다.
성악전공하신분이였으면 좋겠습니다.
학생도 가능하니 연락주세요^^
페이는 20만원입니다^^');

insert into evn (title, gno, locno, pay, addr, date, cont)
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

insert into evn (title, gno, locno, pay, addr, date, cont)
values ("창립기념행사에 모실 초청공연 연주자를 구합니다!", 4, 6, 300000, '용두동 222 (주)휴스턴', '2017-07-20',
'(주)휴스턴 창립 11주년 기념식

주제 : 창립 11주년 기념행사

일시 : 5월 21일 오후 8시 30분

장소 : 휴스턴 회사

주소 : 4606 Mangum Rd, Houston, TX 77092
');

insert into evn (title, gno, locno, pay, addr, date, cont)
values ("가든파티 연주자를 구합니다~~", 5, 8, 300000, '몰라동 131 몰라캠핑장', '2017-08-30',
'8월 30일에 모임에서 가든파티를 하는데, 연주가 함께 있는 파티를 하려고 합니다!
약 5시부터 8시까지 신나는 연주를 해주실 밴드를 모시고자 합니다.
금액은 협의하여 더 드릴 수 있습니다.
알뮤 메시지로 연락 부탁드려요!!
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

-- 이벤트 테마(thm_evn)
insert into thm_evn (eno, thmno) values (1, 2);

insert into thm_evn (eno, thmno) values (2, 1);

insert into thm_evn (eno, thmno) values (3, 6);
insert into thm_evn (eno, thmno) values (3, 7);

insert into thm_evn (eno, thmno) values (4, 6);


-- 이벤트 홍보(pr)
insert into pr (eno, muno) values (1, 1);
insert into pr (eno, muno) values (1, 2);
insert into pr (eno, muno) values (2, 3);

-- 이벤트&뮤지션 매칭정보(mtc)
insert into mtc (muno, eno, mtcdt) values (3, 2, '2017-07-22');
insert into mtc (muno, eno, mtcdt, score, rev) values (2, 3, '2017-07-24', 4,
  '연락도 잘 되고, 뭣보다 센스 넘치는 공연이었습니다! ㅎㅎ
  다음 행사에서도 또 부르고 싶은 보컬이에요~!
  다만, 한 가지 아쉬운게 있었는데, 당일날 약속시간보다 살짝 늦게오셨더라구요 ㅠㅠ
  담부턴 시간을 좀 잘 지켜주세요~!');


-- 관심뮤지션(fav_musi)
insert into fav_musi (muno, gno) values (1, 4);
insert into fav_musi (muno, gno) values (2, 4);
insert into fav_musi (muno, gno) values (1, 5);
insert into fav_musi (muno, gno) values (1, 6);


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
