interface Props {
  className?: string;
}

function IconLoader({ className }: Props) {
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
      <path d="M12 3a9 9 0 1 0 9 9"></path>
    </svg>
  );
}

export default IconLoader;
