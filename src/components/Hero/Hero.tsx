import { forwardRef, useEffect, useRef, useState } from 'react';
import { Arrow } from '../icons/Arrow';
import { ReadingAcademyLogo } from '../icons/ReadingAcademyLogo';
import { EVENT } from '../../data/content';
import { HeroAurora } from './HeroAurora';

interface HeroProps {
  onApplyClick: () => void;
}

/**
 * Hero 섹션. Aurora 캔버스 + 본문 텍스트 staggered 등장 + 스크롤 힌트.
 */
export const Hero = forwardRef<HTMLElement, HeroProps>(function Hero(
  { onApplyClick },
  ref
) {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [hintOn, setHintOn] = useState(false);

  // hi 클래스 staggered 애니메이션
  useEffect(() => {
    const items = contentRef.current?.querySelectorAll('.hi');
    if (!items) return;
    const timeouts: number[] = [];
    items.forEach((el, i) => {
      const id = window.setTimeout(() => el.classList.add('on'), 180 + i * 210);
      timeouts.push(id);
    });
    const hintId = window.setTimeout(
      () => setHintOn(true),
      180 + items.length * 210 + 500
    );
    timeouts.push(hintId);
    return () => timeouts.forEach((id) => window.clearTimeout(id));
  }, []);

  return (
    <section id="hero" ref={ref}>
      <HeroAurora />
      <div className="hero-content" ref={contentRef}>
        <div className="hi hero-badge">
          <ReadingAcademyLogo />
          <span
            className="badge-x"
            style={{
              color: 'rgba(255,255,255,0.5)',
              fontSize: 13,
              fontWeight: 500,
              margin: '0 2px',
            }}
          >
            X
          </span>
          <span
            style={{
              color: 'var(--white)',
              fontSize: 'clamp(11px,1.4vw,15px)',
              fontWeight: 500,
              whiteSpace: 'nowrap',
            }}
          >
            토크콘서트 2026
          </span>
        </div>

        <h1 className="hi hero-title">
          <span className="gold">3시간 투자</span>로
          <br />
          아이의 교육 방향을 재정립하세요.
        </h1>

        <div className="hi hero-spk">
          <span>전 국립과천과학관 관장 이정모</span>
          <span className="x">×</span>
          <span>리딩앤 대표 김성윤</span>
          <span className="x">×</span>
          <span>프로듀서 김형석</span>
        </div>

        <div className="hi hero-meta">
          <div className="mi">
            <span className="mi-l">일시</span>
            <span className="mi-v">{EVENT.date}</span>
          </div>
          <div className="md" />
          <div className="mi">
            <span className="mi-l">장소</span>
            <span className="mi-v">{EVENT.venue}</span>
          </div>
          <div className="md" />
          <div className="mi">
            <span className="mi-l">참가비</span>
            <span className="mi-v">{EVENT.fee}</span>
          </div>
        </div>

        <div className="hi cta-wrapper" style={{ marginTop: 56 }}>
          <button
            type="button"
            className="hero-cta-btn"
            onClick={onApplyClick}
          >
            지금 신청하기
            <span className="arr">
              <Arrow className="a18" size={18} />
            </span>
          </button>
        </div>
      </div>

      <div
        className={`scroll-hint${hintOn ? ' on' : ''}`}
        id="sHint"
      >
        <span className="sh-label">scroll</span>
        <div className="sh-line" />
      </div>
    </section>
  );
});
