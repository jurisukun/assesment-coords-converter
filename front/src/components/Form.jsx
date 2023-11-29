import React from "react";
import Map from "./Map.jsx";

import { useState, useRef } from "react";
import axios from "axios";

function Form() {
  const latitudeRef = useRef(0);
  const longitudeRef = useRef(0);
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [convertedLatitude, setConvertedLatitude] = useState(null);
  const [convertedLongitude, setConvertedLongitude] = useState(null);
  const [savedCoords, showSavedCoords] = useState(false);

  function computeDMS(decimaldegree) {
    let original = decimaldegree;
    let Degrees;
    let Minutes;
    let Seconds;

    if (decimaldegree < 0) {
      decimaldegree *= -1;
    }
    Degrees = Math.floor(decimaldegree);
    Minutes = Math.floor((decimaldegree - Degrees) * 60);
    Seconds = (decimaldegree - Degrees - Minutes / 60) * 3600;

    if (original < 0) {
      Degrees *= -1;
    }

    return [Degrees, Minutes, Seconds];
  }

  function convert() {
    let latitude = latitudeRef.current.value;
    let longitude = longitudeRef.current.value;
    if (
      !latitude ||
      !longitude ||
      latitude > 90 ||
      longitude > 180 ||
      latitude < -90 ||
      longitude < -180
    )
      return alert("Invalid coordinate values");

    latitude = Number(latitude);
    longitude = Number(longitude);

    const [latitudeDegrees, latitudeMinutes, latitudeSeconds] =
      computeDMS(latitude);
    const [longitudeDegrees, longitudeMinutes, longitudeSeconds] =
      computeDMS(longitude);

    setConvertedLatitude(
      `${latitudeDegrees}° ${latitudeMinutes}' ${latitudeSeconds}'' `
    );
    setConvertedLongitude(
      `${longitudeDegrees}° ${longitudeMinutes}' ${longitudeSeconds}'' `
    );
    showSavedCoords(true);
  }

  function save() {
    axios
      .post("http://localhost:3010/api/savecoords", { latitude, longitude })
      .then((res) => {
        if (res.status === 200) alert("Coordinates saved successfully");
      })
      .catch((err) => {
        alert("Error saving coordinates");
      });
  }
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
              ref={latitudeRef}
              onChange={(e) => {
                setLatitude(Number(e.target.value));
              }}
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
              defaultValue={convertedLatitude}
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
              ref={longitudeRef}
              onChange={(e) => {
                setLongitude(Number(e.target.value));
              }}
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
              defaultValue={convertedLongitude}
            />
          </div>
        </div>
        <div className="flex flex-row justify-center items-center gap-4 w-full">
          <div className="w-[40%] flex items-center justify-center">
            <button
              onClick={convert}
              className=" border-0 bg-green-500  text-white rounded p-2 hover:bg-green-400 whitespace-nowrap w-[95%]  md:text-[min(2vw,12px)] text-[10px]"
            >
              Convert Coords
            </button>
          </div>
          <div className="w-[40%] flex items-center justify-center">
            <button
              disabled={!savedCoords}
              onClick={save}
              className={`border-0  text-white p-2 rounded hover:bg-blue-400 whitespace-nowrap  w-[95%] max-w-[150px] md:text-[min(2vw,12px)]  text-[10px] ${
                savedCoords ? "bg-blue-500" : "bg-blue-400"
              }`}
            >
              Save Coords
            </button>
          </div>
        </div>
      </div>

      <Map />
    </div>
  );
}

export default Form;
