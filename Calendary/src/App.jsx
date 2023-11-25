import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './LandingPage';
import Appointment from './components/Appointment';
import AddAppointment from "./components/AddAppointment";
import "./App.css";
import base from "./server/base.jsx";

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
    <Router>
      <Switch>
        <Route path="/" exact component={"https://calendarily.my.canva.site/welcome"} />
        <Route path="/appointments" exact render={() => (
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
        )} />
      </Switch>
    </Router>
  );
}

export default App;
