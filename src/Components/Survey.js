import React, { useState } from 'react'
import SurveySearchBar from './SurveySearchBar';
import BookData from '../TestData.json'

function Survey() {

    const [ans1, setAns1] = useState("");
    const [ans2, setAns2] = useState("");
    const [ans3, setAns3] = useState("");
    const [ans4, setAns4] = useState("");
    const [ans5, setAns5] = useState("");

    const handleSurveySubmit = async (e) => {
        e.preventDefault();
        window.location.href = '/userpage';
    }

    const changeAns1 = (value) => {
        setAns1(value)
    }

    return (
        <div className='survey'>
            <div className='survery-wrapper'>
                <div className='survey-intro'>
                    <h2>Welcome to Web Reads!</h2>
                    <h3>Please let us know more about you:</h3>
                </div>

                <form onSubmit={""}>
                    <div className='card'>
                        <label><h3>Please select a book:</h3></label>
                        <SurveySearchBar placeholder="Enter a Book Title..." data={BookData} setAns={setAns1}/>
                    </div>
                    <div className='card'>
                        <label><h3>Please select a book:</h3></label>
                        <SurveySearchBar placeholder="Enter a Book Title..." data={BookData} setAns={setAns2}/>
                    </div>
                    <div className='card'>
                        <label><h3>Please select a book:</h3></label>
                        <SurveySearchBar placeholder="Enter a Book Title..." data={BookData} setAns={setAns3}/>
                    </div>
                    <div className='card'>
                        <label><h3>Please select a book:</h3></label>
                        <SurveySearchBar placeholder="Enter a Book Title..." data={BookData} setAns={setAns4}/>
                    </div>
                    <div className='card'>
                        <label><h3>Please select a book:</h3></label>
                        <SurveySearchBar placeholder="Enter a Book Title..." data={BookData} setAns={setAns5}/>
                    </div>
                    <div>
                        <button className="survey-submit" onClick={handleSurveySubmit}>Submit</button>
                    </div>

                </form>
            </div>
            


        </div>
    )
}

export default Survey