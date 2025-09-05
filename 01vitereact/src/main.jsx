import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

function MyApp() {
  return (
    <div>
      <h1>Custom App Check</h1>
    </div>
  );
}

const newElement = (
  <a href="https://google.com" target="_blank">
    Go to Google
  </a>
);

// react jo hamare funtion likhe hote h jese upr MyApp vala h unko is format me convert krta h... ye vala to a tag k liye h
const name = "samee"; // variable bhi inject kr skte h
const anotherElement = React.createElement(
  "a",
  { href: "https://google.com", target: "_blank" },
  "Go to Google",
  name
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <>
      {/* {newElement} */}
      {anotherElement}
      <App />
      <MyApp />
    </>
  </StrictMode>
);
