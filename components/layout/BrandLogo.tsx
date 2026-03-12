import Image from "next/image";
import Link from "next/link";

export default function BrandLogo() {
  return (
    <Link href="/" className="flex items-center gap-3 group">
      <Image
        src="/brand/logo-v2.png"
        alt="SAQR logo"
        width={42}
        height={42}
        priority
        className="transition-transform duration-300 group-hover:scale-105"
      />
      <span className="font-semibold tracking-widest text-[#F5F3EF]">
        SAQR
      </span>
    </Link>
  );
}