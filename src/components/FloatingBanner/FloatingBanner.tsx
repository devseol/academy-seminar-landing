interface FloatingBannerProps {
  visible: boolean;
  onApplyClick: () => void;
}

/**
 * 페이지 하단 고정 신청 배너. FloatingNav와 동일한 표시 조건.
 */
export function FloatingBanner({ visible, onApplyClick }: FloatingBannerProps) {
  return (
    <div id="floating-banner" className={visible ? 'show' : undefined}>
      <div className="banner-inner">
        <div className="banner-texts">
          <span className="banner-urgent">잔여좌석 마감임박!</span>
          <span className="banner-sub">지금 바로 신청하세요!</span>
        </div>
        <button type="button" className="btn-banner" onClick={onApplyClick}>
          참여 신청하기
        </button>
      </div>
    </div>
  );
}
