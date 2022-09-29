import React from "react";
import "App.css";
import { DataController } from "components/DataController";
import { About } from "components/About";



//const API_ACCESS_KEY = "USD";
//export const API_URL = `https://api.exchangeratesapi.io/v1/latest?access_key=${API_ACCESS_KEY}`;
export const API_URL = 'https://v6.exchangerate-api.com/v6/7e8a74d1ea24d8ea5179702c/latest/USD';

  
function App() {
  return (
    <div className="app">
      <header className="app-header">
        Currency converter
      </header>     
      <DataController url={API_URL} />
    </div>
  );
}

export default App;
