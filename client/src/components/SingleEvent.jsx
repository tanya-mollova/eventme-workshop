import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { fromIsoDate } from "../utils/dateTime";

import eventService from "../services/eventService";

export default function SingleEvent(eventitems) {
  const { eventId } = useParams();
  const [event, setEvent] = useState({});

  useEffect(() => {
    eventService.getOne(eventId).then((result) => {
      setEvent(result);
      console.log(result);
    });
  }, []);
  return (
    <>
      <section className="section-sm">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-12">
              <div className="content">
                <h2 id="how-a-payday-loan-online-works">{event.title}</h2>
                <div>
                  <img src="/images/about.jpg"></img>
                </div>
                <h2>{event.organizator}</h2>
                <p>{event.description}</p>

                <h3 id="payday-loan-application-processing">
                  {fromIsoDate(event.eventDate)} <br></br>
                  {event.time}h.
                </h3>

                <h2 id="what-you-know-about-loans">
                  What You Know About Loans
                </h2>
                <hr />
                <a href="">Contact</a>
                <p></p>
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
