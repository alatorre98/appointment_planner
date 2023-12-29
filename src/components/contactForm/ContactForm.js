import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {

  const handleChange = (e) => {
    if(e.target.id === "name") {
      setName(e.target.value)
    }
    if(e.target.id === "phone") {
      setPhone(e.target.value)
    }
    if(e.target.id === "email") {
      setEmail(e.target.value)
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label for="name">Name:</label>
        <input id="name" value={name} onChange={handleChange} type="text"/>
        <label for="phone">Phone:</label>
        <input id="phone" value={phone} onChange={handleChange} type="text" pattern="^\d{3}-\d{3}-\d{4}$"/>
        <label for="email">Email:</label>
        <input id="email" value={email} onChange={handleChange} type="text"/>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

