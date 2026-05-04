import type { ApplicationForm } from '../types';

/**
 * 신청 폼 제출 stub.
 *
 * 🔧 백엔드 연동 시 이 함수만 교체하면 됩니다.
 *   예시:
 *     const res = await fetch('/api/applications', {
 *       method: 'POST',
 *       headers: { 'Content-Type': 'application/json' },
 *       body: JSON.stringify(data),
 *     });
 *     if (!res.ok) throw new Error('submit failed');
 *
 * 현재는 콘솔에 로그만 남기고 alert로 사용자에게 완료를 알립니다.
 */
export async function submitApplication(data: ApplicationForm): Promise<void> {
  // TODO: 실제 API 엔드포인트로 교체
  console.log('[submitApplication] payload:', data);

  // 짧은 지연을 두어 실제 네트워크 호출처럼 동작하게 함 (UX 검증용)
  await new Promise((resolve) => setTimeout(resolve, 300));

  alert('신청이 완료되었습니다!\n곧 카카오톡 또는 문자로 안내드리겠습니다.');
}
