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
      // Batch the `holidays` into chunks of 10
      const BATCH_SIZE = 10;
      const holidayBatches = [];
      for (let i = 0; i < holidays.length; i += BATCH_SIZE) {
        holidayBatches.push(holidays.slice(i, i + BATCH_SIZE));
      }
      // Run through the batches and submit them as separate requests
      for (const batch of holidayBatches) {
        const recordsToCreate = batch.map((holiday) => ({
          fields: {
            'Date': holiday.date,
            'Name': holiday.localName
          }
        }));
        if (recordsToCreate.length > 0) {
          // Use `await` to wait for one request to finish before starting the next
          // Catch errors using `.catch` on the Promise
          await base('calendarBooking').create(recordsToCreate)
            .catch(error => console.error("Error updating Airtable with holidays:", error));
        }
      }
    }
    if (holidays.length > 0) {
      updateAirtableWithHolidays();
    }
  }, [holidays]); // Depend on holidays state
  // ... rest of the code ...
  
  return (
    <Router>
      <div className="Home">
        <h1 className="app-heading mb-5 mt-4 fw-bolder">
          Appointment record
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