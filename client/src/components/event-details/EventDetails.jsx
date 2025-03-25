import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router";
import { toShortDate, fromIsoTime, fromIsoTimeTwo } from "../../utils/dateTime";
import { useEvent, useDeleteEvent } from "../../api/eventApi";
import DeleteEvent from "../event-delete/EventDelete";
import useAuth from "../../hooks/useAuth";

export default function SingleEvent() {
  const { email, userId } = useAuth();
  const { eventId } = useParams();
  const { eventData } = useEvent(eventId);
  const { deleteEvent } = useDeleteEvent();
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const isOwner = userId === eventData._ownerId;
  const navigate = useNavigate();
  const showDeleteModalHandler = () => {
    setShowDeleteModal((showDeleteModal) => !showDeleteModal);
  };

  const deleteEventHandler = async () => {
    await deleteEvent(eventId);
    setShowDeleteModal(false);
    navigate("/my-events");
  };
  return (
    <>
      <section className="section-sm">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-12">
              <div className="content">
                <h2 id="how-a-payday-loan-online-works">{eventData.title}</h2>
                <div>
                  <img src={eventData.imageUrl} clas={eventData.title}></img>
                </div>
                <h2 id="what-you-know-about-loans">{eventData.title}</h2>
                <h3 id="payday-loan-application-processing">
                  <span className="text-primary display-4">
                    {toShortDate(eventData.date)}{" "}
                  </span>
                  <br></br>
                  {fromIsoTimeTwo(eventData.time)} h.
                </h3>
                <h5>Category:</h5>
                {eventData.category}
                {/* <h5>Category:</h5>
                {eventData.category.map((item) => (
                  <span key={item}>{item},</span>
                ))} */}
                <p>{eventData.description}</p>
                <hr />
                For more information about this event, contact to{" "}
                <a href={`mailto:${email}`}>{email}</a>
              </div>
            </div>
          </div>
          {isOwner && (
            <div>
              <Link
                type="button"
                className="btn btn-primary  mt-4 d-inline-block m-2"
                to={`/my-events/${eventId}/edit`}
              >
                <span>Edit </span>
                <span>
                  <i class="fa-solid fa-pen-to-square"></i>
                </span>
              </Link>
              <Link
                type="button"
                className="btn btn-primary  mt-4 d-inline-block m-2"
                onClick={showDeleteModalHandler}
              >
                <span>Delete </span>
                <span>
                  <i class="fa-solid fa-trash"></i>
                </span>
              </Link>
            </div>
          )}
          {showDeleteModal && (
            <DeleteEvent
              onDelete={deleteEventHandler}
              showDeleteModal={showDeleteModalHandler}
            ></DeleteEvent>
          )}
        </div>
      </section>
    </>
  );
}
