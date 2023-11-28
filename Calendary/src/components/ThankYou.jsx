import React from 'react';
import { Link } from 'react-router-dom';
function ThankYou() {
  return (
    <div>
      <h1>Thank You</h1>
      <p>Your appointment has been added successfully.</p>
      <Link to="/add-appointment">Back to Appointments</Link>
    </div>
  );
}
export default ThankYou;