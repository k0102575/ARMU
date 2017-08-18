-- 뷰 삭제
-- 모집 중인 이벤트
DROP VIEW IF EXISTS recruiting_eventlist RESTRICT;

-- 뮤지션 정보
DROP VIEW IF EXISTS musicians RESTRICT;

-- 이벤트 PR 뮤지션 정보
DROP VIEW IF EXISTS eventlist_pr_musicians RESTRICT;

-- 이벤트 APPY 뮤지션 정보
DROP VIEW IF EXISTS eventlist_appy_musicians RESTRICT;

-- 회원
DROP TABLE IF EXISTS memb RESTRICT;

-- 뮤지션회원
DROP TABLE IF EXISTS musi RESTRICT;

-- 이벤트
DROP TABLE IF EXISTS evn RESTRICT;

-- 경력
DROP TABLE IF EXISTS spec RESTRICT;

-- 경력 파일
DROP TABLE IF EXISTS spec_path RESTRICT;

-- 희망 테마
DROP TABLE IF EXISTS thm_musi RESTRICT;

-- 뮤지션 가능 지역
DROP TABLE IF EXISTS loc_musi RESTRICT;

-- 리허설
DROP TABLE IF EXISTS rhs RESTRICT;

-- 뮤지션 전공
DROP TABLE IF EXISTS mjr_musi RESTRICT;

-- 뮤지션 장르
DROP TABLE IF EXISTS gnr_musi RESTRICT;

-- 전공
DROP TABLE IF EXISTS mjr RESTRICT;

-- 전공 분류
DROP TABLE IF EXISTS mjr_type RESTRICT;

-- 테마
DROP TABLE IF EXISTS thm RESTRICT;

-- 테마 분류
DROP TABLE IF EXISTS thm_type RESTRICT;

-- 장르
DROP TABLE IF EXISTS gnr RESTRICT;

-- 장르분류
DROP TABLE IF EXISTS gnr_type RESTRICT;

-- 시/군/구
DROP TABLE IF EXISTS loc RESTRICT;

-- 시/도
DROP TABLE IF EXISTS loc_type RESTRICT;

-- 이벤트 홍보
DROP TABLE IF EXISTS pr RESTRICT;

-- 매칭
DROP TABLE IF EXISTS mtc RESTRICT;

-- 이벤트 지원
DROP TABLE IF EXISTS appy RESTRICT;

-- 선호 뮤지션
DROP TABLE IF EXISTS fav_musi RESTRICT;

-- 채팅
DROP TABLE IF EXISTS chat RESTRICT;

-- 이벤트 전공
DROP TABLE IF EXISTS mjr_evn RESTRICT;

-- 이벤트 테마
DROP TABLE IF EXISTS thm_evn RESTRICT;

-- 이벤트 장르
DROP TABLE IF EXISTS gnr_evn RESTRICT;

-- 알림
DROP TABLE IF EXISTS noti RESTRICT;

-- 회원
CREATE TABLE memb (
  mno   INTEGER      NOT NULL COMMENT '회원번호', -- 회원번호
  name  VARCHAR(50)  NOT NULL COMMENT '이름', -- 이름
  phone VARCHAR(30)  NOT NULL COMMENT '휴대폰번호', -- 휴대폰번호
  pwd   VARCHAR(50)  NOT NULL COMMENT '비밀번호', -- 비밀번호
  path  VARCHAR(255) NULL     COMMENT '프로필사진', -- 프로필사진
  email VARCHAR(40)  NOT NULL COMMENT '이메일' -- 이메일
)
COMMENT '회원';

-- 회원
ALTER TABLE memb
  ADD CONSTRAINT PK_memb -- 회원 기본키2
    PRIMARY KEY (
      mno -- 회원번호
    );

-- 회원 유니크 인덱스
CREATE UNIQUE INDEX UIX_memb
  ON memb ( -- 회원
    email ASC -- 이메일
  );

-- 회원 인덱스
CREATE INDEX IX_memb
  ON memb( -- 회원
    email ASC -- 이메일
  );

ALTER TABLE memb
  MODIFY COLUMN mno INTEGER NOT NULL AUTO_INCREMENT COMMENT '회원번호';

-- 뮤지션회원
CREATE TABLE musi (
  muno   INTEGER      NOT NULL COMMENT '뮤지션회원번호', -- 뮤지션회원번호
  age    INTEGER      NULL     COMMENT '연령', -- 연령
  team   CHAR(1)      NOT NULL COMMENT '팀 여부', -- 팀 여부
  hpg    VARCHAR(255) NULL     COMMENT '홈페이지', -- 홈페이지
  intro  TEXT         NOT NULL COMMENT '자기소개', -- 자기소개
  gender CHAR(1)      NULL     COMMENT '성별', -- 성별
  nick   VARCHAR(50)  NOT NULL COMMENT '별명' -- 별명
)
COMMENT '뮤지션회원';

