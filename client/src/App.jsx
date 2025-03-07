import { Routes, Route } from "react-router";
import { useState, useEffect } from "react";
import "./App.css";

import Header from "./components/Header";
import Home from "./components/Home";
import EventsList from "./components/EventsList";
import SingleEvent from "./components/SingleEvent";
import MyEvents from "./components/MyEvents";
import Footer from "./components/Footer";
import About from "./static/About";
import Contacts from "./static/Contacts";
import NotFound from "./static/NotFound";
import PrivacyPolicy from "./static/PrivacyPolicy";
import TermsAndConditions from "./static/TermsAndConditions";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<EventsList />} />
        <Route path="/event/:eventId" element={<SingleEvent />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/my-events" element={<MyEvents />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
