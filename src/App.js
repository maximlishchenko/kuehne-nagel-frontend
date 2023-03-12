import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import MyTable from "./components/Table";

function App() {
  const [data, setData] = useState([]);

  const getData = async () => {
    let { data } = await axios.get("http://localhost:3000/Shipments.txt");
    setData(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <MyTable data={data} setData={setData}></MyTable>
    </div>
  );
}

export default App;
