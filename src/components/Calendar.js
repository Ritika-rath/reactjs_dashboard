import React, { useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import styled from 'styled-components'

const CalendarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;

  .react-calendar {
    border: none;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  .react-calendar__tile--now {
    background: #ffcc00;
    color: white;
  }
`

const CustomCalendar = () => {
  const [value, setValue] = useState(new Date())

  return (
    <CalendarWrapper>
      <h3>Calendar</h3>
      <Calendar onChange={setValue} value={value} />
      <p>Selected date: {value.toDateString()}</p>
    </CalendarWrapper>
  )
}

export default CustomCalendar
