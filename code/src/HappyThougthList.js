import React  from "react";
import moment from "moment";

const HappyThougthList  =  props  => { 
    const { message, hearts, _id, createdAt } = props.thought
    const LIKE_URL = `https://nice-thoughts-api.herokuapp.com/thoughts/${_id}/like`;
    
    const handleClick = () => {
      fetch(LIKE_URL, {
        method: "POST",
        headers:
        {"Content-Type":"application/json"},
        body:"",
        }).then(() => props.onLiked(_id)) 
        }
          return(
          <>
            <div className="previous-messages"> 
              {message}  
              <p className="heart-container">
              <button className ="heart-button"
                onClick={handleClick}
                style={{background: hearts > 0 ? "#d9fcc2" : "#f3f1f1" }}>
                
                <span className="heart-button-icon" role="img" aria-label="Heart">
                  {" 💚"} 
                </span>
              </button>
                x {hearts}
              </p>

                <span className ="message-time">
                  {moment(createdAt).fromNow()}; 
                </span>
            </div>
          </>
        );  
    } 
                 
export default HappyThougthList; 


