import { useEffect } from "react";
import React, {useState} from 'react'

const NavBar = (props) => {
  let[a,setA]=useState(10);
  console.log(a)

  // setA(12) will give error
  useEffect(() => {
    setA(12);
  }, []);

  return (
    <>
    <nav className={`navbar navbar-dark ${props.color} navbar-expand-sm`}>
        <div className="container">
            {/* <a href="#" className="navbar-brand">BootStrap Styling</a> */}
            <a href="" className="navbar-brand">{props.heading}</a>
        </div>
        {/* <div>
          <h1>{props.title}</h1>
        </div> */}
    </nav>
    </>
  )
}

export default NavBar
