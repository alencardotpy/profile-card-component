import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./Card";
import reportWebVitals from "./reportWebVitals";
import { sendToVercelAnalytics } from "./vitals";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<App />);

reportWebVitals(sendToVercelAnalytics);
