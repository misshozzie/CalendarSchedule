import React, { useState, useEffect } from 'react';
import Airtable from 'airtable';
import { BrowserRouter as Router } from 'react-router-dom';
import Appointment from './components/Appointment';
import AddAppointment from "./components/AddAppointment";
import "./App.css";
import base from "./server/base.jsx";

function App() {
  const [appoinments, setAppointments] = useState([]);
  const [holidays, setHolidays] = useState([]);


  useEffect(() => {
    async function fetchHolidays() {
      const response = await fetch("https://date.nager.at/api/v3/publicholidays/2023/SG");
      
      //console.log("response", response);

      const jsonData = await response.json();
      console.log(jsonData);
      setHolidays(jsonData);
    }
    fetchHolidays();
  }, []);


  useEffect(() => {
    base('calendarBooking')
      .select({ view: 'Grid view' })
      .eachPage((records, fetchNextPage) => {
        setAppointments(records);
        fetchNextPage();
      });
  }, []);

  useEffect(() => {
    async function updateAirtableWithHolidays() {
      // Ensure that only new holidays are batch-updated to prevent duplicates
      const existingHolidayDates = new Set(appoinments.map(appointment => appointment.fields.Date));
      const newHolidays = holidays.filter(holiday => !existingHolidayDates.has(holiday.date));
      if (newHolidays.length > 0) {
        const recordsToCreate = newHolidays.slice(0, 10).map(holiday => ({
          fields: {
            'Date': holiday.date,
            'Name': holiday.localName
          }
        }));
        await base('calendarBooking').update(recordsToCreate)
          .catch(error => console.error("Error updating Airtable with holidays:", error));
      }
    }
    if (holidays.length > 0) {
      updateAirtableWithHolidays();
    }
  }, [holidays, appoinments]); // Depend on holidays and appointments state
  
  return (
    <Router>
      <div className="Home">
        <h1 className="app-heading mb-5 mt-4 fw-bolder">
          APPOINTMENT RECORD
        </h1>
        <div className="row">
          {appoinments.length > 0 ? (
            <>
              {appoinments?.map((e) => (
                <Appointment key={e.id} appointment={e} />
              ))}
            </>
          ) : (
            <div className="spinner-border mx-auto text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          )}
        </div>
        <div>
          <AddAppointment />
        </div>
      </div>
    </Router>
  );
}
export default App;