import { useState, useOptimistic } from "react";
import { useParams, Link, useNavigate } from "react-router";

import { toShortDate, fromIsoTimeTwo } from "../../utils/dateTime";
import { useEvent, useDeleteEvent } from "../../api/eventApi";
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

  const showDeleteModalHandler = () => {
    setShowDeleteModal((showDeleteModal) => !showDeleteModal);
  };

  const deleteEventHandler = async () => {
    await deleteEvent(eventId);
    setShowDeleteModal(false);
    navigate("/my-events");
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
              <h1 className="text-primary">{eventData.title}</h1>
              <div>
                <img src={eventData.imageUrl} alt={eventData.title}></img>
              </div>
              <h3 id="">
                <span className="text-primary display-5">
                  {toShortDate(eventData.date)}{" "}
                </span>
                <div className="empty-space"></div>
                <i className="fa-solid fa-clock"></i>{" "}
                {fromIsoTimeTwo(eventData.time)} h.
              </h3>
              <span>
                <b>Category:</b>{" "}
              </span>
              {/* {[eventData.category].map((item) => (
                <span className="text-primary" key={item.}>
                  {item}
                  <span className="category-devider"> , </span>
                </span>
              ))} */}
              <div className="empty-space"></div>
              <p>{eventData.description}</p>
              <div className="empty-space"></div>
              <div className="row align-items-center">
                <div className="col-md-6">
                  {" "}
                  <CommentsShow comments={comments}></CommentsShow>
                </div>

                <div className="col-md-6">
                  {isAuthenticated && (
                    <CommentCreate
                      username={username}
                      eventId={eventId}
                      createComment={createCommentHandler}
                      pending={comments.pending}
                    ></CommentCreate>
                  )}
                  {!isAuthenticated && (
                    <img width={160} src="/images/comment.png" alt="EventMe" />
                  )}
                  {error && (
                    <span className="error-message">
                      You need to write a comment first!
                    </span>
                  )}
                </div>

                {!isAuthenticated && (
                  <p className="m-4">
                    You want to add a comment? You need to Log In first!
                  </p>
                )}
              </div>
              <br />
              <br />
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
