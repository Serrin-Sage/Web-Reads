import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
//import { useState } from "react";
import Validation from "./Validation";
//import appml_py from "../appml_py.py";
import axios from 'axios';
import Button from '@mui/material/Button';
import { render } from 'react-dom';

function MLpage() {
    const [value, setValue] = useState("");

    useEffect(() => {
        axios.get("https://web-reads-ml.herokuapp.com/recommend").then((response)=>{
            console.log(response)
            setValue(response)
        }).catch(error => {
            console.log(error)
        })
    },[])

    return(
    <div className="ml-page">
        <div className="ml-container">
            {
                value?.data?
            <div>
                <h2 className='wsirt-title'>
                    What Should I Read Today?
                    </h2>
                    <div className='ml-item'>{value.data[0]}</div>
                    <div className='ml-item'>{value.data[1]}</div>
                    <div className='ml-item'>{value.data[2]}</div>
                    <div className='ml-item'>{value.data[3]}</div>
                    <div className='ml-item'>{value.data[4]}</div>
                
            </div> :
            <div>
                loading...
            </div>
            }
        </div>
    </div>
    )
}

export default MLpage