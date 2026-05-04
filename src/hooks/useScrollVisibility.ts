import { useEffect, useRef, useState } from 'react';

/**
 * Hero 섹션을 완전히 스크롤한 뒤부터 ApplyForm 섹션이 화면의 45%에 도달하기
 * 직전까지 `true`를 반환합니다.
 *
 * Floating Nav · Floating Banner 노출 제어용.
 *
 * @param heroRef Hero 섹션 ref
 * @param applyRef ApplyForm 섹션 ref
 */
export function useScrollVisibility(
  heroRef: React.RefObject<HTMLElement>,
  applyRef: React.RefObject<HTMLElement>
): boolean {
  const [visible, setVisible] = useState(false);

  // 최신 상태를 클로저 안에서 비교하기 위해 ref로 보관
  const visibleRef = useRef(visible);
  visibleRef.current = visible;

  useEffect(() => {
    const hero = heroRef.current;
    const apply = applyRef.current;
    if (!hero || !apply) return;

    const update = () => {
      const heroBottom = hero.getBoundingClientRect().bottom;
      const applyTop = apply.getBoundingClientRect().top;
      const vh = window.innerHeight;

      const afterHero = heroBottom <= 0;
      const inForm = applyTop < vh * 0.45;

      const next = afterHero && !inForm;
      if (next !== visibleRef.current) setVisible(next);
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update, { passive: true });
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [heroRef, applyRef]);

  return visible;
}