-- 뮤지션회원
ALTER TABLE musi
  ADD CONSTRAINT PK_musi -- 뮤지션회원 기본키
    PRIMARY KEY (
      muno -- 뮤지션회원번호
    );

-- 이벤트
CREATE TABLE evn (
  eno   INTEGER      NOT NULL COMMENT '이벤트 번호', -- 이벤트 번호
  mno   INTEGER      NULL     COMMENT '회원번호', -- 회원번호
  locno INTEGER      NOT NULL COMMENT '시군구 번호', -- 시군구 번호
  pay   INTEGER      NOT NULL COMMENT '금액', -- 금액
  req   VARCHAR(255) NULL     COMMENT '요구사항', -- 요구사항
  cont  TEXT         NOT NULL COMMENT '내용', -- 내용
  addr  VARCHAR(255) NOT NULL COMMENT '상세주소', -- 상세주소
  dpay  INTEGER      NULL     COMMENT '계약금', -- 계약금
  date  DATE         NOT NULL COMMENT '일정', -- 일정
  title VARCHAR(50)  NOT NULL COMMENT '이벤트명' -- 이벤트명
)
COMMENT '이벤트';

-- 이벤트
ALTER TABLE evn
  ADD CONSTRAINT PK_evn -- 이벤트 기본키
    PRIMARY KEY (
      eno -- 이벤트 번호
    );

-- 이벤트 인덱스
CREATE INDEX IX_evn
  ON evn( -- 이벤트
    title ASC -- 이벤트명
  );

ALTER TABLE evn
  MODIFY COLUMN eno INTEGER NOT NULL AUTO_INCREMENT COMMENT '이벤트 번호';

-- 경력
CREATE TABLE spec (
  spno INTEGER NOT NULL COMMENT '경력이력번호', -- 경력이력번호
  muno INTEGER NOT NULL COMMENT '뮤지션회원번호', -- 뮤지션회원번호
  spdt DATE    NOT NULL COMMENT '날짜', -- 날짜
  dscp TEXT    NOT NULL COMMENT '설명' -- 설명
)
COMMENT '경력';

-- 경력
ALTER TABLE spec
  ADD CONSTRAINT PK_spec -- 경력 기본키
    PRIMARY KEY (
      spno -- 경력이력번호
    );

ALTER TABLE spec
  MODIFY COLUMN spno INTEGER NOT NULL AUTO_INCREMENT COMMENT '경력이력번호';

-- 경력 파일
CREATE TABLE spec_path (
  spfno INTEGER      NOT NULL COMMENT '경력파일번호', -- 경력파일번호
  spno  INTEGER      NOT NULL COMMENT '경력이력번호', -- 경력이력번호
  path  VARCHAR(255) NOT NULL COMMENT '파일경로', -- 파일경로
  isimg CHAR(1)      NOT NULL COMMENT '유형' -- 유형
)
COMMENT '경력 파일';

-- 경력 파일
ALTER TABLE spec_path
  ADD CONSTRAINT PK_spec_path -- 경력 파일 기본키
    PRIMARY KEY (
      spfno -- 경력파일번호
    );

ALTER TABLE spec_path
  MODIFY COLUMN spfno INTEGER NOT NULL AUTO_INCREMENT COMMENT '경력파일번호';

-- 희망 테마
CREATE TABLE thm_musi (
  muno  INTEGER NOT NULL COMMENT '뮤지션회원번호', -- 뮤지션회원번호
  thmno INTEGER NOT NULL COMMENT '테마 번호' -- 테마 번호
)
COMMENT '희망 테마';

-- 희망 테마
ALTER TABLE thm_musi
  ADD CONSTRAINT PK_thm_musi -- 희망 테마 기본키
    PRIMARY KEY (
      muno,  -- 뮤지션회원번호
      thmno  -- 테마 번호
    );

-- 뮤지션 가능 지역
CREATE TABLE loc_musi (
  muno  INTEGER NOT NULL COMMENT '뮤지션회원번호', -- 뮤지션회원번호
  locno INTEGER NOT NULL COMMENT '시군구 번호' -- 시군구 번호
)
COMMENT '뮤지션 가능 지역';

-- 뮤지션 가능 지역
ALTER TABLE loc_musi
  ADD CONSTRAINT PK_loc_musi -- 뮤지션 가능 지역 기본키
    PRIMARY KEY (
      muno,  -- 뮤지션회원번호
      locno  -- 시군구 번호
    );

-- 리허설
CREATE TABLE rhs (
  eno  INTEGER      NOT NULL COMMENT '이벤트 번호', -- 이벤트 번호
  pay  INTEGER      NOT NULL COMMENT '비용', -- 비용
  info VARCHAR(255) NOT NULL COMMENT '정보', -- 정보
  num  INTEGER      NOT NULL COMMENT '횟수' -- 횟수
)
COMMENT '리허설';

