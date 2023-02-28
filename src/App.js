import "./App.css";
import { useContext } from "react";
import { Routes, BrowserRouter } from "react-router-dom";

import { RoutingContext } from "./RoutingProvider";

function App() {
  const { routes } = useContext(RoutingContext);

  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <p>Please wait!</p>
          <Routes>{routes}</Routes>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
