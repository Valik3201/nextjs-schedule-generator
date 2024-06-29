import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { GeneratedDate } from "../../types/types";

interface GeneratedTableProps {
  generatedDates: GeneratedDate[];
}

const GeneratedTable: React.FC<GeneratedTableProps> = ({ generatedDates }) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Period</TableHead>
          <TableHead>Dates</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {generatedDates.map(({ period, dates }, index) => (
          <TableRow key={index}>
            <TableCell>{period}</TableCell>
            <TableCell>{dates}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default GeneratedTable;