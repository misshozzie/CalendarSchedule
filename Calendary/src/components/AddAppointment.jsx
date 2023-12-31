import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import base from "../server/base";

export function AddAppointment({ onAppointmentAdded }) {
 //export  const AddAppointment = ({ onAppointmentAdded }) => {
  const nameRef = useRef();
  const timeRef = useRef();
  const dateRef = useRef();
  const selectRef = useRef();
  const navigate = useNavigate();


  const AddAppointment = (e) => {
    e.preventDefault();
    const Name = nameRef.current.value;
    const Time = timeRef.current.value;
    const Date = dateRef.current.value;
    const Select = selectRef.current.value;

    base("calendarBooking").create(
      { Name, Time, Date, Select },
      function (err, record) {
        if (err) {
          console.error(err);
          return;
        }
        if (onAppointmentAdded) {
          onAppointmentAdded({ 
            id: record.getId(), 
            fields: { Name, Time, Date, Select }
          });
        }
        // Consider using a different UI element next time or feedback mechanism
        //alert(`Appointment added with ID: ${record.getId()}`);
       navigate("/thank-you");
      }
    );
  };



  return (
    <div className="mt-5 card p-5 form-add">
      <h4 className="mb-5">Add Appointment</h4>
      <form>
        <div className="mb-3">
          <label id="exampletext" className="form-label text-start d-block">
            Appointment Name
          </label>
          <input
            type="name"
            className="form-control"
            id="exampleName"
            aria-describedby="nameHelp"
            ref={nameRef}
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="exampleInput1"
            className="form-label text-start d-block"
          >
            Time
          </label>
          <label
            htmlFor="exampleTitle"
            className="form-label text-start d-block"
          ></label>
          <select className="form-control" id="exampleTitle" ref={timeRef}>
            <option value="AM">AM</option>
            <option value="PM">PM</option>
            <option value="OT">OT</option>
            <option value="Full Day">Full Day</option>
          </select>
        </div>
        <div className="mb-3">
          <label
            htmlFor="exampleInput2"
            className="form-label text-start d-block"
          >
            Date
          </label>
          <input
            type="date"
            className="form-control"
            id="exampleInputDate"
            aria-describedby="textinputOnly"
            ref={dateRef}
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="exampleInput"
            className="form-label text-start d-block"
          >
            Select
          </label>
          <select className="form-control" id="exampleselect" ref={selectRef}>
            <option value="">Select</option>
            <option value="Aircon Servicing">Aircon Servicing</option>
            <option value="Repair Works">Repair Works</option>
            <option value="Site Projects">Site Projects</option>
            <option value="Others">Others</option>
          </select>
        </div>
        <div className="mb-3">
          <label
            htmlFor="exampleInput2"
            className="form-label text-start d-block"
          />
        </div>
        <button
          type="submit"
          onClick={AddAppointment}
          className="btn btn-outline-warning"
        >
          Add New Appointment
        </button>
      </form>
    </div>
  );
}

export default AddAppointment;
