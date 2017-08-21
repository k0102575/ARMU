
-- 뮤지션
insert into memb (name, phone, pwd, email, path) values ('조승우', '010-1234-1234',  password('1111'), 'seungwoojo@gmail.com', '/image/profile/1502328657291_19');
insert into memb (name, phone, pwd, email, path) values ('차지연', '010-2424-3234',  password('1111'), 'jiyeon@gmail.com', '/image/profile/1502328657353_20');
insert into memb (name, phone, pwd, email, path) values ('오호라', '010-5555-5050',  password('1111'), 'ohora@gmail.com', '/image/profile/1502328657197_18');

insert into musi (muno, nick, age, team, gender, hpg, intro) values (1, '황시목', 35, 'N', 'M','http://tistory.seungwoo.com', '저는 짱짱맨 조승우입니다. 조각같은 외모와 매력적인 목소리로 당신의 이벤트를 아름답게 만들어드리겠습니다!');
insert into musi (muno, nick, age, team, gender, hpg, intro) values (2, 'JIYEON CHA', 34, 'N', 'F', 'http://tistory.jhlee.com', '안녕하세요. 임정희입니다. 저로 말할 것 같으면, 화려한 외모와 옥구슬같은 목소리로 당신의 이벤트를 아름답게 만들어드리겠습니다!');
insert into musi (muno, nick, age, team, gender, hpg, intro) values (3, '오호라밴드', 28, 'Y', 'M', 'http://tistory.ohora.com', '저희 오호라 밴드는 다른 아마추어 팀들과는 차원이 다른 프로 밴드 그 이상의 실력으로 감동을 드리는 밴드입니다. 다재다능한 팀원들과 5년간 호흡을 맞춰 각종 공연을 많이 해봤습니다. 언제든 알뮤를 통해 연락주세요!!');

-- 전공 분류(mjr_type), 전공(mjr)
insert into mjr_type (name) values ('보컬');
insert into mjr_type (name) values ('피아노');
insert into mjr_type (name) values ('밴드');
insert into mjr_type (name) values ('현악');
insert into mjr_type (name) values ('기타');

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
insert into mjr (name, mjrtno) values ('현악4중주(팀)', 4);
insert into mjr (name, mjrtno) values ('클래식기타', 4);
insert into mjr (name, mjrtno) values ('어쿠스틱기타', 4);
insert into mjr (name, mjrtno) values ('일렉기타', 4);
insert into mjr (name, mjrtno) values ('베이스기타', 4);

insert into mjr (name, mjrtno) values ('랩', 5);

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

insert into gnr (name, gnrtno) values ('국악', 6);

insert into gnr (name, gnrtno) values ('댄스', 2);
insert into gnr (name, gnrtno) values ('트로트', 2);
insert into gnr (name, gnrtno) values ('일렉트로니카', 2);
insert into gnr (name, gnrtno) values ('인디', 2);

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

insert into thm (name, thmtno) values ('기타행사', 4);


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

insert into loc (name, loctno) values ('중구', 4);
insert into loc (name, loctno) values ('동구', 4);
insert into loc (name, loctno) values ('남구', 4);
insert into loc (name, loctno) values ('연수구', 4);
insert into loc (name, loctno) values ('남동구', 4);
insert into loc (name, loctno) values ('부평구', 4);
insert into loc (name, loctno) values ('계양구', 4);
insert into loc (name, loctno) values ('옹진군', 4);

insert into loc (name, loctno) values ('동구', 5);
insert into loc (name, loctno) values ('중구', 5);
insert into loc (name, loctno) values ('남구', 5);
insert into loc (name, loctno) values ('북구', 5);
insert into loc (name, loctno) values ('광산구', 5);

insert into loc (name, loctno) values ('동구', 6);
insert into loc (name, loctno) values ('중구', 6);
insert into loc (name, loctno) values ('서구', 6);
insert into loc (name, loctno) values ('유성구', 6);
insert into loc (name, loctno) values ('대덕구', 6);

insert into loc (name, loctno) values ('중구', 7);
insert into loc (name, loctno) values ('동구', 7);
insert into loc (name, loctno) values ('남구', 7);
insert into loc (name, loctno) values ('북구', 7);
insert into loc (name, loctno) values ('울주군', 7);

insert into loc (name, loctno) values ('한솔동', 8);
insert into loc (name, loctno) values ('도담동', 8);
insert into loc (name, loctno) values ('연기면', 8);
insert into loc (name, loctno) values ('금남면', 8);
insert into loc (name, loctno) values ('장군면', 8);

insert into loc (name, loctno) values ('수원시', 9);
insert into loc (name, loctno) values ('성남시', 9);
insert into loc (name, loctno) values ('의정부시', 9);
insert into loc (name, loctno) values ('안양시', 9);
insert into loc (name, loctno) values ('부천시', 9);
insert into loc (name, loctno) values ('광명시', 9);
insert into loc (name, loctno) values ('평택시', 9);
insert into loc (name, loctno) values ('안산시', 9);
insert into loc (name, loctno) values ('고양시', 9);
insert into loc (name, loctno) values ('안성시', 9);

insert into loc (name, loctno) values ('춘천시', 10);
insert into loc (name, loctno) values ('원주시', 10);
insert into loc (name, loctno) values ('강릉시', 10);
insert into loc (name, loctno) values ('횡성군', 10);
insert into loc (name, loctno) values ('홍천군', 10);
insert into loc (name, loctno) values ('정선군', 10);
insert into loc (name, loctno) values ('철원군', 10);

insert into loc (name, loctno) values ('청주시', 11);
insert into loc (name, loctno) values ('충주시', 11);
insert into loc (name, loctno) values ('제천시', 11);
insert into loc (name, loctno) values ('괴산군', 11);
insert into loc (name, loctno) values ('단양군', 11);
insert into loc (name, loctno) values ('음성군', 11);
insert into loc (name, loctno) values ('진천군', 11);

insert into loc (name, loctno) values ('천안시', 12);
insert into loc (name, loctno) values ('공주시', 12);
insert into loc (name, loctno) values ('보령시', 12);
insert into loc (name, loctno) values ('아산시', 12);
insert into loc (name, loctno) values ('서산시', 12);
insert into loc (name, loctno) values ('논산시', 12);
insert into loc (name, loctno) values ('계룡시', 12);

insert into loc (name, loctno) values ('익산시', 13);
insert into loc (name, loctno) values ('군산시', 13);
insert into loc (name, loctno) values ('김제시', 13);
insert into loc (name, loctno) values ('정읍시', 13);

insert into loc (name, loctno) values ('목포시', 14);
insert into loc (name, loctno) values ('여수시', 14);
insert into loc (name, loctno) values ('순천시', 14);
insert into loc (name, loctno) values ('광양시', 14);

insert into loc (name, loctno) values ('포항시', 15);
insert into loc (name, loctno) values ('구미시', 15);
insert into loc (name, loctno) values ('안동시', 15);
insert into loc (name, loctno) values ('김천시', 15);
insert into loc (name, loctno) values ('경주시', 15);

