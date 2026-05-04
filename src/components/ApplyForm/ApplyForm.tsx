import {
  forwardRef,
  useState,
  type ChangeEvent,
  type FormEvent,
} from 'react';
import { submitApplication } from '../../api/submitApplication';
import type { ApplicationForm, ApplicationFormErrors } from '../../types';

const INITIAL_FORM: ApplicationForm = {
  name: '',
  phone: '',
  grade: '',
};

/**
 * 참가 신청 폼.
 *
 * 폼 검증·제출 로직은 이 컴포넌트 안에 모여 있습니다:
 *   - 이름·연락처 미입력 시 input border = var(--error)
 *   - 입력 시작 시 에러 자동 해제
 *   - 제출 핸들러는 src/api/submitApplication.ts 를 호출
 */
export const ApplyForm = forwardRef<HTMLElement>(function ApplyForm(_, ref) {
  const [form, setForm] = useState<ApplicationForm>(INITIAL_FORM);
  const [errors, setErrors] = useState<ApplicationFormErrors>({});
  const [submitting, setSubmitting] = useState(false);

  const onChange =
    (key: keyof ApplicationForm) => (e: ChangeEvent<HTMLInputElement>) => {
      setForm((prev) => ({ ...prev, [key]: e.target.value }));
      if (errors[key]) {
        setErrors((prev) => ({ ...prev, [key]: false }));
      }
    };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (submitting) return;

    const nextErrors: ApplicationFormErrors = {
      name: !form.name.trim(),
      phone: !form.phone.trim(),
    };
    setErrors(nextErrors);
    if (nextErrors.name || nextErrors.phone) return;

    try {
      setSubmitting(true);
      await submitApplication(form);
      setForm(INITIAL_FORM);
    } catch (err) {
      console.error('[ApplyForm] submit error', err);
      alert('신청 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="apply"
      ref={ref}
      style={{
        minHeight: '100dvh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <form className="form-wrap sr" onSubmit={onSubmit} noValidate>
        <div className="form-t">참가 신청</div>
        <div className="form-s">
          아래 정보를 입력해 주시면 확인 연락을 드립니다.
        </div>
        <div className="form-card">
          <div className="form-f">
            <label className="form-l" htmlFor="in-name">
              이름 <span className="req">*</span>
            </label>
            <input
              id="in-name"
              className={`form-i${errors.name ? ' error' : ''}`}
              type="text"
              placeholder="이름을 입력해주세요"
              value={form.name}
              onChange={onChange('name')}
              autoComplete="name"
            />
          </div>
          <div className="form-f">
            <label className="form-l" htmlFor="in-phone">
              연락처 <span className="req">*</span>
            </label>
            <input
              id="in-phone"
              className={`form-i${errors.phone ? ' error' : ''}`}
              type="tel"
              placeholder="연락처를 입력해주세요"
              value={form.phone}
              onChange={onChange('phone')}
              autoComplete="tel"
              inputMode="numeric"
            />
          </div>
          <div className="form-f">
            <label className="form-l" htmlFor="in-grade">
              자녀 학년
            </label>
            <input
              id="in-grade"
              className="form-i"
              type="text"
              placeholder="자녀 학년을 입력해주세요"
              value={form.grade}
              onChange={onChange('grade')}
            />
          </div>
          <button
            type="submit"
            className="form-btn"
            disabled={submitting}
          >
            {submitting ? '신청 처리 중…' : '신청 완료하기'}
          </button>
          <div className="form-note">
            신청 완료 후 카카오톡 또는 문자로 확인 안내가 발송됩니다.
            <br />
            수집된 개인정보는 행사 안내 및 리딩앤 아카데미 관련 정보 제공에
            활용될 수 있습니다.
            <br />
            본 행사는 사전 신청자에 한해 참가가 가능합니다.
          </div>
        </div>
      </form>
    </section>
  );
});
