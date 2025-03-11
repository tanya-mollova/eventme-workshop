import { Link } from "react-router";
import { useEffect, useState } from "react";
import eventService from "../../services/eventService";
import Banner from "./banner/Banner";
import EventsListItem from "../events-list/events-list-item/EventsListItem";

export default function Home() {
  const [eventitems, setEventItems] = useState([]);

  useEffect(() => {
    eventService.getAll().then((result) => {
      setEventItems(result);
    });
  }, []);

  return (
    <>
      <Banner></Banner>
      <section className="section section-events">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 mb-4">
              <div className="section-title pt-4">
                <p className="text-primary text-uppercase fw-bold mb-3">
                  events
                </p>
                <h1 data-aos="fade-up" data-aos-duration="1000">
                  Discover upcoming events
                </h1>
                <span> Want your event listed here? </span>
                <a href="#">Log in</a>
              </div>
            </div>
          </div>
          <div className="row">
            {eventitems.slice(0, 4).map((eventitem) => (
              <EventsListItem key={eventitem._id} {...eventitem} />
            ))}
          </div>
          <Link type="button" className="btn btn-primary  mt-4" to="/events">
            See all Events
            <span
              style={{ fontSize: 14 }}
              className="ms-2 fas fa-arrow-right"
            />
          </Link>
        </div>
      </section>
    </>
  );
}
