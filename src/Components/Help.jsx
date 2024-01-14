import React from "react";
import "./Help.css";

const Help = () => {
  return (
    <div className="ads-info bg-lime-300">
      <div className="help-ad">
        <p>Retirement strategy</p>
        <div className="mt-2">
          <p className="font-bold text-start">Employee contribution</p>
          <div className="flex flex-row justify-between m-1">
            <input type="range" value={12} min={0} max={15}></input>
            <p>12%</p>
          </div>
          <div className="mt-2">
            <p className="font-bold text-start">Employee contribution</p>
            <div className="flex flex-row justify-between m-1">
              <input type="range" value={60}></input>
              <p>60</p>
            </div>
          </div>
          <hr/>
          <div className="mt-2 space-y-2">
            <div className="flex flex-row justify-between items-center">
              <p className="text-start font-semibold">Employer contribution</p>
              <p className="font-semibold">3.5%</p>
            </div>
            <div className="flex flex-row justify-between items-center">
              <p className="font-semibold">Interest rate</p>
              <p className="font-semibold">8.5%</p>
            </div>
            <div className="flex flex-col justify-center items-center">
            <button className="bg-teal-500 text-amber-800 p-1 font-bold rounded-lg">Updates</button>
            <a className="font-semibold text-indigo-900 ml-3" href="/"> View help docs... </a>
            </div>
          </div>
          
        </div>
      </div>
      <div className="ads">
        <p className="text-sm">Are you looking for a</p>
        <p className="font-bold">Housing Advance ?</p>
        <p className="text-sm font-semibold text-gray-600">Limited Interest</p>
        <a className=" anchor text-sm text-black font-mono" href="/">Read More...</a>
      </div>
    </div>
  );
};

export default Help;
