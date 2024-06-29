import { useLocale } from "../providers/LocaleProvider";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { DayOfWeek } from "../../types/types";

interface DaySelectorProps {
  daysOfWeek: DayOfWeek[];
  selectedDays: number[];
  handleDayChange: (dayValue: number) => void;
}

const DaySelector: React.FC<DaySelectorProps> = ({
  daysOfWeek,
  selectedDays,
  handleDayChange,
}) => {
  const {
    setup: { selectDays, days },
  } = useLocale().dictionary;

  return (
    <div className="flex flex-col gap-2">
      <Label className="text-sm font-bold">{selectDays}</Label>

      {daysOfWeek.map((day) => (
        <div key={day.value} className="flex items-center space-x-2">
          <Checkbox
            id={`day-${day.value}`}
            value={day.value}
            checked={selectedDays.includes(day.value)}
            onCheckedChange={() => handleDayChange(day.value)}
          />
          <label
            htmlFor={`day-${day.value}`}
            className="text-sm font-medium leading-none"
          >
            {days[day.name.toLowerCase()]}
          </label>
        </div>
      ))}
    </div>
  );
};

export default DaySelector;
