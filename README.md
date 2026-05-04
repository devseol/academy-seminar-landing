# 리딩앤 학부모 토크 콘서트 2026 — Landing Page

리딩앤 아카데미 X 토크콘서트 2026 행사용 랜딩페이지입니다.
Vite + React 18 + TypeScript 기반 SPA 단일 페이지로, 디자인 시스템
(`LANDING-DESIGN-SYSTEM.md`)과 1:1 토큰 정렬되어 있습니다.

## 시작하기

```bash
cd react-app
npm install
npm run dev
```

기본 포트: http://localhost:5173

## 스크립트

| 명령 | 설명 |
|------|------|
| `npm run dev` | 개발 서버 실행 (HMR) |
| `npm run typecheck` | TypeScript 타입 검사만 수행 |
| `npm run build` | 프로덕션 빌드 (`dist/`) |
| `npm run preview` | 프로덕션 빌드 결과 로컬 프리뷰 |

## 디렉터리

```
react-app/
├── public/
│   └── assets/                # 이미지·SVG (아래 자산 목록 참고)
├── src/
│   ├── main.tsx               # 진입점
│   ├── App.tsx                # 루트 컴포넌트, 섹션 조립 + 스크롤 옵저버
│   ├── index.css              # 디자인 토큰, reset, 전역 유틸
│   ├── styles.css             # 컴포넌트 스타일 (전역 클래스)
│   ├── data/content.ts        # 행사·연사·타임테이블 데이터
│   ├── types/index.ts         # 도메인 타입
│   ├── hooks/
│   │   └── useScrollVisibility.ts    # FloatingNav/Banner 표시 제어
│   ├── api/
│   │   └── submitApplication.ts      # 폼 제출 stub (백엔드 연동 지점)
│   └── components/
│       ├── icons/             # 공용 SVG 아이콘
│       ├── FloatingNav/
│       ├── FloatingBanner/
│       ├── Hero/              # Hero.tsx + HeroAurora.tsx (canvas)
│       ├── QSection/
│       ├── Callout/
│       ├── Speakers/
│       ├── Goal/
│       ├── Timetable/
│       ├── Benefits/
│       ├── CtaStrip/
│       ├── ApplyForm/
│       └── Footer/
├── index.html                 # Vite 진입 HTML (Pretendard CDN 포함)
├── package.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## 자주 손대는 영역

### 1. 행사 정보 변경 — `src/data/content.ts`
`EVENT.date`, `EVENT.venue`, `EVENT.fee`만 바꾸면 Hero, CtaStrip 양쪽에 반영됩니다.
연사 추가/수정도 같은 파일의 `SPEAKERS`, `TIMETABLE` 배열을 수정.

### 2. 폼 제출 백엔드 연동 — `src/api/submitApplication.ts`
현재는 `console.log` + `alert()` 만 하는 stub입니다.
fetch / axios 호출로 교체하면 됩니다. 함수 시그니처:

```ts
export async function submitApplication(data: ApplicationForm): Promise<void>
```

### 3. 디자인 토큰 — `src/index.css`
`:root { --green, --green-strong, --dark, --gray, ... }` 한 곳만 수정.
호환 alias `--gold`는 기존 클래스가 그대로 쓸 수 있도록 유지되어 있습니다.

### 4. 스타일 리팩터 — `src/styles.css`
모든 컴포넌트의 클래스 정의가 이 한 파일에 모여 있습니다.
원본 `index-clean.html`의 `<style>` 블록과 1:1 매칭되어, 디자인 비교가 쉬움.

> **CSS Modules로의 점진 리팩터**
> 각 컴포넌트 폴더의 `Component.module.css` 파일로 해당 클래스 블록을 옮기고
> `import styles from './Component.module.css'`로 사용하면 됩니다.
> 한 번에 다 옮기지 않고 컴포넌트 단위로 점진 이관 가능.

## 자산 (`public/assets/`)

| 파일 | 사용처 |
|------|--------|
| `chart.svg` | Goal 섹션 — AI 혁명과 교육 양극화 지도 |
| `speaker-lee.png` | 이정모 (Speakers, Timetable, Q&A) |
| `speaker-kimsy.png` | 김성윤 (Speakers, Timetable, Q&A) |
| `speaker-kimhs.png` | 김형석 (Speakers, Timetable, Q&A) |
| `benefit-hall.png` | Benefits 카드 #1 배경 — 강연 요약집 |
| `benefit-kagwadong.png` | Benefits 카드 #2 배경 — 어린이 과학동아 |
| `prize-harmony.png` | Prize 1 — 하모니 힐스 |
| `prize-umbrella.png` | Prize 2 — 옥스포드 양우산 |
| `prize-dict.png` | Prize 3 — Oxford Picture Dictionary |

자산을 교체할 때는 같은 파일명을 유지하거나, 교체 후 코드 내 경로를
`전역 검색 → 일괄 변경` 하시면 됩니다.

## 디자인 시스템 준수 사항

- **그린 단일 강조**: `var(--green)` (#52CF29) 한 가지만 사용
- **Pretendard Variable**: `index.html`에서 CDN으로 로드
- **타이포 위계**: Medium 500 (본문) / Bold 700 (헤딩·CTA) / Extra Bold 800 (Hero 메인)
- **한글 어절 줄바꿈**: 전 텍스트 컨테이너에 `word-break: keep-all`

## 주요 인터랙션

- **Hero Aurora 캔버스**: `HeroAurora.tsx`에서 `requestAnimationFrame`으로 5개 색상 구체 애니메이션
- **Floating Nav / Banner**: Hero 통과 후 등장, ApplyForm 진입 시 사라짐 (`useScrollVisibility`)
- **Section scroll reveal**: `.sr` 클래스를 가진 요소가 뷰포트에 진입할 때 `.in` 추가 (`App.tsx`)
- **Hero 텍스트 staggered 등장**: `.hi` 요소들이 순차적으로 `.on` 받음 (`Hero.tsx` useEffect)
- **폼 검증**: 이름/연락처 미입력 시 input border red, 입력 시작 시 자동 해제

## 브라우저 지원

- Chrome / Safari / Edge 최신 2버전
- iOS Safari 16+ (`backdrop-filter`, `100dvh` 사용)
- Firefox는 backdrop-filter 일부 환경에서 비활성화될 수 있음 (그래도 콘텐츠 가독성 영향 없음)
