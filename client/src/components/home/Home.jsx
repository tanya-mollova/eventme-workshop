import { Link } from "react-router";
import { useEffect, useState, useTransition } from "react";
import useFetch from "../../hooks/useFetch";
import eventService from "../../services/eventService";
import { fromIsoDate } from "../../utils/dateTime";
import Banner from "./banner/Banner";
import EventsListItem from "../events-list/events-list-item/EventsListItem";

export default function Home() {
  const url = "http://localhost:3030/jsonstore/events";
  const [noData, setNoData] = useState(false);
  const [pending, eventitems] = useFetch(url, []);
  const today = fromIsoDate(new Date());
  const filteredItems = eventitems.filter(
    (item) => item.status == true && fromIsoDate(item.date) > today
  );
  const sortedItems = filteredItems.sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );

  useEffect(() => {
    setTimeout(() => {
      setNoData(false);
      if (!pending && !eventitems.length) {
        setNoData(true);
      } else {
      }
    }, 1000);
  }, [eventitems]);
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
          <br />
          {pending && (
            <div id="loader">
              <img src="/images/loader.svg" />
            </div>
          )}
          <div className="row">
            {sortedItems.slice(0, 4).map((eventitem) => (
              <EventsListItem key={eventitem._id} {...eventitem} />
            ))}
          </div>
          {noData && (
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
