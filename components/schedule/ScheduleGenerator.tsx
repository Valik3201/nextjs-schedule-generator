"use client";

import { useState } from "react";
import { format, startOfWeek, endOfWeek, addDays } from "date-fns";
import DateSelector from "./DateSelector";
import DaySelector from "./DaySelector";
import DateFormatSettings from "./DateFormatSettings";
import LanguageSettings from "./LanguageSettings";
import RomanNumeralsToggle from "./RomanNumeralsToggle";
import GeneratedTable from "./GeneratedTable";
import { DatePeriodAlert, DaysOfWeekAlert } from "../alerts/Alerts";
import { DateFormat, GeneratedDate } from "../../types/types";
import { Button } from "@/components/ui/button";
import { DateRange } from "react-day-picker";
import { daysOfWeek, locales, romanize } from "../../helpers/helpers";
import { Sparkles } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Hero from "./Hero";

const ScheduleGenerator: React.FC = () => {
  const [date, setDate] = useState<DateRange>({
    from: new Date(),
    to: addDays(new Date(), 20),
  });
  const [selectedDays, setSelectedDays] = useState<number[]>([]);
  const [generatedDates, setGeneratedDates] = useState<GeneratedDate[]>([]);
  const [language, setLanguage] = useState<string>("en");
  const [dateFormat, setDateFormat] = useState<DateFormat>("short");
  const [useRomanNumerals, setUseRomanNumerals] = useState<boolean>(true);
  const [showAlerts, setShowAlerts] = useState<boolean>(false);

  const handleGenerate = () => {
    setShowAlerts(true);

    if (!date.from || !date.to || selectedDays.length < 1) {
      return;
    }

    const start = date.from;
    const end = date.to;

    const dates: Date[] = [];
    let currentDate = start;

    while (currentDate <= end) {
      if (selectedDays.includes(currentDate.getDay())) {
        dates.push(new Date(currentDate));
      }
      currentDate = addDays(currentDate, 1);
    }

    const groupedDates = dates.reduce(
      (acc: { [key: string]: Date[] }, date) => {
        const weekStart = startOfWeek(date, { weekStartsOn: 1 });
        const weekEnd = endOfWeek(date, { weekStartsOn: 1 });

        const weekKey = `${format(
          weekStart,
          locales[language].dateFormat[dateFormat],
          { locale: locales[language].locale }
        )} - ${format(weekEnd, locales[language].dateFormat[dateFormat], {
          locale: locales[language].locale,
        })}`;

        if (!acc[weekKey]) {
          acc[weekKey] = [];
        }

        acc[weekKey].push(date);

        return acc;
      },
      {}
    );

    const formattedDates = Object.entries(groupedDates).map(
      ([key, value], index) => {
        let formattedDates = "";
        let isFirst = true;

        value.forEach((date, idx) => {
          const day = format(date, "d");
          let month = "";

          if (dateFormat === "roman") {
            month = `${romanize(date.getMonth() + 1)} ${format(date, "yyyy")}`;
          } else if (dateFormat === "long") {
            month = format(date, "MMMM yyyy", {
              locale: locales[language].locale,
            });
          } else if (dateFormat === "short") {
            month = format(date, "MMM yyyy", {
              locale: locales[language].locale,
            });
          } else {
            month = format(date, "MM yyyy", {
              locale: locales[language].locale,
            });
          }

          if (!isFirst) {
            const prevDate = value[idx - 1];

            let prevMonthYear = "";
            if (dateFormat === "roman") {
              prevMonthYear = `${romanize(prevDate.getMonth() + 1)} ${format(
                prevDate,
                "yyyy"
              )}`;
            } else if (dateFormat === "long") {
              prevMonthYear = format(prevDate, "MMMM yyyy", {
                locale: locales[language].locale,
              });
            } else if (dateFormat === "short") {
              prevMonthYear = format(prevDate, "MMM yyyy", {
                locale: locales[language].locale,
              });
            } else {
              prevMonthYear = format(prevDate, "MM yyyy", {
                locale: locales[language].locale,
              });
            }

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
          period: useRomanNumerals
            ? romanize(index + 1)
            : (index + 1).toString(),
          dates: formattedDates,
        };
      }
    );

    setGeneratedDates(formattedDates);
  };

  const handleDayChange = (dayValue: number) => {
    if (selectedDays.includes(dayValue)) {
      setSelectedDays(selectedDays.filter((day) => day !== dayValue));
    } else {
      setSelectedDays([...selectedDays, dayValue]);
    }
  };

  const handleLanguageChange = (value: string) => {
    setLanguage(value);
  };

  const handleDateFormatChange = (value: string) => {
    setDateFormat(value as DateFormat);
  };

  const handleRomanNumeralsChange = (checked: boolean) => {
    setUseRomanNumerals(checked);
  };

  return (
    <>
      <Hero />

      <div className="container md:px-20 lg:px-52">
        <div className="grid md:grid-cols-2 gap-16 min-h-svh py-16" id="setup">
          <Card className="h-fit">
            <CardHeader>
              <CardTitle className="font-serif">Setup</CardTitle>
              <CardDescription>
                Select parameters to generate your schedule
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              <DateSelector date={date} setDate={setDate} />

              <DaySelector
                daysOfWeek={daysOfWeek}
                selectedDays={selectedDays}
                handleDayChange={handleDayChange}
              />

              <div className="flex gap-4">
                <DateFormatSettings
                  dateFormat={dateFormat}
                  handleDateFormatChange={handleDateFormatChange}
                />
                <LanguageSettings
                  language={language}
                  handleLanguageChange={handleLanguageChange}
                  locales={locales}
                />
              </div>

              <RomanNumeralsToggle
                useRomanNumerals={useRomanNumerals}
                handleRomanNumeralsChange={handleRomanNumeralsChange}
              />

              {showAlerts && date && (!date.from || !date.to) && (
                <DatePeriodAlert />
              )}

              {showAlerts && selectedDays.length < 1 && <DaysOfWeekAlert />}
            </CardContent>
            <CardFooter>
              <Button onClick={handleGenerate} className="md:w-fit">
                Generate
                <Sparkles className="ms-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>

          {generatedDates.length > 0 && (
            <GeneratedTable generatedDates={generatedDates} />
          )}
        </div>
      </div>
    </>
  );
};

export default ScheduleGenerator;
