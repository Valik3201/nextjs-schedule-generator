import { useLocale } from "../providers/LocaleProvider";
import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

export function DatePeriodAlert() {
  const {
    alerts: { datePeriod },
  } = useLocale().dictionary;

  return (
    <Alert variant="destructive">
      <AlertCircle className="h-4 w-4" />
      <AlertDescription>{datePeriod}</AlertDescription>
    </Alert>
  );
}

export function DaysOfWeekAlert() {
  const {
    alerts: { daysOfWeek },
  } = useLocale().dictionary;

  return (
    <Alert variant="destructive">
      <AlertCircle className="h-4 w-4" />
      <AlertDescription>{daysOfWeek}</AlertDescription>
    </Alert>
  );
}
