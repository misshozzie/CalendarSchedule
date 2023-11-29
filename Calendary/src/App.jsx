import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";
import Appointment from "./components/Appointment.jsx";
import AddAppointment from "./components/AddAppointment.jsx";
import Calendar from "./components/Calendar.jsx";
import ThankYou from "./components/ThankYou.jsx";
import "./App.css";
import base from "./server/base.jsx";

function App() {
  const [appointments, setAppointments] = useState([]);
  const [holidays, setHolidays] = useState([]);

  // fetching API Holiday
  useEffect(() => {
    async function fetchHolidays() {
      const response = await fetch(
        "https://date.nager.at/api/v3/publicholidays/2023/SG"
      );

      const jsonData = await response.json();
      console.log(jsonData);
      setHolidays(jsonData);
    }
    fetchHolidays();
  }, []);

  //Airtable data display
  useEffect(() => {
    base("calendarBooking")
      .select({ view: "Grid view" })
      .eachPage((records, fetchNextPage) => {
        setAppointments(records);
        fetchNextPage();
      });
  }, []);

  //PATCH. Sync the Airtable
  useEffect(() => {
    async function updateAirtableWithHolidays() {
      // Ensure that only new holidays are batch-updated to prevent duplicates
      const existingHolidayDates = new Set(
        appointments.map((appointment) => appointment.fields.Date)
      );
      const newHolidays = holidays.filter(
        (holiday) => !existingHolidayDates.has(holiday.date)
      );
      if (newHolidays.length > 0) {
        const recordsToCreate = newHolidays.slice(0, 10).map((holiday) => ({
          //maximum 10 arrays to record
          fields: {
            Date: holiday.date,
            Name: holiday.localName,
          },
        }));
        await base("calendarBooking")
          .update(recordsToCreate)
          .catch((error) =>
            console.error("Error updating Airtable with holidays:", error)
          );
      }
    }
    if (holidays.length > 0) {
      updateAirtableWithHolidays();
    }
  }, [holidays, appointments]);

  // Callback function to handle the addition of a new appointment
  const handleAppointmentAdded = (newAppointment) => {
    setAppointments([...appointments, newAppointment]);
  };
  

  return (
    <Router>
      <div className="Home">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <h1 className="app-heading mb-5 mt-4 fw-bolder">
                  APPOINTMENT RECORD
                </h1>
                <Link to="/add-appointment" className="btn btn-primary">
                  Add New Appointment
                </Link>
                <div className="row">
                  {appointments.length > 0 ? (
                    appointments.map((appointment) => (
                      <Appointment
                        key={appointment.id}
                        appointment={appointment}
                      />
                    ))
                  ) : (
                    <div
                      className="spinner-border mx-auto text-primary"
                      role="status"
                    >
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  )}
                </div>
                <Calendar appointments={appointments} holidays={holidays} />
              </>
            }
          />
          <Route path="/add-appointment" element={<AddAppointment onAppointmentAdded={handleAppointmentAdded} />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route
            path="*"
            element={<div>Page not found. Check if the URL is correct.</div>}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;