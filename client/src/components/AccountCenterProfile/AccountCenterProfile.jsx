import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import "./AccountCenterProfile.scss";

const AccountCenterProfile = () => {
  return (
    <>
      <div className="account-center-profiles">
        <div className="profiles-wraper">
          <div className="profiles-header">
            <div className="account-senter">
              <div className="meta-logo">
                <svg
                  aria-label="Meta logo"
                  class="x1kpxq89 x1247r65"
                  role="img"
                  viewBox="0 0 500 100"
                >
                  <defs>
                    <linearGradient
                      gradientUnits="userSpaceOnUse"
                      id="jsc_c_h"
                      x1="124.38"
                      x2="160.839"
                      y1="99"
                      y2="59.326"
                    >
                      <stop offset=".427" stop-color="#0278F1"></stop>
                      <stop offset=".917" stop-color="#0180FA"></stop>
                    </linearGradient>
                    <linearGradient
                      gradientUnits="userSpaceOnUse"
                      id="jsc_c_i"
                      x1="42"
                      x2="-1.666"
                      y1="4.936"
                      y2="61.707"
                    >
                      <stop offset=".427" stop-color="#0165E0"></stop>
                      <stop offset=".917" stop-color="#0180FA"></stop>
                    </linearGradient>
                    <linearGradient
                      gradientUnits="userSpaceOnUse"
                      id="jsc_c_j"
                      x1="27.677"
                      x2="132.943"
                      y1="28.71"
                      y2="71.118"
                    >
                      <stop stop-color="#0064E0"></stop>
                      <stop offset=".656" stop-color="#0066E2"></stop>
                      <stop offset="1" stop-color="#0278F1"></stop>
                    </linearGradient>
                  </defs>
                  <path
                    d="M185.508 3.01h18.704l31.803 57.313L267.818 3.01h18.297v94.175h-15.264v-72.18l-27.88 49.977h-14.319l-27.88-49.978v72.18h-15.264V3.01ZM336.281 98.87c-7.066 0-13.286-1.565-18.638-4.674-5.352-3.12-9.527-7.434-12.528-12.952-2.989-5.517-4.483-11.835-4.483-18.973 0-7.214 1.461-13.608 4.385-19.17 2.923-5.561 6.989-9.908 12.187-13.05 5.198-3.13 11.176-4.707 17.923-4.707 6.715 0 12.484 1.587 17.319 4.74 4.847 3.164 8.572 7.598 11.177 13.291 2.615 5.693 3.923 12.371 3.923 20.046v4.171h-51.793c.945 5.737 3.275 10.258 6.989 13.554 3.715 3.295 8.407 4.937 14.078 4.937 4.549 0 8.461-.667 11.747-2.014 3.286-1.347 6.374-3.383 9.253-6.12l8.099 9.886c-8.055 7.357-17.934 11.036-29.638 11.036Zm11.143-55.867c-3.198-3.252-7.385-4.872-12.56-4.872-5.045 0-9.264 1.653-12.66 4.97-3.407 3.318-5.55 7.784-6.451 13.39h37.133c-.451-5.737-2.275-10.237-5.462-13.488ZM386.513 39.467h-14.044V27.03h14.044V6.447h14.715V27.03h21.341v12.437h-21.341v31.552c0 5.244.901 8.988 2.703 11.233 1.803 2.244 4.88 3.36 9.253 3.36 1.935 0 3.572-.076 4.924-.23a97.992 97.992 0 0 0 4.461-.645v12.316c-1.67.493-3.549.898-5.637 1.205-2.099.317-4.286.47-6.583.47-15.89 0-23.836-8.649-23.836-25.957V39.467ZM500 97.185h-14.44v-9.82c-2.571 3.678-5.835 6.513-9.791 8.506-3.968 1.993-8.462 3-13.506 3-6.209 0-11.715-1.588-16.506-4.752-4.803-3.153-8.572-7.51-11.308-13.039-2.748-5.54-4.121-11.879-4.121-19.006 0-7.17 1.395-13.52 4.187-19.038 2.791-5.518 6.648-9.843 11.571-12.985 4.935-3.13 10.594-4.707 16.99-4.707 4.813 0 9.132.93 12.956 2.791a25.708 25.708 0 0 1 9.528 7.905v-9.01H500v70.155Zm-14.715-45.61c-1.571-3.985-4.066-7.138-7.461-9.448-3.396-2.31-7.33-3.46-11.781-3.46-6.308 0-11.319 2.102-15.055 6.317-3.737 4.215-5.605 9.92-5.605 17.09 0 7.215 1.802 12.94 5.396 17.156 3.604 4.215 8.484 6.317 14.66 6.317 4.538 0 8.593-1.16 12.154-3.492 3.549-2.332 6.121-5.475 7.692-9.427V51.575Z"
                    fill="#1C2B33"
                  ></path>
                  <path
                    d="M107.666 0C95.358 0 86.865 4.504 75.195 19.935 64.14 5.361 55.152 0 42.97 0 18.573 0 0 29.768 0 65.408 0 86.847 12.107 99 28.441 99c15.742 0 25.269-13.2 33.445-27.788l9.663-16.66a643.785 643.785 0 0 1 2.853-4.869 746.668 746.668 0 0 1 3.202 5.416l9.663 16.454C99.672 92.72 108.126 99 122.45 99c16.448 0 27.617-13.723 27.617-33.25 0-37.552-19.168-65.75-42.4-65.75ZM57.774 46.496l-9.8 16.25c-9.595 15.976-13.639 19.526-19.67 19.526-6.373 0-11.376-5.325-11.376-17.547 0-24.51 12.062-47.451 26.042-47.451 7.273 0 12.678 3.61 22.062 17.486a547.48 547.48 0 0 0-7.258 11.736Zm64.308 35.776c-6.648 0-11.034-4.233-20.012-19.39l-9.663-16.386c-2.79-4.737-5.402-9.04-7.88-12.945 9.73-14.24 15.591-17.984 23.002-17.984 14.118 0 26.204 20.96 26.204 49.158 0 11.403-4.729 17.547-11.651 17.547Z"
                    fill="#0180FA"
                  ></path>
                  <path
                    d="M145.631 36h-16.759c3.045 7.956 4.861 17.797 4.861 28.725 0 11.403-4.729 17.547-11.651 17.547H122v16.726l.449.002c16.448 0 27.617-13.723 27.617-33.25 0-10.85-1.6-20.917-4.435-29.75Z"
                    fill="url(#jsc_c_h)"
                  ></path>
                  <path
                    d="M42 .016C18.63.776.832 28.908.028 63h16.92C17.483 39.716 28.762 18.315 42 17.31V.017Z"
                    fill="url(#jsc_c_i)"
                  ></path>
                  <path
                    d="m75.195 19.935.007-.009c2.447 3.223 5.264 7.229 9.33 13.62l-.005.005c2.478 3.906 5.09 8.208 7.88 12.945l9.663 16.386c8.978 15.157 13.364 19.39 20.012 19.39.31 0 .617-.012.918-.037v16.76c-.183.003-.367.005-.551.005-14.323 0-22.777-6.281-35.182-27.447L77.604 55.1l-.625-1.065L77 54c-2.386-4.175-7.606-12.685-11.973-19.232l.005-.008-.62-.91C63.153 31.983 61.985 30.313 61 29l-.066.024c-7.006-9.172-11.818-11.75-17.964-11.75-.324 0-.648.012-.97.037V.016c.322-.01.646-.016.97-.016 12.182 0 21.17 5.36 32.225 19.935Z"
                    fill="url(#jsc_c_j)"
                  ></path>
                </svg>
              </div>
              <div className="title">
                <span>Accounts Center</span>
              </div>
              <div className="pg">
                <p>
                  Manage your connected experiences and account settings across
                  Meta technologies like Facebook, Instagram and Meta Horizon.
                </p>
              </div>
              <div className="lear-more">
                <a href="#">Learn more</a>
              </div>
              <div className="item-area">
                <div className="item">
                  <NavLink to="">
                    <svg
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      width="1em"
                      height="1em"
                      class="x1lliihq x1k90msu x2h7rmj x1qfuztq x198g3q0 xxk0z11 xvy4d1p"
                    >
                      <path d="M15.56 10.67c.95-.91 1.49-2.2 1.49-3.67 0-2.94-2.04-5-4.97-5h-.16C8.99 2 6.95 4.06 6.95 7c0 1.48.54 2.76 1.49 3.67-3.7 1.42-6.37 4.98-6.44 9.16v1.67c0 .28.22.5.5.5h1c.28 0 .5-.22.5-.5v-1.66C4.07 15.52 7.66 12 12 12s7.93 3.52 8 7.83v1.67c0 .28.22.5.5.5h1c.28 0 .5-.22.5-.5v-1.69c-.07-4.16-2.74-7.71-6.44-9.14zM11.92 10c-.8 0-1.49-.23-2-.66-.63-.53-.97-1.36-.97-2.34 0-1.82 1.16-3 2.97-3h.17c1.8 0 2.97 1.18 2.97 3 0 .97-.34 1.79-.95 2.32-.52.45-1.22.68-2.03.68h-.16z"></path>
                    </svg>
                    <span>Profiles</span>
                  </NavLink>
                </div>
                <div className="item">
                  <NavLink to="connected_experiences">
                    <svg
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      width="1em"
                      height="1em"
                      class="x1lliihq x1k90msu x2h7rmj x1qfuztq x198g3q0 xxk0z11 xvy4d1p"
                    >
                      <path d="M12 10a3.88 3.88 0 0 0 1-.15l2.16 3.66 1.72-1-2.11-3.64A4 4 0 0 0 16 6a4 4 0 1 0-4 4zm0-6a2 2 0 1 1-2 2 2 2 0 0 1 2-2zM19 14a4 4 0 0 0-3.86 3H11v2h4.14A4 4 0 1 0 19 14zm0 6a2 2 0 1 1 2-2 2 2 0 0 1-2 2zM8.17 10.58l-2.09 3.59A3.87 3.87 0 0 0 5 14a4 4 0 1 0 2.81 1.16l2.09-3.57zM5 20a2 2 0 1 1 2-2 2 2 0 0 1-2 2z"></path>
                    </svg>
                    <span>Connected experiences</span>
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="account-settings">
              <div className="title">
                <span>Account settings</span>
              </div>
              <div className="item-area">
                <div className="item">
                  <NavLink to="accounts">
                    <svg
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      width="1em"
                      height="1em"
                      class="x1lliihq x1k90msu x2h7rmj x1qfuztq x198g3q0 xxk0z11 xvy4d1p"
                    >
                      <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 2a8 8 0 0 1 6.61 12.5 8.19 8.19 0 0 0-3.35-2.8 4.5 4.5 0 0 0 1.24-3.2A4.27 4.27 0 0 0 12.07 6h-.14a4.27 4.27 0 0 0-4.43 4.5 4.5 4.5 0 0 0 1.24 3.2 8.19 8.19 0 0 0-3.35 2.8A8 8 0 0 1 12 4zm-.07 9a2.35 2.35 0 0 1-2.43-2.5A2.29 2.29 0 0 1 11.93 8h.14a2.29 2.29 0 0 1 2.43 2.5 2.35 2.35 0 0 1-2.43 2.5zm-5.14 5.06a6 6 0 0 1 10.42 0 8 8 0 0 1-10.42 0z"></path>
                    </svg>
                    <span>Accounts</span>
                  </NavLink>
                </div>
                <div className="item">
                  <NavLink to="personal_info">
                    <svg
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      width="1em"
                      height="1em"
                      class="x1lliihq x1k90msu x2h7rmj x1qfuztq x198g3q0 xxk0z11 xvy4d1p"
                    >
                      <path d="M19.5 23h-15A1.5 1.5 0 0 1 3 21.5v-19A1.5 1.5 0 0 1 4.5 1h15A1.5 1.5 0 0 1 21 2.5v19a1.5 1.5 0 0 1-1.5 1.5zM5 21h14V3H5z"></path>
                      <path d="M8 17H16V19H8z"></path>
                      <path d="M15 15H9a1 1 0 0 1-1-1v-2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2a1 1 0 0 1-1 1zm-5-2h4v-1h-4zM12 9a2 2 0 1 1 2-2 2 2 0 0 1-2 2zm0-2z"></path>
                    </svg>
                    <span>Personal details</span>
                  </NavLink>
                </div>
                <div className="item">
                  <NavLink to="password_and_security">
                    <svg
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      width="1em"
                      height="1em"
                      class="x1lliihq x1k90msu x2h7rmj x1qfuztq x198g3q0 xxk0z11 xvy4d1p"
                    >
                      <path d="M21.37 4.45a1.49 1.49 0 0 0-1-1.43 24 24 0 0 0-8.48-1.27c-4.89 0-7.52 1-8.43 1.37a1.51 1.51 0 0 0-.87 1.37v2.6a17.16 17.16 0 0 0 8.65 14.71 1.54 1.54 0 0 0 1.52 0 17.05 17.05 0 0 0 8.56-14.66zM12 19.93A15.13 15.13 0 0 1 4.63 7.12v-2.3a20.29 20.29 0 0 1 7.3-1.07 23.36 23.36 0 0 1 7.43 1v2.38A15 15 0 0 1 12 19.93z"></path>
                      <path d="M17.32 7.08a1 1 0 0 0-.83-1 26.86 26.86 0 0 0-4.56-.36 24.4 24.4 0 0 0-4.49.37 1 1 0 0 0-.81 1v.11a13.27 13.27 0 0 0 4.75 9.86 1 1 0 0 0 .63.22.94.94 0 0 0 .63-.23 13.25 13.25 0 0 0 4.69-9.81zM12 15a11.32 11.32 0 0 1-3.33-7 27.07 27.07 0 0 1 6.61 0A11.41 11.41 0 0 1 12 15z"></path>
                    </svg>
                    <span>Password and security</span>
                  </NavLink>
                </div>
                <div className="item">
                  <NavLink to="info_and_permissions">
                    <svg
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      width="1em"
                      height="1em"
                      class="x1lliihq x1k90msu x2h7rmj x1qfuztq x198g3q0 xxk0z11 xvy4d1p"
                    >
                      <path d="M21.37 4.45a1.49 1.49 0 0 0-1-1.43 24 24 0 0 0-8.48-1.27c-4.89 0-7.52 1-8.43 1.37a1.51 1.51 0 0 0-.87 1.37v2.6a17.16 17.16 0 0 0 8.65 14.71 1.54 1.54 0 0 0 1.52 0 17.05 17.05 0 0 0 8.56-14.66zM12 19.93A15.13 15.13 0 0 1 4.63 7.12v-2.3a20.29 20.29 0 0 1 7.3-1.07 23.36 23.36 0 0 1 7.43 1v2.38A15 15 0 0 1 12 19.93z"></path>
                      <path d="M17.32 7.08a1 1 0 0 0-.83-1 26.86 26.86 0 0 0-4.56-.36 24.4 24.4 0 0 0-4.49.37 1 1 0 0 0-.81 1v.11a13.27 13.27 0 0 0 4.75 9.86 1 1 0 0 0 .63.22.94.94 0 0 0 .63-.23 13.25 13.25 0 0 0 4.69-9.81zM12 15a11.32 11.32 0 0 1-3.33-7 27.07 27.07 0 0 1 6.61 0A11.41 11.41 0 0 1 12 15z"></path>
                    </svg>
                    <span>Your information and permissions</span>
                  </NavLink>
                </div>
                <div className="item">
                  <NavLink to="ad_preferences">
                    <svg
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      width="1em"
                      height="1em"
                      class="x1lliihq x1k90msu x2h7rmj x1qfuztq x198g3q0 xxk0z11 xvy4d1p"
                    >
                      <path d="M20.5 2h-17A1.5 1.5 0 0 0 2 3.5v17A1.5 1.5 0 0 0 3.5 22h17a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 20.5 2zM20 20H4V4h16z"></path>
                      <path d="M6.5 16h11a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 17.5 5h-11A1.5 1.5 0 0 0 5 6.5v8A1.5 1.5 0 0 0 6.5 16zM7 7h10v7H7z"></path>
                      <path d="M5 17H13V19H5z"></path>
                      <path d="M15 17H19V19H15z"></path>
                    </svg>
                    <span>Ad preferances</span>
                  </NavLink>
                </div>
                <div className="item">
                  <NavLink to="payments">
                    <svg
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      width="1em"
                      height="1em"
                      class="x1lliihq x1k90msu x2h7rmj x1qfuztq x198g3q0 xxk0z11 xvy4d1p"
                    >
                      <path d="M4.5 15h3c.28 0 .5-.22.5-.5v-1c0-.28-.22-.5-.5-.5h-3c-.28 0-.5.22-.5.5v1c0 .28.22.5.5.5zM10.5 15h3c.28 0 .5-.22.5-.5v-1c0-.28-.22-.5-.5-.5h-3c-.28 0-.5.22-.5.5v1c0 .28.22.5.5.5zM16.5 15h3c.28 0 .5-.22.5-.5v-1c0-.28-.22-.5-.5-.5h-3c-.28 0-.5.22-.5.5v1c0 .28.22.5.5.5z"></path>
                      <path d="M21.5 5h-19C1.67 5 1 5.67 1 6.5v11c0 .83.67 1.5 1.5 1.5h19c.83 0 1.5-.67 1.5-1.5v-11c0-.83-.67-1.5-1.5-1.5zM21 7v1H3V7h18zM3 17v-7h18v7H3z"></path>
                    </svg>
                    <span>Payments</span>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          <div className="profiles-body">
            <div className="profile-body-wraper">
              <div className="header-profile-close">
                <Link to="/accounts/edit">
                  {" "}
                  <button>
                    <svg
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      width="1em"
                      height="1em"
                      class="x1lliihq x1k90msu x2h7rmj x1qfuztq x198g3q0 xxk0z11 xvy4d1p"
                    >
                      <path d="m13.41 12 6-6a.5.5 0 0 0 0-.71l-.7-.7a.5.5 0 0 0-.71 0l-6 6-6-6a.5.5 0 0 0-.71 0l-.7.7a.5.5 0 0 0 0 .71l6 6-6 6a.5.5 0 0 0 0 .71l.7.7a.5.5 0 0 0 .71 0l6-6 6 6a.5.5 0 0 0 .71 0l.7-.7a.5.5 0 0 0 0-.71z"></path>
                    </svg>
                  </button>
                </Link>
              </div>
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountCenterProfile;
