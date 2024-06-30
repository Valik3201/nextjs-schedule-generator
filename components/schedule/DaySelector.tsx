import { useLocale } from "../providers/LocaleProvider";
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

      <div className="flex w-full justify-between text-sm">
        {daysOfWeek.map((day) => (
          <label
            key={day.value}
            htmlFor={`day-${day.value}`}
            className="flex-1"
          >
            <input
              id={`day-${day.value}`}
              type="checkbox"
              checked={selectedDays.includes(day.value)}
              onChange={() => handleDayChange(day.value)}
              className="hidden peer"
            />
            <span
              className={`block text-center py-2 px-auto w-full border-y border-r peer-checked:bg-primary peer-checked:text-primary-foreground hover:bg-accent hover:cursor-pointer transition-colors ${
                day.value === 1 ? "rounded-l-full border-s" : ""
              } ${day.value === 0 ? "rounded-r-full border-e" : ""}`}
            >
              {days[day.name.toLowerCase()]}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default DaySelector;
