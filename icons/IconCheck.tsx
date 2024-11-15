interface Props {
  className?: string;
}

function IconCheck({ className }: Props) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <path d="M5 12l5 5l10 -10"></path>
    </svg>
  );
}

export default IconCheck;
