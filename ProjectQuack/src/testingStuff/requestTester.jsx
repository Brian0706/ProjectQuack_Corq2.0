import React from 'react'
import {useState, useEffect} from 'react'


//DO NOT TOUCH LEFT HERE IF NEEDED FOR FUTURE USE
const RequestTester = () => {
    const [input, setInput] = useState('')

    const handleInput = (e) => {
        setInput(e.target.value)
    }
    const handleClick = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/clubs", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name: input }) // send input as JSON
            });
            if(response.ok) {
                setInput('');
                console.log("Good");
            }
            else{
                console.log("Thomas gooned")
            }
        }
        catch(error){
            console.log(error);
        }
    }
  return (
    <div>
        <p>request tester</p>
        <input type='text' value={input} onChange={handleInput}/>
        <button onClick={handleClick}>Post new club data</button>
    </div>
  )
}

export default RequestTester