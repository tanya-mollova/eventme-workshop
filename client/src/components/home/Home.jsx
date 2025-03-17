import { Link } from "react-router";
import { useEffect, useState, useTransition } from "react";
import eventService from "../../services/eventService";
import { fromIsoDate } from "../../utils/dateTime";
import Banner from "./banner/Banner";
import EventsListItem from "../events-list/events-list-item/EventsListItem";

export default function Home() {
  const [eventitems, setEventItems] = useState([]);
  const [pending, startTransition] = useTransition();

  useEffect(() => {
    startTransition(() => {
      eventService.getAll().then((result) => {
        const today = fromIsoDate(new Date());
        const filteredItems = result.filter(
          (item) => item.status == true && fromIsoDate(item.date) > today
        );
        const sortedItems = () =>
          filteredItems.sort(
            (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
          );
        setEventItems(sortedItems);
      });
    });
  }, []);
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
