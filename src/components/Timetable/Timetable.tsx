import { forwardRef, type CSSProperties } from 'react';
import { SPEAKERS, TIMETABLE } from '../../data/content';
import type { SpeakerKey } from '../../types';

/** 아바타 이미지 공통 스타일 (그레이스케일, 원형) */
const AVATAR_IMG_STYLE: CSSProperties = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  objectPosition: 'center top',
  filter: 'grayscale(1)',
  borderRadius: '50%',
};

function getSpeaker(key: SpeakerKey) {
  return SPEAKERS.find((s) => s.key === key)!;
}

/**
 * 강연 타임테이블. 행마다 좌측 시간·제목·설명, 우측 발표자 아바타.
 * Q&A 행은 3인 합동 카드로 별도 레이아웃.
 */
export const Timetable = forwardRef<HTMLElement>(function Timetable(_, ref) {
  return (
    <section
      className="sec"
      id="timetable"
      ref={ref}
      style={{ background: 'var(--dark)' }}
    >
      <div className="si">
        <div className="sh sr">
          <div className="sl">타임 테이블</div>
        </div>
        <div className="tt-list">
          {TIMETABLE.map((row, idx) => {
            // 3인 합동 토크 행
            if (row.qa) {
              const moderator = getSpeaker('kimsy');
              const lee = getSpeaker('lee');
              const kimhs = getSpeaker('kimhs');
              return (
                <div key={idx} className="tt-row tt-row-qa sr">
                  <div className="tt-inf tt-qa-inf">
                    <div className="tt-time">{row.time}</div>
                    <div className="tt-name">{row.title}</div>
                    <div className="tt-sub">
                      이정모 관장, 김성윤 대표, 김형석 프로듀서. {row.sub}
                    </div>
                  </div>
                  <div className="tt-qa-speakers">
                    <div className="tt-qa-card">
                      <div className="tt-qa-avatar">
                        <img
                          src={moderator.img}
                          alt={moderator.name}
                          style={AVATAR_IMG_STYLE}
                        />
                      </div>
                      <div className="tt-qa-label">
                        <span className="tt-sn">김성윤 대표</span>
                        <span className="tt-qa-role">Moderator</span>
                      </div>
                    </div>
                    <div className="tt-qa-card">
                      <div className="tt-qa-avatar">
                        <img
                          src={lee.img}
                          alt={lee.name}
                          style={AVATAR_IMG_STYLE}
                        />
                      </div>
                      <div className="tt-qa-label">
                        <span className="tt-sn">이정모 관장</span>
                      </div>
                    </div>
                    <div className="tt-qa-card">
                      <div className="tt-qa-avatar">
                        <img
                          src={kimhs.img}
                          alt={kimhs.name}
                          style={AVATAR_IMG_STYLE}
                        />
                      </div>
                      <div className="tt-qa-label">
                        <span className="tt-sn">김형석 프로듀서</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            // 발표자가 있는 일반 행
            if (row.speaker) {
              const spk = getSpeaker(row.speaker);
              const titleByKey: Record<SpeakerKey, string> = {
                lee: '이정모 관장',
                kimsy: '김성윤 대표',
                kimhs: '김형석 프로듀서',
              };
              const roleByKey: Record<SpeakerKey, JSX.Element> = {
                lee: (
                  <>
                    전 국립과학관 관장
                    <br />/ 과학 커뮤니케이터
                  </>
                ),
                kimsy: (
                  <>
                    아이포트폴리오 대표
                    <br />/ 리딩앤 창업자
                  </>
                ),
                kimhs: (
                  <>
                    작곡가,프로듀서
                    <br />/ 옥스퍼드대 방문연구원
                  </>
                ),
              };
              return (
                <div key={idx} className="tt-row sr">
                  <div className="tt-inf">
                    <div className="tt-time">{row.time}</div>
                    <div className="tt-name">{row.title}</div>
                    <div className="tt-sub">{row.sub}</div>
                    {row.desc && <div className="tt-desc">{row.desc}</div>}
                  </div>
                  <div className="tt-av">
                    <div className="tt-ava tt-ava-img">
                      <img
                        src={spk.img}
                        alt={spk.name}
                        style={AVATAR_IMG_STYLE}
                      />
                    </div>
                    <div className="tt-sn">{titleByKey[row.speaker]}</div>
                    <div className="tt-sr">{roleByKey[row.speaker]}</div>
                  </div>
                </div>
              );
            }

            // Opening / Closing 등 단순 행
            return (
              <div key={idx} className="tt-row sr">
                <div className="tt-inf">
                  <div className="tt-time">{row.time}</div>
                  <div className="tt-name">{row.title}</div>
                  <div className="tt-sub">{row.sub}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
});
