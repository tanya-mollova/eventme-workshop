import { Link } from "react-router";
import { useLatestEvents } from "../../api/eventApi";

import Banner from "./banner/Banner";
import EventsListItem from "../events-list/events-list-item/EventsListItem";

export default function Home() {
  const { latestEvents, pending } = useLatestEvents();
  return (
    <>
      <Banner></Banner>
      <section className="section section-events" id="home">
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
                <span> Explore and attend our upcoming events!</span>
              </div>
            </div>
          </div>
          {pending && (
            <div id="loader">
              <img src="/images/loader.svg" />
            </div>
          )}
          <div className="row">
            {latestEvents.map((eventitem) => (
              <EventsListItem key={eventitem._id} {...eventitem} />
            ))}
          </div>
          {!latestEvents.length && (
            <div>
              <h3 className="text-primary">
                <i className="fa-solid fa-circle-info"></i> No data found!
              </h3>
            </div>
          )}
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
