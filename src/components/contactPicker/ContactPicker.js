import React, {useState} from "react";

export const ContactPicker = ({contacts, valueChange}) => {

  const handleChange = (e) => {
    valueChange(e.target.value);
  }

  return (
    <>
      <label for="contactPicker">Contact:</label>
      <select id="contactPicker" name="contact" onChange={handleChange}>
        {contacts.map((contact) => {
          return <option value={contact.name}>{contact.name}</option>
        })}
      </select> 
    </>
    
  );
};
