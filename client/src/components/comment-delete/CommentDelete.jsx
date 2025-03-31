export default function CommentDelete({ showDeleteComment, onDelete }) {
  return (
    <div className="modal applyLoanModal fade" id="delete">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header border-bottom-0">
            <h4 className="modal-title" id="exampleModalLabel">
              Do you really want to delete this comment?
            </h4>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={showDeleteComment}
            ></button>
          </div>
          <div className="row align-items-center justify-content-center">
            <div className="col-md-4 mt-4">
              <button onClick={onDelete} className="btn btn-primary w-100">
                Yes
              </button>
            </div>
            <div className="col-md-4 mt-4">
              <button
                onClick={showDeleteComment}
                className="btn btn-primary w-100"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
