import { useCallback, useEffect, useRef } from 'react';
import { ApplyForm } from './components/ApplyForm/ApplyForm';
import { Benefits } from './components/Benefits/Benefits';
import { Callout } from './components/Callout/Callout';
import { CtaStrip } from './components/CtaStrip/CtaStrip';
import { FloatingBanner } from './components/FloatingBanner/FloatingBanner';
import { FloatingNav } from './components/FloatingNav/FloatingNav';
import { Footer } from './components/Footer/Footer';
import { Goal } from './components/Goal/Goal';
import { Hero } from './components/Hero/Hero';
import { QSection } from './components/QSection/QSection';
import { Speakers } from './components/Speakers/Speakers';
import { Timetable } from './components/Timetable/Timetable';
import { useScrollVisibility } from './hooks/useScrollVisibility';
import './styles.css';

export default function App() {
  const heroRef = useRef<HTMLElement | null>(null);
  const applyRef = useRef<HTMLElement | null>(null);
  const timetableRef = useRef<HTMLElement | null>(null);

  /** Hero 통과 후 ApplyForm 직전까지 fixed 요소 노출 */
  const floatVisible = useScrollVisibility(heroRef, applyRef);

  /** 신청 폼으로 부드럽게 스크롤 */
  const scrollToApply = useCallback(() => {
    applyRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  /** 타임테이블로 부드럽게 스크롤 */
  const scrollToTimetable = useCallback(() => {
    timetableRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  /**
   * 섹션 단위 scroll-reveal — `.sr` 요소가 뷰포트에 들어오면 `.in` 추가.
   * 모든 섹션 컴포넌트가 mount 된 후 한 번만 옵저버를 설정합니다.
   */
  useEffect(() => {
    const targets = document.querySelectorAll('.sr');
    if (targets.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('in');
        });
      },
      { threshold: 0.07, rootMargin: '0px 0px -36px 0px' }
    );
    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <FloatingNav visible={floatVisible} onApplyClick={scrollToApply} />
      <FloatingBanner visible={floatVisible} onApplyClick={scrollToApply} />

      <Hero ref={heroRef} onApplyClick={scrollToApply} />
      <QSection />
      <Callout onTimetableClick={scrollToTimetable} />
      <Speakers />
      <Goal />
      <Timetable ref={timetableRef} />
      <Benefits />
      <CtaStrip />
      <ApplyForm ref={applyRef} />
      <Footer />
    </>
  );
}
