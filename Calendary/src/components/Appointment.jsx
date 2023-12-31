import React from 'react';
import RemoveAppointment from './RemoveAppointment';

function Appointment({ appointment }) {
  if (!appointment || !appointment.fields) {
    // Handle the case where appointment or appointment.fields is undefined
    return null;
  }

  const appointmentId = appointment.id;
  const { fields } = appointment;

  return (
    <div className="col-md-4">
      <div className="card homeCards mb-4">
        <div className="card-header d-flex flex-column position-relative justify-content-center">
          <h4 className="fw-bold">{appointment.fields.Name}</h4>
          {appointment.fields.Title}
          <RemoveAppointment appointmentID={appointmentId} />
        </div>
        <div className="card-body">
          <div className="d-flex flex-column justify-content-center">
            <span>
              <i className="bi bi-phone-fill me-2"></i>
              {appointment.fields.Time}
            </span>
            <span>
              <i className="bi bi-envelope-fill me-2"></i>
              {appointment.fields.Date}
            </span>
          </div>
          <p className="card-text">Started: {appointment.fields.Select}</p>
        </div>
      </div>
    </div>
  );
}

export default Appointment;