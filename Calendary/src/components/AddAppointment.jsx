import React, { useRef } from 'react';
import base from '../server/base';

function AddAppointment() {
  const nameRef = useRef();
  const timeRef = useRef();
  const dateRef = useRef();
  const selectRef = useRef();

  const AddAppointment = (e) => {
    e.preventDefault();
    const Name = nameRef.current.value;
    const Time = timeRef.current.value;
    const Date = dateRef.current.value;
    const Select = selectRef.current.value;
    // Input validation
   // if (!Name || !Time || !Date || !Select) {
    //  alert('Please fill in all fields');
    //  return;
    //}6

    base('calendarBooking').create(
      { Name, Time, Date, Select },
      function (err, record) {
        if (err) {
          console.error(err);
          return;
        }
        // Consider using a different UI element or feedback mechanism
        alert(`Appointment added with ID: ${record.getId()}`);
      }
    );
  };

  return (
    <div className="mt-5 card p-5 form-add">
      <h4 className="mb-5">Add Appointment</h4>
      <form>
        <div className="mb-3">
          <label
            id="exampletext"
            className="form-label text-start d-block"
          >
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
            htmlFor="exampleInputPassword1"
            className="form-label text-start d-block"
          >
            Time
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleTitle"
            ref={timeRef}
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="exampleInputEmail1"
            className="form-label text-start d-block"
          >
            Date
          </label>
          <input
            type="date"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            ref={dateRef}
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="exampleInputPassword1"
            className="form-label text-start d-block"
          >
            Select
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleselect"
            ref={selectRef}
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="exampleInputPassword1"
            className="form-label text-start d-block"
          />
        </div>
        <button
          type="submit"
          onClick={AddAppointment}
          className="mt-4 btn btn-primary d-block"
        >
          Add New Appointment
        </button>
      </form>
    </div>
  );
}

export default AddAppointment;