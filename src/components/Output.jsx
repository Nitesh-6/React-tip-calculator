import { useState } from "react";
import React from "react";
export default function Output({bills}) {
  let [totalCustomers,setTotalCustomers] = useState(0)
  let [totalCustomersTip,setTotalCustomersTip] = useState(0)
  let calaculateTipsAndCustomers= ()=>{
    setTotalCustomers(bills.length)
    let totalTipsValue = bills.reduce((acc,cur)=>acc=acc+cur.percentageOfTip,0)
    setTotalCustomersTip(totalTipsValue)
  }
  return (
    <div className="output">
      <h1>Customer List</h1> <br /> <hr />
      <ul>
        {bills.length>0 ? bills.map((item, index) => (
          <li key={index}>{item.name} provided a tip of Rs.{item.percentageOfTip} for an amount of Rs.{item.bill}</li>)) : ""
        }
      </ul>{" "}
      <br />
      <button onClick={()=>calaculateTipsAndCustomers()} className="btn">Calculate Tip & Custmor</button> <br /> <br />
      <table className="customers">
        <thead>
          <tr>
            <th>Total Customers</th>
            <th>Tip</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{totalCustomers}</td>
            <td>Rs.{totalCustomersTip}</td>
          </tr>
        </tbody>
      </table> 
    </div>
  );
}
