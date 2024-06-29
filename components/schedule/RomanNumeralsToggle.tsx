import { useLocale } from "../providers/LocaleProvider";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

interface RomanNumeralsToggleProps {
  useRomanNumerals: boolean;
  handleRomanNumeralsChange: (checked: boolean) => void;
}

const RomanNumeralsToggle: React.FC<RomanNumeralsToggleProps> = ({
  useRomanNumerals,
  handleRomanNumeralsChange,
}) => {
  const {
    setup: { useRomanNumerals: useRoman },
  } = useLocale().dictionary;

  return (
    <div className="flex items-center space-x-2">
      <Checkbox
        id="romanize"
        checked={useRomanNumerals}
        onCheckedChange={handleRomanNumeralsChange}
      />
      <Label htmlFor="romanize">{useRoman}</Label>
    </div>
  );
};

export default RomanNumeralsToggle;
