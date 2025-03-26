import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router";

import { toShortDate, fromIsoTimeTwo } from "../../utils/dateTime";
import { useEvent, useDeleteEvent } from "../../api/eventApi";
import DeleteEvent from "../event-delete/EventDelete";
import CommentCreate from "../comment-create/CommentCreate";
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
    <section className="section-sm" id="section-details">
      <div className="container bg-white shadow">
        <div className="row g-5">
          <div className="col-lg-12">
            <div className="content">
              {[eventData.category]}
              <h1 className="text-primary">{eventData.title}</h1>
              <div>
                <img src={eventData.imageUrl} alt={eventData.title}></img>
              </div>
              <h3 id="">
                <span className="text-primary display-5">
                  {toShortDate(eventData.date)}{" "}
                </span>
                <br></br>
                <br></br>
                <i class="fa-solid fa-clock"></i>{" "}
                {fromIsoTimeTwo(eventData.time)} h.
              </h3>
              <span>
                <b>Category:</b>{" "}
              </span>
              {[eventData.category].map((item) => (
                <span className="text-primary" key={item}>
                  {item}
                  <span className="category-devider"> , </span>
                </span>
              ))}
              <br />
              <br />
              <p>{eventData.description}</p>
              <CommentCreate></CommentCreate>
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
  );
}
