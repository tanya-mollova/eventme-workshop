import { useActionState, useContext, useState } from "react";
import { useNavigate } from "react-router";

import { UserContext } from "../../contexts/UserContext";
import { useLogin } from "./../../api/authApi";

export default function Login({ showLoginModal, showRegisterModal }) {
  const { userLoginHandler } = useContext(UserContext);
  const { login } = useLogin();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const loginHandler = async (_, formData) => {
    const values = Object.fromEntries(formData);
    const authData = await login(values.email, values.password);
    if (authData.code == "403") {
      setError(authData.message);
      return;
    }
    userLoginHandler(authData);
    navigate("/my-events");
    showLoginModal(false);
  };

  const [_, loginAction, isPending] = useActionState(loginHandler, {
    email: "",
    password: "",
  });

  return (
    <div className="modal applyLoanModal fade" id="login">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header border-bottom-0">
            <h4 className="modal-title" id="exampleModalLabel">
              <i className="fa-solid fa-door-open text-primary"></i> Login
            </h4>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={showLoginModal}
            ></button>
          </div>
          <div className="modal-body">
            <form action={loginAction} id="login">
              <div className="row">
                <div className="col-lg-12 mb-12 pb-2">
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      name="email"
                      type="email"
                      className="form-control shadow-none"
                      id="email"
                      placeholder="someone@example.com"
                    />
                  </div>
                </div>
                <div className="col-lg-12 mb-12 pb-2">
                  <div className="form-group">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <input
                      name="password"
                      type="password"
                      className="form-control shadow-none"
                      id="password"
                    />
                  </div>
                </div>
                {error && <span className="error-message">{error}</span>}
                <div className="col-lg-12 mt-4">
                  <button
                    type="submit"
                    className="btn btn-primary w-100"
                    disabled={isPending ? "disabled" : ""}
                  >
                    Login
                  </button>
                  {isPending && (
                    <div id="loader">
                      <img src="/images/loader.svg" />
                    </div>
                  )}
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
