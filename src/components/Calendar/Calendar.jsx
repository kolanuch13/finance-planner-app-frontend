import { forwardRef, useState } from "react";
import DatePicker from "react-datepicker";
import "./date.css";
import {AiOutlineCalendar} from 'react-icons/ai';
import {IoIosArrowDown} from 'react-icons/io';



export const Calendar = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [isOpen, setIsOpen] =useState(false)

  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <button className="custom-input" onClick={onClick} ref={ref}>
      {value}
      {isOpen ? <AiOutlineCalendar size="20px"/> : <IoIosArrowDown size="20px"/>}
    </button>
  ));
  
  return(
    <DatePicker 
      dateFormat="MMMM,yyyy" 
      showMonthYearPicker 
      selected={startDate} 
      maxDate={new Date()}
      onChange={(date) => setStartDate(date)} 
      customInput={<ExampleCustomInput />}
      onCalendarOpen={()=>setIsOpen(!isOpen)}
      onCalendarClose={()=>setIsOpen(!isOpen)}
    />
  )
}