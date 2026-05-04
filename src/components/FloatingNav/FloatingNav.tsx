import { Arrow } from '../icons/Arrow';

interface FloatingNavProps {
  visible: boolean;
  onApplyClick: () => void;
}

/**
 * Hero 섹션을 지나면 슬라이드 다운으로 등장하는 글래스 네비게이션.
 * `visible` prop은 useScrollVisibility 훅으로 결정.
 */
export function FloatingNav({ visible, onApplyClick }: FloatingNavProps) {
  return (
    <nav id="floating-nav" className={visible ? 'show' : undefined}>
      <div className="nav-logo">리딩앤 아카데미 X 토크콘서트</div>
      <div className="nav-btns">
        <button type="button" className="btn-ng" onClick={onApplyClick}>
          무료 신청하기
        </button>
        <button type="button" className="btn-nb">
          전국 학원장 설명회
          <Arrow className="a" />
        </button>
      </div>
    </nav>
  );
}
