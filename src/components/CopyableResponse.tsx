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
    <div className={`relative ${className}`}>
      {/* 1. Removed 'group' from here because it's now on the parent Card.
        2. Added 'opacity-0 group-hover:opacity-100' to react to the parent's hover.
      */}
      <div className="absolute top-0 inset-inline-end-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-50">
        <CopyButton contentRef={contentRef} />
      </div>

      <div ref={contentRef} dir={dir} className="max-w-none">
        {children}
      </div>
    </div>
  );
}
