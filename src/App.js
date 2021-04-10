import React from "react";
import { BrowserRouter } from "react-router-dom";

import useRoutes from "./routes";

import Header from "./components/Header";

import "./App.css";

function App() {
  const route = useRoutes();
  return (
    <div className="App">
      
      <BrowserRouter>
      <Header />
        {route}
      </BrowserRouter>
    </div>
  );
}

export default App;
