import { Routes, Route } from "react-router";

import UserProvider from "./providers/UserProvider";

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
import AuthGuard from "./components/guards/AuthGuard";
import AuthorGuard from "./components/guards/AutorGuard";
import Logout from "./components/logout/Logout";
import "./App.css";

function App() {
  return (
    <UserProvider>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/all-events" element={<EventsList />} />
        <Route path="/all-events/:eventId/details" element={<EventDetails />} />
        <Route element={<AuthGuard />}>
          <Route element={<AuthorGuard />}>
            <Route path="/my-events/:eventId/edit" element={<EventEdit />} />
          </Route>
          <Route path="/event/create" element={<EventCreate />} />
          <Route path="/my-events" element={<MyEvents />} />
          <Route
            path="/my-events/:eventId/details"
            element={<EventDetails />}
          />
        </Route>
        <Route path="/logout" element={<Logout />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </UserProvider>
  );
}

export default App;
