import { Arrow } from '../icons/Arrow';

interface CalloutProps {
  /** 강연 타임테이블 버튼 클릭 시 스크롤 */
  onTimetableClick: () => void;
}

/**
 * "AI는 답을 주지만 질문은 사람이 합니다" 콜아웃 섹션.
 */
export function Callout({ onTimetableClick }: CalloutProps) {
  return (
    <div id="callout">
      <div className="co-orb" />
      <div className="co-wrap">
        <div className="co-body sr">
          <div className="co-main">AI는 답을 주지만</div>
          <div className="co-main-green">질문은 사람이 합니다.</div>
          <div className="co-sub">
            호기심의 가장 강력한 도구는 독서입니다.
            <br />
            그리고 두 개의 언어를 자연스럽게 구사하는{' '}
            <strong>이중언어자는 더 창의적으로, 더 많이 질문합니다.</strong>
          </div>
          <div className="co-sub">
            이번 토크콘서트에서 독서와 이중언어 교육을 강조하는 이유를
            알아보고,
            <br />
            <strong>아이 교육의 방향성을 재정립 해보세요.</strong>
          </div>
          <button
            type="button"
            className="btn-go"
            onClick={onTimetableClick}
          >
            강연 타임테이블
            <span className="arr">
              <Arrow className="a" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
