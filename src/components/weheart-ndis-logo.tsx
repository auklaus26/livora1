import Image from "next/image";

import { cn } from "@/lib/utils";
import weheartNdisLogo from "../../public/WeheartNDIS-logo-long.png";

export function WeheartNdisLogo({ className }: { className?: string }) {
  return (
    <Image
      src={weheartNdisLogo}
      alt="WeheartNDIS logo"
      className={cn("h-18 w-auto object-contain", className)}
    />
  );
}