insert into loc (name, loctno) values ('창원시', 16);
insert into loc (name, loctno) values ('김해시', 16);
insert into loc (name, loctno) values ('진주시', 16);
insert into loc (name, loctno) values ('사천시', 16);
insert into loc (name, loctno) values ('통영시', 16);

insert into loc (name, loctno) values ('제주시', 17);
insert into loc (name, loctno) values ('서귀포시', 17);


-- 일반회원
insert into memb (name, phone, pwd, email, path) values ('엄진영', '010-1111-2222',  password('1111'), 'jinyoungeom@gmail.com', '/image/profile/eom');
insert into memb (name, phone, pwd, email, path) values ('노완진', '010-1313-7375',  password('1111'), 'wanzargen@gmail.com', '/image/profile/no');
insert into memb (name, phone, pwd, email, path) values ('김승민', '010-3333-8091',  password('1111'), 'seungmin@gmail.com', '/image/profile/kim');
insert into memb (name, phone, pwd, email, path) values ('박규호', '010-1423-4523',  password('1111'), 'gggyuu@gmail.com', '/image/profile/park');

-- 이벤트
insert into evn (active, title, mno, locno, pay, addr, date, cont, req)
values ("Y", "결혼식 축가 구해요~!", 4, 22, 200000, '딩댕동 553-5', '2017-08-20',
'의정부역 근처 예식장 4월 28일 오후 2시 예식에
축가 구합니다.
성악전공하신분이였으면 좋겠습니다.
학생도 가능하니 연락주세요^^
페이는 20만원입니다^^', '늦지 않게 와주실분 약속 잘지켜 주시는분 원합니다');

insert into evn (active, title, mno, locno, pay, addr, date, cont, req)
values ("Y", "결혼식 피아노 반주자를 구합니다!", 4, 14, 150000, '링딩동 113-1 샤이니웨딩홀', '2017-08-20',
'결혼식 피아노 반주자 구합니다.

10월 12일 2013 (SAT) / North Haledon

6:00PM - 6:30PM At the lobby - 피아노 반주
6:30PM : ceremony 키보드 반주 (찬송가 2곡 only/ 나머지 결혼예배때나오는 모든곡은 음향으로 나옵니다)

We have DJ/MC at Reception.

Palisades Park/Fort Lee 출발시 20분 소요

총 반주시간: 1 hour 정도.

쪽지, 이멜로 연락해주세요.
angie8102@gmail.com

연락처 꼭 남겨주세요~~~',
'용모 단정하신분이셨음 좋겟습니다.
오실때 정장 구두 하셔야 합니다.');

insert into evn (active, title, mno, locno, pay, addr, date, cont)
values ("Y", "창립기념행사에 모실 초청공연 연주자를 구합니다!", 4, 6, 300000, '용두동 222 (주)휴스턴', '2017-07-31',
'(주)휴스턴 창립 11주년 기념식

주제 : 창립 11주년 기념행사

일시 : 7월 31일 오후 8시 30분

장소 : 휴스턴 회사

주소 : 4606 Mangum Rd, Houston, TX 77092
');

insert into evn (active, title, mno, locno, pay, addr, date, cont)
values ("Y", "가든파티 연주자를 구합니다~~", 5, 8, 300000, '몰라동 131 몰라캠핑장', '2017-08-30',
'8월 30일에 모임에서 가든파티를 하는데, 연주가 함께 있는 파티를 하려고 합니다!
약 5시부터 8시까지 신나는 연주를 해주실 밴드를 모시고자 합니다.
금액은 협의하여 더 드릴 수 있습니다.
알뮤 메시지로 연락 부탁드려요!!
');

insert into evn (active, title, mno, locno, pay, addr, date, cont, req)
values ("Y", "졸업연주를 하는데, 악기연주자가 필요합니다.", 6, 8, 80000, '정릉로 77 국민대학교 경영대 1층 콘서트홀', '2017-11-21',
'저는 국민대학교 작곡과에 다니고 있는, 곧 졸업을 앞둔 학생입니다.
다름이 아니고, 졸업연주를 위해 오케스트라 연주자가 필요해요.
연주 날짜는 11월이지만, 지금부터 연습해서 합을 맞춰봐야 할 것 같습니다.
구하는 파트는 바이올린 파트입니다.
경력이 많이 필요하지는 않으니 전공자시라면 언제든 연락주세요.
학생도 대환영입니다.

',
'아 그리고, 연주 전에 약 5번 정도 함께 맞춰보는 시간이 필요합니다.
당연히 5번의 연습에 대한 보수는 각각 5만원이 있구요,
사정이 있으시면 3번으로 연습 횟수를 줄이는 것도 조정 가능합니다.
날짜와 시간은 정해지면 협의하는 것으로 하겠습니다.
연주날짜는 11월이지만 적어도 10월 초까지는 정해져야 연습을 할 수 있으니 빠른 매칭을 위해
알뮤로 연락 부탁드립니다~!');

insert into evn (active, title, mno, locno, pay, addr, date, cont, req)
values ("Y", "성악과 졸업연주 피아노 반주자 급구!", 7, 13, 70000, '연세로 50 연세대학교 예술관 A홀', '2017-11-07',
'안녕하세요.
연세대 성악과 곧 졸업을 앞둔 학생입니다.
다름이 아니고, 졸업연주를 하는데, 아는 피아노반주자가 없어서..
이렇게 알뮤의 힘을 빌려보고자 합니다.

경력은 많이 없어도 되고, 제가 원하는 방향으로 반주를 맞춰주실 수 있는
센스 있는 분이면 환영입니다.

리허설은 따로 필요없을 것 같고, 제가 악보 메일로 보내드리면 연습해주시고,
템포나 그런것도 전화나 녹음을 통해서 알려드릴게요.

지원 부탁드려요~!
',
'당일날 2시간 정도 일찍 오시면 학교 연습실에서 맞춰보는 것으로 하면 될 것 같아요.
11월 7일 시간은 오후 5시이니, 오후 3시까지 와주시면 되고
끝나는 시간은 넉넉잡아 7시가 될 것 같아요~!');

insert into evn (active, title, mno, locno, pay, addr, date, cont, req)
values ("Y", "대학교 축제에 모실 밴드 연주자를 모집합니다!", 5, 14, 500000, '와우산로 94 홍익대학교 학생회관 202호', '2017-09-27',
'2017년 홍익대 가을 축제의 노래자랑에서 연주를 해주실 밴드를 모십니다!

노래자랑 코너에서 홍대의 숨어있는 가수들이 맘껏 목소리를 뽐낼 수 있도록
밴드 연주(반주)를 해주시면 됩니다.

신청곡은 한 달 전까지 드리면 연습해서 와주시면 되고,
가능하면 요구사항에 맞춰주시면 감사하겠습니다.

신청곡은 총 5곡이 될 것입니다.

함께 재밌게 축제를 즐길 수 있는 분들이면 좋겠습니다~!
신청곡 외에 혹시 밴드만의 연주가 가능하면 더 감사하겠습니다!!
그러면 보수는 협의 후 재조정 될 것이니 참고해주세요 ^0^
',
'당일날 3시간 정도 일찍 오셔서, 당일 리허설이 필요할 것 같아요.
(보수 포함입니다)

끝나는 시간은 넉넉잡아 10시가 될 것이니 참고해주세요~!!');

insert into evn (active, title, mno, locno, pay, addr, date, cont)
values ("Y", "클래식 대잔치에 모실 연주자분들을 모십니다!", 5, 8, 100000, '거꾸로 94 잔디밭', '2017-08-03',
'클래식 대잔치에 모실 분들을 구합니다.

피아노, 악기, 성악 모두 필요하니 누구든 언제든 연락주세요~!
');

insert into evn (active, title, mno, locno, pay, addr, date, cont)
values ("Y", "허경영교회 찬양대 피아노반주 하루 대타 구합니다!", 5, 8, 100000, '십자가로 22 허경영교회 3층 찬양대연습실', '2017-07-08',
'저는 허경영교회 3부예배 찬양대 피아노 반주를 하고 있는데,
다담주에 급한 일이 있어서 대타가 필요합니다.

꼭 전공자 아니어도 되고, 반주 어느정도 할 줄 아시면 곡 연습해서 오시면 됩니다.
2시간 연습 후 예배 올라가니 약 3시간 30분정도 소요된다고 보시면 됩니다.

연락부탁드려요.
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

insert into mjr_evn (eno, mjrno) values (3, 1);
insert into mjr_evn (eno, mjrno) values (3, 2);
insert into mjr_evn (eno, mjrno) values (3, 3);
insert into mjr_evn (eno, mjrno) values (3, 12);
insert into mjr_evn (eno, mjrno) values (3, 13);

insert into mjr_evn (eno, mjrno) values (4, 3);
insert into mjr_evn (eno, mjrno) values (4, 12);
insert into mjr_evn (eno, mjrno) values (4, 19);
insert into mjr_evn (eno, mjrno) values (4, 20);

insert into mjr_evn (eno, mjrno) values (5, 14);
insert into mjr_evn (eno, mjrno) values (5, 15);

insert into mjr_evn (eno, mjrno) values (6, 10);

insert into mjr_evn (eno, mjrno) values (7, 12);
insert into mjr_evn (eno, mjrno) values (7, 13);

insert into mjr_evn (eno, mjrno) values (8, 4);
insert into mjr_evn (eno, mjrno) values (8, 5);
insert into mjr_evn (eno, mjrno) values (8, 6);
insert into mjr_evn (eno, mjrno) values (8, 7);
insert into mjr_evn (eno, mjrno) values (8, 8);
insert into mjr_evn (eno, mjrno) values (8, 9);
insert into mjr_evn (eno, mjrno) values (8, 10);
insert into mjr_evn (eno, mjrno) values (8, 14);
insert into mjr_evn (eno, mjrno) values (8, 15);
insert into mjr_evn (eno, mjrno) values (8, 16);
insert into mjr_evn (eno, mjrno) values (8, 17);
insert into mjr_evn (eno, mjrno) values (8, 18);
insert into mjr_evn (eno, mjrno) values (8, 19);

insert into mjr_evn (eno, mjrno) values (9, 10);
insert into mjr_evn (eno, mjrno) values (9, 11);


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

insert into gnr_evn (eno, gnrno) values (8, 12);
insert into gnr_evn (eno, gnrno) values (8, 13);
insert into gnr_evn (eno, gnrno) values (8, 14);
insert into gnr_evn (eno, gnrno) values (8, 15);
insert into gnr_evn (eno, gnrno) values (8, 16);
insert into gnr_evn (eno, gnrno) values (8, 17);

insert into gnr_evn (eno, gnrno) values (9, 6);
insert into gnr_evn (eno, gnrno) values (9, 7);
insert into gnr_evn (eno, gnrno) values (9, 11);
insert into gnr_evn (eno, gnrno) values (9, 15);

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

insert into thm_evn (eno, thmno) values (8, 11);

insert into thm_evn (eno, thmno) values (9, 4);


-- 이벤트 홍보(pr)
insert into pr (eno, muno) values (1, 1);
insert into pr (eno, muno) values (1, 2);
insert into pr (eno, muno) values (2, 3);

insert into noti (muno, eno, type, date, cont, prno) values (1, 1, "참여요청", '2017-07-19', "이벤트 홍보", 1);
insert into noti (muno, eno, type, date, cont, prno) values (2, 1, "참여요청", '2017-07-20', "이벤트 홍보", 2);
insert into noti (muno, eno, type, date, cont, prno) values (3, 2, "참여요청", '2017-07-28', "이벤트 홍보", 3);

-- 이벤트&뮤지션 매칭정보(mtc)
insert into mtc (muno, eno, mtcdt) values (3, 2, '2017-07-22');

insert into mtc (muno, eno, mtcdt, score, rev) values (2, 3, '2017-07-24', 4,
'연락도 잘 되고, 뭣보다 센스 넘치는 공연이었습니다! ㅎㅎ
다음 행사에서도 또 부르고 싶은 보컬이에요~!
다만, 한 가지 아쉬운게 있었는데, 당일날 약속시간보다 살짝 늦게오셨더라구요 ㅠㅠ
담부턴 시간을 좀 잘 지켜주세요~!');

insert into mtc (muno, eno, mtcdt, score, rev) values (3, 9, '2017-06-29', 3,
'감사합니다.ㅎㅎ
정말 급했는데 선뜻 빠르게 연락주셔서 문제 없이 한 주 잘 넘어갔네요.ㅎㅎ
그런데 지휘자님 말로는 악보를 잘 볼 줄 모르신다고;;
다음에는 악보연습 더 하신 후에 대타 뛰어주세요;;ㅎㅎ
그럼 늘 행복하세요~');


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

insert into noti (muno, eno, type, date, cont, prno) values (3, 2, "요청 수락", '2017-07-21', "이벤트 홍보 수락", 3);


-- 뮤지션 경력 파일 (spec, spec_path)
insert into spec (muno, spdt, dscp) values(2, '2017-07-23', '저번 결혼식 이벤트때 찍은 사진입니다.');
insert into spec (muno, spdt, dscp) values(1, '2017-07-22', '짱짱맨 조승우 입니다. 비밀의숲 예고편 영상 올려봅니다.');

insert into spec_path (spno, path, isimg) values(1, '/image/event/spec/sam6.jpg', 'Y');
insert into spec_path (spno, path, isimg) values(1, '/image/event/spec/sam7.jpg', 'Y');
insert into spec_path (spno, path, isimg) values(1, 'https://youtu.be/oLLwRUWRAUE', 'N');
insert into spec_path (spno, path, isimg) values(2, 'https://youtu.be/9F56WWIPGg0', 'N');

-- 뮤지션 추가
insert into memb (name, phone, pwd, email, path) values ('김랑랑', '010-1234-1234',  password('1111'), 'lang@gmail.com', '/image/profile/1502328657463_21');
insert into memb (name, phone, pwd, email, path) values ('장발장', '010-4321-4344',  password('1111'), 'sarah@gmail.com', '/image/profile/1502328670305_29');
insert into memb (name, phone, pwd, email, path) values ('송소희', '010-2424-1313',  password('1111'), 'sohee@gmail.com', '/image/profile/1502328670087_27');
insert into memb (name, phone, pwd, email, path) values ('김현악', '010-1313-2222',  password('1111'), 'red@gmail.com', '/image/profile/1502328670430_30');
insert into memb (name, phone, pwd, email, path) values ('성시경', '010-4444-1213',  password('1111'), 'sung@gmail.com', '/image/profile/1502328669450_22');
insert into memb (name, phone, pwd, email, path) values ('김세왕', '010-2232-1122',  password('1111'), 'wang@gmail.com', '/image/profile/1502328670196_28');
insert into memb (name, phone, pwd, email, path) values ('비와이', '010-2232-1122',  password('1111'), 'bewhy@gmail.com', '/image/profile/1502328669972_26');

insert into musi (muno, nick, age, team, gender, intro) values (8, '랑랑', 22, 'N', 'F',
'현재 경희대 피아노학과에 다니고 있는 대학생입니다.
나이는 어리지만 선화예고 출신이라서 웬만한 반주나 연주곡은 자신있습니다.
지금 현재 휴학하고 실용음악도 배우고 있어서 재즈피아노에도 관심이 많습니다.
전공은 클래식이지만 실용음악도 가능하니 연락 주세요~!');

insert into musi (muno, nick, age, team, gender, intro) values (9, '사라장', 27, 'N', 'F',
'안녕하세요. 저는 현재 한세대 작곡과 석사과정을 밟고 있는 대학원생입니다.
대학교는 이화여대에서 바이올린을 전공했습니다.
결혼식 현악 4중주, 교회 앙상블 등 다양하게 아르바이트를 많이 해봤습니다.
특히 웨딩연주의 경우는 함께 하는 친구들이 팀으로도 있어서, 연락주시면 함께 할 수 있습니다.
언제든 연락주세요 ^^
');

insert into musi (muno, nick, age, team, gender, intro) values (10, '국악소히', 21, 'N', 'F',
'국악을 사랑하는 국악소녀 송소희입니다.
각종 국악 공연을 통해 많은 경력을 쌓았으며,
한국을 빛낸 자랑스런 한국인 대상에서 대상을 수상한 수상 경력 또한 있습니다.
국악이 필요한 곳에 불러주세요~!
');

insert into musi (muno, nick, age, team, gender, intro) values (11, '빨간건현악', 35, 'Y', 'F',
'저희 "빨간건 현악"팀은 4년간 함께 해온 팀입니다.
결혼식 연주는 물론 각종 피로연에서 연주를 해드리고 있습니다.
저희 멤버는 남지현(바이올린), 허가윤(바이올린), 전지윤(비올라), 권소현(첼로) 이렇게 4명입니다.
많은 연락 부탁드립니다. 감사합니다.
');

insert into musi (muno, nick, age, team, gender, intro) values (12, '성발라', 41, 'N', 'M',
'저는 1979년 4월 17일에 대한민국 서울특별시에서 1남 2녀 중 셋째로 태어났습니다.
어린 시절, 홍콩에서 산 적도 있었고, 미국의 유명한 연예인인 머라이어 캐리의 음악을 듣기 위해서
영어를 열심히 공부한 적이 있었기 때문에, 영어를 별 어려움 없이 구사합니다.

서울반포초등학교, 반포중학교, 세화고등학교를 졸업한 후, 고려대학교 문과대학 사회학과와
동 대학 언론대학원 방송학을 졸업하였으며, 방황 끝에 가수의 길을 선택했습니다.

대입 입시생 시절이던 1999년 4월에 MBC 문화방송 시트콤 《남자 셋 여자 셋》에서
엑스트라 단역급으로 첫 출연한 적이 있고
이듬해 2000년 9월에 열린 제1회 드림뮤직 신인가수 선발대회 "뜨악 페스티벌" 인터넷 오디션 "발악"을 통해서 가수로 데뷔하였습니다.

첫 번째 싱글은 2000년 11월에 발매된 "내게 오는 길"이었습니다.
2001년 4월에는 데뷔 앨범인 "처음처럼"이 발매되었고, 신인상을 받았습니다.
지금까지 7개의 정규 앨범, 3개의 리메이크 및 스페셜 앨범, 1개의 베스트 앨범을 발매했습니다.
베스트 앨범에는 일본어 제목으로 된 노래가 포함되어 있습니다.
과거에는 일본에서도 활발히 활동했지만, 요즘은 일본에서는 곡을 내지 않고 있습니다.
일본에서 활동한 경력이 있기 때문에, 일본어도 어느 정도는 하는 편입니다.

성시경은 데뷔 이후, 오랜 기간동안 감성적인 발라드로 많은 사람들의 사랑을 받고 있습니다.
2008년 6월 28일에 연세대학교 노천극장에서 열린 마지막 콘서트 이후,
7월 1일 현역으로 강원도 춘천시에 있는 102 보충대에 입대하였고,
제1야전군사령부 군악대 군악병으로 복무한뒤 2010년 5월 17일에 제대하였습니다.
제대 후, 매년 축가콘서트와 연말콘서트를 성황리에 열고있으며,
MBC FM4U 《FM 음악도시 성시경입니다》의 DJ를 거쳐서, 현재 JTBC 《비정상회담》,
Olive 《신동엽, 성시경은 오늘 뭐 먹지?》,《올리브쇼 2016 》,
SBS 《보컬 전쟁 : 신의 목소리》, MBC 《듀엣가요제》, 채널CGV 《무비 버스터즈》의 진행자로 활동하고 있습니다.
');

insert into musi (muno, nick, age, team, gender, intro) values (13, 'WANG기타', 51, 'N', 'M',
'저는 여러 음악 장르에서 연주하며 독주 또는 협주로 연주할 수 있습니다.
클래식 기타, 어쿠스틱 기타, 전기 기타, 베이스 기타를 모두 연주할 수 있습니다.
경력은 30년이 넘었으니 염려하지 않으셔도 됩니다.
직접 노래하면서 기타를 연주할 수도 있고, 직접 작곡한 곡을 연주해드릴 수도 있습니다.
');

insert into musi (muno, nick, age, team, gender, intro) values (14, 'BeWHY', 24, 'N', 'M',
'내 Fan이 된 나의 Star
만나서 나도 glad
내 소개를 할게요
난 Another Class

BewhY 후에 세계가 기억할 내 이름
새롭게 만들어갈 힙합 역사의 기둥

내 삶은 바로 신이 만든 예술 작품의 Featuring
나의 불완전을 사용하는 창조주의 Symphony
나로 인해서 쓰여지는 위대한 History
어쩌면 이 모든 건 내 이야기가 아닌 His Story
');

-- 뮤지션 전공 추가
insert into mjr_musi (muno, mjrno) values (8, 10);
insert into mjr_musi (muno, mjrno) values (8, 11);

insert into mjr_musi (muno, mjrno) values (9, 14);

insert into mjr_musi (muno, mjrno) values (10, 2);

insert into mjr_musi (muno, mjrno) values (11, 18);
insert into mjr_musi (muno, mjrno) values (11, 14);
insert into mjr_musi (muno, mjrno) values (11, 15);
insert into mjr_musi (muno, mjrno) values (11, 16);

insert into mjr_musi (muno, mjrno) values (12, 1);

insert into mjr_musi (muno, mjrno) values (13, 19);
insert into mjr_musi (muno, mjrno) values (13, 20);
insert into mjr_musi (muno, mjrno) values (13, 21);
insert into mjr_musi (muno, mjrno) values (13, 22);
insert into mjr_musi (muno, mjrno) values (13, 1);

insert into mjr_musi (muno, mjrno) values (14, 1);
insert into mjr_musi (muno, mjrno) values (14, 11);
insert into mjr_musi (muno, mjrno) values (14, 23);


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

insert into gnr_musi (muno, gnrno) values (10, 18);

insert into gnr_musi (muno, gnrno) values (11, 15);
insert into gnr_musi (muno, gnrno) values (11, 16);
insert into gnr_musi (muno, gnrno) values (11, 17);
insert into gnr_musi (muno, gnrno) values (11, 12);
insert into gnr_musi (muno, gnrno) values (11, 10);
insert into gnr_musi (muno, gnrno) values (11, 11);

insert into gnr_musi (muno, gnrno) values (12, 1);
insert into gnr_musi (muno, gnrno) values (12, 2);
insert into gnr_musi (muno, gnrno) values (12, 9);
insert into gnr_musi (muno, gnrno) values (12, 10);

insert into gnr_musi (muno, gnrno) values (13, 3);
insert into gnr_musi (muno, gnrno) values (13, 5);
insert into gnr_musi (muno, gnrno) values (13, 9);
insert into gnr_musi (muno, gnrno) values (13, 10);
insert into gnr_musi (muno, gnrno) values (13, 11);
insert into gnr_musi (muno, gnrno) values (13, 19);
insert into gnr_musi (muno, gnrno) values (13, 22);

insert into gnr_musi (muno, gnrno) values (14, 2);
insert into gnr_musi (muno, gnrno) values (14, 3);
insert into gnr_musi (muno, gnrno) values (14, 4);
insert into gnr_musi (muno, gnrno) values (14, 6);
insert into gnr_musi (muno, gnrno) values (14, 21);
insert into gnr_musi (muno, gnrno) values (14, 22);


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

insert into thm_musi (muno, thmno) values (10, 6);
insert into thm_musi (muno, thmno) values (10, 7);
insert into thm_musi (muno, thmno) values (10, 9);

insert into thm_musi (muno, thmno) values (11, 1);
insert into thm_musi (muno, thmno) values (11, 3);
insert into thm_musi (muno, thmno) values (11, 4);
insert into thm_musi (muno, thmno) values (11, 5);
insert into thm_musi (muno, thmno) values (11, 6);
insert into thm_musi (muno, thmno) values (11, 7);
insert into thm_musi (muno, thmno) values (11, 10);

insert into thm_musi (muno, thmno) values (12, 2);
insert into thm_musi (muno, thmno) values (12, 6);
insert into thm_musi (muno, thmno) values (12, 7);
insert into thm_musi (muno, thmno) values (12, 8);
insert into thm_musi (muno, thmno) values (12, 9);

insert into thm_musi (muno, thmno) values (13, 1);
insert into thm_musi (muno, thmno) values (13, 2);
insert into thm_musi (muno, thmno) values (13, 6);
insert into thm_musi (muno, thmno) values (13, 7);
insert into thm_musi (muno, thmno) values (13, 8);
insert into thm_musi (muno, thmno) values (13, 9);

insert into thm_musi (muno, thmno) values (14, 3);
insert into thm_musi (muno, thmno) values (14, 6);
insert into thm_musi (muno, thmno) values (14, 7);
insert into thm_musi (muno, thmno) values (14, 8);
insert into thm_musi (muno, thmno) values (14, 9);

-- 뮤지션 지역 추가
insert into loc_musi (muno, locno) values (8, 26);
insert into loc_musi (muno, locno) values (8, 27);
insert into loc_musi (muno, locno) values (8, 28);
insert into loc_musi (muno, locno) values (8, 29);
insert into loc_musi (muno, locno) values (8, 36);

insert into loc_musi (muno, locno) values (9, 26);
insert into loc_musi (muno, locno) values (9, 27);
insert into loc_musi (muno, locno) values (9, 28);
insert into loc_musi (muno, locno) values (9, 29);
insert into loc_musi (muno, locno) values (9, 30);

insert into loc_musi (muno, locno) values (10, 1);
insert into loc_musi (muno, locno) values (10, 2);
insert into loc_musi (muno, locno) values (10, 3);
insert into loc_musi (muno, locno) values (10, 22);
insert into loc_musi (muno, locno) values (10, 23);
insert into loc_musi (muno, locno) values (10, 24);

insert into loc_musi (muno, locno) values (11, 1);
insert into loc_musi (muno, locno) values (11, 2);
insert into loc_musi (muno, locno) values (11, 9);
insert into loc_musi (muno, locno) values (11, 10);
insert into loc_musi (muno, locno) values (11, 12);
insert into loc_musi (muno, locno) values (11, 19);

insert into loc_musi (muno, locno) values (12, 5);
insert into loc_musi (muno, locno) values (12, 6);
insert into loc_musi (muno, locno) values (12, 7);
insert into loc_musi (muno, locno) values (12, 21);
insert into loc_musi (muno, locno) values (12, 22);
insert into loc_musi (muno, locno) values (12, 25);
insert into loc_musi (muno, locno) values (12, 33);
insert into loc_musi (muno, locno) values (12, 34);
insert into loc_musi (muno, locno) values (12, 35);
insert into loc_musi (muno, locno) values (12, 36);

insert into loc_musi (muno, locno) values (13, 25);
insert into loc_musi (muno, locno) values (13, 1);
insert into loc_musi (muno, locno) values (13, 3);
insert into loc_musi (muno, locno) values (13, 5);
insert into loc_musi (muno, locno) values (13, 7);
insert into loc_musi (muno, locno) values (13, 23);
insert into loc_musi (muno, locno) values (13, 41);
insert into loc_musi (muno, locno) values (13, 43);
insert into loc_musi (muno, locno) values (13, 47);
insert into loc_musi (muno, locno) values (13, 48);

insert into loc_musi (muno, locno) values (14, 25);
insert into loc_musi (muno, locno) values (14, 1);
insert into loc_musi (muno, locno) values (14, 3);
insert into loc_musi (muno, locno) values (14, 5);
insert into loc_musi (muno, locno) values (14, 7);
insert into loc_musi (muno, locno) values (14, 8);
insert into loc_musi (muno, locno) values (14, 9);
insert into loc_musi (muno, locno) values (14, 10);


-- 뮤지션 관심뮤지션 추가
insert into fav_musi (mno, muno) values (5, 14);
insert into fav_musi (mno, muno) values (5, 3);

insert into fav_musi (mno, muno) values (4, 8);
insert into fav_musi (mno, muno) values (4, 10);
insert into fav_musi (mno, muno) values (4, 14);

insert into fav_musi (mno, muno) values (6, 9);
insert into fav_musi (mno, muno) values (6, 11);

insert into fav_musi (mno, muno) values (7, 8);
insert into fav_musi (mno, muno) values (7, 14);


-- 이벤트 추가(지난 이벤트라서 major, theme, genre 설정하지 않음)

insert into evn (active, title, mno, locno, pay, addr, date, cont)
values ("Y", "이러쿵 저러쿵 노래자랑 연주자 구합니다!", 6, 13, 100000, '이러쿵로 22 이러쿵건물 3층', '2017-07-15',
'이러쿵 저러쿵 이벤트가 있어요.
이러쿵저러쿵이 필요해요.
연락주세요!
');

insert into evn (active, title, mno, locno, pay, addr, date, cont)
values ("Y", "가나다라마바사아 연주회가 있습니다.", 7, 12, 100000, '훈민정음로 22 이러쿵건물 3층', '2017-07-16',
'이러쿵 저러쿵 이벤트가 있어요.
이러쿵저러쿵이 필요해요.
연락주세요!
');

insert into evn (active, title, mno, locno, pay, addr, date, cont)
values ("Y", "이런저런 이벤트가 있어요!", 6, 7, 100000, '요러쿵로 87 요러쿵건물 2층', '2017-07-17',
'이러쿵 저러쿵 이벤트가 있어요.
이러쿵저러쿵이 필요해요.
연락주세요!
');

insert into evn (active, title, mno, locno, pay, addr, date, cont)
values ("Y", "깜짝 이벤트를 합니다!", 5, 1, 200000, '깜짝로 98 깜짝건물 4층', '2017-07-20',
'저가 남자친구한테 깜짝 이벤트를 할건데요~
노래 잘 하시는 분이 저를 대신해 노래를 해주셨으면 좋겠어요 !
많이 지원해주세용 ㅎㅎ
');

insert into evn (active, title, mno, locno, pay, addr, date, cont)
values ("Y", "반주자가 필요합니다!", 6, 4, 200000, '가나다로 45 가나다라 1층', '2017-07-31',
'제가 개인 연주회를 여는데, 반주자가 필요해요.
그냥... 악보 볼 줄 알고 피아노 잘 치시는 분이면 좋겠어요!
');

insert into evn (active, title, mno, locno, pay, addr, date, cont, req)
values ("Y", "저희 아버님 환갑잔치에 모실 분을 구해요.", 7, 8, 150000, '이러쿵로 22 이러쿵쿵 1층', '2017-09-02',
'환갑 잔치에 오셔서 구수한 노래 한곡 뽑아주실 분 찾습니다.
',
'홍진영의 사랑의 배터리를 좋아하시니, 꼭 이 곡으로 연습해 와주세요!
그 외에 2곡 정도 트로트 더 준비해주시면 좋은데, 제가 추천드리는 곡은...
찰랑찰랑, 비내리는 호남선 정도입니다. 이 외에도 더 좋은 곡이 있으면 얼마든지 그 곡으로 하셔도 좋아요 ㅎ
');

insert into evn (active, title, mno, locno, pay, addr, date, cont, req)
values ("Y", "홈커밍 데이를 합니다!", 4, 13, 300000, '삐삐로 32 삐뜨대학교 매니대학 1층', '2017-08-18',
'안녕하세요 ㅎ 삐뜨대학교 매니저과 홈커밍 데이가 열리는데
이 때 오실 밴드분들을 모집 합니다.
',
'버스커버스커 노래나 윤도현밴드 노래로 구성해주세요.');

insert into evn (active, title, mno, locno, pay, addr, date, cont, req)
values ("Y", "저희 회사 창립기념식에 모실 연주 팀을 모집합니다.", 5, 12, 300000, '모모로 11 모모회사건물', '2017-09-02',
'안녕하세요.
서울 왕왕구에 있는 모모회사에서 창립기념행사가 있습니다.

약 2시간 정도 소요될 예정이구요,
약 5곡 정도 준비해오시면 추려서 진행하도록 하겠습니다.

행사 진행하는 동안 계속 잔잔하게 연주해주시면 됩니다.
',
'클래식 곡으로 준비 해주시구요,
반복적으로 같은 곡 연주하셔도 좋지만, 기왕이면 여러 곡 준비해주시고,
행사 중간중간에 박수치고 누구 나와서 축하해주는 일 있으니까 그런 상황에 걸맞는 곡들도 함께 준비해주세요.');


insert into evn (active, title, mno, locno, pay, addr, date, cont, req)
values ("Y", "결혼식을 합니다. 앙상블 연주 팀을 구합니다.", 5, 12, 200000, '웨딩로 21 웨딩웨딩홀 아름다워홀', '2017-10-02',
'제가 10월에 결혼을 합니다.
주변에 아는 앙상블 연주자도 없고...
그렇다고 웨딩업체에서 알선해주는건 너무 비싸더라구요 ㅠㅠ
그래서 이렇게 알뮤의 힘을 빌리고자 여기에 글을 남깁니다.
제 결혼식을 아름다운 음악으로 채워주실..
클래식 악기연주자분들을 모십니다.
',
'곡은 결혼식에서 보통 많이 하는 그런 무난한 곡으로 부탁드립니다.
결혼식은 12시부터이니까 11시반쯤까지만 와주시면 좋구요.
');



-- 매칭정보 추가
insert into mtc (muno, eno, mtcdt, score, rev) values (12, 10, '2017-06-19', 5,
'전..감동이었어요..정말 최고의 노래였습니다 ㅠㅠ
목소리 정말 감미로워요 !!! 백점 만점에 백점입니다!
잘자요~');

insert into mtc (muno, eno, mtcdt, score, rev) values (14, 11, '2017-06-19', 4,
'와우 최고의 랩이었습니다. b 역시 믿고 쓰는 알뮤네요.
이 뮤지션을 추천합니다~ ^0^');

insert into mtc (muno, eno, mtcdt, score, rev) values (13, 12, '2017-06-19', 3,
'아 악기연주는 좋았으나..선곡이 영..
센스가 좀.. 너무 올드해요 ㅠㅠ
담엔 선곡좀 신경써주세요.
진짜 이벤트 내용에 하나도 안맞는 곡 선곡해서 난처해 죽는줄알았어요.');

insert into mtc (muno, eno, mtcdt, score, rev) values (1, 13, '2017-06-19', 5,
'아 정말 한 편의 뮤지컬을 보는 것 같았습니다.
나중에 기회가 된다면 꼭 다시 부르고 싶은 분입니다.^^
외모에 반하고 노래에 또 한 번 반합니다 ^^');

insert into mtc (muno, eno, mtcdt, score, rev) values (8, 14, '2017-06-19', 1,
'1점이 아깝다 - - 최악이다.');

insert into mtc (muno, eno, mtcdt, score, rev) values (2, 15, '2017-06-19', 2,
'아... 연습좀 하고오세요 제발요.');

insert into mtc (muno, eno, mtcdt, score, rev) values (11, 16, '2017-06-19', 4,
'와. 현악 4중주가 이렇게 좋았나요. 꼭 또 듣고싶습니다.');

insert into mtc (muno, eno, mtcdt) values (11, 17, '2017-06-19');

insert into mtc (muno, eno, mtcdt, score, rev) values (11, 8, '2017-07-12', 5,
'연주 정말 좋았습니다.^^
다음 행사에도 꼭 부를 예정입니다.
특히 빨간색 드레스가 인상깊었습니다 ㅎㅎ
항상 좋은 일 가득하고 흥하시길.');

insert into mtc (muno, eno, mtcdt) values (11, 18, '2017-08-12');


-- 채팅 추가
insert into chat (muno, mno, isread, msg, date, who) values (1, 5, 'Y', '매칭되었습니다!', '2017-06-19 13:00:00', 0);
insert into chat (muno, mno, isread, msg, date, who) values (1, 5, 'Y', '안녕하세요~', '2017-06-19 13:10:00', 1);
insert into chat (muno, mno, isread, msg, date, who) values (1, 5, 'Y', '아 네 안녕하세요 ㅎㅎ', '2017-06-19 13:12:00', 5);
insert into chat (muno, mno, isread, msg, date, who) values (1, 5, 'Y', '전화번호좀 알려주세요~', '2017-06-19 13:14:00', 1);
insert into chat (muno, mno, isread, msg, date, who) values (1, 5, 'Y', '제 전화번호는 010-3121-3233이에요!', '2017-06-19 13:15:00', 1);
insert into chat (muno, mno, isread, msg, date, who) values (1, 5, 'Y', '저는 010-1123-2411이에요. 카톡 드릴게요 ㅎㅎ', '2017-06-19 13:16:00', 5);
insert into chat (muno, mno, isread, msg, date, who) values (1, 5, 'Y', '네~!!', '2017-06-19 13:21:00', 1);

insert into chat (muno, mno, isread, msg, date, who) values (11, 5, 'Y', '매칭되었습니다!', '2017-06-19 17:00:00', 0);
insert into chat (muno, mno, isread, msg, date, who) values (11, 5, 'Y','안녕하세요, 빨간건현악입니다.^^', '2017-06-19 17:21:00', 11);
insert into chat (muno, mno, isread, msg, date, who) values (11, 5, 'Y','ㅎㅎ 안녕하세용', '2017-06-19 17:21:00', 5);
insert into chat (muno, mno, isread, msg, date, who) values (11, 5, 'Y','이벤트 소개에 남겨주신 내용 잘 봤습니다. 혹시 전화통화 가능할까요?', '2017-06-20 09:21:00', 11);
insert into chat (muno, mno, isread, msg, date, who) values (11, 5, 'N','가능하신 시간 알려주시면 전화드릴게요 !', '2017-06-20 10:03:00', 11);
insert into chat (muno, mno, isread, msg, date, who) values (11, 5, 'N','아니면 먼저 전화주셔두 되구요~', '2017-06-20 10:03:22', 11);
insert into chat (muno, mno, isread, msg, date, who) values (11, 5, 'N','제 번호 알려드릴게요~', '2017-06-20 10:04:22', 11);

insert into chat (muno, mno, isread, msg, date, who) values (11, 4, 'Y','매칭되었습니다!', '2017-06-19 17:00:00', 0);
insert into chat (muno, mno, isread, msg, date, who) values (11, 4, 'N','안녕하세요! 빨간건현악입니다. ^^ 매칭 감사드려요~!', '2017-06-19 17:00:00', 11);
insert into chat (muno, mno, isread, msg, date, who) values (11, 4, 'N','이거 보시면 답장 주세요 ㅎ', '2017-06-19 17:12:03', 11);


-- pr(뮤지션에게 지원 요청) 추가
insert into pr (eno, muno) values (4, 3);
insert into pr (eno, muno) values (4, 13);

insert into pr (eno, muno) values (7, 3);
insert into pr (eno, muno) values (7, 14);

insert into noti (muno, eno, type, date, cont, prno) values (3, 4, "참여요청", '2017-08-02', "이벤트 홍보", 4);
insert into noti (muno, eno, type, date, cont, prno) values (13, 4, "참여요청", '2017-08-02', "이벤트 홍보", 5);

insert into noti (muno, eno, type, date, cont, prno) values (3, 7, "참여요청", '2017-08-02', "이벤트 홍보", 6);
insert into noti (muno, eno, type, date, cont, prno) values (14, 7, "참여요청", '2017-08-02', "이벤트 홍보", 7);


-- appy(뮤지션이 이벤트에 지원) 추가
insert into appy (active, eno, muno) values ("Y", 4, 1);
insert into appy (active, eno, muno) values ("Y", 4, 2);
insert into appy (active, eno, muno) values ("Y", 4, 3);
insert into appy (active, eno, muno) values ("Y", 4, 11);

insert into appy (active, eno, muno) values ("Y", 7, 8);
insert into appy (active, eno, muno) values ("Y", 7, 14);

insert into noti (muno, eno, type, date, cont, appyno) values (1, 4, "이벤트 지원", '2017-08-01', "이벤트 지원", 1);
insert into noti (muno, eno, type, date, cont, appyno) values (2, 4, "이벤트 지원", '2017-08-02', "이벤트 지원", 2);
insert into noti (muno, eno, type, date, cont, appyno) values (3, 4, "이벤트 지원", '2017-08-03', "이벤트 지원", 3);
insert into noti (muno, eno, type, date, cont, appyno) values (11, 4, "이벤트 지원", '2017-08-04', "이벤트 지원", 4);

insert into noti (muno, eno, type, date, cont, appyno) values (8, 7, "이벤트 지원", '2017-08-01', "이벤트 지원", 5);
insert into noti (muno, eno, type, date, cont, appyno) values (14, 7, "이벤트 지원", '2017-08-03', "이벤트 지원", 6);


-- 모든 모집 중인 이벤트 리스트 뷰 생성하기
create view recruiting_eventlist as
select e.eno, e.mno, e.title, e.date, concat(lt.name, ' ', l.name) as location, e.addr, e.pay,
mj.name as major, g.name as genre, t.name as theme
from (select * from evn where date >= curdate() and eno not in (select eno from mtc) and active='Y' order by date asc) e
inner join memb m on e.mno=m.mno
inner join loc l on e.locno=l.locno inner join loc_type lt on l.loctno=lt.loctno
left outer join mjr_evn me on e.eno=me.eno inner join mjr mj on me.mjrno=mj.mjrno
left outer join gnr_evn ge on e.eno=ge.eno inner join gnr g on ge.gnrno=g.gnrno
left outer join thm_evn te on e.eno=te.eno inner join thm t on te.thmno=t.thmno;


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
) score on score.muno=mu.muno;


-- 이벤트 목록과 연결된 PR 뮤지션 리스트 뷰 생성하기
create view eventlist_pr_musicians as
select e.eno, e.mno, e.title, e.date, e.location, e.addr, e.pay, e.major, e.genre, e.theme,
pr.prno, mu.muno, mu.nick, m.path, score.score
from recruiting_eventlist e
left outer join pr on e.eno=pr.eno
left outer join musi mu on pr.muno=mu.muno left outer join memb m on mu.muno=m.mno
left outer join (
  select avg(score) as score, muno
  from mtc
  group by muno
) score on score.muno=mu.muno;



-- 이벤트 목록과 연결된 APPY 뮤지션 리스트 뷰 생성하기
create view eventlist_appy_musicians as
select e.eno, e.mno, e.title, e.date, e.location, e.addr, e.pay, e.major, e.genre, e.theme,
appy.appyno, mu.muno, mu.nick, m.path, score.score
from recruiting_eventlist e
left outer join appy on e.eno=appy.eno and appy.active = 'Y'
left outer join musi mu on appy.muno=mu.muno left outer join memb m on mu.muno=m.mno
left outer join (
  select avg(score) as score, muno
  from mtc
  group by muno
) score on score.muno=mu.muno;




-- 이벤트 전공(mjr_evn) 추가
insert into mjr_evn (eno, mjrno) values (10, 1);
insert into mjr_evn (eno, mjrno) values (10, 2);
insert into mjr_evn (eno, mjrno) values (10, 3);
insert into mjr_evn (eno, mjrno) values (10, 4);
insert into mjr_evn (eno, mjrno) values (10, 5);
insert into mjr_evn (eno, mjrno) values (10, 6);
insert into mjr_evn (eno, mjrno) values (10, 7);
insert into mjr_evn (eno, mjrno) values (10, 8);
insert into mjr_evn (eno, mjrno) values (10, 9);
insert into mjr_evn (eno, mjrno) values (10, 12);

insert into mjr_evn (eno, mjrno) values (11, 10);
insert into mjr_evn (eno, mjrno) values (11, 11);

insert into mjr_evn (eno, mjrno) values (12, 1);
insert into mjr_evn (eno, mjrno) values (12, 12);
insert into mjr_evn (eno, mjrno) values (12, 13);
insert into mjr_evn (eno, mjrno) values (12, 20);
insert into mjr_evn (eno, mjrno) values (12, 19);

insert into mjr_evn (eno, mjrno) values (13, 1);
insert into mjr_evn (eno, mjrno) values (13, 2);
insert into mjr_evn (eno, mjrno) values (13, 3);
insert into mjr_evn (eno, mjrno) values (13, 12);
insert into mjr_evn (eno, mjrno) values (13, 13);
insert into mjr_evn (eno, mjrno) values (13, 23);

insert into mjr_evn (eno, mjrno) values (14, 10);

insert into mjr_evn (eno, mjrno) values (15, 1);
insert into mjr_evn (eno, mjrno) values (15, 2);

insert into mjr_evn (eno, mjrno) values (16, 10);
insert into mjr_evn (eno, mjrno) values (16, 18);
insert into mjr_evn (eno, mjrno) values (16, 12);

insert into mjr_evn (eno, mjrno) values (17, 10);
insert into mjr_evn (eno, mjrno) values (17, 18);
insert into mjr_evn (eno, mjrno) values (17, 12);

insert into mjr_evn (eno, mjrno) values (18, 18);


-- 이벤트 장르(gnr_evn) 추가
insert into gnr_evn (eno, gnrno) values (10, 1);
insert into gnr_evn (eno, gnrno) values (10, 2);
insert into gnr_evn (eno, gnrno) values (10, 3);
insert into gnr_evn (eno, gnrno) values (10, 4);
insert into gnr_evn (eno, gnrno) values (10, 5);
insert into gnr_evn (eno, gnrno) values (10, 8);
insert into gnr_evn (eno, gnrno) values (10, 9);
insert into gnr_evn (eno, gnrno) values (10, 10);
insert into gnr_evn (eno, gnrno) values (10, 11);
insert into gnr_evn (eno, gnrno) values (10, 13);
insert into gnr_evn (eno, gnrno) values (10, 14);
insert into gnr_evn (eno, gnrno) values (10, 18);
insert into gnr_evn (eno, gnrno) values (10, 19);
insert into gnr_evn (eno, gnrno) values (10, 20);
insert into gnr_evn (eno, gnrno) values (10, 21);
insert into gnr_evn (eno, gnrno) values (10, 22);

insert into gnr_evn (eno, gnrno) values (11, 13);
insert into gnr_evn (eno, gnrno) values (11, 14);
insert into gnr_evn (eno, gnrno) values (11, 15);

insert into gnr_evn (eno, gnrno) values (12, 3);
insert into gnr_evn (eno, gnrno) values (12, 5);
insert into gnr_evn (eno, gnrno) values (12, 22);

insert into gnr_evn (eno, gnrno) values (13, 1);
insert into gnr_evn (eno, gnrno) values (13, 2);
insert into gnr_evn (eno, gnrno) values (13, 3);
insert into gnr_evn (eno, gnrno) values (13, 5);
insert into gnr_evn (eno, gnrno) values (13, 19);
insert into gnr_evn (eno, gnrno) values (13, 22);

insert into gnr_evn (eno, gnrno) values (14, 12);
insert into gnr_evn (eno, gnrno) values (14, 13);
insert into gnr_evn (eno, gnrno) values (14, 14);
insert into gnr_evn (eno, gnrno) values (14, 15);

insert into gnr_evn (eno, gnrno) values (15, 20);

insert into gnr_evn (eno, gnrno) values (16, 12);
insert into gnr_evn (eno, gnrno) values (16, 15);
insert into gnr_evn (eno, gnrno) values (16, 5);
insert into gnr_evn (eno, gnrno) values (16, 10);
insert into gnr_evn (eno, gnrno) values (16, 11);

insert into gnr_evn (eno, gnrno) values (17, 12);
insert into gnr_evn (eno, gnrno) values (17, 15);

insert into gnr_evn (eno, gnrno) values (18, 10);
insert into gnr_evn (eno, gnrno) values (18, 11);
insert into gnr_evn (eno, gnrno) values (18, 12);
insert into gnr_evn (eno, gnrno) values (18, 15);


-- 이벤트 테마(thm_evn) 추가
insert into thm_evn (eno, thmno) values (10, 11);

insert into thm_evn (eno, thmno) values (11, 5);

insert into thm_evn (eno, thmno) values (12, 9);

insert into thm_evn (eno, thmno) values (13, 9);

insert into thm_evn (eno, thmno) values (14, 5);

insert into thm_evn (eno, thmno) values (15, 6);
insert into thm_evn (eno, thmno) values (15, 7);

insert into thm_evn (eno, thmno) values (16, 11);

insert into thm_evn (eno, thmno) values (17, 7);

insert into thm_evn (eno, thmno) values (18, 1);


-- 리허설 정보 추가
insert into rhs (eno, pay, info, num) values (5, 50000, '보수와 횟수는 협의 가능합니다 연락주세요', 5);

insert into rhs (eno, pay, info, num) values (7, 0, '보수는 매칭되고 메시지로 협의 하겠습니다 당일 리허설 입니다', 1);


-- 뮤지션 관심이벤트(fav_evn)
insert into fav_evn (muno, eno) values (3, 3);
insert into fav_evn (muno, eno) values (3, 4);
insert into fav_evn (muno, eno) values (2, 4);
insert into fav_evn (muno, eno) values (1, 4);