-- 리허설
ALTER TABLE rhs
  ADD CONSTRAINT PK_rhs -- 리허설 기본키
    PRIMARY KEY (
      eno -- 이벤트 번호
    );

-- 뮤지션 전공
CREATE TABLE mjr_musi (
  muno  INTEGER NOT NULL COMMENT '뮤지션회원번호', -- 뮤지션회원번호
  mjrno INTEGER NOT NULL COMMENT '전공 번호' -- 전공 번호
)
COMMENT '뮤지션 전공';

-- 뮤지션 전공
ALTER TABLE mjr_musi
  ADD CONSTRAINT PK_mjr_musi -- 뮤지션 전공 Primary key
    PRIMARY KEY (
      muno,  -- 뮤지션회원번호
      mjrno  -- 전공 번호
    );

-- 뮤지션 장르
CREATE TABLE gnr_musi (
  muno  INTEGER NOT NULL COMMENT '뮤지션회원번호', -- 뮤지션회원번호
  gnrno INTEGER NOT NULL COMMENT '장르 번호' -- 장르 번호
)
COMMENT '뮤지션 장르';

-- 뮤지션 장르
ALTER TABLE gnr_musi
  ADD CONSTRAINT PK_gnr_musi -- 뮤지션 장르 Primary key
    PRIMARY KEY (
      muno,  -- 뮤지션회원번호
      gnrno  -- 장르 번호
    );

-- 전공
CREATE TABLE mjr (
  mjrno  INTEGER     NOT NULL COMMENT '전공 번호', -- 전공 번호
  name   VARCHAR(50) NOT NULL COMMENT '분야명', -- 분야명
  mjrtno INTEGER     NOT NULL COMMENT '분류 번호' -- 분류 번호
)
COMMENT '전공';

-- 전공
ALTER TABLE mjr
  ADD CONSTRAINT PK_mjr -- 전공 기본키
    PRIMARY KEY (
      mjrno -- 전공 번호
    );

-- 전공 인덱스
CREATE INDEX IX_mjr
  ON mjr( -- 전공
    name ASC -- 분야명
  );

ALTER TABLE mjr
  MODIFY COLUMN mjrno INTEGER NOT NULL AUTO_INCREMENT COMMENT '전공 번호';

-- 전공 분류
CREATE TABLE mjr_type (
  mjrtno INTEGER     NOT NULL COMMENT '분류 번호', -- 분류 번호
  name   VARCHAR(50) NOT NULL COMMENT '분야명' -- 분야명
)
COMMENT '전공 분류';

-- 전공 분류
ALTER TABLE mjr_type
  ADD CONSTRAINT PK_mjr_type -- 전공 분류 기본키
    PRIMARY KEY (
      mjrtno -- 분류 번호
    );

-- 전공 분류 인덱스
CREATE INDEX IX_mjr_type
  ON mjr_type( -- 전공 분류
    name ASC -- 분야명
  );

ALTER TABLE mjr_type
  MODIFY COLUMN mjrtno INTEGER NOT NULL AUTO_INCREMENT COMMENT '분류 번호';

-- 테마
CREATE TABLE thm (
  thmno  INTEGER     NOT NULL COMMENT '테마 번호', -- 테마 번호
  name   VARCHAR(50) NOT NULL COMMENT '분야명', -- 분야명
  thmtno INTEGER     NOT NULL COMMENT '테마 분류' -- 테마 분류
)
COMMENT '테마';

-- 테마
ALTER TABLE thm
  ADD CONSTRAINT PK_thm -- 테마 기본키
    PRIMARY KEY (
      thmno -- 테마 번호
    );

-- 테마 인덱스
CREATE INDEX IX_thm
  ON thm( -- 테마
    name ASC -- 분야명
  );

ALTER TABLE thm
  MODIFY COLUMN thmno INTEGER NOT NULL AUTO_INCREMENT COMMENT '테마 번호';

-- 테마 분류
CREATE TABLE thm_type (
  thmtno INTEGER     NOT NULL COMMENT '테마 분류', -- 테마 분류
  name   VARCHAR(50) NOT NULL COMMENT '분야명' -- 분야명
)
COMMENT '테마 분류';

-- 테마 분류
ALTER TABLE thm_type
  ADD CONSTRAINT PK_thm_type -- 테마 분류 기본키
    PRIMARY KEY (
      thmtno -- 테마 분류
    );

-- 테마 분류 인덱스
CREATE INDEX IX_thm_type
  ON thm_type( -- 테마 분류
    name ASC -- 분야명
  );

ALTER TABLE thm_type
  MODIFY COLUMN thmtno INTEGER NOT NULL AUTO_INCREMENT COMMENT '테마 분류';

