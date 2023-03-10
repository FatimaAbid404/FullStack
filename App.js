import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Alert from "./components/Alert";
import Video from "./components/Video";
import Search from "./components/Search";
import Display from "./components/Display";
import Practice from "./components/Practice";
import Home from "./components/Home";
import UploadForm from "./components/UploadForm";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import axios from "axios";
import { BACKEND_URI } from "./config/constants";

const App = () => {
  const [medias, setMedias] = useState([]);
  const [query, setQuery] = useState("");
  const [mode, setmode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  // useEffect(() => {
  //   getAllMedias();
  // }, [query]);

  const getAllMedias = () => {
    axios
      .get(`${BACKEND_URI}/api/v1/media/all?q=${query}`)
      .then((result) => {
        setMedias(result.data);
      })
      .catch((error) => {
        setMedias([]);
        console.log(error);
        alert("Error happened!");
      });
  };

  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#363636";
      showAlert("Dark mode has been enabled", "success");
      document.title = "Video-App Dark-Mode";
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "Video-App Light-Mode";
    }
  };

  return (
    <>
      <Router>
        <Navbar title="Video-App"  about="About" home="Home" search="Search" display="Display" practice="Practice" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Switch>

            <Route exact path="/About">
              <About mode={mode} />
            </Route>

            <Route exact path="/Search">
              <Search mode={mode} />
            </Route>

            <Route exact path="/upload">
              <UploadForm
                mode={mode}
                showAlert={showAlert}
                getAllMedias={getAllMedias}
              />
            </Route>

            <Route exact path="/videos">
              <Video mode={mode} showAlert={showAlert} />
            </Route>

            <Route exact path="/">
              <Home mode={mode} />
            </Route>

          </Switch>
        </div>
      </Router>

      {/* <Router>
        <Navbar title="Video-app" about="About" home="Home" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Switch>

            <Route exact path="/About">
              <About mode={mode} />
            </Route>

            <Route exact path="/">
              <Video mode={mode} showAlert={showAlert} />
            </Route>
          </Switch>
        </div>

      </Router> */}
      {/* <Navbar  title="Video-app" about="About" home="Home" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/> */}
      {/* <About mode={mode}/> */}
      {/* <Video mode={mode} showAlert={showAlert}/> */}


      {/* <Display></Display> */}
      {/* <input
          className="search"
          placeholder="Search..."
          onChange={(e) => setQuery(e.target.value.toLowerCase())}
        />
      <div className="row">
        <div className="col-md-6">
          <div
            className="card"
            style={{
              height: "auto",
              width: "800px",
              margin: "40px",
              border: "1px solid black",
            }}
          >
            <div className="card-body">
              <UploadForm getAllMedias={getAllMedias} />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div
            className="card"
            style={{
              height: "auto",
              width: "800px",
              margin: "40px",
              border: "1px solid black",
            }}
          >
            <div className="card-body">
              <UploadsList medias={medias} />
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default App;
