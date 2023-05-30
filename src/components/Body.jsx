import { useState } from "react";
import Input from "./Input";
import Output from "./Output";
function Body() {
  const [bills, setBills] = useState([]);

  const calculate = (name, bill, percentageOfTip) => {
    let newBill = {
      name: name,
      bill: bill,
      percentageOfTip: bill * (percentageOfTip / 100),
    };
    setBills([...bills, newBill]);
  };

  return (
    <div className="body">
      <Input calculate={calculate} />
      <Output bills={bills} />
    </div>
  );
}
export default Body;
