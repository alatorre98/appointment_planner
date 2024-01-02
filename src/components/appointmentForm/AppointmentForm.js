import React from "react";
import {ContactPicker} from "../contactPicker/ContactPicker";

export const AppointmentForm = ({
  contacts,
  name,
  setName,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {

  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  const handleChange = (e) => {
    if (e.target.id === "date") {
      setDate(e.target.value);
    }
    if (e.target.id === "time") {
      setTime(e.target.value);
    }
  };

  const valueChange = (value) => {
    setName(value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label for="name">Name:</label>
      <input id="name" value={name} type="text"/>
      <label for="date">Date:</label>
      <input id="date" value={date}  onChange={handleChange} type="text" min={getTodayString}/>
      <label for="time">Time:</label>
      <input id="time" value={time}  onChange={handleChange} type="text"/>
      <ContactPicker 
        contacts={contacts}
        valueChange={valueChange} 
      />
      <button type="submit">Submit</button>
    </form>
  );
};
