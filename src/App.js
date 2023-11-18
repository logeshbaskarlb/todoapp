import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Input from "./Input";


import { useState } from "react";

function App() {
  const [allTodos, setallTodos] = useState([]);






  return (
    <main className="container">
      <hgroup className="px-lg-5">
        <article className="row justify-content-center my-5">
          <h1 className="text-center light-green">My todo</h1>
          <Input
            allTodos={allTodos} setallTodos={setallTodos}
          
          />
        </article>

        
        
      </hgroup>
    </main>
  );
}

export default App;