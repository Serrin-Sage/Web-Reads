import React, { useState } from 'react'

function Survey() {

    const [ans1, setAns1] = useState("");
    const [ans2, setAns2] = useState("");
    const [ans3, setAns3] = useState("");
    const [ans4, setAns4] = useState("");

    return (
        <div className='survey'>
            <div className='survery-wrapper'>
                <div className='survey-intro'>
                    <h2>Welcome to Web Reads!</h2>
                    <h3>Please let us know more about you:</h3>
                </div>

                <form onSubmit={""}>
                    <div className='card'>
                        <label><h3>What is your favorite genre?</h3></label>
                        <input 
                            className="input" 
                            type="text" 
                            name="ans1" 
                            value={ans1} 
                            onChange={(e) => setAns1(e.target.value)} 
                        />
                    </div>
                    <div className='card'>
                        <label><h3>What is your favorite author?</h3></label>
                        <input 
                            className="input" 
                            type="text" 
                            name="ans2" 
                            value={ans2} 
                            onChange={(e) => setAns2(e.target.value)} 
                        />
                    </div>
                    <div className='card'>
                        <label><h3>What is your age?</h3></label>
                        <input 
                            className="input" 
                            type="text" 
                            name="ans3" 
                            value={ans3} 
                            onChange={(e) => setAns3(e.target.value)} 
                        />
                    </div>
                    <div className='card'>
                        <label><h3>What is your gender?</h3></label>
                        <input 
                            className="input" 
                            type="text" 
                            name="ans4" 
                            value={ans4} 
                            onChange={(e) => setAns4(e.target.value)} 
                        />
                    </div>
                    <div>
                        <button className="survey-submit">Submit</button>
                    </div>

                </form>
            </div>
            


        </div>
    )
}

export default Survey