import React from "react";
import { Video2 } from "./Video2";
import { Video1 } from "./Video1";
import { handleSubmit } from "../controllers/handleSubmit";

export function DigitallyImported() {
  return (
    <>
      <div className="container">
        <h1>We are INSOMNIAC partnered with DIGITALLY IMPORTED</h1>
        <h2>We CREATE the best PARTIES</h2>
        <p>
          It takes a fusion of electrifying stages, mesmerizing sound, dazzling
          pyrotechnics, and captivating performers to bring an Insomniac event
          to life. But the true heartbeat of the experience is you - our
          Headliners, the vibrant, passionate individuals who bring the energy,
          the excitement, and the unforgettable moments that make it all happen.
        </p>
        <h3>Book your party today!</h3>
        <div className="row">
          <div className="col">
            <Video1 />
          </div>
          <div className="col">
            <h2>
              Driven by the power of self-expression and the urge to explore, we
              embrace the challenge of building connections and fostering
              something greater than ourselves. We are committed to creating
              spaces that are safe, inspiring, and fueled by a relentless spirit
              of positivity.
              <span className="text-danger">Sign up for your party today!</span>
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Video2 />
          </div>
          <div className="col">
            <form onSubmit={handleSubmit}>
              <label>Name:</label>
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
    </>
  );
}
