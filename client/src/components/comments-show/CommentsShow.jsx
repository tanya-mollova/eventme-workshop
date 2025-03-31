import { useState, useEffect } from "react";
import { useParams } from "react-router";

import { useDeleteComment } from "../../api/commentApi";
import useAuth from "../../hooks/useAuth";
import CommentDelete from "../comment-delete/CommentDelete";

export default function CommentShow({ comments }) {
  const [showDeleteComment, setShowDeleteComment] = useState(false);
  const [commentId, setCommentId] = useState();
  const { deleteComment } = useDeleteComment();
  const [displayComments, setDisplayComments] = useState([]);
  const { eventId } = useParams();
  const { request } = useAuth();

  useEffect(() => {
    setDisplayComments(comments);
  }, [comments]);

  const showDeleteCommentHandler = (id) => {
    setShowDeleteComment((showDeleteComment) => !showDeleteComment);
    setCommentId(id);
  };
  const deleteCommentHandler = async () => {
    await deleteComment(commentId);
    const baseUrl = "http://localhost:3030/data/comments";
    const searchParams = new URLSearchParams({
      where: `eventId="${eventId}"`,
      load: `author=_ownerId:users`,
    });

    request.get(`${baseUrl}?${searchParams.toString()}`).then((result) => {
      setDisplayComments(result);
    });
    setShowDeleteComment(false);
  };

  return (
    <div className="comments-wrapper">
      <h4>Comments:</h4>
      <div className="comments-box">
        {displayComments?.length > 0 ? (
          displayComments.map(({ _id, comment, pending, author }) => (
            <div
              key={_id}
              className="comment-item"
              style={{ backgroundColor: pending ? "#dedede" : "" }}
            >
              <p data-testid="test-comment">
                <i className="fa-solid fa-quote-left text-primary"></i>{" "}
                {author.username}: {comment}
              </p>{" "}
              <button onClick={() => showDeleteCommentHandler(_id)}>X</button>
            </div>
          ))
        ) : (
          <p className="text-primary">
            <i className="fa-solid fa-circle-info"></i> No comments!
          </p>
        )}
      </div>
      {showDeleteComment && (
        <CommentDelete
          showDeleteComment={showDeleteCommentHandler}
          onDelete={deleteCommentHandler}
        ></CommentDelete>
      )}
    </div>
  );
}
