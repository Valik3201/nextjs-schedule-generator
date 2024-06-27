import React from "react";
import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

export const DatePeriodAlert: React.FC = () => {
  return (
    <Alert variant="destructive">
      <AlertCircle className="h-4 w-4" />
      <AlertDescription>Please select a date period.</AlertDescription>
    </Alert>
  );
};

export const DaysOfWeekAlert: React.FC = () => {
  return (
    <Alert variant="destructive">
      <AlertCircle className="h-4 w-4" />
      <AlertDescription>Please select the days of the week.</AlertDescription>
    </Alert>
  );
};
