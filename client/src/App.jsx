import { Routes, Route } from "react-router";
import { useState, useEffect } from "react";
import "./App.css";

import Header from "./components/Header";
import Home from "./components/Home";
import EventsList from "./components/EventsList";
import Footer from "./components/Footer";
import About from "./static/About";
import Contacts from "./static/Contacts";

function App() {
  const [eventitems, setEventItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3030/jsonstore/events")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const result = Object.values(data).filter(
          (item) => item.status === true
        );
        setEventItems(result);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const onStatusChanged = (eventId) => {
    setEventItems((oldEvents) =>
      oldEvents.map((item) =>
        item._id === eventId ? { ...item, status: !item.status } : item
      )
    );
  };

  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Home eventitems={eventitems} changeStatus={onStatusChanged} />
          }
        />
        <Route
          path="/events"
          element={
            <EventsList
              eventitems={eventitems}
              changeStatus={onStatusChanged}
            />
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        {/* <Route path="*" element={<Home />} /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
