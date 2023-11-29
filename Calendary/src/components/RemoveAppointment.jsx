import React from 'react';
import { useNavigate } from 'react-router-dom';
import base from "../server/base.jsx";

// to delete the data
function RemoveAppointment({ appointmentID, onAppointmentRemoved   }) {
  const removeAppointment = () => {
    base('calendarBooking').destroy(appointmentID, function (err, deletedRecord) {
      if (err) {
        console.error(err);
        return;
      }

      console.log('Deleted record:', deletedRecord);

      if (onAppointmentRemoved) {
        onAppointmentRemoved(appointmentID);
      }
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