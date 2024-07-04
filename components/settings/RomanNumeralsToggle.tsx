import { useLocale } from "../providers/LocaleProvider";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useSettings } from "../providers/SettingsProvider";

export default function RomanNumeralsToggle() {
  const {
    setup: { useRomanNumerals: useRoman },
  } = useLocale().dictionary;

  const { useRomanNumerals, handleRomanNumeralsChange } = useSettings();

  return (
    <div className="flex items-center space-x-2">
      <Checkbox
        id="romanize"
        checked={useRomanNumerals}
        onCheckedChange={handleRomanNumeralsChange}
      />
      <Label htmlFor="romanize">{useRoman}</Label>
    </div>
  );
}
