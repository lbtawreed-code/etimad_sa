import type { Lang } from "@/lib/i18n";

<<<<<<< Updated upstream
import saFlag from "@/icons/flag-sa.png";
import ukFlag from "@/icons/flag-uk.png";
import frFlag from "@/icons/flag-fr.png";

// Then update your LANGS array:
const LANGS = [
  { code: "ar", label: "العربية", flag: saFlag },
  { code: "en", label: "English", flag: ukFlag },
  { code: "fr", label: "Français", flag: frFlag }
=======
// Explicitly import your local high-quality flag assets
import flagSa from "@/assets/flag-sa.png";
import flagUk from "@/assets/flag-uk.png";
import flagFr from "@/assets/flag-fr.png";

const LANGS: { code: Lang; label: string; flagImg: string; alt: string }[] = [
  { 
    code: "ar", 
    label: "العربية", 
    flagImg: flagSa, 
    alt: "Saudi Arabia" 
  },
  { 
    code: "en", 
    label: "English", 
    flagImg: flagUk, 
    alt: "United Kingdom" 
  },
  { 
    code: "fr", 
    label: "Français", 
    flagImg: flagFr, 
    alt: "France" 
  },
>>>>>>> Stashed changes
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
          className={`px-3 py-1.5 rounded-full text-sm font-bold transition-all flex items-center gap-2 ${
            current === l.code
              ? "gradient-primary text-primary-foreground shadow-glow scale-105"
              : "text-foreground/70 hover:text-foreground hover:bg-black/5"
          }`}
        >
<<<<<<< Updated upstream
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
=======
          <img 
            src={l.flagImg} 
            alt={l.alt} 
            className="w-5 h-5 object-contain rounded-full shadow-sm inline-block shrink-0" 
            style={{ minWidth: "20px" }}
          />
          <span className="text-xs tracking-wider uppercase font-extrabold">{l.code}</span>
>>>>>>> Stashed changes
        </button>
      ))}
    </div>
  );
}
