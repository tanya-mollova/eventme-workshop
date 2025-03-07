import { Link } from "react-router";
import { useEffect, useState } from "react";

import Banner from "./Banner";
import EventItem from "./EventItem";

export default function Home({ eventitems }) {
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
                <h1>Discover upcoming events</h1>
                <span> Want your event listed here? </span>
                <a href="#">Log in</a>
              </div>
            </div>
          </div>
          <div className="row">
            {eventitems.slice(0, 4).map((eventitem) => (
              <EventItem key={eventitem._id} {...eventitem} />
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
