import type { CSSProperties } from 'react';

const BG_IMG_STYLE: CSSProperties = {
  position: 'absolute',
  inset: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  objectPosition: 'center',
  zIndex: 0,
};

/**
 * 참가 혜택 + 현장 추첨 prize 섹션.
 */
export function Benefits() {
  return (
    <section className="sec" style={{ background: 'var(--dark)' }}>
      <div className="si">
        <div className="sh sr">
          <div className="sl">참가 혜택</div>
          <div className="st">
            <span style={{ color: 'var(--white)' }}>오시는 분들을 위해</span>
            <br />
            특별히 준비했습니다.
          </div>
        </div>

        {/* 참가 혜택 카드 2종 */}
        <div className="ben-grid">
          <div className="ben-c sr">
            <img
              src="/assets/benefit-hall.png"
              alt="강연 요약집"
              style={{ ...BG_IMG_STYLE, opacity: 0.38 }}
            />
            <div className="ben-fade" />
            <div className="ben-badge">참여자 전원 증정</div>
            <div className="ben-body">
              <div className="ben-n">01.</div>
              <div className="ben-t">
                강연 요약집 · 시크릿 교육 로드맵 자료집
              </div>
              <div className="ben-d">
                연사의 핵심 인사이트를 담은 실용 가이드
              </div>
            </div>
          </div>
          <div className="ben-c sr d1">
            <img
              src="/assets/benefit-kagwadong.png"
              alt="어린이 과학동아"
              style={BG_IMG_STYLE}
            />
            <div className="ben-fade" style={{ zIndex: 1 }} />
            <div className="ben-badge">사전 신청자 추첨 · 50명</div>
            <div className="ben-body">
              <div className="ben-n">02.</div>
              <div className="ben-t">어린이 과학동아 2개월 구독권</div>
              <div className="ben-d">
                지금 참가 신청을 완료하시면 자동 응모됩니다. 현장에 못 오셔도
                당첨 가능해요.
              </div>
            </div>
          </div>
        </div>

        {/* 현장 추첨 Prize */}
        <div className="sr">
          <div className="prz-h">당일 참석자 한정 현장 추첨</div>
          <div className="prz-grid">
            <div className="prz-slot">
              <div className="prz-c">
                <img
                  src="/assets/prize-harmony.png"
                  alt="하모니 힐스"
                  style={BG_IMG_STYLE}
                />
                <div className="prz-fade" />
                <div className="prz-b">3명 추첨</div>
                <div className="prz-body">
                  <div className="prz-n">Prize 1.</div>
                  <div className="prz-t">하모니 힐스</div>
                </div>
              </div>
            </div>
            <div className="prz-c">
              <img
                src="/assets/prize-umbrella.png"
                alt="옥스포드 우산"
                style={BG_IMG_STYLE}
              />
              <div className="prz-fade" />
              <div className="prz-b">5명 추첨</div>
              <div className="prz-body">
                <div className="prz-n">Prize 2.</div>
                <div className="prz-t">옥스포드 양우산</div>
              </div>
            </div>
            <div className="prz-c">
              <img
                src="/assets/prize-dict.png"
                alt="Oxford Picture Dictionary"
                style={BG_IMG_STYLE}
              />
              <div className="prz-fade" />
              <div className="prz-b">10명 추첨</div>
              <div className="prz-body">
                <div className="prz-n">Prize 3.</div>
                <div className="prz-t">Oxford Picture Dictionary</div>
              </div>
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 4,
              marginTop: 10,
            }}
          >
            <div className="ben-fn" style={{ margin: 0 }}>
              <span className="ben-fn-bullet">•</span>
              &nbsp;어과동 구독권은 지금 신청하시면 자동 응모 · 현장 추첨은 당일
              참석자만 응모 가능합니다.
            </div>
            <div className="ben-fn" style={{ margin: 0 }}>
              <span className="ben-fn-bullet">•</span>
              &nbsp;사전 신청 추첨 + 현장 추첨까지, 총 두 번의 당첨 기회가
              주어집니다.
            </div>
            <div className="ben-fn" style={{ margin: 0 }}>
              <span className="ben-fn-bullet">•</span>
              &nbsp;하모니 힐즈 이미지내 타블렛은 미포함입니다.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
