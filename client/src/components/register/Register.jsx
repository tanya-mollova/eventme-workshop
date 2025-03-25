import { useActionState, useContext, useState } from "react";
import { useNavigate } from "react-router";
import { UserContext } from "../../contexts/UserContext";
import { useRegister } from "./../../api/authApi";

export default function Register({ showLoginModal, showRegisterModal }) {
  const { userLoginHandler } = useContext(UserContext);
  const { register } = useRegister();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const registerHandler = async (_, formData) => {
    console.log(Object.fromEntries(formData));
    const { username, email, password, passwordConfirm } =
      Object.fromEntries(formData);

    if (password !== passwordConfirm) {
      setError("Password missmatch");
      return;
    }
    const authData = await register(username, email, password);
    if (authData.code == "403" || authData.code == "409") {
      setError(authData.message);
      return;
    }
    userLoginHandler(authData);
    showRegisterModal(false);
    navigate("/events");
  };

  const [_, registerAction, isPending] = useActionState(registerHandler, {
    username: "",
    email: "",
    password: "",
  });

  return (
    <div className="modal applyLoanModal fade" id="login">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header border-bottom-0">
            <h4 className="modal-title" id="exampleModalLabel">
              Register
            </h4>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={showRegisterModal}
            ></button>
          </div>
          <div className="modal-body">
            <form action={registerAction} id="register">
              <div className="row">
                <div className="col-lg-12 mb-12 pb-2">
                  <div className="form-group">
                    <label htmlFor="username" className="form-label">
                      Username
                    </label>
                    <input
                      name="username"
                      type="text"
                      className="form-control shadow-none"
                      id="username"
                      placeholder="username"
                    />
                  </div>
                </div>
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
                <div className="col-lg-12 mb-12 pb-2">
                  <div className="form-group">
                    <label htmlFor="passwordConfirm" className="form-label">
                      Password Confirm
                    </label>
                    <input
                      name="passwordConfirm"
                      type="password"
                      className="form-control shadow-none"
                      id="passwordConfirm"
                    />
                  </div>
                </div>
                {error && <span className="error-message">{error}</span>}
                <div className="col-lg-12 mt-4">
                  <button type="submit" className="btn btn-primary w-100">
                    Register
                  </button>
                  <p className="mt-3">
                    You don't have an account?{" "}
                    <a className="primary-text" onClick={showLoginModal}>
                      Log in
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
