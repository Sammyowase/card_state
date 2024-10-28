import  "./Form.css"

import { useState } from "react"

 const Form = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const updateusername=(e)=>{
        setUsername(e.target.value);
        
    }

    const updatepassword=(e)=>{
        setPassword(e.target.value);
        
    }
  return (
    <div>
        <form action="">
            <div className="input-wrap">
                <label htmlFor="">Username:</label>
                <input type="text"
                name="username"
                onChange={updateusername}/>
                
            </div>
            <div className="input-wrap">
                <label htmlFor="">Password:</label>
                <input type="password" 
                name="password"
                //  value={} 
                onChange={updatepassword}/>
            </div>

            
                <button>Submit</button>
           
        </form>
        <h2>Form Values</h2>
        <p>Username: {username}</p>
        <p>Password: {password}</p>
    </div>
  )
}

export default Form