import PropTypes from "prop-types";
import React from "react";
import Spinner from "react-bootstrap/Spinner";

function MiniLoader({ className }) {
  return (
    <div
      className={className}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <Spinner animation="grow" variant="success" />
    </div>
  );
}

MiniLoader.propTypes = {
  className: PropTypes.string
};

MiniLoader.defaultProps = {
  className: undefined
};

export default React.memo(MiniLoader);
