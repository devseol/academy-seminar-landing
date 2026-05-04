/**
 * 페이지에 표시되는 모든 카피·데이터.
 * 행사 정보가 바뀌면 이 파일만 수정하면 됩니다.
 */

import type { EventInfo, Speaker, TimetableItem } from '../types';

export const EVENT: EventInfo = {
  date: '2026년 6월 2일 (화) 10시',
  venue: '강남 교보타워 23층 드림홀',
  fee: '선착순 무료',
};

export const SPEAKERS: Speaker[] = [
  {
    key: 'lee',
    name: '이정모',
    role: '전 국립과학관 관장 / 과학 커뮤니케이터',
    img: '/assets/speaker-lee.png',
    link: 'https://youtu.be/-4p-7dTLdK8?si=zz_-QzEm-FWiIYQj',
    linkLabel: '털보관장 이정모, 이런분입니다',
    bullets: [
      '서대문자연사박물관·서울시립과학관·국립과천과학관 관장 12년',
      'JTBC 차이나는 클라스, tvN 어쩌다 어른 출연',
      '2019년 과학기술훈장 진보장 수상',
      '『저도 과학은 어렵습니다만』 등 다수 저서',
    ],
  },
  {
    key: 'kimsy',
    name: '김성윤',
    role: '아이포트폴리오 대표 / 리딩앤 창업자',
    img: '/assets/speaker-kimsy.png',
    link: 'https://youtu.be/0kCjxhLea-E?si=dq2KeqCxoC--icd4',
    linkLabel: '대치동 내부고발자 출연 영상',
    bullets: [
      '아이포트폴리오 2011년 창립',
      'AI 기반 디지털 영어독서 플랫폼 리딩앤 개발',
      '옥스포드대학출판부 공식 파트너',
      '유네스코 우수 AI 에듀테크 선정 사례 발표',
      '현재 120개국 450만 사용자 영어 독서 플랫폼 운영',
    ],
  },
  {
    key: 'kimhs',
    name: '김형석',
    role: '작곡가, 프로듀서 / 옥스퍼드대 방문 연구원',
    img: '/assets/speaker-kimhs.png',
    link: 'https://youtu.be/X8FpcP2qrxI?si=GnIDXK2LKumTJ6Qb',
    linkLabel: '김형석, 이런 분입니다',
    bullets: [
      '옥스퍼드대 셀도니언홀 초청 강연 — 아시아 대중문화인 최초',
      '『사랑이라는 이유로』, 『I Believe』 등 1,400여 곡 작곡',
      "옥스퍼드대 선정 '세계 예술인 6인' 혁신적 예술가 선정",
      '옥스퍼드대 캐릭터 프로젝트 협약 / K-컬처 기반 교육과정 공동 개발',
    ],
  },
];

export const TIMETABLE: TimetableItem[] = [
  {
    time: '10:00 ~ 10:10',
    title: 'Opening Session',
    sub: '오프닝 및 회사/브랜드소개',
  },
  {
    time: '10:10 ~ 10:50',
    title: '1. 왜 호기심인가?',
    sub: "세상을 바꾸는 '질문'하는 아이",
    speaker: 'lee',
    desc: '전 국립과학관 관장이자 과학커뮤니케이터인 이정모 관장이 전하는 호기심 교육의 본질.',
  },
  {
    time: '10:50 ~ 11:20',
    title: '2. 왜 이중언어자인가?',
    sub: '더 깊은 독서를 하는 이중언어자 아이',
    speaker: 'kimsy',
    desc: '10년 이상 언어를 배우는 유일한 방법은 독서라는 메시지를 전해온 김성윤 대표.',
  },
  {
    time: '11:20 ~ 11:50',
    title: '왜 독서인가?',
    sub: '세계를 무대로 성장하는 아이들의 공통점',
    speaker: 'kimhs',
    desc: '김광석, 신승훈, 박진영 등 수많은 인재를 키운 제작자가 Oxford Character Project와 함께.',
  },
  {
    time: '11:50 ~ 12:20',
    title: '3인 토크 및 청중 Q&A',
    sub: '세명이 함께하는 대담 및 청중 질의응답',
    qa: true,
  },
  {
    time: '12:20 ~',
    title: 'Closing Session',
    sub: '행사 종료 및 퇴장 · 리딩앤 아카데미 사업 파트너 상담',
  },
];