-- 장르
CREATE TABLE gnr (
  gnrno  INTEGER     NOT NULL COMMENT '장르 번호', -- 장르 번호
  name   VARCHAR(50) NOT NULL COMMENT '분야명', -- 분야명
  gnrtno INTEGER     NOT NULL COMMENT '분류 번호' -- 분류 번호
)
COMMENT '장르';

-- 장르
ALTER TABLE gnr
  ADD CONSTRAINT PK_gnr -- 장르 기본키
    PRIMARY KEY (
      gnrno -- 장르 번호
    );

-- 장르 인덱스
CREATE INDEX IX_gnr
  ON gnr( -- 장르
    name ASC -- 분야명
  );

-- 장르 인덱스2
CREATE INDEX IX_gnr2
  ON gnr( -- 장르
    name ASC -- 분야명
  );

ALTER TABLE gnr
  MODIFY COLUMN gnrno INTEGER NOT NULL AUTO_INCREMENT COMMENT '장르 번호';

-- 장르분류
CREATE TABLE gnr_type (
  gnrtno INTEGER     NOT NULL COMMENT '분류 번호', -- 분류 번호
  name   VARCHAR(50) NOT NULL COMMENT '분야명' -- 분야명
)
COMMENT '장르분류';

-- 장르분류
ALTER TABLE gnr_type
  ADD CONSTRAINT PK_gnr_type -- 장르분류 기본키
    PRIMARY KEY (
      gnrtno -- 분류 번호
    );

-- 장르분류 인덱스
CREATE INDEX IX_gnr_type
  ON gnr_type( -- 장르분류
    name ASC -- 분야명
  );

ALTER TABLE gnr_type
  MODIFY COLUMN gnrtno INTEGER NOT NULL AUTO_INCREMENT COMMENT '분류 번호';

-- 시/군/구
CREATE TABLE loc (
  locno  INTEGER     NOT NULL COMMENT '시군구 번호', -- 시군구 번호
  name   VARCHAR(50) NOT NULL COMMENT '이름', -- 이름
  loctno INTEGER     NOT NULL COMMENT '시/도 번호' -- 시/도 번호
)
COMMENT '시/군/구';

-- 시/군/구
ALTER TABLE loc
  ADD CONSTRAINT PK_loc -- 시/군/구 기본키
    PRIMARY KEY (
      locno -- 시군구 번호
    );

-- 시/군/구 인덱스
CREATE INDEX IX_loc
  ON loc( -- 시/군/구
    name ASC -- 이름
  );

ALTER TABLE loc
  MODIFY COLUMN locno INTEGER NOT NULL AUTO_INCREMENT COMMENT '시군구 번호';

-- 시/도
CREATE TABLE loc_type (
  loctno INTEGER     NOT NULL COMMENT '시/도 번호', -- 시/도 번호
  name   VARCHAR(50) NOT NULL COMMENT '이름' -- 이름
)
COMMENT '시/도';

-- 시/도
ALTER TABLE loc_type
  ADD CONSTRAINT PK_loc_type -- 시/도 기본키
    PRIMARY KEY (
      loctno -- 시/도 번호
    );

-- 시/도 인덱스
CREATE INDEX IX_loc_type
  ON loc_type( -- 시/도
    name ASC -- 이름
  );

ALTER TABLE loc_type
  MODIFY COLUMN loctno INTEGER NOT NULL AUTO_INCREMENT COMMENT '시/도 번호';

-- 이벤트 홍보
CREATE TABLE pr (
  prno   INTEGER NOT NULL COMMENT '이벤트홍보번호', -- 이벤트홍보번호
  muno   INTEGER NOT NULL COMMENT '뮤지션회원번호', -- 뮤지션회원번호
  eno    INTEGER NOT NULL COMMENT '이벤트 번호', -- 이벤트 번호
  status CHAR(1) NULL     COMMENT '수락거절여부' -- 수락거절여부
)
COMMENT '이벤트 홍보';

-- 이벤트 홍보
ALTER TABLE pr
  ADD CONSTRAINT PK_pr -- 이벤트 홍보 기본키
    PRIMARY KEY (
      prno -- 이벤트홍보번호
    );

-- 이벤트 홍보 유니크 인덱스
CREATE UNIQUE INDEX UIX_pr
  ON pr ( -- 이벤트 홍보
    muno ASC, -- 뮤지션회원번호
    eno ASC   -- 이벤트 번호
  );

ALTER TABLE pr
  MODIFY COLUMN prno INTEGER NOT NULL AUTO_INCREMENT COMMENT '이벤트홍보번호';

-- 매칭
CREATE TABLE mtc (
  mtcno INTEGER NOT NULL COMMENT '매칭 번호', -- 매칭 번호
  muno  INTEGER NOT NULL COMMENT '뮤지션회원번호', -- 뮤지션회원번호
  eno   INTEGER NOT NULL COMMENT '이벤트 번호', -- 이벤트 번호
  mtcdt DATE    NOT NULL COMMENT '매칭확정날짜', -- 매칭확정날짜
  score INTEGER NULL     COMMENT '평점', -- 평점
  rev   TEXT    NULL     COMMENT '평가내용', -- 평가내용
  claim TEXT    NULL     COMMENT '신고내용' -- 신고내용
)
COMMENT '매칭';

