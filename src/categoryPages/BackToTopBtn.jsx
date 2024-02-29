import React, { useState, useEffect } from "react";
import { TiArrowSortedUp } from "react-icons/ti";

function ScrollUp() {
  const [showButton, setShowButton] = useState(false);
  const onScroll = () => {
    window.scrollY > 500 ? setShowButton(true) : setShowButton(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  });

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="scroll-up">
      <TiArrowSortedUp
        className={showButton ? "showButton" : "hidden"}
        onClick={scrollToTop}
      />
    </div>
  );
}

export default ScrollUp;
