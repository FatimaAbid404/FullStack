import React, { useState } from "react";
import axios from "axios";
import { BACKEND_URI } from "../config/constants";
import Alert from "./Alert";


export default function UploadForm (props) {
  let mystyle = {
    color: props.mode === 'dark' ? 'white' : '#363636',
    backgroundColor: props.mode === 'dark' ? '#363636' : 'white',
  };
  const [name, setName] = useState("");
  const [keywords, setkeywords] = useState("");
  const [categories, setcategories] = useState("");

  const [videos, setVideos] = useState([]);
  // const[alert,setAlert]=useState(null);

  // const showAlert=(message,type)=>{
  //   setAlert({
  //     msg:message,
  //     type:type
  //   })
  //  setTimeout(() =>{
  //   setAlert(null);
  //  },1500);
  // }

  const hadleSubmit = (e) => {
    e.preventDefault();

    let formdata = new FormData();
    for (let key in videos) {
      formdata.append("videos", videos[key]);
    }

    formdata.append("name", name);
    //formdata.append("keywords", keywords);
    formdata.append("categories", categories);

    axios
      .post(`${BACKEND_URI}/api/v1/media/create`, formdata)
      .then((success) => {
        props.getAllMedias();
        alert("Submitted successfully");
      })
      .catch((error) => {
        console.log(error);
        alert("Error happened!");
      });
      // showAlert("Light mode has been enabled","success");
       props.showAlert("video Uploaded","success");
  };

  return (
    <div className="container" style={mystyle}>
      <h1 className="text-center vid-title"> Upload Video </h1>
      <div className="row">
        <div className="col">
          <img src="/upload1.png" alt="Logo" id="upload-img1" height="200" />
        </div>
        <div className="col-8 vid-card-text">
      <form onSubmit={hadleSubmit}>
      {/* <div class="form-floating mb-3">
  <input type="text" class="form-control" id="name" placeholder="abc" onChange={(e) => setName(e.target.value)}/>
  <label htmlFor="name">Name</label>
</div>   */}

        <div className="form-group ">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            className="form-control"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

{/* <div class="form-floating mb-3">
  <input type="text" class="form-control" id="keywords" placeholder="abc" onChange={(e) => setkeywords(e.target.value)}/>
  <label htmlFor="keywords">Keywords</label>
</div>   */}
        {/* <div className="form-group">
          <label htmlFor="keywords">keywords</label>
          <input
            type="text"
            name="keywords"
            id="keywords"
            className="form-control"
            onChange={(e) => setkeywords(e.target.value)}
          />
        </div> */}
        <div className="form-group">
          <label htmlFor="categories">category</label>
          <input
            type="text"
            name="categories"
            id="categories"
            className="form-control"
            onChange={(e) => setcategories(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="videos">Upload Videos</label>
          <input
            type="file"
            name="videos"
            id="videos"
            multiple
            className="form-control"
            accept=".mp4, .mkv"
            onChange={(e) => {
              setVideos(e.target.files);
            }}
          />
        </div>

        <button type="submit" className="btn btn-primary mt-2">
          Submit
        </button>
      </form>
      </div>
      </div>
    </div>
  );
};

// export default UploadForm;
