import "./Todo.css"

function Todo({title}) {

  function deleteTodo() {
    console.log("ost", title)
  }


  return (
    <div className="todo">
      <h2>{ title }</h2>
      <button onClick={ () => deleteTodo() }>Delete</button>
    </div>
  );
}

export default Todo;
