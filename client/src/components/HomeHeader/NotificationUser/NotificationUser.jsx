import React from "react";
import "./NotificationUser.scss";

const NotificationUser = ({ close }) => {
  return (
    <>
      <div className="notification-bar" ref={close}>
        <div className="notification-area">
          <div className="notification-title">
            <span>Notifications</span>
          </div>
          <div className="today-notification">
            <span>Today</span>
            <div className="user">
              <div className="user-item">
                <div className="info">
                  <img
                    src="https://i.pinimg.com/736x/f1/8d/78/f18d78e67f1507115d26cf32e060a1e6.jpg"
                    alt=""
                  />
                  <div className="info-others">
                    <p>azam</p>
                    <div className="follow">following you.5h</div>
                  </div>
                </div>
                <button>Requested</button>
              </div>
              <div className="user-item">
                <div className="info">
                  <img
                    src="https://wallpaperaccess.com/full/1903907.jpg"
                    alt=""
                  />
                  <div className="info-others">
                    <p>azam</p>
                    <div className="follow">following you.5h</div>
                  </div>
                </div>
                <button>Requested</button>
              </div>
              <div className="user-item">
                <div className="info">
                  <img
                    src="https://i.pinimg.com/564x/ec/26/d7/ec26d7138832062256417cc9c55cc79c.jpg"
                    alt=""
                  />
                  <div className="info-others">
                    <p>azam</p>
                    <div className="follow">following you.5h</div>
                  </div>
                </div>
                <button>Requested</button>
              </div>
              <div className="user-item">
                <div className="info">
                  <img
                    src="https://1.bp.blogspot.com/-HWcjnOkwb-o/YSXSa7mluzI/AAAAAAAATeo/txfui4COp5UbuhcxRcVZ5EFqfjZyheMYwCLcBGAsYHQ/s320/hijab-girls-dp-images%2B%25283%2529.jpg"
                    alt=""
                  />
                  <div className="info-others">
                    <p>azam</p>
                    <div className="follow">following you.5h</div>
                  </div>
                </div>
                <button>Requested</button>
              </div>
            </div>
          </div>
          <div className="week-notification">
            <span>Week</span>
            <div className="user">
              <div className="user-item">
                <div className="info">
                  <img
                    src="https://i.pinimg.com/736x/f1/8d/78/f18d78e67f1507115d26cf32e060a1e6.jpg"
                    alt=""
                  />
                  <div className="info-others">
                    <p>azam</p>
                    <div className="follow">following you.5h</div>
                  </div>
                </div>
                <button className="follow-btn">Follow</button>
              </div>
              <div className="user-item">
                <div className="info">
                  <img
                    src="https://wallpaperaccess.com/full/1903907.jpg"
                    alt=""
                  />
                  <div className="info-others">
                    <p>azam</p>
                    <div className="follow">following you.5h</div>
                  </div>
                </div>
                <button className="follow-btn">Follow</button>
              </div>
              <div className="user-item">
                <div className="info">
                  <img
                    src="https://i.pinimg.com/564x/ec/26/d7/ec26d7138832062256417cc9c55cc79c.jpg"
                    alt=""
                  />
                  <div className="info-others">
                    <p>azam</p>
                    <div className="follow">following you.5h</div>
                  </div>
                </div>
                <button className="follow-btn">Follow</button>
              </div>
              <div className="user-item">
                <div className="info">
                  <img
                    src="https://1.bp.blogspot.com/-HWcjnOkwb-o/YSXSa7mluzI/AAAAAAAATeo/txfui4COp5UbuhcxRcVZ5EFqfjZyheMYwCLcBGAsYHQ/s320/hijab-girls-dp-images%2B%25283%2529.jpg"
                    alt=""
                  />
                  <div className="info-others">
                    <p>azam</p>
                    <div className="follow">following you.5h</div>
                  </div>
                </div>
                <button className="follow-btn">Follow</button>
              </div>
            </div>
          </div>
          <div className="month-notification">
            <span>Month</span>
            <div className="user">
              <div className="user-item">
                <div className="info">
                  <img
                    src="https://i.pinimg.com/736x/f1/8d/78/f18d78e67f1507115d26cf32e060a1e6.jpg"
                    alt=""
                  />
                  <div className="info-others">
                    <p>azam</p>
                    <div className="follow">following you.5h</div>
                  </div>
                </div>
                <button className="follow-btn">Follow</button>
              </div>
              <div className="user-item">
                <div className="info">
                  <img
                    src="https://wallpaperaccess.com/full/1903907.jpg"
                    alt=""
                  />
                  <div className="info-others">
                    <p>azam</p>
                    <div className="follow">following you.5h</div>
                  </div>
                </div>
                <button className="follow-btn">Follow</button>
              </div>
              <div className="user-item">
                <div className="info">
                  <img
                    src="https://i.pinimg.com/564x/ec/26/d7/ec26d7138832062256417cc9c55cc79c.jpg"
                    alt=""
                  />
                  <div className="info-others">
                    <p>azam</p>
                    <div className="follow">following you.5h</div>
                  </div>
                </div>
                <button className="follow-btn">Follow</button>
              </div>
              <div className="user-item">
                <div className="info">
                  <img
                    src="https://1.bp.blogspot.com/-HWcjnOkwb-o/YSXSa7mluzI/AAAAAAAATeo/txfui4COp5UbuhcxRcVZ5EFqfjZyheMYwCLcBGAsYHQ/s320/hijab-girls-dp-images%2B%25283%2529.jpg"
                    alt=""
                  />
                  <div className="info-others">
                    <p>azam</p>
                    <div className="follow">following you.5h</div>
                  </div>
                </div>
                <button className="follow-btn">Follow</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotificationUser;
