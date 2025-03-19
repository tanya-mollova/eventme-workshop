import { useState } from "react";
import { Routes, Route } from "react-router";

import { UserContext } from "./contexts/UserContext";

import Header from "./components/header/Header";
import Home from "./components/home/Home";
import EventsList from "./components/events-list/EventsList";
import MyEvents from "./components/my-events/MyEvents";
import EventDetails from "./components/event-details/EventDetails";
import EventEdit from "./components/event-edit/EventEdit";
import EventCreate from "./components/event-create/EventCreate";
import About from "./static/About";
import Contacts from "./static/Contacts";
import NotFound from "./static/NotFound";
import PrivacyPolicy from "./static/PrivacyPolicy";
import TermsAndConditions from "./static/TermsAndConditions";
import Footer from "./components/footer/Footer";
import "./App.css";

function App() {
  const [authData, setAuthData] = useState();

  const userLoginHandler = (data) => {
    setAuthData(data);
  };

  const userLogoutHandler = () => {
    setAuthData({});
  };

  return (
    <UserContext.Provider
      value={{ ...authData, userLoginHandler, userLogoutHandler }}
    >
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/events" element={<EventsList />} />
        <Route path="/events/:eventId/details" element={<EventDetails />} />
        <Route path="/my-events/:eventId/edit" element={<EventEdit />} />
        <Route path="/event/create" element={<EventCreate />} />
        <Route path="/my-events" element={<MyEvents />} />
        <Route path="/my-events/:eventId/details" element={<EventDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </UserContext.Provider>
  );
}

export default App;
