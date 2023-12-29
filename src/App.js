import React, { useState } from "react";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Navigate } from "react-router-dom"
import Root, { ROUTES } from "./components/root/Root";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";
import { contactData } from "./testData";

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */
 const [contacts, setContacts] = useState(contactData);
 const [appointments, setAppointments] = useState(["app1", "app2"]);

  /*
  Implement functions to add data to
  contacts and appointments
  */

  const addContanct = (name, phone, email) => {
    setContacts((prevContacts) => {
      return [
        ...prevContacts,
        {
          name,
          phone,
          email
        }
      ];
    });
  };

  const addAppointment = (name, contact, date, time) => {
    setAppointments((prevAppointments) => {
      return [
        ...prevAppointments,
        {
          name,
          contact,
          date,
          time
        }
      ];
    });
  };

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={ <Root/> }>
      <Route index element={ <Navigate to={ROUTES.CONTACTS} replace/> }/>
      <Route path={ROUTES.CONTACTS} element={ <ContactsPage contacts={contacts} addContanct={addContanct}/> /* Add props to ContactsPage */ }/>
      <Route path={ROUTES.APPOINTMENTS} element={ <AppointmentsPage appointments={appointments} addAppointment={addAppointment}/> /* Add props to AppointmentsPage */ }/>
    </Route>
  ));
  
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
