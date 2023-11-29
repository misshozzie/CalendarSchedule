import React, { useState } from "react";
import { Calendar as AntCalendar } from "antd";
import dayjs from "dayjs";

export function Calendar({ appointments, holidays }) {
  const [value, setValue] = useState(dayjs()); // Initialize with the current date 

  // Function to render custom content within each calendar cell
  const dataCellRender = (currentDate) => {
    // Format the current calendar cell date
    const formattedDate = currentDate.format("YYYY-MM-DD");

    // Filter appointments that match the cell's date
    const dayAppointments = appointments.filter((appointment) =>
      dayjs(appointment.fields.Date).format("YYYY-MM-DD") === formattedDate
    );

    // Filter holidays that match the cell's date
    const dayHolidays = holidays.filter((holiday) =>
        dayjs(holiday.date).format("YYYY-MM-DD") === formattedDate
    );


    return (
        <ul className="events">
          {dayAppointments.map((appointment, index) => (
            <li key={index} style={{ color: 'blue' }}>
              {appointment.fields.Name} {appointment.fields.Select}
            </li>
          ))}
          {dayHolidays.map((holiday, index) => (
            <li key={index} style={{ color: 'green' }}>
              {holiday.localName}
            </li>
          ))}
        </ul>
      );
    };

  return (
    <AntCalendar
      value={value}
      dateCellRender={dataCellRender}
      onSelect={setValue}
    />
  );
}

export default Calendar;
