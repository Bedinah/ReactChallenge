import React from "react";

import "./headings.css";

const Headings = () => {
  return (
    <div class="fixed-top">
      <div className="heading">
        <h2 className="title" onClick={() => window.scroll(0, 0)}>
          <span>t</span>rending <span>m</span>ovies
        </h2>
      </div>
    </div>
  );
};

export default Headings;
