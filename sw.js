import React from "react";
import { createRoot } from "react-dom/client";
import VantagePlanner from "./app.jsx";

// Ask the browser to treat this origin's storage as persistent (best effort).
try {
  if (navigator.storage && navigator.storage.persist) navigator.storage.persist();
} catch (e) { /* non-fatal */ }

createRoot(document.getElementById("root")).render(<VantagePlanner />);
