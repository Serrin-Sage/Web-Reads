// import React, {useEffect, useState} from 'react';
// import {Link} from 'react-router-dom';
// //import { useState } from "react";
// import Validation from "./Validation";
// //import appml_py from "../appml_py.py";
// import axios from 'axios';
// import Button from '@mui/material/Button';
// import { render } from 'react-dom';

// function MLpage() {
//     const [value, setValue] = useState("");

//     useEffect(() => {
//         axios.get("https://web-reads-ml.herokuapp.com/recommend").then((response)=>{
//             console.log(response)
//             setValue(response)
//         }).catch(error => {
//             console.log(error)
//         })
//     },[])

//     return(
//     <div className="formcontainer">
//         <div className="app-wrapper">
//             {
//                 value?.data?
//             <div>
//                 <h2>
//                     What Should I Read Today?
//                     <div>{value.data[0]}</div>
//                     <div>{value.data[1]}</div>
//                     <div>{value.data[2]}</div>
//                     <div>{value.data[3]}</div>
//                     <div>{value.data[4]}</div>
//                 </h2>
//             </div> :
//             <div>
//                 loading...
//             </div>
//             }
//         </div>
//     </div>
//     )
// }

// export default MLpage