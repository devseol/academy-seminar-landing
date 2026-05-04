import { Arrow } from '../icons/Arrow';
import { SPEAKERS } from '../../data/content';

const DELAY_CLASSES = ['', 'd1', 'd2'] as const;

/**
 * 3인의 연사 카드 그리드.
 * 데이터는 src/data/content.ts 의 SPEAKERS 배열로 관리.
 */
export function Speakers() {
  return (
    <section className="sec" style={{ background: 'var(--dark)' }}>
      <div className="si">
        <div className="sh sr">
          <div className="sl">연사 소개</div>
          <div className="st">각자의 분야에서 교육을 말하는 세 사람</div>
        </div>
        <div className="spk-grid">
          {SPEAKERS.map((spk, idx) => (
            <div
              key={spk.key}
              className={`spk-card sr ${DELAY_CLASSES[idx] ?? ''}`.trim()}
            >
              <div className="spk-img">
                <img
                  src={spk.img}
                  alt={spk.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center top',
                    filter: 'grayscale(1)',
                    mixBlendMode: 'luminosity',
                  }}
                />
                <div className="spk-fade" />
              </div>
              <div className="spk-body">
                <div>
                  <div className="spk-name">{spk.name}</div>
                  <div className="spk-role">{spk.role}</div>
                </div>
                <div className="spk-buls">
                  {spk.bullets.map((b) => (
                    <div key={b} className="spk-b">
                      {b}
                    </div>
                  ))}
                </div>
                <a
                  className="spk-cta"
                  href={spk.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {spk.linkLabel} <Arrow className="a" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
