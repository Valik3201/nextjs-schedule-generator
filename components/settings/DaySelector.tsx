import { useLocale } from "../providers/LocaleProvider";
import { useSettings } from "../providers/SettingsProvider";
import { Label } from "@/components/ui/label";

export default function DaySelector() {
  const {
    setup: { selectDays, days },
  } = useLocale().dictionary;

  const { selectedDays, handleDayChange } = useSettings();

  const daysOfWeek = [
    { name: "monday", value: 1 },
    { name: "tuesday", value: 2 },
    { name: "wednesday", value: 3 },
    { name: "thursday", value: 4 },
    { name: "friday", value: 5 },
    { name: "saturday", value: 6 },
    { name: "sunday", value: 0 },
  ];

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
              {days[day.name]}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
}
