import { useEffect, useState } from 'react';
import "./App.css";
import base from "./server/base.jsx";

import Appointment from './components/Appointment';
import Addeppointment from "./components/AddAppointment";

function App() {
  const [appoinments, setAppointments] = useState([]);

  useEffect(() => {
    base('calendarBooking')
      .select({ view: 'Grid view' })
      .eachPage((records, fetchNextPage) => {
        setAppointments(records);
        fetchNextPage();
      });
  }, []);

  return (
  
    <div className="Home">
      <h3 className="app-heading mb-5 mt-4 fw-bolder">
        Appointment record
      </h3>
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
        <Addeppointment />
      </div>
    </div>
  );
}

export default App;