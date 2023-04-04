import { forwardRef, useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import './date.css';
import { AiOutlineCalendar } from 'react-icons/ai';
import { IoIosArrowDown } from 'react-icons/io';
import { useTranslation } from 'react-i18next';
import {months, weekdays, weekdaysShort} from '../../utils/constants'
const uk = {
  format: 'MMMM yyyy',
  months,
  weekdays,
  weekdaysShort,
  localize: {
    month: n => uk.months[n],
    formatLongDate: () => 'd MMMM yyyy',
    formatLongDateTime: () => 'd MMMM yyyy h:mm:ss a',
    formatLongTime: () => 'h:mm:ss a',
  },
  formatLong: {
    date: 'd MMMM yyyy',
  },
};

export const Calendar = ({ onChange }) => {
  const {
    i18n: { language },
  } = useTranslation();
  const [startDate, setStartDate] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);

  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <button className="custom-input" onClick={onClick} ref={ref}>
      {value}
      {isOpen ? (
        <AiOutlineCalendar size="20px" />
      ) : (
        <IoIosArrowDown size="20px" />
      )}
    </button>
  ));

  useEffect(() => {
    onChange(startDate);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startDate]);

  return (
    <DatePicker
      dateFormat="MMMM yyyy"
      showMonthYearPicker
      selected={startDate}
      maxDate={new Date()}
      onChange={date => setStartDate(date)}
      customInput={<ExampleCustomInput />}
      onCalendarOpen={() => setIsOpen(!isOpen)}
      onCalendarClose={() => setIsOpen(!isOpen)}
      locale={language === 'uk' ? uk : 'en'}
    />
  );
};
