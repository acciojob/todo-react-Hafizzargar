
import React from "react";
import './../styles/App.css';
import { useState } from "react";

const App = () => {
  const [val,setVal]=useState("");
  const [arr,setArr]=useState([]);
  const [id, setId] = useState(1);
  // const [f,setf]=useState(false);
  function valueget(e){
    setVal(e.target.value);
  }
  function inc(){
    setId(id + 1);
    return id;
    
  }
  function getvaluearr(){
    if(val.length==0){
      // setf(false);
      return  ; 
    };
    let  data={
      id:inc(),
      text:val
    };
    setArr([...arr,data]);   //spread operator 
    console.log(arr);
    setVal("");
  

  }
 
  function del(id){
    setArr(arr.filter(item => item.id !== id));

  }
  return (
    <div className="main">
      
      <div className="cen">To-Do List</div>
      <input className="inp" value={val} onChange={valueget} required/>
      <button onClick={getvaluearr}>Add Todo</button>
     
        {/* Do not remove the main div */}

        {
          arr.map((e,i)=>{
            // console.log(e,i);
             return <div key={i}  className="a11">{e.text}<button onClick={()=>del(e.id) }>Delete</button></div>
          })
        }
       
    </div>
  )
}

export default App

