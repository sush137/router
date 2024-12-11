import React from "react";
import Girls from "../src/assets/phone.png"

export default function Test() {
  return (
    <div>
    <div className="md:hidden grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
        <div className="bg-yellow-600 p-2 w-full">1</div>
        <div className="bg-yellow-600 p-2 w-full">2</div>
        <div className="bg-yellow-600 p-2 w-full">3</div>
        <div className="bg-yellow-600 p-2 w-full">4</div>
    </div>
    <div className="flex flex-col md-flex-row w-full gap">
        <div className="bg-red-300 w-full text-center">
            <p>1</p>
            <span>moodbidri</span>
            <img src={Girls} alt="phone"/>
        </div>
        <div className="bg-yellow-500 w-full">2</div>
    </div>
    </div> 
  );
  }
 