import React from "react";
import Lottie from "react-lottie";
import AnimationData from "./Loader.json";
const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: AnimationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

function Loader() {
  return (
    <center>
      <Lottie options={defaultOptions} />
    </center>
  );
}

export default Loader;
