import { useState } from "react";
import { addDays } from "date-fns";
import { groupDatesByWeek } from "@/lib/dateUtils";
import { formatGroupedDates } from "@/lib/formatUtils";
import { romanize } from "@/lib/utils";
import { DateFormat, GeneratedDate } from "../types/types";
import { DateRange } from "react-day-picker";

export function useScheduleHandlers({
  date,
  selectedDays,
  dateFormat,
  language,
  useRomanNumerals,
}: {
  date: DateRange;
  selectedDays: number[];
  dateFormat: DateFormat;
  language: string;
  useRomanNumerals: boolean;
}) {
  const [generatedDates, setGeneratedDates] = useState<GeneratedDate[]>([]);
  const [showAlerts, setShowAlerts] = useState<boolean>(false);

  const handleGenerate = () => {
    setShowAlerts(true);

    if (!date.from || !date.to || selectedDays.length < 1) {
      return;
    }

    const dates: Date[] = [];
    let currentDate = date.from;

    while (currentDate <= date.to) {
      if (selectedDays.includes(currentDate.getDay())) {
        dates.push(new Date(currentDate));
      }
      currentDate = addDays(currentDate, 1);
    }

    const groupedDates = groupDatesByWeek(dates, language, dateFormat);

    const formattedDates = formatGroupedDates(
      groupedDates,
      dateFormat,
      language,
      useRomanNumerals
    );

    setGeneratedDates(formattedDates);
  };

  const handleDelete = (index: number) => {
    const updatedDates = generatedDates.filter((_, i) => i !== index);
    setGeneratedDates(
      updatedDates.map((date, idx) => ({
        ...date,
        period: useRomanNumerals ? romanize(idx + 1) : (idx + 1).toString(),
      }))
    );
  };

  return {
    generatedDates,
    showAlerts,
    handleGenerate,
    handleDelete,
  };
}
