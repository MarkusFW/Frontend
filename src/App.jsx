import "./App.css";
import Todo from "./Components/Todo";
import Title from "./Components/Title";
import Modal from "./Components/Modal";
import React, { useState } from "react";

function App() {
const [showModal, setShowModal] = useState(false)


  return (
    <div>
      <Title />
      <div>
        <input type="text" onChange={(event) => {
          console.log(event.target.value)
        }}/>
        <button onClick={() => setShowModal(true)}>Add To Do</button>
      </div>
      <div className="todo__wrapper">
        <Todo title="Finish Frontend Simplified" />
        <Todo title="Finish Interview Section" />
        <Todo title="Land a $100K job" />
      </div>
      <div>{showModal ? <Modal modalTitle="Are you sure?" /> : null}</div>
    </div>
  );
}

export default App;
