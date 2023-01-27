import React, { useState, useEffect } from "react";
import axios from "axios";
import UploadForm from "./UploadForm";
import UploadsList from "./UploadsList";
import { BACKEND_URI } from "../config/constants";
import { useParams } from "react-router-dom";


export default function Display(props) {
    
    let mystyle = {
        color: props.mode === 'dark' ? 'white' : '#042743',
        backgroundColor: props.mode === 'dark' ? 'rgb(36 74 104)' : 'white',
        border: '2px solid',
        borderColor: props.mode === 'dark' ? 'white' : '#042743'

    }
    const [query, setQuery] = useState("");
    const [medias, setMedias] = useState([]);
    const [alert, setAlert] = useState(null);
    //const data=useParams();
   const [data, setdata] = useState("");

    const showAlert = (message, type) => {
        setAlert({
            msg: message,
            type: type
        })
        setTimeout(() => {
            setAlert(null);
        }, 1500);
    }
    useEffect(() => {
        getoneMedias();
    }, [data]);
    // function apple(varr){
    //     console.log(varr)
    //     setdata(varr)
    //     // alert("Error happened!");
    // }
    const getoneMedias = () => {
        axios
            .get(`${BACKEND_URI}/api/v1/media/display?q=${props.data}`)
            .then((result) => {
                setMedias(result.data);
            })
            .catch((error) => {
                setMedias([]);
                console.log(error);
                alert("Error happened!");
            });
    };
    return (

         <>
       {/* <table class="table">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Videos</th>
          </tr>
        </thead>
        <tbody> 
            {medias &&
              medias.map((media) => {
                return (
                  <tr>
                    <td>{media.name}
                    
                    </td>
                    <td>
                       {media.videos.map((video) => {
                        return (
                          <video
                            preload="auto"
                            width="320"
                            height="240"
                            controls
                          >
                            <source src={`${BACKEND_URI}${video}`} />
                            ;Your browser does not support the video tag.
                          </video>
                        );
                      })}
                    </td>
                  </tr>
                );
              })}
          </tbody>
          </table> */}

      <div className="col-md-12">
        <table className="table" style={mystyle}>
          <thead>
            <tr >
              <th width="200">Name</th>
              <th>Videos</th>
            </tr>
          </thead>
          <tbody>
            {medias &&
              medias.map((media) => {
                return (
                  <tr>
                    <td>{media.name}
                    {/* <button onClick={()=>apple(`${media.name}`)} type="button" className="btn btn-outline-dark">{media.name}</button> */}
                    {/* {()=>setisauth(false)} */}
                    {/* onClick={()=>apple(`${media.name}`)} */}
                    </td>
                    <td>
                       {media.videos.map((video) => {
                        return (
                          <video
                            preload="auto"
                            width="320"
                            height="240"
                            controls
                          >
                            <source src={`${BACKEND_URI}${video}`} />
                            ;Your browser does not support the video tag.
                          </video>
                        );
                      })}
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
    )
}
