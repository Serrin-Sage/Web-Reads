import React, { useState, useEffect } from "react";
import SurveySearchBar from "./SurveySearchBar";
import BookData from "../TestData.json";
import axios from "axios";

function Survey() {
    const [ans1, setAns1] = useState("");
    const [ans2, setAns2] = useState("");
    const [ans3, setAns3] = useState("");
    const [ans4, setAns4] = useState("");
    const [ans5, setAns5] = useState("");

    const [Ubook, UbooksetValue] = useState("");
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
        yellow[be].likedBooks.push(ans1, ans2, ans3, ans4, ans5)
        console.log("USER UPDATED LIKED BOOKS:")
        console.log(yellow[be].likedBooks)
        
        axios.patch(`http://localhost:5000/api/users/${userId}`, {
            likedBooks: yellow[be].likedBooks
        }).then((response) => console.log(response));

        // axios.get('http://localhost:5000/api/loggedIn')
        // .then((response) => {
        //     const user = response.data;
        //     console.log("user info:")
        //     console.log(user)
        // })
        // .catch(error => console.error(`Error: ${error}`));

        // update request
        // try {
        //     const { data } = await axios.post(
        //         "/api/users/signup",
        //         {
        //             name,
        //             email,
        //             password,
        //         },
        //         config
        //     );
        //     console.log(data);
        //     localStorage.setItem("userInfo", JSON.stringify(data));
        // } catch (error) {
        //     setErrors(error.response.data.message);
        // }

        // window.location.href = "/userpage";
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
