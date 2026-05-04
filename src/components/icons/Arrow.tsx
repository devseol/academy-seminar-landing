/**
 * 반복 사용되는 화살표 아이콘.
 * `size` prop으로 한 번만 일관되게 변경 가능합니다.
 */
interface ArrowProps {
  className?: string;
  size?: number;
}

export function Arrow({ className, size = 14 }: ArrowProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ display: 'inline-block', verticalAlign: 'middle' }}
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}
