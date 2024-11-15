interface Props {
  className?: string;
}

function IconCircleClose({ className }: Props) {
  return (
    <svg
      className={className}
      width="36"
      height="31"
      viewBox="0 0 36 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.5 15.5C4.5 17.2728 4.84919 19.0283 5.52763 20.6662C6.20606 22.3041 7.20047 23.7923 8.45406 25.0459C9.70765 26.2995 11.1959 27.2939 12.8338 27.9724C14.4717 28.6508 16.2272 29 18 29C19.7728 29 21.5283 28.6508 23.1662 27.9724C24.8041 27.2939 26.2923 26.2995 27.5459 25.0459C28.7995 23.7923 29.7939 22.3041 30.4724 20.6662C31.1508 19.0283 31.5 17.2728 31.5 15.5C31.5 13.7272 31.1508 11.9717 30.4724 10.3338C29.7939 8.69588 28.7995 7.20765 27.5459 5.95406C26.2923 4.70047 24.8041 3.70607 23.1662 3.02763C21.5283 2.34919 19.7728 2 18 2C16.2272 2 14.4717 2.34919 12.8338 3.02763C11.1959 3.70607 9.70765 4.70047 8.45406 5.95406C7.20047 7.20765 6.20606 8.69588 5.52763 10.3338C4.84919 11.9717 4.5 13.7272 4.5 15.5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 11L14 19"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 11L22 19"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default IconCircleClose;
