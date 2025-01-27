import { createRoot } from "react-dom/client";
import React from "react";
import { DigitallyImported } from "./Views/DigitallyImported";

const message = "DIGITALLY IMPORTED!";
const root = createRoot(window.bodyTag);
root.render(
  <main>
    <DigitallyImported />
  </main>
);
