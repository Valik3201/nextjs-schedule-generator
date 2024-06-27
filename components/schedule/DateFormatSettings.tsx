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
  return (
    <div className="w-1/2 flex flex-col gap-2">
      <Label className="text-sm font-bold">Date Format</Label>

      <Select value={dateFormat} onValueChange={handleDateFormatChange}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select date format" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="numeric">Digits</SelectItem>
          <SelectItem value="roman">Roman numerals</SelectItem>
          <SelectItem value="long">Long format</SelectItem>
          <SelectItem value="short">Short format</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default DateFormatSettings;
