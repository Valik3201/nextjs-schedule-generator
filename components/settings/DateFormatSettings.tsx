import { useLocale } from "../providers/LocaleProvider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { useSettings } from "../providers/SettingsProvider";

export default function DateFormatSettings() {
  const { dictionary } = useLocale();
  const { setup: d } = dictionary;

  const { dateFormat, handleDateFormatChange } = useSettings();

  return (
    <div className="w-1/2 flex flex-col gap-2">
      <Label className="text-sm font-bold">{d.dateFormat}</Label>

      <Select value={dateFormat} onValueChange={handleDateFormatChange}>
        <SelectTrigger
          className="w-full text-left"
          aria-label="Select date format"
        >
          <SelectValue placeholder="Select date format" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="numeric">{d.digits}</SelectItem>
          <SelectItem value="roman">{d.romanNumerals}</SelectItem>
          <SelectItem value="long">{d.longFormat}</SelectItem>
          <SelectItem value="short">{d.shortFormat}</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
