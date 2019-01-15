import React, { Component } from "react";

function Designation() {
  return (
    <div class="grid-flex">
      <div class="column w-50">
        <span className="label2">Designation :</span>
        <div className="custom-select">
          <select>
            <option>Mentor</option>
            <option>Mentee</option>
          </select>
        </div>
      </div>
      <div class="column w-50">
        <div className="input">
          <span className="label3">Year :</span>
          <input type="text" id="year" name="year" className="textfield3" />
        </div>
      </div>
    </div>
  );
}
export default Designation;
