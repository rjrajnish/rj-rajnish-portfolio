export default function Icon({ name, className = "h-5 w-5", strokeWidth = 1.8 }) {
  const commonProps = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
  };

  switch (name) {
    case "menu":
      return (
        <svg {...commonProps}>
          <path d="M4 7H20M4 12H20M4 17H20" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
        </svg>
      );
    case "briefcase":
      return (
        <svg {...commonProps}>
          <path
            d="M9 7V6.2C9 5.08 9 4.52 9.218 4.092C9.41 3.715 9.715 3.41 10.092 3.218C10.52 3 11.08 3 12.2 3H11.8C12.92 3 13.48 3 13.908 3.218C14.285 3.41 14.59 3.715 14.782 4.092C15 4.52 15 5.08 15 6.2V7M4.8 9H19.2C20.32 9 20.88 9 21.308 9.218C21.685 9.41 21.99 9.715 22.182 10.092C22.4 10.52 22.4 11.08 22.4 12.2V15.8C22.4 16.92 22.4 17.48 22.182 17.908C21.99 18.285 21.685 18.59 21.308 18.782C20.88 19 20.32 19 19.2 19H4.8C3.68 19 3.12 19 2.692 18.782C2.315 18.59 2.01 18.285 1.818 17.908C1.6 17.48 1.6 16.92 1.6 15.8V12.2C1.6 11.08 1.6 10.52 1.818 10.092C2.01 9.715 2.315 9.41 2.692 9.218C3.12 9 3.68 9 4.8 9Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "mail":
      return (
        <svg {...commonProps}>
          <path
            d="M3 6.75L10.47 11.982C11.03 12.374 11.31 12.57 11.615 12.646C11.884 12.714 12.116 12.714 12.385 12.646C12.69 12.57 12.97 12.374 13.53 11.982L21 6.75M7.8 20H16.2C17.88 20 18.72 20 19.362 19.673C19.927 19.385 20.385 18.927 20.673 18.362C21 17.72 21 16.88 21 15.2V8.8C21 7.12 21 6.28 20.673 5.638C20.385 5.073 19.927 4.615 19.362 4.327C18.72 4 17.88 4 16.2 4H7.8C6.12 4 5.28 4 4.638 4.327C4.073 4.615 3.615 5.073 3.327 5.638C3 6.28 3 7.12 3 8.8V15.2C3 16.88 3 17.72 3.327 18.362C3.615 18.927 4.073 19.385 4.638 19.673C5.28 20 6.12 20 7.8 20Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "github":
      return (
        <svg {...commonProps}>
          <path
            d="M9 18.5C5.5 19.5 5.5 16.75 4 16.25M14 20V17.42C14.025 17.102 13.983 16.783 13.877 16.482C13.77 16.181 13.601 15.906 13.38 15.676C15.46 15.44 17.65 14.656 17.65 11.06C17.65 10.141 17.321 9.257 16.73 8.563C17.01 7.792 16.99 6.943 16.674 6.186C16.674 6.186 15.886 5.95 14 7.206C12.469 6.791 10.851 6.791 9.32 7.206C7.434 5.95 6.646 6.186 6.646 6.186C6.33 6.943 6.31 7.792 6.59 8.563C5.995 9.262 5.669 10.153 5.67 11.078C5.67 14.648 7.86 15.432 9.94 15.694C9.722 15.922 9.554 16.194 9.448 16.492C9.342 16.791 9.3 17.106 9.325 17.42V20"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "linkedin":
      return (
        <svg {...commonProps}>
          <path
            d="M8 10V17M12 17V13C12 11.895 12.895 11 14 11C15.105 11 16 11.895 16 13V17M8 7.01L8.01 6.999M6.8 21H17.2C18.88 21 19.72 21 20.362 20.673C20.927 20.385 21.385 19.927 21.673 19.362C22 18.72 22 17.88 22 16.2V7.8C22 6.12 22 5.28 21.673 4.638C21.385 4.073 20.927 3.615 20.362 3.327C19.72 3 18.88 3 17.2 3H6.8C5.12 3 4.28 3 3.638 3.327C3.073 3.615 2.615 4.073 2.327 4.638C2 5.28 2 6.12 2 7.8V16.2C2 17.88 2 18.72 2.327 19.362C2.615 19.927 3.073 20.385 3.638 20.673C4.28 21 5.12 21 6.8 21Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "home":
      return (
        <svg {...commonProps}>
          <path
            d="M3 10.8C3 10.142 3 9.813 3.075 9.505C3.141 9.233 3.25 8.973 3.4 8.736C3.57 8.467 3.824 8.258 4.332 7.84L10.932 2.41C11.322 2.09 11.517 1.93 11.733 1.869C11.924 1.816 12.118 1.816 12.309 1.869C12.525 1.93 12.72 2.09 13.11 2.41L19.71 7.84C20.218 8.258 20.472 8.467 20.642 8.736C20.792 8.973 20.901 9.233 20.967 9.505C21.042 9.813 21.042 10.142 21.042 10.8V17.64C21.042 18.816 21.042 19.404 20.813 19.853C20.612 20.248 20.29 20.57 19.895 20.771C19.446 21 18.858 21 17.682 21H6.36C5.184 21 4.596 21 4.147 20.771C3.752 20.57 3.43 20.248 3.229 19.853C3 19.404 3 18.816 3 17.64V10.8Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "id-card":
      return (
        <svg {...commonProps}>
          <path
            d="M20 7.2V16.8C20 17.92 20 18.48 19.782 18.908C19.59 19.285 19.285 19.59 18.908 19.782C18.48 20 17.92 20 16.8 20H7.2C6.08 20 5.52 20 5.092 19.782C4.715 19.59 4.41 19.285 4.218 18.908C4 18.48 4 17.92 4 16.8V7.2C4 6.08 4 5.52 4.218 5.092C4.41 4.715 4.715 4.41 5.092 4.218C5.52 4 6.08 4 7.2 4H16.8C17.92 4 18.48 4 18.908 4.218C19.285 4.41 19.59 4.715 19.782 5.092C20 5.52 20 6.08 20 7.2Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path d="M8 10H16M8 14H13M8.5 7.5H8.51" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
        </svg>
      );
    case "close":
      return (
        <svg {...commonProps}>
          <path d="M6 6L18 18M18 6L6 18" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
        </svg>
      );
    case "arrow-up-right":
      return (
        <svg {...commonProps}>
          <path
            d="M7 17L17 7M17 7H9M17 7V15"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "arrow-right":
      return (
        <svg {...commonProps}>
          <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "download":
      return (
        <svg {...commonProps}>
          <path
            d="M12 3V14M12 14L16 10M12 14L8 10M5 17V17.8C5 18.92 5 19.48 5.218 19.908C5.41 20.285 5.715 20.59 6.092 20.782C6.52 21 7.08 21 8.2 21H15.8C16.92 21 17.48 21 17.908 20.782C18.285 20.59 18.59 20.285 18.782 19.908C19 19.48 19 18.92 19 17.8V17"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "map-pin":
      return (
        <svg {...commonProps}>
          <path
            d="M12 21C12 21 18 15.4 18 10A6 6 0 1 0 6 10C6 15.4 12 21 12 21Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M12 12.5A2.5 2.5 0 1 0 12 7.5A2.5 2.5 0 1 0 12 12.5Z" stroke="currentColor" strokeWidth={strokeWidth} />
        </svg>
      );
    case "trending-up":
      return (
        <svg {...commonProps}>
          <path
            d="M22 7L13.5 15.5L9 11L2 18M22 7H16M22 7V13"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    default:
      return null;
  }
}
