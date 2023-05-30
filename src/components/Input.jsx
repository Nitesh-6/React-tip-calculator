import { useState } from "react";

function Input({ calculate}) {
  let [bill,setBill] = useState(0)
  let [name,setName] = useState("")
  return (
    <div className="input">
      <p className="heading">Enter Your Bill Amount</p> <br /> <hr />
      <br />
      <input
        type="number"
        className="inpVal"
        value={bill}
        onChange={(e)=>setBill(e.target.value)}
      />{" "}
      <br /> <br />
      <p className="inpInfo">
        how was the service &nbsp;
        <select name="servicce" id="service">
          &nbsp;
          <option value="20">excellent (20%)</option>
          <option value="10">Good (10%)</option>
          <option value="5">Moderate (5%)</option>
        </select>
        <input
          type="text"
          placeholder="Customer Name"
          value={name}
          onChange={(e)=>setName(e.target.value)}
        />
        <button onClick={()=>{
          calculate(name,bill,document.getElementById("service").value)
          setBill(0)
          setName("")
          }}>Add Customer</button>
      </p>
    </div>
  );
}
export default Input;
