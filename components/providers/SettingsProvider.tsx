"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { useLocale } from "../providers/LocaleProvider";
import { addDays } from "date-fns";
import { DateRange } from "react-day-picker";
import { DateFormat } from "../../types/types";

interface SettingsContextProps {
  date: DateRange;
  setDate: any;
  selectedDays: number[];
  language: string;
  dateFormat: DateFormat;
  useRomanNumerals: boolean;
  handleDayChange: (dayValue: number) => void;
  handleLanguageChange: (value: string) => void;
  handleDateFormatChange: (value: DateFormat) => void;
  handleRomanNumeralsChange: (value: boolean) => void;
}

const SettingsContext = createContext<SettingsContextProps | undefined>(
  undefined
);

export function SettingsProvider({ children }: { children: ReactNode }) {
  const { locale } = useLocale();
  const [date, setDate] = useState<DateRange>({
    from: new Date(),
    to: addDays(new Date(), 20),
  });
  const [selectedDays, setSelectedDays] = useState<number[]>([]);
  const [language, setLanguage] = useState<string>(locale);
  const [dateFormat, setDateFormat] = useState<DateFormat>("short");
  const [useRomanNumerals, setUseRomanNumerals] = useState<boolean>(true);

  const handleDayChange = (dayValue: number) => {
    if (selectedDays.includes(dayValue)) {
      setSelectedDays(selectedDays.filter((day) => day !== dayValue));
    } else {
      setSelectedDays([...selectedDays, dayValue]);
    }
  };

  const handleDateFormatChange = (value: DateFormat) => {
    setDateFormat(value);
  };

  const handleLanguageChange = (value: string) => {
    setLanguage(value);
  };

  const handleRomanNumeralsChange = (checked: boolean) => {
    setUseRomanNumerals(checked);
  };

  return (
    <SettingsContext.Provider
      value={{
        date,
        setDate,
        selectedDays,
        language,
        dateFormat,
        useRomanNumerals,
        handleDayChange,
        handleDateFormatChange,
        handleLanguageChange,
        handleRomanNumeralsChange,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}

export const useSettings = () => {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error("useSettings must be used within a SettingsProvider");
  }
  return context;
};
