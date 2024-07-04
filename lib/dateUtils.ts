import { format, startOfWeek, endOfWeek } from "date-fns";
import { locales } from "@/lib/locales";
import { DateFormat } from "@/types/types";

export function groupDatesByWeek(
  dates: Date[],
  language: string,
  dateFormat: DateFormat
) {
  return dates.reduce((acc: { [key: string]: Date[] }, date) => {
    const weekStart = startOfWeek(date, { weekStartsOn: 1 });
    const weekEnd = endOfWeek(date, { weekStartsOn: 1 });

    const weekKey = `${format(
      weekStart,
      locales[language].dateFormat[dateFormat],
      {
        locale: locales[language].locale,
      }
    )}
      - ${format(weekEnd, locales[language].dateFormat[dateFormat], {
        locale: locales[language].locale,
      })}`;

    if (!acc[weekKey]) {
      acc[weekKey] = [];
    }

    acc[weekKey].push(date);

    return acc;
  }, {});
}
