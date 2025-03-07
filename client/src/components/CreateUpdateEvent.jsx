export default function CreateUpdateEvent({ showModal }) {
  return (
    <div className="modal applyLoanModal fade" id="create">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header border-bottom-0">
            <h4 className="modal-title" id="exampleModalLabel">
              Create
            </h4>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={showModal}
            ></button>
          </div>
          <div className="modal-body">
            <form action="#!" method="post">
              <div className="row">
                <div className="col-lg-6 mb-12 pb-2">
                  <div className="form-group">
                    <label htmlFor="loan_email_address" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control shadow-none"
                      id="loan_email_address"
                    />
                  </div>
                </div>
                <div className="col-lg-6 mb-12 pb-2">
                  <div className="form-group">
                    <label htmlFor="loan_password" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control shadow-none"
                      id="loan_password"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6 mb-12 pb-2">
                    <button type="submit" className="btn btn-primary w-100">
                      Save
                    </button>
                  </div>
                  <div className="col-lg-6 mb-12 pb-2">
                    <button
                      type="submit"
                      onClick={showModal}
                      className="btn btn-primary w-100"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
