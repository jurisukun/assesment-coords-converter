import React from "react";

function Map() {
  return (
    <div className="bg-white p-4   shadow-sm shadow-slate-500 gap-4 rounded-lg w-full xl:max-w-[300px] ">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d451891.1108741885!2d-82.90095463001057!3d27.76666814852018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c31f1d2a58a99d%3A0x305de1e1b5f9776d!2sTampa%20Bay!5e0!3m2!1sen!2sph!4v1701239405317!5m2!1sen!2sph"
        width="100%"
        height="100%"
        allowfullscreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
}

export default Map;
