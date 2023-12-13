import React, { useState } from 'react';
import './Dropdown.css';

function Dropdown({itemarray}) {
    const [dropped,setdropped]=useState(false);
    const [item,setitem]=useState(null);
    const handleitem=(ele)=>{
        setitem(ele);
        setdropped(false);
    }
   
    const handlebutton=()=>{
        setdropped(true);
    }
    // console.log(dropped);
    // console.log("Item is" + item);  

  return (
    <div className="dropdown">
      <button className="dropdown-button" onMouseEnter={handlebutton} 
        >
          {item || 'Select an option'}
      </button>

      {dropped && (
        <ul className="dropdown-list">
          {itemarray.map((ele,index)=>(
            <li key={index} onClick={()=> handleitem(ele)} >
              {ele}
            </li>
          ))}
        </ul>
      )  
}  
    </div>
  )
}

export default Dropdown;
