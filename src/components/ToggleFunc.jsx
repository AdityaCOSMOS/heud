import React from 'react'
import FunCompOne from './FunCompOne'
import FunCompTwo from './FunCompTwo'
import {useState} from 'react'
import "../App.css"

const ToggleFunc = () => {

    const [funcOne,setfunOne]=useState(false);
    console.log(funcOne)
    const [funcTwo,setfunTwo]=useState(false);



  return (
    <div>
      <button onClick={()=>setfuncOne(!funcOne)}>first Functional Compoent </button>
      <button onClick={()=>setfuncTwo(!funcTwo)}>second Functional Compoent </button>
    <div className='container'>
    {funcOne ? <FunCompOne/>: null}
    {funcTwo ? <FunCompTwo/>: null}
</div>




    </div>
  )
}

export default ToggleFunc
