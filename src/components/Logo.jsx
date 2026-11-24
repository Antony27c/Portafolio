export const LOGO_HEX = "M50 12 83.5 31v38L50 88 16.5 69V31z";
export const LOGO_GLYPH = [
  "M33 42 22.5 50.4 33 58.8",
  "M67 42 77.5 50.4 67 58.8",
  "M34 54.6 39 48.8 42.2 52 50 40.6 57.8 52 61 48.8 66 54.6",
];

export default function Logo({ className = "" }) {
  return (
    <svg
      className={`logo ${className}`.trim()}
      viewBox="10 6 80 88"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d={LOGO_HEX} strokeWidth="5" />
      {LOGO_GLYPH.map((d) => (
        <path key={d} d={d} strokeWidth="5" />
      ))}
    </svg>
  );
}
