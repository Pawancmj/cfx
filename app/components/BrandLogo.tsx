import Link from "next/link";
import Image from "next/image";

interface BrandLogoProps {
  logoSize?: string;
  className?: string;
}

export function BrandLogo({ logoSize = "w-9 h-9 sm:w-10 sm:h-10 lg:w-12 lg:h-12", className = "" }: BrandLogoProps) {
  return (
    <Link href="/" className={`flex items-center shrink-0 w-auto ${className}`}>
      <div className={`relative shrink-0 flex items-center justify-center ${logoSize} bg-white rounded-[0.75rem] sm:rounded-[0.85rem] lg:rounded-2xl shadow-sm mr-2 sm:mr-3 lg:mr-4 overflow-hidden`}>
        <Image
          src="/logo.png"
          alt="CyberForenX Logo"
          fill
          sizes="200px"
          className="object-contain p-1.5 sm:p-2"
          priority
        />
      </div>
      <div className="flex flex-col justify-center">
        <span className="text-sm sm:text-base lg:text-xl font-bold tracking-tight text-white whitespace-nowrap leading-none">
          CyberForenX
        </span>
        <span className="self-center text-[9px] sm:text-[10px] lg:text-[11px] font-bold tracking-widest text-zinc-400 whitespace-nowrap uppercase mt-0.5 sm:mt-1">
          & Associates
        </span>
      </div>
    </Link>
  );
}
