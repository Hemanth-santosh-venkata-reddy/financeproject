import React, { useState } from "react";
import "./Login.css";
import PersonIcon from "@mui/icons-material/Person";
import { IoMdMail } from "react-icons/io";
import { FaLock } from "react-icons/fa";

const Login = () => {
  const [action, setAction] = useState("Sign up");

  return (
    <div className="login">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-10 col-md-5 col-sm-10">
            <div className="card p-5 pt-4">
              <div className="header text-center">
                <div className="text">{action}</div>
                <div className="underline m-auto"></div>
              </div>
              <form>
                <div className="inputs">
                  {action === "Log in" ? (
                    <div></div>
                  ) : (
                    <div className="input">
                      <div className="img">
                        <PersonIcon />
                      </div>
                      <input type="text" placeholder="Name..." />
                    </div>
                  )}

                  <div className="input">
                    <div className="img">
                      <IoMdMail />
                    </div>
                    <input type="email" placeholder="Email..." />
                  </div>
                  <div className="input mb-3">
                    <div className="img">
                      <FaLock />
                    </div>
                    <input type="password" placeholder="password..." />
                  </div>
                </div>
                {action === "Sign up" ? (
                  <div></div>
                ) : (
                  <div className="forget-password">
                    Lost Password <span>clickme</span>
                  </div>
                )}
                <div className="submit-container">
                  <button
                    className={action === "Log in" ? "submit gray" : "submit"}
                    onClick={() => {
                      setAction("Sign up");
                    }}
                  >
                    Sign up
                  </button>
                  <button
                    className={action === "Sign up" ? "submit gray" : "submit"}
                  >
                    Log in
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
