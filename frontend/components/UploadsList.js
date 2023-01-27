// import React from "react";
// import axios from "axios";
// import { BACKEND_URI } from "../config/constants";
// import {Redirect} from "react-router-dom";
// import { useState } from "react";
// import Display from "./Display";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

// const UploadsList = (props) => {
//   const [isauth,setisauth]=useState(true);
//   const [data, setdata] = useState("");

//   if(!isauth){
//   //  return <Redirect to="/Display" data={data}/>
//    return <Display data={data}/>

//   }
//   function apple(varr){
//     console.log(varr)
//     setdata(varr)
//     // alert("Error happened!");
// }

//   const getVideo=(e,id)=>{
//     axios
//     .get(`${BACKEND_URI}/api/v1/media/all}`+id)
//     .then(res=>res.json()).then(result=>{
//       this.setState({
//         singlevideo:{name:result[0].name,keyword:result[0].id}
//       })

//     })    
//   }
//   let mystyle={
//     color:props.mode==='dark'?'white':'#042743',
//     backgroundColor:props.mode==='dark'?'rgb(36 74 104)':'white',
//     border:'2px solid',
//     borderColor:props.mode==='dark'?'white':'#042743'

//   }
//   return (
    
//     <div className="row">
      

//       <div className="col-md-12">
//         <table className="table" style={mystyle}>
//           <thead>
//             <tr >
//               <th width="200">Name</th>
//               {/* <th width="200">keywords</th> */}
//               <th>Videos</th>
//             </tr>
//           </thead>
//           <tbody>
//             {props.medias &&
//               props.medias.map((media) => {
//                 return (
//                   <tr>
//                     <td>
//                       {/* {media.name} */}
//                     {/* <Route exact path="/Display">
//                     <Display data={data} />
//                   </Route> */}
//                     {/* apple(varr) */}
                    
//                     {/* <Link className="nav-link active" aria-current="page" to={{pathname:"/Display", data: {data} }} state={{ state: {data}}}>{media.name}</Link> */}

//                     <button onClick={()=>{apple(`${media.name}`)
//                      setisauth(false)}} type="button" class="btn btn-primary mx-2">{media.name}</button><br/>
//                     {/* onClick={()=>setisauth(false)} */}
//                     </td>

//                     <td>{media.keywords}</td>
//                     <td>{media.categories}</td>
//                     <td>
//                        {media.videos.map((video) => {
//                         return (
//                           <video
//                             preload="auto"
//                             width="320"
//                             height="240"
//                             controls
//                           >
//                             <source src={`${BACKEND_URI}${video}`} />
//                             ;Your browser does not support the video tag.
//                           </video>
//                         );
//                       })}
//                     </td>
//                   </tr>
//                 );
//               })}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default UploadsList;
import React from "react";
import axios from "axios";
import { BACKEND_URI } from "../config/constants";
import {Redirect} from "react-router-dom";
import { useState } from "react";
import Display from "./Display";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const UploadsList = (props) => {
  const [isauth,setisauth]=useState(true);
  const [data, setdata] = useState("");
  const[showImage,setshowImage]=useState(false);
  const[showkeywords,setshowkeywords]=useState(false);
  
  const handleClick = () => {
    if(showImage==false){
    setshowImage(true);
   // console.log({`images/video1/${media.images}`})
    }
    else if(showImage==true){
      setshowImage(false);
      }
  }
  const handleClickk = () => {
    if(showkeywords==false){
    setshowkeywords(true);
   // console.log({`images/video1/${media.images}`})
    }
    else if(showkeywords==true){
      setshowkeywords(false);
      }
  }

  if(!isauth){
  //  return <Redirect to="/Display" data={data}/>
   return <Display data={data}/>

  }
  function apple(varr){
    console.log(varr)
    setdata(varr)
    // alert("Error happened!");
}
const show=()=>{
  console.log("hel")
  
 
}

  const getVideo=(e,id)=>{
    axios
    .get(`${BACKEND_URI}/api/v1/media/all}`+id)
    .then(res=>res.json()).then(result=>{
      this.setState({
        singlevideo:{name:result[0].name,keyword:result[0].id}
      })

    })    
  }
  let mystyle={
    color:props.mode==='dark'?'white':'#042743',
    backgroundColor:props.mode==='dark'?'rgb(36 74 104)':'white',
    border:'2px solid',
    borderColor:props.mode==='dark'?'white':'#042743'

  }
  return (
    <>
     <button style={{ marginRight: '10px' }} onClick={handleClick} type="button" class="btn btn-primary">Show Images</button>
     <button style={{ marginRight: '10px' }} onClick={handleClickk} class="btn btn-primary">show keywords</button>
  
    
    <div className="row">
      
     
      <div className="col-md-12">
        <table className="table" style={mystyle}>
          <thead>
            <tr >
              <th width="200">Name</th>
              {/* <th width="200">keywords</th> */}
              {/* <th width="200">Categories</th> */}

              <th>Videos</th>
            </tr>
          </thead>
          <tbody>
            {props.medias &&
              props.medias.map((media) => {
                return (
                  <tr>
                    <td>
                      {/* {media.name} */}
                    {/* <Route exact path="/Display">
                    <Display data={data} />
                  </Route> */}
                    {/* apple(varr) */}
                    
                    {/* <Link className="nav-link active" aria-current="page" to={{pathname:"/Display", data: {data} }} state={{ state: {data}}}>{media.name}</Link> */}

                    <button onClick={()=>{apple(`${media.name}`)
                     setisauth(false)}} type="button" class="btn btn-primary mx-2">{media.name}</button><br/>
                    {/* onClick={()=>setisauth(false)} */}
                    </td>
                    {/* {showImage ? <img src={`images/video1/${media.images}`} alt="my image" /> : null} */}
                    {media.images.map((image) => (
                      // <td>{image}</td>
                      
                      showImage ?<img src={image} height={200} width={200} alt="Image"/>: null
                      ))}
                    {/* <button onClick={handleClick} class="btn btn-primary">Primary</button> */}

                    {
                      // <td>{image}</td>
                      
                      showkeywords ?<td>{media.keywords}</td>: null
                      }
                    
                    
                  {/* {showImage ? <img src="images/video1/frame0.jpg" alt="my image" /> : null} */}


                      {/* <td>{`images/video1/${media.images}`}</td> */}
                      {/* <td>{media.images}</td> */}
                     
                      {/* <img src={Flower} height={200} width={200} /><br /> */}
                      {/* <button onClick={show} type="button" class="btn btn-outline-primary">Primary</button>
                      <img src="images/video1/frame0.jpg" height={200} width={200} /> 
                       */}
          {/* <td>{media.keywords}</td>  */}

         {/* <td>{media.categories}</td>  */}
                    <td>
                    
                       {media.videos.map((video) => {
                        return (<>
                           {/* <td>{`${BACKEND_URI}${video}`}</td> */}
                          <video
                            preload="auto"
                            width="320"
                            height="240"
                            controls
                          >
                            <source src={`${BACKEND_URI}${video}`}/>
                            ;Your browser does not support the video tag.
                          </video>
                          </>
                        );
                      })}
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
    </>
  );
};

export default UploadsList;