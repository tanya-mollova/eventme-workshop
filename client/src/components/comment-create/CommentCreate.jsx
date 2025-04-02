// import { useState, useEffect } from "react";

export default function CommentCreate({ createComment }) {
  // const [commentsTest, setCommentsTest] = useState([
  //   {
  //     _ownerId: "60f0cf0b-34b0-4abd-9769-8c42f830dffc",
  //     eventId: "1",
  //     comment: "rg",
  //     _createdOn: 1743261721654,
  //     _id: "111145ce-1dba-42e4-80fe-bf304f0f83df",
  //   },
  // ]);

  return (
    <>
      <form
        data-testid="comment-form"
        className="form"
        action={createComment}
        id="add-comment"
      >
        <h4>
          <span className="m-4 inline-block">
            <i>Add a comment:</i>
          </span>
        </h4>
        <img
          width={100}
          src="/images/comment-add.png"
          alt="EventMe"
          id="comment-add-img"
        />
        <textarea
          className="form-control shadow-none"
          name="comment"
          placeholder=" Your comment"
          data-testid="add-comment-input"
          id="comment"
        ></textarea>

        <br />
        <input
          type="submit"
          value="Add"
          data-testid="add-comment"
          className="btn btn-primary w-100"
        />
      </form>

      {/* <ul data-testid="comment-list">
        {commentsTest.map((comment) => (
          <li key={comment._id}>{comment.comment}</li>
        ))}
      </ul> */}
    </>
  );
}
