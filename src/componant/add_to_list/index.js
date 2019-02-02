import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class AddToList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      todo: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({todo: event.target.value});
  }


  addToDo = () => { 
    this.props.addToDo(this.state.todo)
  }

  render() {
    return (
      <div className="">
        <h4>Add To List</h4>
        <input type="text" name='name'
          value={this.state.todo} onChange={this.handleChange} />
        <Button variant="contained" color="primary" onClick={this.addToDo}>
          Click to add
        </Button>
      </div>
    );
  }
}

export default AddToList;
