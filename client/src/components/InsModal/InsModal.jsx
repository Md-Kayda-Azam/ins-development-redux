import React from "react";
import "./InsModal.scss";

const InsModal = ({ children, close, back }) => {
  const hnadleClose = () => {
    close(false);
    back(false);
  };
  const handleBack = () => {
    close(true);
    back(false);
  };

  return (
    <>
      <div className="ins-modal">
        <div className="modal-wraper">
          <div className="modal-popup">
            <div className={`modal-header ${back && "backM"}`}>
              {back && (
                <button onClick={handleBack}>
                  <svg
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    width="1em"
                    height="1em"
                    class="x1lliihq x1k90msu x2h7rmj x1qfuztq x198g3q0 xxk0z11 xvy4d1p"
                  >
                    <path d="M7 12a1.51 1.51 0 0 1 .44-1.06l8.15-8.15a.5.5 0 0 1 .7 0l.71.71a.48.48 0 0 1 0 .7L9.21 12 17 19.8a.48.48 0 0 1 0 .7l-.71.71a.5.5 0 0 1-.7 0l-8.15-8.15A1.51 1.51 0 0 1 7 12z"></path>
                  </svg>
                </button>
              )}
              <button onClick={hnadleClose}>
                <svg
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  width="1em"
                  height="1em"
                  class="x1lliihq x1k90msu x2h7rmj x1qfuztq x198g3q0 xxk0z11 xvy4d1p"
                >
                  <path d="M18.707 5.293a1 1 0 0 0-1.414 0L12 10.586 6.707 5.293a1 1 0 0 0-1.414 1.414L10.586 12l-5.293 5.293a1 1 0 1 0 1.414 1.414L12 13.414l5.293 5.293a1 1 0 0 0 1.414-1.414L13.414 12l5.293-5.293a1 1 0 0 0 0-1.414z"></path>
                </svg>
              </button>
            </div>
            <div className="modal-body">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InsModal;
