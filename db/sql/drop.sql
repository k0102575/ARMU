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

-- 선호 이벤트
DROP TABLE IF EXISTS fav_evn RESTRICT;


-- 확인
show tables;
