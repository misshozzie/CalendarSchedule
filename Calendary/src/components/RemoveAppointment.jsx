import React from 'react';
import base from "../server/base.jsx";

// to delete the data
  function RemoveAppointment({ appointmentID  }) {
    const removeAppointment = () => {
      base('calendarBooking').destroy(appointmentID, function (err, removeAppointment) {
        if (err) {
          console.error(err);
          return;
        }
        //prompt('Deleted record', removeAppointment.id);
        //onAppointmentRemoved(appointmentID);
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