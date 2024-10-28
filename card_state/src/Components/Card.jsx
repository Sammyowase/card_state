import image from "../assets/free-images.jpg"
import "./Card.css"
import { useState } from "react"

const Card =()=>{
    const [num, setNum] = useState(0)
    const [checkClick, setCheckClick] = useState(false)
    const increaseNum = ()=>{
        setNum(num +1)
        setCheckClick(true)

    }
   

    return (
        <div className="home">
        <div className="card-wrapper">
<img src={image} alt="" />
        <div className="card-content">
          <button className={checkClick? `like-icon bg-red` : `like-icon`} onClick={increaseNum}>
           <p> Like</p>
            </button> 
            <h5>{num} Likes</h5>
             
        </div>
        </div>
        </div>
    )
}

export default Card