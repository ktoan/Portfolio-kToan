import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";
const Intro = () => {
  const text = useRef();
  useEffect(() => {
    init(text.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Developer", "Content Creator", "Freelancer"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/man.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi, you guys! I'm</h2>
          <h1>kToan Nguyen</h1>
          <h3>
            Noob <span ref={text}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
};

export default Intro;
