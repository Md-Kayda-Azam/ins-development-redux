import React, { useState } from "react";
import InsCard from "../../../../InsCard/InsCard";
import "./Profiles.scss";
import ins_logo from "../../../../_assets/img/instagram_small_logo.png";
import fb_logo from "../../../../_assets/img/fb_small_logo.png";
import InsModal from "../../../InsModal/InsModal";
import data from "../../../../fake/data.json";
const Profiles = () => {
  const [close, setClose] = useState(false);
  const [nameModal, setNameModal] = useState(false);
  const [usernameModal, setUsernameModal] = useState(false);
  const [profilePictureModal, setProfilePictureModal] = useState(false);
  const [dataIndex, setDataIndex] = useState(false);

  const handleClickName = () => {
    setNameModal(true);
    setClose(false);
  };
  const handleUsernameModal = () => {
    setUsernameModal(true);
    setClose(false);
  };
  const handleProfilePictureModal = () => {
    setProfilePictureModal(true);
    setClose(false);
  };
  const handleShowModal = (index) => {
    setDataIndex(index);
    setClose(true);
  };

  const data1 = data.data[0];
  const data2 = data.data[1];

  return (
    <>
      <div className="profiles-area">
        <div className="profiles-wraper">
          <div className="profiles-title">
            <span>Profiles</span>
            <p>
              Manage your profile info, and use the same info across Facebook,
              Instagram and Horizon. Add more profiles by adding your accounts.{" "}
              <a href="#">Learn more</a>
            </p>
          </div>
          <InsCard>
            <div className="profiles-item">
              {data.data.map((item, index) => {
                return (
                  <>
                    <div
                      className="item"
                      onClick={() => handleShowModal(index)}
                    >
                      <div className="profile-info">
                        <img src={item.img} alt="" />
                        <button className="img">
                          <img src={ins_logo} alt="" />
                        </button>
                        <div className="name-area">
                          <span>{item.name}</span>
                          <span>{item.social}</span>
                        </div>
                      </div>
                      <div className="profile-wrro">
                        <svg
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          width="1em"
                          height="1em"
                          class="x1lliihq x1k90msu x2h7rmj x1qfuztq x198g3q0 xlup9mm x1kky2od"
                        >
                          <g
                            fill-rule="evenodd"
                            transform="translate(-446 -398)"
                          >
                            <path
                              fill-rule="nonzero"
                              d="M453.386 414.97a.75.75 0 1 0 1.06 1.06l7.5-7.5a.75.75 0 0 0 0-1.06l-7.5-7.5a.75.75 0 0 0-1.06 1.06l6.97 6.97-6.97 6.97z"
                            ></path>
                          </g>
                        </svg>
                      </div>
                    </div>{" "}
                    {index === dataIndex && close && (
                      <InsModal close={setClose}>
                        <div className="profile">
                          <div className="wraper">
                            <div className="img-info">
                              <img src={item.img} alt="" />
                              <div className="name-area">
                                <span>{item.name}</span>
                                <p>{item.social}</p>
                              </div>
                            </div>
                            <div className="item-area">
                              <div
                                className="item rds"
                                onClick={handleClickName}
                              >
                                <span>Name</span>
                                <svg
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                  width="1em"
                                  height="1em"
                                  class="x1lliihq x1k90msu x2h7rmj x1qfuztq x198g3q0 xlup9mm x1kky2od"
                                >
                                  <g
                                    fill-rule="evenodd"
                                    transform="translate(-446 -398)"
                                  >
                                    <path
                                      fill-rule="nonzero"
                                      d="M453.386 414.97a.75.75 0 1 0 1.06 1.06l7.5-7.5a.75.75 0 0 0 0-1.06l-7.5-7.5a.75.75 0 0 0-1.06 1.06l6.97 6.97-6.97 6.97z"
                                    ></path>
                                  </g>
                                </svg>
                              </div>
                              <div
                                className="item border"
                                onClick={handleUsernameModal}
                              >
                                <span>Username</span>
                                <svg
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                  width="1em"
                                  height="1em"
                                  class="x1lliihq x1k90msu x2h7rmj x1qfuztq x198g3q0 xlup9mm x1kky2od"
                                >
                                  <g
                                    fill-rule="evenodd"
                                    transform="translate(-446 -398)"
                                  >
                                    <path
                                      fill-rule="nonzero"
                                      d="M453.386 414.97a.75.75 0 1 0 1.06 1.06l7.5-7.5a.75.75 0 0 0 0-1.06l-7.5-7.5a.75.75 0 0 0-1.06 1.06l6.97 6.97-6.97 6.97z"
                                    ></path>
                                  </g>
                                </svg>
                              </div>
                              <div
                                className="item rdsb"
                                onClick={handleProfilePictureModal}
                              >
                                <span>Profile picture</span>
                                <svg
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                  width="1em"
                                  height="1em"
                                  class="x1lliihq x1k90msu x2h7rmj x1qfuztq x198g3q0 xlup9mm x1kky2od"
                                >
                                  <g
                                    fill-rule="evenodd"
                                    transform="translate(-446 -398)"
                                  >
                                    <path
                                      fill-rule="nonzero"
                                      d="M453.386 414.97a.75.75 0 1 0 1.06 1.06l7.5-7.5a.75.75 0 0 0 0-1.06l-7.5-7.5a.75.75 0 0 0-1.06 1.06l6.97 6.97-6.97 6.97z"
                                    ></path>
                                  </g>
                                </svg>
                              </div>
                            </div>

                            <div className="footer-profile">
                              <div className="item">
                                <div className="profile-info">
                                  <img src={item.img} alt="" />
                                  <button className="img">
                                    <img src={ins_logo} alt="" />
                                  </button>
                                  <div className="name-area-foo">
                                    <span>{item.name}</span>
                                    <span>{item.social}</span>
                                  </div>
                                </div>
                                <div className="profile-wrro">
                                  <svg
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    width="1em"
                                    height="1em"
                                    class="x1lliihq x1k90msu x2h7rmj x1qfuztq x198g3q0 xlup9mm x1kky2od"
                                  >
                                    <g
                                      fill-rule="evenodd"
                                      transform="translate(-446 -398)"
                                    >
                                      <path
                                        fill-rule="nonzero"
                                        d="M453.386 414.97a.75.75 0 1 0 1.06 1.06l7.5-7.5a.75.75 0 0 0 0-1.06l-7.5-7.5a.75.75 0 0 0-1.06 1.06l6.97 6.97-6.97 6.97z"
                                      ></path>
                                    </g>
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </InsModal>
                    )}
                  </>
                );
              })}
              <div className="add-account">
                <div className="profile-info">
                  <button>Add accounts</button>
                </div>
              </div>
            </div>
          </InsCard>
        </div>
      </div>

      {nameModal && (
        <InsModal back={setNameModal} close={setClose}>
          <div className="name-update">
            <div className="title">
              <span>Name</span>
            </div>
            <textarea name="" id="" cols="30" rows="10"></textarea>
            <p>You can only change your name twice within 14 days.</p>
            <div className="footer-btn">
              <button>Done</button>
            </div>
          </div>
        </InsModal>
      )}
      {usernameModal && (
        <InsModal back={setUsernameModal} close={setClose}>
          <div className="name-update">
            <div className="title">
              <span>Username</span>
            </div>
            <p className="p-username">
              Changing your username will also change your Instagram account
              address.
            </p>
            <textarea name="" id="" cols="30" rows="10"></textarea>
            <div className="footer-btn">
              <button>Done</button>
            </div>
          </div>
        </InsModal>
      )}
      {profilePictureModal && (
        <InsModal back={setProfilePictureModal} close={setClose}>
          <div className="name-update">
            <div className="title">
              <span>Profile picture</span>
            </div>
            <p className="p-propic">
              <img
                src="https://c4.wallpaperflare.com/wallpaper/728/617/252/allah-religion-trust-knowledge-hd-wallpaper-thumb.jpg"
                alt=""
              />
            </p>
            <div className="footer-pic">
              <input type="file" id="pic" style={{ display: "none" }} />

              <label htmlFor="pic">
                <svg
                  fill="currentColor"
                  viewBox="0 0 28 28"
                  width="1em"
                  height="1em"
                  class="x1lliihq x1k90msu x2h7rmj x1qfuztq x198g3q0 x1fgtraw xgd8bvy"
                >
                  <path d="M21 13h-6V7a1 1 0 0 0-2 0v6H7a1 1 0 0 0 0 2h6v6a1 1 0 0 0 2 0v-6h6a1 1 0 0 0 0-2z"></path>
                </svg>{" "}
                <span>Update new photo</span>
              </label>
            </div>
          </div>
        </InsModal>
      )}
    </>
  );
};

export default Profiles;
