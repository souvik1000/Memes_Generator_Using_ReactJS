// import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import ShowingTameplate from "./components/ShowingTameplate";
import CreateMemes from "./components/CreateMemes";
import ShowingMemes from "./components/ShowingMemes";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    {/* <App /> */}
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/showingtameplate" element={<ShowingTameplate />} />
      <Route path="/creatememes" element={<CreateMemes />} />
      <Route path="/showingmemes/:url" element={<ShowingMemes />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);
