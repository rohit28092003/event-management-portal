import React from 'react'
import { IoPeopleOutline } from "react-icons/io5";

import { MdKeyboardArrowDown } from "react-icons/md";
import { Link } from 'react-router-dom';
import Star from './Star';
import { BsThreeDots } from "react-icons/bs";
import { RiUserSharedLine} from "react-icons/ri";


const Header=() => {
  return (
    <nav>
     <div>
      <main>
        <div className='container'>
        

         <div><input className='my'type="text" placeholder="myideaboard" defaultValue={"myideaboard"} size={10} /></div> 
         <div className='icon star'> <Star /></div>
         <div className='icon personal'><Link to={"/personal"}><IoPeopleOutline size="24" color='white' /></Link></div> 
         <div className='icon'><Link to={"/drop"}><MdKeyboardArrowDown size="34" color='white'style={{ paddingRight: 10 }}/></Link></div> 
         </div>
        <div className='container2'>
      <div><button className="icon button-6"role="button"> <RiUserSharedLine size="18" style={{ marginRight: 5 }} color='black'/>Share</button></div>
      <div className='icon details'><Link to={"/details"}><BsThreeDots size="24" color='white'/></Link></div>
      </div> 
      </main>
      </div>
    </nav>
   

  )
}

export default Header