-- 매칭
ALTER TABLE mtc
  ADD CONSTRAINT PK_mtc -- 매칭 기본키
    PRIMARY KEY (
      mtcno -- 매칭 번호
    );

-- 매칭 유니크 인덱스
CREATE UNIQUE INDEX UIX_mtc
  ON mtc ( -- 매칭
    muno ASC, -- 뮤지션회원번호
    eno ASC   -- 이벤트 번호
  );

ALTER TABLE mtc
  MODIFY COLUMN mtcno INTEGER NOT NULL AUTO_INCREMENT COMMENT '매칭 번호';

-- 이벤트 지원
CREATE TABLE appy (
  appyno INTEGER NOT NULL COMMENT '이벤트지원번호', -- 이벤트지원번호
  eno    INTEGER NOT NULL COMMENT '이벤트 번호', -- 이벤트 번호
  muno   INTEGER NOT NULL COMMENT '뮤지션회원번호' -- 뮤지션회원번호
)
COMMENT '이벤트 지원';

-- 이벤트 지원
ALTER TABLE appy
  ADD CONSTRAINT PK_appy -- 이벤트 지원 기본키
    PRIMARY KEY (
      appyno -- 이벤트지원번호
    );

-- 이벤트 지원 유니크 인덱스
CREATE UNIQUE INDEX UIX_appy
  ON appy ( -- 이벤트 지원
    eno ASC,  -- 이벤트 번호
    muno ASC  -- 뮤지션회원번호
  );

ALTER TABLE appy
  MODIFY COLUMN appyno INTEGER NOT NULL AUTO_INCREMENT COMMENT '이벤트지원번호';

-- 선호 뮤지션
CREATE TABLE fav_musi (
  muno INTEGER NOT NULL COMMENT '뮤지션회원번호', -- 뮤지션회원번호
  mno  INTEGER NOT NULL COMMENT '회원번호' -- 회원번호
)
COMMENT '선호 뮤지션';

-- 선호 뮤지션
ALTER TABLE fav_musi
  ADD CONSTRAINT PK_fav_musi -- 선호 뮤지션 기본키
    PRIMARY KEY (
      muno, -- 뮤지션회원번호
      mno   -- 회원번호
    );

-- 채팅
CREATE TABLE chat (
  chatno INTEGER  NOT NULL COMMENT '채팅 번호', -- 채팅 번호
  muno   INTEGER  NOT NULL COMMENT '뮤지션회원번호', -- 뮤지션회원번호
  mno    INTEGER  NOT NULL COMMENT '회원번호', -- 회원번호
  isread CHAR(1)  NOT NULL COMMENT '읽기여부', -- 읽기여부
  msg    TEXT     NOT NULL COMMENT '메시지', -- 메시지
  date   DATETIME NOT NULL COMMENT '일시', -- 일시
  who    INTEGER  NOT NULL COMMENT '보낸이' -- 보낸이
)
COMMENT '채팅';

-- 채팅
ALTER TABLE chat
  ADD CONSTRAINT PK_chat -- 채팅 기본키
    PRIMARY KEY (
      chatno -- 채팅 번호
    );

ALTER TABLE chat
  MODIFY COLUMN chatno INTEGER NOT NULL AUTO_INCREMENT COMMENT '채팅 번호';

-- 이벤트 전공
CREATE TABLE mjr_evn (
  eno   INTEGER NOT NULL COMMENT '이벤트 번호', -- 이벤트 번호
  mjrno INTEGER NOT NULL COMMENT '전공 번호' -- 전공 번호
)
COMMENT '이벤트 전공';

-- 이벤트 전공
ALTER TABLE mjr_evn
  ADD CONSTRAINT PK_mjr_evn -- 이벤트 전공 기본키
    PRIMARY KEY (
      eno,   -- 이벤트 번호
      mjrno  -- 전공 번호
    );

-- 이벤트 테마
CREATE TABLE thm_evn (
  eno   INTEGER NOT NULL COMMENT '이벤트 번호', -- 이벤트 번호
  thmno INTEGER NOT NULL COMMENT '테마 번호' -- 테마 번호
)
COMMENT '이벤트 테마';

-- 이벤트 테마
ALTER TABLE thm_evn
  ADD CONSTRAINT PK_thm_evn -- 이벤트 테마 기본키
    PRIMARY KEY (
      eno,   -- 이벤트 번호
      thmno  -- 테마 번호
    );

-- 이벤트 장르
CREATE TABLE gnr_evn (
  eno   INTEGER NOT NULL COMMENT '이벤트 번호', -- 이벤트 번호
  gnrno INTEGER NOT NULL COMMENT '장르 번호' -- 장르 번호
)
COMMENT '이벤트 장르';

