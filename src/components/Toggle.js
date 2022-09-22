import React, { useState } from "react";


function Toggle() {
const [isOn, setIsOn]=useState(false);//React hook must be within a react component

function handleClick(){//Setter functions

setIsOn((isOn)=> !isOn)

}
const color=isOn? "Red" : "White";
  
  return <button style={{background:color}}onClick={handleClick}>{isOn? "ON" : "OFF"}</button>;
}

export default Toggle;
