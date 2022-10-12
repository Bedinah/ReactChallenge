import React from "react";

import "./headings.css";

const Headings = () => {
  return (
    <div className="heading">
      <h1 className="title" onClick={() => window.scroll(0, 0)}>
        <span>t</span>rending <span>m</span>ovies
      </h1>
    </div>
  );
};

export default Headings;
