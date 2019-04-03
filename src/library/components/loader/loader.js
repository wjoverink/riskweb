import React from "react";
import "./loader.css";

function Loader() {
  return (
    <div class="loader">
      <div class="text">Loading</div>
      <div class="dots">
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
}

export default React.memo(Loader);
