import { Routes, Route } from "react-router";
import "./App.css";

import Header from "./components/header/Header";
import Home from "./components/home/Home";
import EventsList from "./components/events-list/EventsList";
import MyEvents from "./components/my-events/MyEvents";
import EventDetails from "./components/event-details/EventDetails";
import EventEdit from "./components/event-edit/EventEdit";
import EventCreate from "./components/event-create/EventCreate";
import Footer from "./components/footer/Footer";
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
        <Route index element={<Home />} />
        <Route path="/events" element={<EventsList />} />
        <Route path="/events/:eventId/details" element={<EventDetails />} />
        <Route path="/events/:eventId/edit" element={<EventEdit />} />
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
    </>
  );
}

export default App;
