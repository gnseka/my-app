import { useState } from "react";
import "./index.css";
import { useEffect } from "react";
import { useCookies } from "react-cookie";

export default function Form(params) {
  const [Username, setUsername] = useState();
  const [password, setPassword] = useState();

  const [cookies, setCookie] = useCookies(["username"]);

  const user =
    localStorage.getItem("username") || sessionStorage.getItem("username");
  const pass =
    localStorage.getItem("password") || sessionStorage.getItem("password");

  useEffect(() => {
    setUsername(user);
    setPassword(pass);
  }, [user, pass]);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  function future(days) {
    var dayMs = 86400000;
    var ts = dayMs * days;
    var now = +new Date();
    var fts = now + ts;
    return new Date(fts);
  }

  const handleSubmit = () => {
    localStorage.setItem("username", Username);
    localStorage.setItem("password", password);

    sessionStorage.setItem("username", Username);
    sessionStorage.setItem("password", password);

    var now = new Date();
    var time = now.getTime();
    var expireTime = time + 1000 * 36000;
    now.setTime(expireTime);

    var futDate = future(1);

    setCookie("username", Username, {
      path: "/",
      //   maxAge: 10,
      expires: futDate,
    });

    console.log(Username, password);
  };

  const forgotPassword = () => {
    localStorage.clear();
    sessionStorage.clear();
  };

  return (
    <section
      className="h-100 gradient-form"
      style={{ backgroundColor: "#eee" }}
    >
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-xl-10">
            <div className="card rounded-3 text-black">
              <div className="row g-0">
                <div className="col-lg-6">
                  <div className="card-body mx-md-4">
                    <div className="text-center">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                        style={{ width: "185px" }}
                        alt="logo"
                      />
                      <h4 className="mt-1 mb-5 pb-1">We are The Lotus Team</h4>
                    </div>

                    <form>
                      <p>Please login to your account</p>
                      <div className="form-outline mb-4">
                        <input
                          type="email"
                          id="form2Example11"
                          className="form-control"
                          placeholder="Phone number or email address"
                          onChange={handleUsernameChange}
                          value={Username}
                        />
                        <label className="form-label" for="form2Example11">
                          Username
                        </label>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          id="form2Example22"
                          className="form-control"
                          onChange={handlePasswordChange}
                          value={password}
                        />
                        <label className="form-label" for="form2Example22">
                          Password
                        </label>
                      </div>

                      <div className="text-center pt-1 pb-1">
                        <button
                          className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
                          type="button"
                          onClick={handleSubmit}
                        >
                          Log in
                        </button>
                        <a
                          className="text-muted"
                          href="#!"
                          onClick={forgotPassword}
                        >
                          Forgot password?
                        </a>
                      </div>

                      <div className="d-flex align-items-center justify-content-center pb-4">
                        <p className="mb-0 me-2">Don't have an account?</p>
                        <button
                          type="button"
                          className="btn btn-outline-danger"
                        >
                          Create new
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                  <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                    <h4 className="mb-4">We are more than just a company</h4>
                    <p classNameName="small mb-0">
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
