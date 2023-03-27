import React from "react";

const HeaderMore = ({ close }) => {
  return (
    <>
      <div className="header-more" ref={close}>
        <div className="more-wraper">
          <ul>
            <li>
              <p>Settings</p>
              <svg
                aria-label="Settings"
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
            </li>
            <li>
              <p>Saved</p>
              <svg
                aria-label="Saved"
                class="_ab6-"
                color="rgb(38, 38, 38)"
                fill="rgb(38, 38, 38)"
                height="24"
                role="img"
                viewBox="0 0 24 24"
                width="24"
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
            </li>
            <li>
              <p>Switch appearance</p>
              <svg
                aria-label="Theme icon"
                class="_ab6-"
                color="rgb(38, 38, 38)"
                fill="rgb(38, 38, 38)"
                height="24"
                role="img"
                viewBox="0 0 16 16"
                width="24"
              >
                <path
                  d="M8.05 16C3.61 16 0 12.39 0 7.95 0 3.99 2.83.65 6.72 0c.49-.03.87.22.99.6.11.38-.05.78-.41 1-1.7.93-2.75 2.69-2.75 4.61 0 2.89 2.35 5.25 5.25 5.25a5.25 5.25 0 0 0 4.61-2.74c.19-.37.61-.54 1.01-.4.42.14.66.56.58 1.01A8.044 8.044 0 0 1 8.05 16zM5.8 1.32c-2.78.93-4.73 3.56-4.73 6.63 0 3.85 3.13 6.99 6.99 6.99 3.04 0 5.66-1.93 6.61-4.72a6.301 6.301 0 0 1-4.87 2.31c-3.48 0-6.31-2.83-6.31-6.31-.01-1.93.86-3.71 2.31-4.9zm9.54 7.89s0 .01 0 0c0 .01 0 0 0 0z"
                  fill="currentColor"
                ></path>
              </svg>
            </li>
            <li>
              <p>Your activity</p>
              <svg
                aria-label="Your activity"
                class="_ab6-"
                color="rgb(38, 38, 38)"
                fill="rgb(38, 38, 38)"
                height="24"
                role="img"
                viewBox="0 0 24 24"
                width="24"
              >
                <path
                  d="M12 1.505a10.5 10.5 0 11-7.424 17.924"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                ></path>
                <polyline
                  fill="none"
                  points="8.893 15.108 12 12 12.012 12.012 12.012 5.793"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                ></polyline>
                <circle cx="7.24" cy="2.651" r="1.125"></circle>
                <circle cx="3.515" cy="5.83" r="1.125"></circle>
                <circle cx="1.636" cy="10.353" r="1.125"></circle>
                <circle cx="2.01" cy="15.235" r="1.125"></circle>
              </svg>
            </li>
            <li>
              <p>Report a problem</p>
              <svg
                aria-label="Report a problem"
                class="_ab6-"
                color="rgb(38, 38, 38)"
                fill="rgb(38, 38, 38)"
                height="24"
                role="img"
                viewBox="0 0 24 24"
                width="24"
              >
                <path d="M18.001 1h-12a5.006 5.006 0 0 0-5 5v9.005a5.006 5.006 0 0 0 5 5h2.514l2.789 2.712a1 1 0 0 0 1.394 0l2.787-2.712h2.516a5.006 5.006 0 0 0 5-5V6a5.006 5.006 0 0 0-5-5Zm3 14.005a3.003 3.003 0 0 1-3 3h-2.936a1 1 0 0 0-.79.387l-2.274 2.212-2.276-2.212a1 1 0 0 0-.79-.387H6a3.003 3.003 0 0 1-3-3V6a3.003 3.003 0 0 1 3-3h12a3.003 3.003 0 0 1 3 3Zm-9-1.66a1.229 1.229 0 1 0 1.228 1.228A1.23 1.23 0 0 0 12 13.344Zm0-8.117a1.274 1.274 0 0 0-.933.396 1.108 1.108 0 0 0-.3.838l.347 4.861a.892.892 0 0 0 1.77 0l.348-4.86a1.106 1.106 0 0 0-.3-.838A1.272 1.272 0 0 0 12 5.228Z"></path>
              </svg>
            </li>
            <li>
              <p>Switch accounts</p>
            </li>
            <li>
              <p>Log out</p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default HeaderMore;
