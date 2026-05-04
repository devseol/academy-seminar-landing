import { EVENT } from '../../data/content';

/**
 * 신청 폼 직전 강조 메타 정보 띠.
 */
export function CtaStrip() {
  return (
    <div id="cta-strip" className="sr">
      <div className="cta-meta">
        <div className="cm-i">
          <span className="cm-l">일시</span>
          <span className="cm-v">{EVENT.date}</span>
        </div>
        <div className="cm-div" />
        <div className="cm-i">
          <span className="cm-l">장소</span>
          <span className="cm-v">{EVENT.venue}</span>
        </div>
        <div className="cm-div" />
        <div className="cm-i">
          <span className="cm-l">참가비</span>
          <span className="cm-v">{EVENT.fee}</span>
        </div>
      </div>
    </div>
  );
}
