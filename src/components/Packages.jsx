import React from "react";
import gold from "../assets/gold.png";

const Packages = () => {
  return (
    <>
      <div name="packages" className="w-full p-12">
        <div className="">
          <div className="">
            <h2 className="text-2xl font-semibold text-center">
              LUXURY INCLUDED VACATIONS FOR ALL!
            </h2>
            <p className="text-md pb-5 text-center">
              Cauliflower cheese gouda pecorino. Macaroni cheese mascarpone
              babybel pecorino goat danish fontina cheese on toast goat. Swiss
              everyone loves goat macaroni cheese cheddar croque monsieur red
              leicester cheesy feet. Cheese and biscuits squirty cheese fromage
              frais.
            </p>
            <div className="flex flex-col justify-center items-center">
              <div className="w-[50%] m-2 border-2 border-gray-700 text-center bg-white p-5">
                <h4 className="text-xl font-bold text-blue-800">
                  GET AN ADDITIONAL 10% OFF
                </h4>
                <p>12 HOURS LEFT</p>
                <p>VIEW ALL CONTENT OFFERS</p>
              </div>
              <form>
                <div className="flex flex-col m-2 bg-white text-xl font-mono p-2 ">
                  <label>DESTINATIONS: </label>
                  <select>
                    <option value="1">BANFF</option>
                    <option value="2">JASPER</option>
                    <option value="3">NORTHERN ONTARIO</option>
                    <option value="4">QUEBEC</option>
                    <option value="5">NEWFOUNDLAND</option>
                    <option value="6">MARITIMES</option>
                  </select>
                </div>
                <div className="flex">
                  <div className="flex flex-col m-2">
                    <label>Check-in</label>
                    <input type="date" />
                  </div>
                  <div className="flex flex-col m-2">
                    <label>Check-Out</label>
                    <input type="date" />
                  </div>
                </div>
                <button className="m-2 bg-blue-600 rounded-xl flex p-5 text-center text-white">
                  Rates & Availabilities
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Packages;
