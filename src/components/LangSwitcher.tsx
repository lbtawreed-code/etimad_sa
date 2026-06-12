import type { Lang } from "@/lib/i18n";

import saFlag from "@/assets/flag-sa.png";
import ukFlag from "@/assets/flag-uk.png";
import frFlag from "@/assets/flag-fr.png";

// Then update your LANGS array:
const LANGS = [
  { code: "ar", label: "العربية", flag: saFlag },
  { code: "en", label: "English", flag: ukFlag },
  { code: "fr", label: "Français", flag: frFlag }
];

export function LangSwitcher({
  current,
  onChange,
}: {
  current: Lang;
  onChange: (l: Lang) => void;
}) {
  return (
    <div className="glass-panel rounded-full p-1 flex items-center gap-1 shadow-soft">
      {LANGS.map((l) => (
        <button
          key={l.code}
          onClick={() => onChange(l.code)}
          aria-label={l.label}
          className={`px-3 py-1.5 rounded-full text-sm font-semibold transition-all flex items-center gap-1.5 ${
            current === l.code
              ? "gradient-primary text-primary-foreground shadow-glow"
              : "text-foreground/70 hover:text-foreground"
          }`}
        >
          {/* Using the string path directly from the 'public' folder */}
          <img 
            src={l.flag} 
            alt={l.label} 
            className="w-5 h-5 object-cover rounded-full" 
            onError={(e) => {
              // This helps debug if the path is wrong
              console.error(`Failed to load flag: ${l.flag}`);
              (e.target as HTMLImageElement).style.display = 'none';
            }}
          />
          {l.code.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
