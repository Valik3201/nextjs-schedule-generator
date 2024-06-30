import { useLocale } from "../providers/LocaleProvider";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { DateRange } from "react-day-picker";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Label } from "@/components/ui/label";
import { locales } from "@/helpers/helpers";

interface DateSelectorProps {
  date: DateRange;
  setDate: any;
}

const DateSelector: React.FC<DateSelectorProps> = ({ date, setDate }) => {
  const { locale: lang } = useLocale();
  const { setup: d } = useLocale().dictionary;

  const currentLocale = locales[lang].locale;
  const dateFormat = lang === "en" ? "MMMM dd, y" : "dd MMMM y";

  return (
    <div className="flex flex-col gap-2">
      <Label className="text-sm font-bold">{d.datePeriod}</Label>

      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "w-full justify-start text-left font-normal capitalize",
              !date ? "" : "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4 min-h-4 min-w-4" />
            {date?.from ? (
              date.to ? (
                <span className="w-96 text-ellipsis truncate">
                  {format(date.from, dateFormat, { locale: currentLocale })} -{" "}
                  {format(date.to, dateFormat, { locale: currentLocale })}
                </span>
              ) : (
                <span className="w-96 text-ellipsis truncate">
                  {format(date.from, dateFormat, { locale: currentLocale })}
                </span>
              )
            ) : (
              <span>{d.pickDate}</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0 capitalize" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
            locale={currentLocale}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default DateSelector;
