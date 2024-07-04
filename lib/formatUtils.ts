import { format } from "date-fns";
import { locales } from "@/lib/locales";
import { romanize } from "@/lib/utils";
import { DateFormat } from "@/types/types";

const formatMonthYear = (
  date: Date,
  dateFormat: DateFormat,
  language: string
) => {
  const locale = locales[language].locale;

  switch (dateFormat) {
    case "roman":
      return `${romanize(date.getMonth() + 1)} ${format(date, "yyyy")}`;
    case "long":
      return format(date, "MMMM yyyy", { locale });
    case "short":
      return format(date, "MMM yyyy", { locale });
    default:
      return format(date, "MM yyyy", { locale });
  }
};

export const formatGroupedDates = (
  groupedDates: { [key: string]: Date[] },
  dateFormat: DateFormat,
  language: string,
  useRomanNumerals: boolean
) => {
  return Object.entries(groupedDates).map(([key, value], index) => {
    let formattedDates = "";
    let isFirst = true;

    value.forEach((date, idx) => {
      const day = format(date, "d");
      const month = formatMonthYear(date, dateFormat, language);

      if (!isFirst) {
        const prevDate = value[idx - 1];
        const prevMonthYear = formatMonthYear(prevDate, dateFormat, language);

        if (month !== prevMonthYear) {
          formattedDates += ` ${prevMonthYear}, ${day}`;
        } else {
          formattedDates += `, ${day}`;
        }
      } else {
        formattedDates += `${day}`;
        isFirst = false;
      }

      if (
        idx === value.length - 1 ||
        (idx < value.length - 1 && value[idx + 1].getDay() === 1)
      ) {
        formattedDates += ` ${month}`;
      }
    });

    return {
      period: useRomanNumerals ? romanize(index + 1) : (index + 1).toString(),
      dates: formattedDates,
    };
  });
};