-- 이벤트 장르
ALTER TABLE gnr_evn
  ADD CONSTRAINT PK_gnr_evn -- 이벤트 장르 기본키
    PRIMARY KEY (
      eno,   -- 이벤트 번호
      gnrno  -- 장르 번호
    );

-- 알림
CREATE TABLE noti (
  notino INTEGER      NOT NULL COMMENT '알림번호', -- 알림번호
  muno   INTEGER      NOT NULL COMMENT '뮤지션회원번호', -- 뮤지션회원번호
  eno    INTEGER      NOT NULL COMMENT '이벤트 번호', -- 이벤트 번호
  type   VARCHAR(50)  NOT NULL COMMENT '알림유형', -- 알림유형
  date   DATE         NOT NULL COMMENT '알림날짜', -- 알림날짜
  cont   VARCHAR(255) NOT NULL COMMENT '알림내용', -- 알림내용
  prno   INTEGER      NULL     COMMENT '이벤트홍보번호', -- 이벤트홍보번호
  mtcno  INTEGER      NULL     COMMENT '매칭 번호', -- 매칭 번호
  appyno INTEGER      NULL     COMMENT '이벤트지원번호' -- 이벤트지원번호
)
COMMENT '알림';

-- 알림
ALTER TABLE noti
  ADD CONSTRAINT PK_noti -- 알림 기본키
    PRIMARY KEY (
      notino -- 알림번호
    );

ALTER TABLE noti
  MODIFY COLUMN notino INTEGER NOT NULL AUTO_INCREMENT COMMENT '알림번호';

-- 뮤지션회원
ALTER TABLE musi
  ADD CONSTRAINT FK_memb_TO_musi -- 회원 -> 뮤지션회원
    FOREIGN KEY (
      muno -- 뮤지션회원번호
    )
    REFERENCES memb ( -- 회원
      mno -- 회원번호
    );

-- 이벤트
ALTER TABLE evn
  ADD CONSTRAINT FK_loc_TO_evn -- 시/군/구 -> 이벤트
    FOREIGN KEY (
      locno -- 시군구 번호
    )
    REFERENCES loc ( -- 시/군/구
      locno -- 시군구 번호
    );

-- 이벤트
ALTER TABLE evn
  ADD CONSTRAINT FK_memb_TO_evn -- 회원 -> 이벤트
    FOREIGN KEY (
      mno -- 회원번호
    )
    REFERENCES memb ( -- 회원
      mno -- 회원번호
    );

-- 경력
ALTER TABLE spec
  ADD CONSTRAINT FK_musi_TO_spec -- 뮤지션회원 -> 경력
    FOREIGN KEY (
      muno -- 뮤지션회원번호
    )
    REFERENCES musi ( -- 뮤지션회원
      muno -- 뮤지션회원번호
    );

-- 경력 파일
ALTER TABLE spec_path
  ADD CONSTRAINT FK_spec_TO_spec_path -- 경력 -> 경력 파일
    FOREIGN KEY (
      spno -- 경력이력번호
    )
    REFERENCES spec ( -- 경력
      spno -- 경력이력번호
    );

-- 희망 테마
ALTER TABLE thm_musi
  ADD CONSTRAINT FK_musi_TO_thm_musi -- 뮤지션회원 -> 희망 테마
    FOREIGN KEY (
      muno -- 뮤지션회원번호
    )
    REFERENCES musi ( -- 뮤지션회원
      muno -- 뮤지션회원번호
    );

-- 희망 테마
ALTER TABLE thm_musi
  ADD CONSTRAINT FK_thm_TO_thm_musi -- 테마 -> 희망 테마
    FOREIGN KEY (
      thmno -- 테마 번호
    )
    REFERENCES thm ( -- 테마
      thmno -- 테마 번호
    );

-- 뮤지션 가능 지역
ALTER TABLE loc_musi
  ADD CONSTRAINT FK_musi_TO_loc_musi -- 뮤지션회원 -> 뮤지션 가능 지역
    FOREIGN KEY (
      muno -- 뮤지션회원번호
    )
    REFERENCES musi ( -- 뮤지션회원
      muno -- 뮤지션회원번호
    );

-- 뮤지션 가능 지역
ALTER TABLE loc_musi
  ADD CONSTRAINT FK_loc_TO_loc_musi -- 시/군/구 -> 뮤지션 가능 지역
    FOREIGN KEY (
      locno -- 시군구 번호
    )
    REFERENCES loc ( -- 시/군/구
      locno -- 시군구 번호
    );

-- 리허설
ALTER TABLE rhs
  ADD CONSTRAINT FK_evn_TO_rhs -- 이벤트 -> 리허설
    FOREIGN KEY (
      eno -- 이벤트 번호
    )
    REFERENCES evn ( -- 이벤트
      eno -- 이벤트 번호
    );

