import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
//import { useState } from "react";
import Validation from "./Validation";
import appml_py from "../appml_py.py";
import axios from 'axios';
import Button from '@mui/material/Button';
import { render } from 'react-dom';

function MLpage() {
    const [value, setValue] = useState("");

    useEffect(() => {
        axios.get("http://127.0.0.1:5000").then((response)=>{
            console.log(response)
            setValue(response)
        }).catch(error => {
            console.log(error)
        })
    },[])

/*
    function funA(){
        this.state = {
            display: false
        }
    }

    function funB() {
        this.setState ={
            display: true
        }
    }

    function yada(){
        <div>
            <h3>
                asdfghjkl
            </h3>
        </div>
    }


    function handleClick() {
        console.log('handling click');
        funB();
        {this.state.display && <div>
            <h3>Heeeey</h3>
        </div>
        }
    }
*/
//    const [showML, setShowML] = useState(true)

    return(
    <div className="formcontainer">
        <div className="app-wrapper">
            {
                value?.data?
            <div>
                <h2>
                    What Should I Read Today?
                    <div>{value.data[0]}</div>
                    <div>{value.data[1]}</div>
                    <div>{value.data[2]}</div>
                    <div>{value.data[3]}</div>
                    <div>{value.data[4]}</div>
                </h2>
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