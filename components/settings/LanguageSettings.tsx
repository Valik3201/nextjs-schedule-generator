import { useLocale } from "../providers/LocaleProvider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { locales } from "@/lib/locales";
import { Label } from "@/components/ui/label";
import { useSettings } from "../providers/SettingsProvider";

export default function LanguageSettings() {
  const { dictionary } = useLocale();
  const { language: langLabel, selectLanguage, languages } = dictionary.setup;

  const { language, handleLanguageChange } = useSettings();

  return (
    <div className="w-1/2 flex flex-col gap-2">
      <Label className="text-sm font-bold">{langLabel}</Label>

      <Select value={language} onValueChange={handleLanguageChange}>
        <SelectTrigger className="w-full" aria-label="Select language">
          <SelectValue placeholder={selectLanguage} />
        </SelectTrigger>
        <SelectContent>
          {Object.keys(locales).map((key) => (
            <SelectItem key={key} value={key}>
              {languages[key]}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
