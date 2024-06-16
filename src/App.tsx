import { FormEvent, useState } from "react"
import { AccountForm } from "./AccountForm"
import { AddressForm } from "./AddressForm"
import { UserForm } from "./UserForm"
import { useMultiStepForm } from "./useMultistepForm"
type FormData={
  firstName:string,
  lastName:string,
  age:string,
  street:string,
  city:string,
  state:string,
  zip:string,
  email:string,
  password:string,
}
const INITIAL_DATA:FormData={
  firstName:"",
  lastName:"",
  age:"",
  street:"",
  city:"",
  state:"",
  zip:"",
  email:"",
  password:"",
}
function App() {
  const [data,setData]=useState(INITIAL_DATA);
  function updatedField(fields:Partial<FormData>){
    setData((prev)=>{
      console.log(prev," ",fields);
      return {...prev,...fields}
    })
  }
  const {steps,currentStepIndex,step,back,next,isFirstStep,isLast}=useMultiStepForm([<UserForm {...data} updatedField={updatedField}/>,<AddressForm {...data} updatedField={updatedField}/>,<AccountForm {...data} updatedField={updatedField}/>])
  
  function onsubmit(e:FormEvent){
    e.preventDefault();
    if(!isLast)return next();
    alert("Succesfully Created Account");
  }
  return <div style={{
    position:'relative',
    backgroundColor:'white',
    border:'2px solid black',
    padding:'2rem',
    margin:'1rem',
    borderRadius:'.5rem',
    fontFamily:'Arial',
    width:"400px",
    maxWidth:"max-content"
  }}>
      <form onSubmit={onsubmit}>
        <div style={{position:'absolute',top:".5rem",right:".5rem"}}>
          {currentStepIndex+1}/{steps.length}
        </div>
        {step}
        <div style={{
          marginTop:"1rem",
          display:'flex',
          gap:".5rem",
          justifyContent:'flex-end'
        }}>
          {isFirstStep&&(<button type="button" onClick={back}>Back</button>)}
          <button>{isLast?"Finish":"Next"}</button>
        </div>
      </form>
  </div>
    
}

export default App
