export default function CommentShow({ comments }) {
  return (
    <div className="comments-wrapper">
      <h4>Comments:</h4>
      <div className="comments-box">
        {comments.length > 0 ? (
          comments.map(({ _id, comment, pending, author }) => (
            <div
              key={_id}
              className="comment-item"
              style={{ backgroundColor: pending ? "#dedede" : "" }}
            >
              <p>
                <i className="fa-solid fa-quote-left text-primary"></i>{" "}
                {author.username}: {comment}
              </p>
            </div>
          ))
        ) : (
          <p className="text-primary">
            <i className="fa-solid fa-circle-info"></i> No comments!
          </p>
        )}
      </div>
    </div>
  );
}