-- 뮤지션 전공
ALTER TABLE mjr_musi
  ADD CONSTRAINT FK_musi_TO_mjr_musi -- 뮤지션회원 -> 뮤지션 전공
    FOREIGN KEY (
      muno -- 뮤지션회원번호
    )
    REFERENCES musi ( -- 뮤지션회원
      muno -- 뮤지션회원번호
    );

-- 뮤지션 전공
ALTER TABLE mjr_musi
  ADD CONSTRAINT FK_mjr_TO_mjr_musi -- 전공 -> 뮤지션 전공
    FOREIGN KEY (
      mjrno -- 전공 번호
    )
    REFERENCES mjr ( -- 전공
      mjrno -- 전공 번호
    );

-- 뮤지션 장르
ALTER TABLE gnr_musi
  ADD CONSTRAINT FK_musi_TO_gnr_musi -- 뮤지션회원 -> 뮤지션 장르
    FOREIGN KEY (
      muno -- 뮤지션회원번호
    )
    REFERENCES musi ( -- 뮤지션회원
      muno -- 뮤지션회원번호
    );

-- 뮤지션 장르
ALTER TABLE gnr_musi
  ADD CONSTRAINT FK_gnr_TO_gnr_musi -- 장르 -> 뮤지션 장르
    FOREIGN KEY (
      gnrno -- 장르 번호
    )
    REFERENCES gnr ( -- 장르
      gnrno -- 장르 번호
    );

-- 전공
ALTER TABLE mjr
  ADD CONSTRAINT FK_mjr_type_TO_mjr -- 전공 분류 -> 전공
    FOREIGN KEY (
      mjrtno -- 분류 번호
    )
    REFERENCES mjr_type ( -- 전공 분류
      mjrtno -- 분류 번호
    );

-- 테마
ALTER TABLE thm
  ADD CONSTRAINT FK_thm_type_TO_thm -- 테마 분류 -> 테마
    FOREIGN KEY (
      thmtno -- 테마 분류
    )
    REFERENCES thm_type ( -- 테마 분류
      thmtno -- 테마 분류
    );

-- 장르
ALTER TABLE gnr
  ADD CONSTRAINT FK_gnr_type_TO_gnr -- 장르분류 -> 장르
    FOREIGN KEY (
      gnrtno -- 분류 번호
    )
    REFERENCES gnr_type ( -- 장르분류
      gnrtno -- 분류 번호
    );

-- 시/군/구
ALTER TABLE loc
  ADD CONSTRAINT FK_loc_type_TO_loc -- 시/도 -> 시/군/구
    FOREIGN KEY (
      loctno -- 시/도 번호
    )
    REFERENCES loc_type ( -- 시/도
      loctno -- 시/도 번호
    );

-- 이벤트 홍보
ALTER TABLE pr
  ADD CONSTRAINT FK_musi_TO_pr -- 뮤지션회원 -> 이벤트 홍보
    FOREIGN KEY (
      muno -- 뮤지션회원번호
    )
    REFERENCES musi ( -- 뮤지션회원
      muno -- 뮤지션회원번호
    );

-- 이벤트 홍보
ALTER TABLE pr
  ADD CONSTRAINT FK_evn_TO_pr -- 이벤트 -> 이벤트 홍보
    FOREIGN KEY (
      eno -- 이벤트 번호
    )
    REFERENCES evn ( -- 이벤트
      eno -- 이벤트 번호
    );

-- 매칭
ALTER TABLE mtc
  ADD CONSTRAINT FK_musi_TO_mtc -- 뮤지션회원 -> 매칭
    FOREIGN KEY (
      muno -- 뮤지션회원번호
    )
    REFERENCES musi ( -- 뮤지션회원
      muno -- 뮤지션회원번호
    );

-- 매칭
ALTER TABLE mtc
  ADD CONSTRAINT FK_evn_TO_mtc -- 이벤트 -> 매칭
    FOREIGN KEY (
      eno -- 이벤트 번호
    )
    REFERENCES evn ( -- 이벤트
      eno -- 이벤트 번호
    );

-- 이벤트 지원
ALTER TABLE appy
  ADD CONSTRAINT FK_evn_TO_appy -- 이벤트 -> 이벤트 지원
    FOREIGN KEY (
      eno -- 이벤트 번호
    )
    REFERENCES evn ( -- 이벤트
      eno -- 이벤트 번호
    );

-- 이벤트 지원
ALTER TABLE appy
  ADD CONSTRAINT FK_musi_TO_appy -- 뮤지션회원 -> 이벤트 지원
    FOREIGN KEY (
      muno -- 뮤지션회원번호
    )
    REFERENCES musi ( -- 뮤지션회원
      muno -- 뮤지션회원번호
    );

