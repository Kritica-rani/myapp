import React, { useEffect } from "react";

const ToggleComp = () => {
  useEffect(() => {
    window.addEventListener("mouseover", logMouseEvent);

    return () => {
      window.removeEventListener("mouseover", logMouseEvent);
    };
  });
  //   []-->component did mount

  function logMouseEvent(e) {
    console.log("mouse event", e.clientX);
  }
  //1. component did mount--> the first time component did mount
  //2. component did update --> the component updates
  //3. compnent did unmount --> return
  return (
    <div>
      <h1>ToggleComp</h1>
      it is true and we are seeing it
    </div>
  );
};

export default ToggleComp;
