// Html date inputs take strings in the format yyyy-MM-dd
// In our app we will want to be dealing with dates in a consistent way of our choosing

import React, { HTMLProps, ChangeEvent } from "react";

import format from "date-fns/format";

interface DatePickerProps
  extends Omit<HTMLProps<HTMLInputElement>, "value" | "onChange"> {
  selectedDate?: Date;
  onDateSelect: (date: Date) => void;
}

const DatePicker: React.FC<DatePickerProps> = props => {
  const { selectedDate, onDateSelect } = props;

  const value = selectedDate
    ? format(new Date(selectedDate), "yyyy-MM-dd")
    : undefined;

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    onDateSelect(new Date(e.target.value));
  };

  return <input {...props} value={value} onChange={onChange}></input>;
};

export default DatePicker;
