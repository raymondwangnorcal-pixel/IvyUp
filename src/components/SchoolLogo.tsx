import Image from "next/image";
import { getLogoSrc, type School } from "@/lib/schools";

type SchoolLogoProps = { school: School; className?: string };

// Full-color logos sit on a light tile: several school colors vanish on charcoal.
export function SchoolLogo({ school, className = "" }: SchoolLogoProps) {
  return (
    <div className={`flex items-center justify-center rounded-2xl bg-white p-4 ${className}`}>
      <Image
        src={getLogoSrc(school.slug)}
        alt={`${school.name} logo`}
        width={160}
        height={80}
        unoptimized
        className="h-full max-h-14 w-auto object-contain"
      />
    </div>
  );
}
