import React, { useState } from "react";
import { MTextInput, MFillButton, MButton } from "../../UI";
import { Link } from "react-router-dom";

const LoginBase = (props) => {
  return (
    <>
      <div className="app-login-main-cont noscroll">
        <div className="app-login-logo-cont">
          <svg
            className="app-login-logo"
            width="59"
            height="20"
            viewBox="0 0 59 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.56763 9.18893C3.79306 14.6669 10.3422 22.336 18.7353 9.18893C27.1283 -3.95817 36.5387 3.21297 39.0821 8.69093C41.7314 16.3269 49.5632 23.3078 56.5676 11.1809"
              stroke="#000"
              stroke-width="3"
              stroke-linecap="round"
            />
          </svg>
        </div>
        <div className="app-login-left-cont">
          <div className="app-login-left-tab-cont">Welcome back</div>
          <div className="app-login-left-sub-tab-cont">
            Enter your credentials
          </div>
          <div className="app-login-cred-form-cont">
            <div className="app-login-cred-form-data-cont">
              <MTextInput
                label="Email address"
                placeholder="Enter your email address"
              />
            </div>
            <div className="app-login-cred-form-data-cont">
              <MTextInput label="Password" placeholder="Password" />
            </div>
            <div className="app-login-cred-form-data-cont">
              <Link to={"/forgotpassword"} className="app-login-for-link">
                Forgot Password?
              </Link>
            </div>

            <div className="app-login-cred-form-data-cont">
              <MFillButton
                hfill
                style={{
                  height: "42px",
                  background: "#017D5C",
                }}
              >
                Login
              </MFillButton>
            </div>
          </div>

          <div className="app-login-cred-form-cont">
            <div className="app-login-cred-crt-cont">
              <Link to={"/forgotpassword"} className="app-login-cret-link">
                Dont have an account ? Create account
              </Link>
            </div>
          </div>
        </div>
        <div className="app-login-right-cont"></div>
      </div>
    </>
  );
};

export default LoginBase;
