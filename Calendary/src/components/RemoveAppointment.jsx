import React from 'react';
import base from "../server/base.jsx";

// to delete the data
  function RemoveAppointment({ appointmentID, onAppointmentRemoved   }) {
    const removeAppointment = () => {
      base('calendarBooking').destroy(appointmentID, function (err, deletedRecord) {
        if (err) {
          console.error(err);
          return;
        }
        onAppointmentRemoved(appointmentID);
        window.location.reload();
      });
    };

  return (
    <div className="right">
      <button
        onClick={removeAppointment}
        type="button"
        className="bi bi-trash"
      > 
        <i className="bi bi-archive-fill"></i>
      </button>
    </div>
  );
}

export default RemoveAppointment;