import React from "react";
import "./loader.css";

function Loader() {
  return (
    <div className="loader">
      <div className="text">Loading</div>
      <div className="dots">
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
}

export default React.memo(Loader);
