import { useLocale } from "../providers/LocaleProvider";
import DateSelector from "../settings/DateSelector";
import DaySelector from "../settings/DaySelector";
import DateFormatSettings from "../settings/DateFormatSettings";
import LanguageSettings from "../settings/LanguageSettings";
import RomanNumeralsToggle from "../settings/RomanNumeralsToggle";
import { DatePeriodAlert, DaysOfWeekAlert } from "../alerts/Alerts";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useScheduleContext } from "../providers/ScheduleProvider";

export default function ScheduleCard() {
  const {
    setup: { title, subtitle, generateButton },
  } = useLocale().dictionary;

  const { date, selectedDays, showAlerts, handleGenerate } =
    useScheduleContext();

  return (
    <Card className="h-fit">
      <CardHeader>
        <CardTitle className="font-serif">{title}</CardTitle>
        <CardDescription>{subtitle}</CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        <DateSelector />
        <DaySelector />

        <div className="flex gap-4">
          <DateFormatSettings />
          <LanguageSettings />
        </div>

        <RomanNumeralsToggle />

        {showAlerts && date && (!date.from || !date.to) && <DatePeriodAlert />}

        {showAlerts && selectedDays.length < 1 && <DaysOfWeekAlert />}
      </CardContent>

      <CardFooter>
        <Button className="w-full md:w-fit" onClick={handleGenerate}>
          {generateButton}
          <Sparkles className="ms-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
}
