import { forwardRef, useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import './date.css';
import { AiOutlineCalendar } from 'react-icons/ai';
import { IoIosArrowDown } from 'react-icons/io';

const uk = {
  format: 'MMMM yyyy',
  months: [
    'Січень',
    'Лютий',
    'Березень',
    'Квітень',
    'Травень',
    'Червень',
    'Липень',
    'Серпень',
    'Вересень',
    'Жовтень',
    'Листопад',
    'Грудень',
  ],
  weekdays: [
    'Неділя',
    'Понеділок',
    'Вівторок',
    'Середа',
    'Четвер',
    "П'ятниця",
    'Субота',
  ],
  weekdaysShort: ['Нд', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
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

export const Calendar = props => {
  const [startDate, setStartDate] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);
  const [lang, setLang] = useState('en');

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
    props.onChange(startDate);
    const storeLang = localStorage.getItem('i18nextLng');
    if (storeLang) {
      setLang(storeLang);
    }
    const handleStorageChange = event => {
      if (event.key === 'i18nextLng') {
        setLang(event.newValue);
      }
    };
    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [props, startDate]);

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
      locale={lang === 'ua' ? uk : 'en'}
    />
  );
};
