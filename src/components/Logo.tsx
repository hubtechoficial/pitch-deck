import Image from "next/image";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Image
      src="/logo-white.png"
      alt="Hub Tech Tecnologia"
      width={2366}
      height={722}
      className={`w-[240px] md:w-[320px] h-auto ${className}`}
      priority
    />
  );
}
