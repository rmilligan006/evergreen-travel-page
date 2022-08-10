import React from "react";

import River from "../assets/River.mp4";

const Head = () => {
  return (
    <>
      <div
        name="home"
        className="w-full h-screen text-white relative flex items-center justify-center"
      >
        <video
          controls
          autoPlay
          loop
          muted
          id="video"
          className="h-full w-full object-cover -z-0"
        >
          <source src={River} type="video/mp4" />
        </video>
        <div className="absolute w-full h-full top-0 left-0 bg-black/50"></div>
        <div className="absolute top-0 h-full flex justify-center flex-col text-center w-full m-auto p-4">
          <h1 className="text-5xl tracking-wide font-bold">
            Explore the Canadian nature
          </h1>
          <h2 className="text-2xl tracking-wider pt-5 font-semibold">
            Experience Canada like you've never experienced before
          </h2>
        </div>
      </div>
    </>
  );
};

export default Head;
