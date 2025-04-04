import { useState, useOptimistic, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router";

import { toShortDate, fromIsoTimeTwo } from "../../utils/dateTime";
import { useEvent, useDeleteEvent, useEditEvent } from "../../api/eventApi";
import DeleteEvent from "../event-delete/EventDelete";
import CommentCreate from "../comment-create/CommentCreate";
import CommentsShow from "../comments-show/CommentsShow";
import useAuth from "../../hooks/useAuth";
import { useCreateComment, useComments } from "../../api/commentApi";
import { v4 as uuid } from "uuid";

export default function EventDetails() {
  const { email, userId, username, isAuthenticated } = useAuth();
  const { eventId } = useParams();
  const { eventData } = useEvent(eventId);
  const { deleteEvent } = useDeleteEvent();
  const { edit } = useEditEvent();
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const { comments, addComment } = useComments(eventId);
  const { create } = useCreateComment();
  const [optComments, setOptComments] = useOptimistic(
    comments,
    (state, newComment) => [...state, newComment]
  );
  const [error, setError] = useState();
  const isOwner = userId === eventData._ownerId;
  const navigate = useNavigate();
  const [displayEvent, setDisplayEvent] = useState({});
  const showDeleteModalHandler = () => {
    setShowDeleteModal((showDeleteModal) => !showDeleteModal);
  };
  useEffect(() => {
    setDisplayEvent(eventData);
  }, [eventData]);

  const deleteEventHandler = async () => {
    await deleteEvent(eventId);
    setShowDeleteModal(false);
    navigate(-1);
  };
  const createCommentHandler = async (formData) => {
    const comment = formData.get("comment");
    if (!comment.trim()) {
      setError(true);
      return;
    }
    setError(false);

    const newComment = {
      _id: uuid(),
      _ownerId: userId,
      eventId,
      comment,
      pending: true,
      author: {
        username,
      },
    };

    setOptComments(newComment);
    const result = await create(eventId, comment);
    addComment({ ...result, author: { username } });
  };

  return (
    <section className="section-sm" id="section-details">
      <div className="container bg-white shadow">
        <div className="row g-5">
          <div className="col-lg-12">
            <div className="content">
              <h1 className="text-primary">{displayEvent.title}</h1>
              <div>
                <img src={displayEvent.imageUrl} alt={displayEvent.title}></img>
              </div>
              <h3 id="">
                <span className="text-primary display-5">
                  {toShortDate(displayEvent.date)}{" "}
                </span>
                <div className="empty-space"></div>
                <i className="fa-solid fa-clock"></i>{" "}
                {fromIsoTimeTwo(displayEvent.time)} h.
              </h3>
              <p className="d-inline">
                <b>
                  <i class="fa-solid fa-location-dot"></i>{" "}
                </b>
                {eventData.address?.city}, {eventData.address?.street}{" "}
                {eventData.address?.streetNumber}
              </p>
              <br></br> <br></br>
              <p className="d-inline">
                <b>Category:</b>{" "}
              </p>
              {eventData.category?.map((item) => (
                <span key={item} className="colored-box">
                  {item}{" "}
                </span>
              ))}
              <div className="empty-space"></div>
              <p className="text-justify">{displayEvent.description}</p>
              <div className="empty-space"></div>
              <div className="row">
                <div className="col-md-6">
                  {isAuthenticated && (
                    <CommentCreate
                      username={username}
                      eventId={eventId}
                      createComment={createCommentHandler}
                      pending={comments.pending}
                      comments={comments}
                    ></CommentCreate>
                  )}
                  {!isAuthenticated && (
                    <img
                      width={160}
                      src="/images/comment.png"
                      alt="EventMe"
                      id="comment-img"
                    />
                  )}
                  {error && (
                    <span className="error-message">
                      You need to write a comment first!
                    </span>
                  )}
                </div>

                <div className="col-md-6">
                  <CommentsShow comments={comments}></CommentsShow>
                </div>

                {!isAuthenticated && (
                  <p className="m-4">
                    Want to add a comment? You need to Log In first!
                  </p>
                )}
              </div>
              <br />
              <br />
              <hr />
              For more information about this event, contact to{" "}
              <a href={`mailto:${displayEvent._ownerEmail}`}>
                {displayEvent._ownerEmail}
              </a>
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
                <i className="fa-solid fa-pen-to-square"></i>
              </span>
            </Link>
            <Link
              type="button"
              className="btn btn-primary  mt-4 d-inline-block m-2"
              onClick={showDeleteModalHandler}
            >
              <span>Delete </span>
              <span>
                <i className="fa-solid fa-trash"></i>
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
