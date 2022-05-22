import React, { useState, useEffect } from "react";
import SurveySearchBar from "./SurveySearchBar";
// import BookData from "../TestData.json";
import axios from "axios";

function Survey() {
    const [ans1, setAns1] = useState("");
    const [ans2, setAns2] = useState("");
    const [ans3, setAns3] = useState("");
    const [ans4, setAns4] = useState("");
    const [ans5, setAns5] = useState("");

    const [Ubook, UbooksetValue] = useState("");
    const [BookData, setBookData] = useState("");
    const yellow = Ubook.data;
    const user = JSON.parse(localStorage.getItem('userInfo'));

    useEffect(()=>{
        axios.get('http://localhost:5000/api/users/allusers/')
            .then((response)=>{
                console.log(response)
                UbooksetValue(response)
        }).catch(error => {
            console.log(error)
        })
        axios.get('http://localhost:5000/api/books/allbooks')
            .then((response)=>{
                console.log(response)
                setBookData(response)
        }).catch(error => {
            console.log(error)
        })

    },[]);

    // console.log(yellow);
    // console.log('whooo',user);
    var be;
    var i;
    const userId = user._id;
    
    function funcheck(){
    for (i = 0; i < yellow.length; i++){
        if(yellow[i]._id==user._id){
            be = i;
        }
    }};

    const handleSurveySubmit = async (e) => {
        e.preventDefault();
        
        funcheck()

        console.log("USER:")
        console.log(yellow[be])
        console.log("USER ID:")
        console.log(userId)
        console.log("USER LIKED BOOKS:")
        console.log(yellow[be].likedBooks)
        // yellow[be].likedBooks.push(ans1, ans2, ans3, ans4, ans5)
        if (!yellow[be].likedBooks.includes(ans1)){
            yellow[be].likedBooks.push(ans1)
        }
        if (!yellow[be].likedBooks.includes(ans2)){
            yellow[be].likedBooks.push(ans2)
        }
        if (!yellow[be].likedBooks.includes(ans3)){
            yellow[be].likedBooks.push(ans3)
        }
        if (!yellow[be].likedBooks.includes(ans4)){
            yellow[be].likedBooks.push(ans4)
        }
        if (!yellow[be].likedBooks.includes(ans5)){
            yellow[be].likedBooks.push(ans5)
        }
        console.log("USER UPDATED LIKED BOOKS:")
        console.log(yellow[be].likedBooks)
        
        axios.patch(`http://localhost:5000/api/users/${userId}`, {
            likedBooks: yellow[be].likedBooks
        }).then((response) => console.log(response));

        window.location.href = "/userpage";
    };

    return (
        <div className="survey">
            <div className="survery-wrapper">
                <div className="survey-intro">
                    <h2>Welcome to Web Reads!</h2>
                    <h3>Please let us know more about you:</h3>
                </div>

                <form onSubmit={""}>
                    <div className="card">
                        <label>
                            <h3>Please select a book:</h3>
                        </label>
                        <SurveySearchBar
                            placeholder="Enter a Book Title..."
                            data={BookData}
                            setAns={setAns1}
                        />
                    </div>
                    <div className="card">
                        <label>
                            <h3>Please select a book:</h3>
                        </label>
                        <SurveySearchBar
                            placeholder="Enter a Book Title..."
                            data={BookData}
                            setAns={setAns2}
                        />
                    </div>
                    <div className="card">
                        <label>
                            <h3>Please select a book:</h3>
                        </label>
                        <SurveySearchBar
                            placeholder="Enter a Book Title..."
                            data={BookData}
                            setAns={setAns3}
                        />
                    </div>
                    <div className="card">
                        <label>
                            <h3>Please select a book:</h3>
                        </label>
                        <SurveySearchBar
                            placeholder="Enter a Book Title..."
                            data={BookData}
                            setAns={setAns4}
                        />
                    </div>
                    <div className="card">
                        <label>
                            <h3>Please select a book:</h3>
                        </label>
                        <SurveySearchBar
                            placeholder="Enter a Book Title..."
                            data={BookData}
                            setAns={setAns5}
                        />
                    </div>
                    <div>
                        <button
                            className="survey-submit"
                            onClick={handleSurveySubmit}
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Survey;
