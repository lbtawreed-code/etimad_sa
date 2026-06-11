import type { Lang } from "@/lib/i18n";
// 1. Import your flag images (adjust paths to match your assets folder)
import arFlag from "@/assets/flags/ar.png";
import enFlag from "@/assets/flags/en.png";
import frFlag from "@/assets/flags/fr.png";

const LANGS: { code: Lang; label: string; flag: string }[] = [
  { code: "ar", label: "العربية", flag: arFlag },
  { code: "en", label: "English", flag: enFlag },
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
          {/* 3. Render as an image instead of a span */}
          <img src={l.flag} alt={l.label} className="w-5 h-5 object-cover rounded-full" />
          {l.code.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
