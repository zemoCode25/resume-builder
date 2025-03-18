import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Calendar as CalendarIcon } from "lucide-react";
import { format, getMonth, getYear, setMonth, setYear } from "date-fns";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface DatePickerProps {
  label?: string;
  startYear?: number;
  endYear?: number;
}

export function DatePicker({
  label = "Select a date",
  startYear = new Date().getFullYear() - 100,
  endYear = new Date().getFullYear() + 100,
}: DatePickerProps) {
  const [date, setDate] = useState<Date>(new Date());

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const years = Array.from(
    { length: endYear - startYear + 1 },
    (_, i) => startYear + i
  );

  function handleMonthChange(month: string) {
    const monthIndex = months.indexOf(month);
    const newMonth = setMonth(date, monthIndex); // Creates new date object with a modified month
    setDate(newMonth);
  }

  function handleYearChange(year: string) {
    const newYear = setYear(date, Number(year)); // Creates new date object with a modified year
    setDate(newYear);
  }

  function handleSelectedDate(selectedDate: Date | undefined) {
    if (selectedDate) {
      setDate(selectedDate);
    }
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className="cursor-pointer flex justify-baseline gap-2"
        >
          <CalendarIcon className="h-4 w-4" />
          {date ? format(date, "PPP") : label}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <div className="flex justify-between w-full p-3 gap-2">
          <Select
            onValueChange={handleMonthChange}
            value={months[getMonth(date)]}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Month" />
            </SelectTrigger>
            <SelectContent>
              {months.map((month, i) => (
                <SelectItem className="text-sm" value={month} key={i}>
                  {month}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select
            onValueChange={handleYearChange}
            value={String(getYear(date))}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
              {years.map((year, i) => (
                <SelectItem className="text-sm" value={String(year)} key={i}>
                  {year}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <Calendar
          mode="single"
          selected={date}
          onSelect={handleSelectedDate}
          initialFocus
          onMonthChange={setDate}
        />
      </PopoverContent>
    </Popover>
  );
}
