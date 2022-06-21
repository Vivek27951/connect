import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

function details() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="grid grid-cols-2">
        <div className="flex flex-col items-center justify-center">
          <div className="px-5 mr-auto text-2xl text-white bg-black">
            <Link to={"/category/Vehicles"}>{"<"} Back</Link>
          </div>
          <img
            src={
              "https://stimg.cardekho.com/images/carexteriorimages/930x620/Hyundai/Hyundai-i10/2691/front-left-side-47.jpg"
            }
          />
          <div className="px-5 py-3 bg-green-500 border-2 border-green-700 rounded-lg hover:bg-green-600">
            Add to Cart <span>&#8377;</span>1900 / day
          </div>
        </div>
        <div className="flex flex-col items-center justify-center py-10">
          <h1 className="text-4xl font-bold text-sky-900">
            Maruti Suzuki Xl6 (2019)
          </h1>
          <h2 className="text-xl font-semibold text-sky-700">
            {" "}
            PETROL | 44067.0 KM | MANUAL
          </h2>
          <p className="my-10 text-lg font-medium text-sky-500">
            Cruise Control, Display Touch Screen, Music System, Seat Covers, Car
            Mats, Tubeless Tyres, Power Windows, Power Steering, ABS, Cluster
            Panel, Sun visors, Steering Mounted audio Control, Defogger,
            Airbags, Keyless entry/Push Start, Alloy Wheels, Automatic Climate
            Control, Height Adjustable Seats, Parking Sensor
          </p>
          <p className="p-6 text-base bg-black rounded-md shadow-2xl border-1 shadow-black border-slate-600 text-sky-400">
            <span className="text-lg font-semibold text-green-500">
              ADDITIONAL VEHICLE INFORMATION:
            </span>
            <br /> ABS: Yes
            <br /> Accidental: No
            <br /> Adjustable External Mirror: Power
            <br /> Adjustable Steering: Yes
            <br /> Air Conditioning: Automatic Climate Control
            <br /> Number of Airbags: 2 airbags
            <br /> Alloy Wheels: Yes
            <br /> Anti Theft Device: Yes
            <br /> Aux Compatibility: Yes
            <br /> Battery Condition: New
            <br /> Bluetooth: Yes
            <br /> Vehicle Certified: Yes
          </p>
        </div>
      </div>
    </div>
  );
}

export default details;
