import React from "react"
import TodoItem from "./components/toDoItems"

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      input : "",
      todoList : [],
    }
  }

  inputChange = (e) => {
    this.setState({
      input : e.target.value,
    })
  }

  FormSubmit = (e) => {
    e.preventDefault();
    if (this.state.input.length > 0){
      this.setState({
        input : "",
        todoList: [...this.state.todoList, this.state.input]
      })
    }
  }

  updateItem = (newItem, index) => {
    let data = this.state.todoList;
    data.splice(index, 1);
    this.setState({
      todoList : data,
    })
  }
 
  deleteItem = (index) => {
    let data = this.state.todoList;
    data.splice(index, 1)
    this.setState({
      todoList : data,
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.FormSubmit} id="input-box">
          <input type="text" placeholder="Type here" 
          value={this.state.input}
          onChange={this.inputChange} />
          <button>Add Item</button>
        </form>
        <h3 id="toDoList">{this.state.input}</h3>
        <div>
          {
            this.state.todoList.length == 0  ? (
              <>
                <h3></h3>
              </>
            ) : (
              this.state.todoList.map((ele, i) => {
                return(
                  <>
                    <div>
                      <TodoItem
                        e = {ele}
                        index = {i}
                        updateItem = {this.updateItem}
                        deleteItem = {this.deleteItem}
                      />
                    </div>
                  </>
                )
              })
            )
          }
        </div>
      </div>
    )
  }
}

export default App;