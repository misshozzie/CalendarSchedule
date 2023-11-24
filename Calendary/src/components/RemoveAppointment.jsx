import React from 'react';
import base from "../server/base.jsx";


  function RemoveAppointment({ appointmentID  }) {
    const removeAppointment = () => {
      base('calendarBooking').destroy(appointmentID, function (err, removeAppointment) {
        if (err) {
          console.error(err);
          return;
        }
        prompt('Deleted record', removeAppointment.id);
      });
    };

  return (
    <div className="position-absolute">
      <button
        onClick={removeAppointment}
        type="button"
        className="btn btn-primary"
      >
        <i className="bi bi-archive-fill"></i>
      </button>
    </div>
  );
}

export default RemoveAppointment;
