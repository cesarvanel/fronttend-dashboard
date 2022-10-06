import "./scss/styles.scss";
import { Fragment } from "react";
import Sidebar from "./components/sidebar/sidebar";
//import Navbar from "./components/navbar/navbar";
import DashBaord from "./components/dashbaord/dashbaord";

import "./App.css";

function App() {

  return (
    <Fragment>
      <div className="app">
        <Sidebar />
        <DashBaord/>
      </div>

      <div className="shape__1"></div>
      <div className="shape__2"></div>
      <div className="shape__3"></div>
      <div className="shape__4"></div>
    </Fragment>
  );
}

export default App;
