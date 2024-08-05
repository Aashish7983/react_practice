// we use useEffect hook for side effect work, means the task which will take time to execute that is async task
// here is the example that
import React, { useEffect, useState } from "react";

const UseEffectHook = () => {
    const[name, setName] = useState("")
    const[number, setNumber] = useState(null);

    useEffect((e)=>{
        // e.preventDefault();
        setTimeout(() => {
            setNumber(10);
        }, 2000);
    },[number])


    function handleName(e){
        setName(e.target.value);
    }

    return(
        <div>
            <div>
            <h1>UseEffectHook</h1>
            <input
            value={name}
            onChange={handleName}
            placeholder="enter name"
            />
            
            {console.log(name)}
            </div>
            <div>
                <input
                value={number}
                onChange={setNumber}
                placeholder="number"
                />
                {console.log(number)}
            </div>
        </div>
    )
}

export default UseEffectHook;