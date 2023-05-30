import Header from "./components/Header";
import Body from "./components/body";
import Footer from "./components/footer";
import { useState } from "react";
import "./App.css";
function App() {
  const[title,setTitle]= useState("Tip Calculator")
  
  return (
    <div className="App">
      <Header val={title} />
      <Body/>
      <Footer/>
    </div>
  );
}

export default App;
