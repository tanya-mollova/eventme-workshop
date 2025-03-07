export default function Login({
  showLoginModal,
  showRegisterModal,
  showLogin,
  showRegister,
}) {
  return (
    <div className="modal applyLoanModal fade" id="login">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header border-bottom-0">
            <h4 className="modal-title" id="exampleModalLabel">
              Login
            </h4>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={showLoginModal}
            ></button>
          </div>
          <div className="modal-body">
            <form action="#!" method="post">
              <div className="row">
                <div className="col-lg-12 mb-12 pb-2">
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
                <div className="col-lg-12 mb-12 pb-2">
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
                <div className="col-lg-12 mt-4">
                  <button type="submit" className="btn btn-primary w-100">
                    Login
                  </button>
                  <p className="mt-3">
                    You don't have an account?{" "}
                    <a className="primary-text" onClick={showRegisterModal}>
                      Register now
                    </a>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
