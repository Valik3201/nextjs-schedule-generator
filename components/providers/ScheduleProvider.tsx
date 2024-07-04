"use client";

import { ReactNode, createContext, useContext } from "react";
import { useScheduleHandlers } from "@/hooks/useScheduleHandlers";
import { useSettings } from "./SettingsProvider";
import { GeneratedDate } from "@/types/types";
import { DateRange } from "react-day-picker";

interface ScheduleContextType {
  date: DateRange;
  setDate: any;
  selectedDays: number[];
  handleDayChange: (dayValue: number) => void;
  generatedDates: GeneratedDate[];
  handleGenerate: () => void;
  showAlerts: boolean;
  handleDelete: (index: number) => void;
}

const ScheduleContext = createContext<ScheduleContextType | undefined>(
  undefined
);

export function ScheduleProvider({ children }: { children: ReactNode }) {
  const {
    date,
    setDate,
    selectedDays,
    language,
    dateFormat,
    useRomanNumerals,
    handleDayChange,
  } = useSettings();
  const { generatedDates, handleGenerate, showAlerts, handleDelete } =
    useScheduleHandlers({
      date,
      selectedDays,
      language,
      dateFormat,
      useRomanNumerals,
    });

  const contextValue: ScheduleContextType = {
    date,
    setDate,
    selectedDays,
    handleDayChange,
    generatedDates,
    handleGenerate,
    showAlerts,
    handleDelete,
  };

  return (
    <ScheduleContext.Provider value={contextValue}>
      {children}
    </ScheduleContext.Provider>
  );
}

export const useScheduleContext = () => {
  const context = useContext(ScheduleContext);
  if (!context) {
    throw new Error(
      "useScheduleContext must be used within a ScheduleProvider"
    );
  }
  return context;
};
