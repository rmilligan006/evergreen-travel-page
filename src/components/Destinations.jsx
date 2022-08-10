import React from "react";
import montTremblant from "../assets/montTremblant.png";
import capeBreton from "../assets/capebreton.png";
import lakelouise from "../assets/lakelouise.png";
import spiritIsland from "../assets/spiritIsland.png";
import newfoundland from "../assets/newfoundland.png";
import westcoast from "../assets/westcoast.png";

const Destinations = () => {
  return (
    <>
      <div name="destinations" className="w-full text-center p-16">
        <div className="flex justify-center items-center">
          <div className="w-[90%]">
            <h1 className="p-4 text-5xl">
              Trips for the Adventurous family, or the rugged{" "}
            </h1>
            <p className="p-4 text-xl">All over the Canadian wilderness</p>
          </div>
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-8 text-center py-8 pb-2 scroll-smooth">
          <img src={montTremblant} alt="/" className="rounded-lg p-2" />
          <img src={capeBreton} alt="/" className="rounded-lg p-2" />
          <img src={lakelouise} alt="/" className="rounded-lg p-2" />
          <img src={spiritIsland} alt="/" className="rounded-lg p-2" />
          <img src={newfoundland} alt="/" className="rounded-lg p-2" />
          <img src={westcoast} alt="/" className="rounded-lg p-2" />
        </div>
      </div>
    </>
  );
};

export default Destinations;