-- 선호 뮤지션
ALTER TABLE fav_musi
  ADD CONSTRAINT FK_musi_TO_fav_musi -- 뮤지션회원 -> 선호 뮤지션
    FOREIGN KEY (
      muno -- 뮤지션회원번호
    )
    REFERENCES musi ( -- 뮤지션회원
      muno -- 뮤지션회원번호
    );

-- 선호 뮤지션
ALTER TABLE fav_musi
  ADD CONSTRAINT FK_memb_TO_fav_musi -- 회원 -> 선호 뮤지션
    FOREIGN KEY (
      mno -- 회원번호
    )
    REFERENCES memb ( -- 회원
      mno -- 회원번호
    );

-- 채팅
ALTER TABLE chat
  ADD CONSTRAINT FK_musi_TO_chat -- 뮤지션회원 -> 채팅
    FOREIGN KEY (
      muno -- 뮤지션회원번호
    )
    REFERENCES musi ( -- 뮤지션회원
      muno -- 뮤지션회원번호
    );

-- 채팅
ALTER TABLE chat
  ADD CONSTRAINT FK_memb_TO_chat -- 회원 -> 채팅
    FOREIGN KEY (
      mno -- 회원번호
    )
    REFERENCES memb ( -- 회원
      mno -- 회원번호
    );

-- 이벤트 전공
ALTER TABLE mjr_evn
  ADD CONSTRAINT FK_evn_TO_mjr_evn -- 이벤트 -> 이벤트 전공
    FOREIGN KEY (
      eno -- 이벤트 번호
    )
    REFERENCES evn ( -- 이벤트
      eno -- 이벤트 번호
    );

-- 이벤트 전공
ALTER TABLE mjr_evn
  ADD CONSTRAINT FK_mjr_TO_mjr_evn -- 전공 -> 이벤트 전공
    FOREIGN KEY (
      mjrno -- 전공 번호
    )
    REFERENCES mjr ( -- 전공
      mjrno -- 전공 번호
    );

-- 이벤트 테마
ALTER TABLE thm_evn
  ADD CONSTRAINT FK_evn_TO_thm_evn -- 이벤트 -> 이벤트 테마
    FOREIGN KEY (
      eno -- 이벤트 번호
    )
    REFERENCES evn ( -- 이벤트
      eno -- 이벤트 번호
    );

-- 이벤트 테마
ALTER TABLE thm_evn
  ADD CONSTRAINT FK_thm_TO_thm_evn -- 테마 -> 이벤트 테마
    FOREIGN KEY (
      thmno -- 테마 번호
    )
    REFERENCES thm ( -- 테마
      thmno -- 테마 번호
    );

-- 이벤트 장르
ALTER TABLE gnr_evn
  ADD CONSTRAINT FK_evn_TO_gnr_evn -- 이벤트 -> 이벤트 장르
    FOREIGN KEY (
      eno -- 이벤트 번호
    )
    REFERENCES evn ( -- 이벤트
      eno -- 이벤트 번호
    );

-- 이벤트 장르
ALTER TABLE gnr_evn
  ADD CONSTRAINT FK_gnr_TO_gnr_evn -- 장르 -> 이벤트 장르
    FOREIGN KEY (
      gnrno -- 장르 번호
    )
    REFERENCES gnr ( -- 장르
      gnrno -- 장르 번호
    );

-- 알림
ALTER TABLE noti
  ADD CONSTRAINT FK_pr_TO_noti -- 이벤트 홍보 -> 알림
    FOREIGN KEY (
      prno -- 이벤트홍보번호
    )
    REFERENCES pr ( -- 이벤트 홍보
      prno -- 이벤트홍보번호
    );

-- 알림
ALTER TABLE noti
  ADD CONSTRAINT FK_mtc_TO_noti -- 매칭 -> 알림
    FOREIGN KEY (
      mtcno -- 매칭 번호
    )
    REFERENCES mtc ( -- 매칭
      mtcno -- 매칭 번호
    );

-- 알림
ALTER TABLE noti
  ADD CONSTRAINT FK_musi_TO_noti -- 뮤지션회원 -> 알림
    FOREIGN KEY (
      muno -- 뮤지션회원번호
    )
    REFERENCES musi ( -- 뮤지션회원
      muno -- 뮤지션회원번호
    );

-- 알림
ALTER TABLE noti
  ADD CONSTRAINT FK_evn_TO_noti -- 이벤트 -> 알림
    FOREIGN KEY (
      eno -- 이벤트 번호
    )
    REFERENCES evn ( -- 이벤트
      eno -- 이벤트 번호
    );

-- 알림
ALTER TABLE noti
  ADD CONSTRAINT FK_appy_TO_noti -- 이벤트 지원 -> 알림
    FOREIGN KEY (
      appyno -- 이벤트지원번호
    )
    REFERENCES appy ( -- 이벤트 지원
      appyno -- 이벤트지원번호
    );