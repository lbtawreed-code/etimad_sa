import { useRef } from "react";
import CopyButton from "./CopyButton";

interface CopyableResponseProps {
  children: React.ReactNode;
  dir?: "rtl" | "ltr" | "auto";
  className?: string;
}

export default function CopyableResponse({ children, dir = "auto", className = "" }: CopyableResponseProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div className={`relative group ${className}`}>
      {/* Absolute positioned button - now using inset-inline-end for RTL/LTR support */}
     <div className="absolute top-2 inset-inline-end-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-20">
  <CopyButton contentRef={contentRef} />
</div>
      <div ref={contentRef} dir={dir} className="max-w-none">
        {children}
      </div>
    </div>
  );
}
