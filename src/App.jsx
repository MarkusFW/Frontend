import "./App.css";
import Todo from "./Components/Todo";
import Title from "./Components/Title";
import Modal from "./Components/Modal";

function App() {
  return (
    <div>
      <Title />
      <div className="todo__wrapper">
        <Todo
          title="Finish Frontend Simplified"
          paragraph="Code along with Frontend Simplfied step by step."
        />
        <Todo
          title="Finish Interview Section"
          paragraph="Finish every interview question in the next 6 weeks"
        />
        <Todo title="Land a $100K job" paragraph="Apply to 100 jobs" />
      </div>
      <div>
        <Modal modalTitle="Are you sure?" />
      </div>
    </div>
  );
}

export default App;
