import React from "react";
import { Video2 } from "./Video2";
import { Video1 } from "./Video1";
import { handleSubmit } from "../controllers/handleSubmit";

export function DigitallyImported() {
  return (
    <>
      <h1>DIGITALLY IMPORTED</h1>
      <div class="container">
        <div class="row">
          <div class="col radius bg bg-black p-3 border border-white">
            <Video1 />
          </div>
          <div class="col radius bg bg-black p-3 border border-white">
            <Video2 />
          </div>
        </div>
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
    </>
  );
}
