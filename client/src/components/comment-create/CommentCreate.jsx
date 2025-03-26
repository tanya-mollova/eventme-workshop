export default function CommentCreate() {
  return (
    <div className="container">
      <div className="col-lg-6 col-sm-12 m-auto">
        <form className="form">
          <label htmlFor="description" className="form-label">
            Add a comment
          </label>
          <textarea
            className="form-control shadow-none"
            id="comment"
            name="comment"
            placeholder=" Your comment"
          ></textarea>
          <br />
          <input type="submit" value="Add" className="btn btn-primary w-100" />
        </form>
      </div>
    </div>
  );
}
