import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div style={{ textAlign: "center", margin: "0 auto" }}>
      <img
        src="https://i.postimg.cc/XqV3486g/err.png"
        alt="not found"
        style={{ maxWidth: "100vw" }}
      />

<br />

      <Link to="/">
        <span
          style={{
            backgroundColor: "#2B447E",
            color: "#fff",
            // textAlign: "center",
            marginRight: "0 auto",
            padding: "1rem",
            borderRadius: "5px",
          }}
        >
          Go to HomePage
        </span>
      </Link>
    </div>
  );
};

export default NotFound;
