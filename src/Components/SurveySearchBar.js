import React, {useState} from 'react'
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close"

function SurveySearchBar({placeholder, data, setAns}) {
    //Creates use state for filtered data
    const [filteredData, setFilterdData] = useState([]) 
    const [wordEntered, setWordEntered] = useState("") 

    //Filter through data to find search result
    const handleFilter = (event) => {
        const searchWord = event.target.value;
        setWordEntered(searchWord)
        const newFilter = data.data.filter((value) => {
            return value.Name.toLowerCase().includes(searchWord.toLowerCase());
        });
        if (searchWord === "") {
            setFilterdData([]);
        }
        else {
            setFilterdData(newFilter);
        }
    };
    
    //Clears the search
    const clearInput = () => {
        setFilterdData([]);
        // setWordEntered("");
    }

    const handleClick = (Name) => {
        setWordEntered(Name)
        setAns(Name)
        clearInput()
    }

  return (
    <div className='survey-search'>
        <div className='survey-search-inputs'>
            <input type="text" placeholder={placeholder} value={wordEntered} onChange={handleFilter}/>
            <div className='survey-search-icon'>
                {filteredData.length === 0 ? 
                <SearchIcon /> : <CloseIcon id="clearBtn" onClick={clearInput}/>
                }
            </div>
        </div>
        {filteredData.length !== 0 && (
        <div className='data-result'>
            {filteredData.slice(0, 15).map((value, key) => {
                return <div className='data-item' onClick={() => {handleClick(value.Name)}}>
                   <p className='data-item-title'>{value.Name}</p> 
                </div>
            })}
        </div>
        )}
    </div>
  )
}

export default SurveySearchBar