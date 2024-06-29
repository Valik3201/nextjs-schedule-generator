import { useLocale } from "../providers/LocaleProvider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DateFormat } from "../../types/types";
import { Label } from "@/components/ui/label";

interface DateFormatSettingsProps {
  dateFormat: DateFormat;
  handleDateFormatChange: (value: string) => void;
}

const DateFormatSettings: React.FC<DateFormatSettingsProps> = ({
  dateFormat,
  handleDateFormatChange,
}) => {
  const { dictionary } = useLocale();
  const { setup: d } = dictionary;

  return (
    <div className="w-1/2 flex flex-col gap-2">
      <Label className="text-sm font-bold">{d.dateFormat}</Label>

      <Select value={dateFormat} onValueChange={handleDateFormatChange}>
        <SelectTrigger className="w-full">
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
};

export default DateFormatSettings;
