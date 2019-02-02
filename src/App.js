import React, { Component } from 'react';
import './App.css';
import ToDoList from '../src/componant/to_do_list'
import AddToList from '../src/componant/add_to_list'
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      toDoList: [
        {title: 'Wakeup' , status: 'done'},
        {title: 'Brush' , status: 'done'},
        {title: 'Bath' , status: 'done'},
        {title: 'Office' , status: 'not applicable'},
        {title: 'Timepass' , status: 'in progress'}
      ],
      todo: '',
    };
  }

  addToDo = (todo) => { 
    // console.log(e.target)
    console.log('parent todo')
    console.log(todo)
    let newTodo ={
      title: todo,
      status: 'need to work'
    } 
    let new_todos = [...this.state.toDoList]

    new_todos.push(newTodo)

    this.setState({
      toDoList: new_todos
    })
  }

  render() {

    return (
      <div className="App">
        <ToDoList toDoList={this.state.toDoList}></ToDoList>
        <AddToList addToDo={this.addToDo}></AddToList>
        

      </div>
    );
  }
}

export default App;
