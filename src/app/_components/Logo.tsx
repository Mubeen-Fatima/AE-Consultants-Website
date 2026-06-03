import Image from "next/image";

// Intrinsic dimensions of public/ae-logo-colour.png (877 x 236).
const LOGO_RATIO = 877 / 236;

type LogoProps = {
  variant?: "light" | "dark";
  /** Rendered height of the logo in px. */
  size?: number;
};

export function Logo({ variant = "dark", size = 52 }: LogoProps) {
  return (
    <Image
      src="/ae-logo-colour.png"
      alt="Australian Education Consultants"
      width={Math.round(size * LOGO_RATIO)}
      height={size}
      priority
      style={{
        height: size,
        width: "auto",
        // The colour logo has dark text that is unreadable on dark
        // backgrounds (e.g. the footer), so render it solid white there.
        filter: variant === "light" ? "brightness(0) invert(1)" : undefined,
      }}
    />
  );
}
