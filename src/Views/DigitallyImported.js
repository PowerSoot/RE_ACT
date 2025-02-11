import React from "react";
import { Video2 } from "./Video2";
import { Video1 } from "./Video1";
import { handleSubmit } from "../controllers/handleSubmit";

export function DigitallyImported() {
  return (
    <div className="container duh">
      <h1 className="d-inline-block">Digitally Imported Events and Music </h1>
      <h2>Party and Event planners</h2>
      <div className="row d-inline-block">
        <div className="col">
          <Video1 />
        </div>
        <div className="col duh">
          <h3>Energize your soul & book with us TODAY! </h3>
          <h2>
            <span className="text-danger bg bg-black fw-bold border border-primary radius ">
              Sign up for your party today! The best DJ's and the hottest
              venues. IF YOU WANT TO PARTY, YOU NEED TO PARTY WITH US!
            </span>
          </h2>
        </div>
      </div>
      <div className="row d-inline-block">
        <div className="col">
          <Video2 />
        </div>
        <img width="100" height="250" src="images\7777.png" />
        <div className="col">
          <form onSubmit={handleSubmit}>
            <label className="output">Name:</label>
            <br />
            <input
              required
              type="text"
              name="name"
              placeholder="Enter your name"
            />
            <br />
            <label>Email:</label>
            <br />
            <input type="email" name="email" placeholder="Enter your email" />
            <br />
            <input type="submit" />
          </form>
          <output id="outputTag"></output>
        </div>
      </div>
    </div>
  );
}
