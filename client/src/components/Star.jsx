import React from 'react'
import { FaStar } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";
import { useState } from 'react';


  

  function Star() {
    const [isStarred, setIsStarred] = useState(false);

    const handleClick = () => {
        setIsStarred(!isStarred);
      };
    return (
        <div>
          {isStarred ? (<FaStar size="24"   onClick={handleClick}  />) :(<FaRegStar size="24"  onClick={handleClick}/>)}
       
        </div>
      );
  }
  
  export default Star
  
