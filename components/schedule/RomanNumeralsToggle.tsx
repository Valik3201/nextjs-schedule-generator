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
  return (
    <div className="flex items-center space-x-2">
      <Checkbox
        id="romanize"
        checked={useRomanNumerals}
        onCheckedChange={handleRomanNumeralsChange}
      />
      <Label htmlFor="romanize">Use Roman numerals for periods</Label>
    </div>
  );
};

export default RomanNumeralsToggle;
