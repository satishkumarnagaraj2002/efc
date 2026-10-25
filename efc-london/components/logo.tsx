import Image from "next/image";

type LogoProps = {
  /** Height of the shield in pixels. Width follows the 894:1048 aspect ratio. */
  height?: number;
  className?: string;
  priority?: boolean;
  /** Adds the animated glow + floating motion (used for large hero placements). */
  glow?: boolean;
};

const RATIO = 894 / 1048;

/**
 * The club crest only (transparent background, no box or circle around it),
 * with a soft glow and a light "shine" sweep on hover.
 */
export function Logo({ height = 48, className = "", priority = false, glow = false }: LogoProps) {
  const width = Math.round(height * RATIO);

  return (
    <span
      className={`logo-shield relative inline-block shrink-0 ${glow ? "logo-float" : ""} ${className}`}
      style={{ width, height }}
    >
      {glow ? <span aria-hidden="true" className="logo-halo" /> : null}
      <Image
        src="/logo-shield.png"
        alt="Elite Football Club London crest"
        width={width * 2}
        height={height * 2}
        priority={priority}
        className="relative h-full w-full object-contain drop-shadow-[0_6px_18px_rgba(0,0,0,0.55)]"
      />
      <span aria-hidden="true" className="logo-shine" />
    </span>
  );
}
