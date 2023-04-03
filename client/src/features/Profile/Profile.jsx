import React from "react";
import { useSelector } from "react-redux";
import Avatar from "../../components/Avatar/Avatar";
import "./Profile.scss";

const Profile = () => {
  const { user } = useSelector((state) => state.ins_auth);

  return (
    <>
      <div className="ins-profile">
        <div className="ins-profile-wraper">
          <div className="profile-header">
            <div className="profile-img">
              <Avatar />
            </div>
            <div className="profile-info">
              <div className="info-item">
                <span>{user.username}</span>
                <button className="edit-btn">Edit profile</button>
                <div className="setting">
                  <svg
                    aria-label="Options"
                    class="_ab6-"
                    color="rgb(38, 38, 38)"
                    fill="rgb(38, 38, 38)"
                    height="24"
                    role="img"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      fill="none"
                      r="8.635"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    ></circle>
                    <path
                      d="M14.232 3.656a1.269 1.269 0 0 1-.796-.66L12.93 2h-1.86l-.505.996a1.269 1.269 0 0 1-.796.66m-.001 16.688a1.269 1.269 0 0 1 .796.66l.505.996h1.862l.505-.996a1.269 1.269 0 0 1 .796-.66M3.656 9.768a1.269 1.269 0 0 1-.66.796L2 11.07v1.862l.996.505a1.269 1.269 0 0 1 .66.796m16.688-.001a1.269 1.269 0 0 1 .66-.796L22 12.93v-1.86l-.996-.505a1.269 1.269 0 0 1-.66-.796M7.678 4.522a1.269 1.269 0 0 1-1.03.096l-1.06-.348L4.27 5.587l.348 1.062a1.269 1.269 0 0 1-.096 1.03m11.8 11.799a1.269 1.269 0 0 1 1.03-.096l1.06.348 1.318-1.317-.348-1.062a1.269 1.269 0 0 1 .096-1.03m-14.956.001a1.269 1.269 0 0 1 .096 1.03l-.348 1.06 1.317 1.318 1.062-.348a1.269 1.269 0 0 1 1.03.096m11.799-11.8a1.269 1.269 0 0 1-.096-1.03l.348-1.06-1.317-1.318-1.062.348a1.269 1.269 0 0 1-1.03-.096"
                      fill="none"
                      stroke="currentColor"
                      stroke-linejoin="round"
                      stroke-width="2"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="info-item-info">
                <p>
                  <b>39</b> posts
                </p>
                <p>
                  <b>14</b> followers
                </p>
                <p>
                  <b>38</b> following
                </p>
              </div>
              <div className="info-item-name">
                <p>{user.full_name}</p>
              </div>
            </div>
          </div>
          <div className="profile-body">
            <div className="menu-item">
              <div className="item">
                <svg
                  aria-label=""
                  class="_ab6-"
                  color="rgb(38, 38, 38)"
                  fill="rgb(38, 38, 38)"
                  height="12"
                  role="img"
                  viewBox="0 0 24 24"
                  width="12"
                >
                  <rect
                    fill="none"
                    height="18"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    width="18"
                    x="3"
                    y="3"
                  ></rect>
                  <line
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    x1="9.015"
                    x2="9.015"
                    y1="3"
                    y2="21"
                  ></line>
                  <line
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    x1="14.985"
                    x2="14.985"
                    y1="3"
                    y2="21"
                  ></line>
                  <line
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    x1="21"
                    x2="3"
                    y1="9.015"
                    y2="9.015"
                  ></line>
                  <line
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    x1="21"
                    x2="3"
                    y1="14.985"
                    y2="14.985"
                  ></line>
                </svg>
                <span>POSTS</span>
              </div>
              <div className="item">
                <svg
                  aria-label=""
                  class="_ab6-"
                  color="rgb(142, 142, 142)"
                  fill="rgb(142, 142, 142)"
                  height="12"
                  role="img"
                  viewBox="0 0 24 24"
                  width="12"
                >
                  <polygon
                    fill="none"
                    points="20 21 12 13.44 4 21 4 3 20 3 20 21"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  ></polygon>
                </svg>
                <span>SAVED</span>
              </div>
              <div className="item">
                <svg
                  aria-label=""
                  class="_ab6-"
                  color="rgb(142, 142, 142)"
                  fill="rgb(142, 142, 142)"
                  height="12"
                  role="img"
                  viewBox="0 0 24 24"
                  width="12"
                >
                  <path
                    d="M10.201 3.797 12 1.997l1.799 1.8a1.59 1.59 0 0 0 1.124.465h5.259A1.818 1.818 0 0 1 22 6.08v14.104a1.818 1.818 0 0 1-1.818 1.818H3.818A1.818 1.818 0 0 1 2 20.184V6.08a1.818 1.818 0 0 1 1.818-1.818h5.26a1.59 1.59 0 0 0 1.123-.465Z"
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  ></path>
                  <path
                    d="M18.598 22.002V21.4a3.949 3.949 0 0 0-3.948-3.949H9.495A3.949 3.949 0 0 0 5.546 21.4v.603"
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  ></path>
                  <circle
                    cx="12.072"
                    cy="11.075"
                    fill="none"
                    r="3.556"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  ></circle>
                </svg>
                <span>TAGGED</span>
              </div>
            </div>
            <div className="photo-item">
              <div className="photo">
                <img
                  src="https://static-01.daraz.com.bd/p/00de30fbbfa1b3282d6609c3a6932e9b.jpg"
                  alt=""
                />
              </div>
              <div className="photo">
                <img
                  src="https://static-01.daraz.com.bd/p/00de30fbbfa1b3282d6609c3a6932e9b.jpg"
                  alt=""
                />
              </div>
              <div className="photo">
                <img
                  src="https://static-01.daraz.com.bd/p/00de30fbbfa1b3282d6609c3a6932e9b.jpg"
                  alt=""
                />
              </div>
              <div className="photo">
                <img
                  src="https://static-01.daraz.com.bd/p/00de30fbbfa1b3282d6609c3a6932e9b.jpg"
                  alt=""
                />
              </div>
              <div className="photo">
                <img
                  src="https://static-01.daraz.com.bd/p/00de30fbbfa1b3282d6609c3a6932e9b.jpg"
                  alt=""
                />
              </div>
              <div className="photo">
                <img
                  src="https://static-01.daraz.com.bd/p/00de30fbbfa1b3282d6609c3a6932e9b.jpg"
                  alt=""
                />
              </div>
              <div className="photo">
                <img
                  src="https://static-01.daraz.com.bd/p/00de30fbbfa1b3282d6609c3a6932e9b.jpg"
                  alt=""
                />
              </div>
              <div className="photo">
                <img
                  src="https://static-01.daraz.com.bd/p/00de30fbbfa1b3282d6609c3a6932e9b.jpg"
                  alt=""
                />
              </div>
              <div className="photo">
                <img
                  src="https://static-01.daraz.com.bd/p/00de30fbbfa1b3282d6609c3a6932e9b.jpg"
                  alt=""
                />
              </div>
              <div className="photo">
                <img
                  src="https://static-01.daraz.com.bd/p/00de30fbbfa1b3282d6609c3a6932e9b.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
