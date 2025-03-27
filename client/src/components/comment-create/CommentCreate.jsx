export default function CommentCreate({ createComment }) {
  return (
    <form className="form" action={createComment}>
      <h4>
        <span className="m-4 inline-block">Add a comment:</span>
      </h4>
      <textarea
        className="form-control shadow-none"
        id="comment"
        name="comment"
        placeholder=" Your comment"
      ></textarea>
      <br />
      <input type="submit" value="Add" className="btn btn-primary w-100" />
    </form>
  );
}
