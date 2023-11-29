import React from "react";
import Map from "./Map.jsx";

function Form() {
  return (
    <div className="bg-white p-8  shadow-lg shadow-slate-500 rounded-lg min-w-[300px] max-w-[700px] w-[80%] md:flex md:flex-row flex flex-col gap-4">
      <div className="w-full">
        <h1 className="text-2xl  text-center  text-green-500 font-bold mb-4 ">
          Coordinates Converter
        </h1>

        <div className="mb-4 flex flex-col gap-2">
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="latitudeInput"
            >
              Latitude
            </label>
            <input
              defaultValue={0}
              min={-90}
              max={90}
              type="number"
              id="latitudeInput"
              className="border rounded px-3 py-2 w-full"
              placeholder="Enter Latitude Degrees"
            />
          </div>
          <div>
            <input
              readOnly={true}
              type="text"
              id="latitudeDMS"
              className="border rounded px-3 py-2 w-full"
              placeholder="0° 0' 0'' "
              defaultValue={0}
            />
          </div>
        </div>

        <div className="mb-4 flex flex-col gap-2">
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="longitudeInput"
            >
              Longitude
            </label>
            <input
              defaultValue={0}
              min={-180}
              max={180}
              type="number"
              id="longitudeInput"
              className="border rounded px-3 py-2 w-full"
              placeholder="Enter Longitude Degrees"
            />
          </div>
          <div>
            <input
              readOnly={true}
              type="text"
              id="longitudeDMS"
              className="border rounded px-3 py-2 w-full"
              placeholder="0° 0' 0'' "
            />
          </div>
        </div>
        <div className="flex flex-row justify-center items-center gap-4 w-full">
          <div className="w-[40%] flex items-center justify-center">
            <button className=" border-0 bg-green-500  text-white rounded p-2 hover:bg-green-400 whitespace-nowrap w-[95%]  md:text-[min(2vw,12px)] text-[10px]">
              Convert Coords
            </button>
          </div>
          <div className="w-[40%] flex items-center justify-center">
            <button>Save Coords</button>
          </div>
        </div>
      </div>

      <Map />
    </div>
  );
}

export default Form;
