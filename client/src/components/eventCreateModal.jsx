export default function Modal() {
  return (
    <div
      className="modal applyLoanModal fade"
      id="applyLoan"
      tabIndex={-1}
      aria-labelledby="applyLoanLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header border-bottom-0">
            <h4 className="modal-title" id="exampleModalLabel">
              How much do you need?
            </h4>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body">
            <form action="#!" method="post">
              <div className="row">
                <div className="col-lg-6 mb-4 pb-2">
                  <div className="form-group">
                    <label htmlFor="loan_amount" className="form-label">
                      Amount
                    </label>
                    <input
                      type="number"
                      className="form-control shadow-none"
                      id="loan_amount"
                      placeholder="ex: 25000"
                    />
                  </div>
                </div>
                <div className="col-lg-6 mb-4 pb-2">
                  <div className="form-group">
                    <label htmlFor="loan_how_long_for" className="form-label">
                      How long for?
                    </label>
                    <input
                      type="number"
                      className="form-control shadow-none"
                      id="loan_how_long_for"
                      placeholder="ex: 12"
                    />
                  </div>
                </div>
                <div className="col-lg-12 mb-4 pb-2">
                  <div className="form-group">
                    <label htmlFor="loan_repayment" className="form-label">
                      Repayment
                    </label>
                    <input
                      type="number"
                      className="form-control shadow-none"
                      id="loan_repayment"
                      disabled=""
                    />
                  </div>
                </div>
                <div className="col-lg-6 mb-4 pb-2">
                  <div className="form-group">
                    <label htmlFor="loan_full_name" className="form-label">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="form-control shadow-none"
                      id="loan_full_name"
                    />
                  </div>
                </div>
                <div className="col-lg-6 mb-4 pb-2">
                  <div className="form-group">
                    <label htmlFor="loan_email_address" className="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control shadow-none"
                      id="loan_email_address"
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <button type="submit" className="btn btn-primary w-100">
                    Get Your Loan Now
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
