/**
 * 도메인 타입 모음 — 컴포넌트가 받는 props의 single source of truth.
 * 데이터(SPEAKERS, TIMETABLE 등)를 수정할 때 이 파일도 함께 보면 됩니다.
 */

export type SpeakerKey = 'lee' | 'kimsy' | 'kimhs';

export interface Speaker {
  key: SpeakerKey;
  name: string;
  role: string;
  img: string;
  link: string;
  linkLabel: string;
  bullets: string[];
}

export interface TimetableItem {
  time: string;
  title: string;
  sub: string;
  /** 'lee' | 'kimsy' | 'kimhs' 일 때 좌측 아바타 노출 */
  speaker?: SpeakerKey;
  /** 본문 설명 */
  desc?: string;
  /** 3인 합동 토크 row 여부 */
  qa?: boolean;
}

export interface EventInfo {
  date: string;
  venue: string;
  fee: string;
}

/** 신청 폼 제출 페이로드 */
export interface ApplicationForm {
  name: string;
  phone: string;
  grade: string;
}

/** 신청 폼 검증 에러 */
export type ApplicationFormErrors = Partial<
  Record<keyof ApplicationForm, boolean>
>;
