import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { toShortDate } from "../../utils/dateTime";

import eventService from "../../services/eventService";

export default function SingleEvent(eventitems) {
  const { eventId } = useParams();
  const [event, setEvent] = useState({});

  useEffect(() => {
    eventService.getOne(eventId).then(setEvent);
  }, [eventId]);
  return (
    <>
      <section className="section-sm">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-12">
              <div className="content">
                <h2 id="how-a-payday-loan-online-works">{event.title}</h2>
                <div>
                  <img src={event.imageUrl} clas={event.title}></img>
                </div>
                <h2 id="what-you-know-about-loans">{event.title}</h2>
                <h3 id="payday-loan-application-processing">
                  <span className="text-primary display-4">
                    {toShortDate(event.date)}{" "}
                  </span>
                  <br></br>
                  {event.time}h.
                </h3>
                <p>{event.description}</p>
                <hr />
                For more information about this event, contact the{" "}
                <a href="mailto:">Organizer</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
