import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;

const base = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export const HandsIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M7 11V5.5a1.5 1.5 0 0 1 3 0V10" />
    <path d="M10 9.5V4a1.5 1.5 0 0 1 3 0v6" />
    <path d="M13 6.5a1.5 1.5 0 0 1 3 0V11" />
    <path d="M16 9a1.5 1.5 0 0 1 3 0v4.5a7 7 0 0 1-7 7h-.5a6.5 6.5 0 0 1-5.1-2.5L4 15a1.6 1.6 0 0 1 2.4-2.1L7 13.5" />
  </svg>
);
export const ShieldIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M12 3 4.5 6v5.5c0 4.6 3.2 8.3 7.5 9.5 4.3-1.2 7.5-4.9 7.5-9.5V6L12 3Z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);
export const CapIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="m2.5 9 9.5-4.5L21.5 9 12 13.5 2.5 9Z" />
    <path d="M6.5 11v4.5c0 1.4 2.5 3 5.5 3s5.5-1.6 5.5-3V11" />
    <path d="M21.5 9v5" />
  </svg>
);
export const HeartIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M12 20s-7.5-4.4-7.5-10A4.5 4.5 0 0 1 12 7.3 4.5 4.5 0 0 1 19.5 10c0 5.6-7.5 10-7.5 10Z" />
  </svg>
);
export const MusicIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M9 18V5.5l11-2V16" />
    <circle cx="6.5" cy="18" r="2.5" />
    <circle cx="17.5" cy="16" r="2.5" />
  </svg>
);
export const BookIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5v-15Z" />
    <path d="M4 20.5A2.5 2.5 0 0 1 6.5 18H20v3H6.5" />
  </svg>
);
export const SunIcon = (p: P) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
  </svg>
);
export const MoonIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5a8.5 8.5 0 1 0 11 11Z" />
  </svg>
);
export const MenuIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);
export const CloseIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
);
export const ChevronLeft = (p: P) => (
  <svg {...base} {...p}>
    <path d="m15 5-7 7 7 7" />
  </svg>
);
export const ChevronRight = (p: P) => (
  <svg {...base} {...p}>
    <path d="m9 5 7 7-7 7" />
  </svg>
);
export const PhoneIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M5 4h3.5l1.5 4-2 1.5a11 11 0 0 0 6.5 6.5L16 14l4 1.5V19a1.5 1.5 0 0 1-1.6 1.5C10.4 20 4 13.6 3.5 5.6A1.5 1.5 0 0 1 5 4Z" />
  </svg>
);
export const MailIcon = (p: P) => (
  <svg {...base} {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3.5 6.5 8.5 6.5 8.5-6.5" />
  </svg>
);
export const PinIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Z" />
    <circle cx="12" cy="9.5" r="2.5" />
  </svg>
);
export const ArrowIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);
export const WhatsAppIcon = (p: P) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="currentColor" aria-hidden {...p}>
    <path d="M12.04 2a9.9 9.9 0 0 0-8.5 15l-1.4 5 5.1-1.3A9.9 9.9 0 1 0 12.04 2Zm0 18.1a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3a8.2 8.2 0 1 1 6.9 3.8Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.4.1-.2 0-.3 0-.5l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.4.8 3.2.6.5-.1 1.5-.6 1.8-1.2.2-.6.2-1.1.1-1.2l-.5-.3Z" />
  </svg>
);

export const highlightIcons = {
  hands: HandsIcon,
  shield: ShieldIcon,
  cap: CapIcon,
  heart: HeartIcon,
  music: MusicIcon,
  book: BookIcon,
};
