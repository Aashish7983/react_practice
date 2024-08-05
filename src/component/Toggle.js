import { useState } from "react"

const Toggle = () => {


    const [btn, setBtn] = useState("Login")

    return(
        <div className="toggle">
            <button onClick={()=>{btn === "Login" ? setBtn("Logout") : setBtn("Login")}} >{btn}</button>
        </div>
    )
}

export default Toggle;