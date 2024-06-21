import { useState } from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  let Icons = [
    "C",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "+",
    "-",
    "*",
    "/",
    "=",
  ];

  let [calVal, setCalVal] = useState();

  let onButtonClicked = (e) => {
    // console.log(e)
    // let btnVal = e.target.innerText;
    let btnVal = e;

    if(btnVal==="C"){
      setCalVal("");
    }
    else if(btnVal==="="){
      let result = eval(calVal);
      setCalVal(result);
    }

   else{
    const newDisplayValue =calVal + btnVal;
    // console.log(newDisplayValue)
    setCalVal(newDisplayValue);
   }
  }

  return (
    <div className="border-2 w-[400px] bg-gray-400 m-auto p-1">
      <input
        value={calVal}

        type="text"
        className=" w-[350px] text-[45px] m-3 bg-gray-200"
      />
      <div className="flex justify-center flex-wrap mt-9">
        {Icons.map((icon, index) => {
          return (
            <button
              onClick={()=>onButtonClicked(icon)}
              
              key={index}
              className="w-[100px] h-[55px] m-[8px]  bg-blue-500 rounded-lg hover:bg-blue-800"
            >
              {icon}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default App;
