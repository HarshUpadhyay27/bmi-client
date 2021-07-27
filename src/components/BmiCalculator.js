import React, { useState } from "react";

const BmiCalculator = () => {
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();
  const [bmi, setBmi] = useState();

  const inputHandler = async (e)=>{
    e.preventDefault()
    let result = (weight/(height/100)**2).toFixed(2)
    setBmi(result)

    if(!weight || ! !height || !bmi){
      const res = await fetch("/user", {

        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({weight, height, bmi})
      })
      const data = await res.json()
      if(data.status===401 || !data){
        console.log("Invalid details")
      }else{
        console.log("sucess")
      }
    }
  }

  return (
    <div className="cal-container">
      <form className="calculator" onSubmit={inputHandler} >
        <h1>Calculate BMI</h1>
        <div className="input-tag">
          <label htmlFor="height">Height</label>
          <input
            id="height"
            type="text"
            placeholder="Hight in cm"
            value={height}
            onChange={(e) => {
              setHeight(e.target.value);
            }}
            pattern="\d+(\.\d{1,3})?"
          />
        </div>
        <div className="input-tag">
          <label htmlFor="weight">Weight</label>
          <input
            id="weight"
            type="weight"
            placeholder="Weight in Kg"
            value={weight}
            onChange={(e) => {
              setWeight(e.target.value);
            }}
            pattern="\d+(\.\d{1,3})?"
          />
        </div>
        <button type="submit">Calculate BMI</button>
        {bmi ? <p>Your BMI: {bmi}</p>:""}
      </form>
    </div>
  );
};

export default BmiCalculator;
