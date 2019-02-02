import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

class ToDoList extends Component {

  render() {
    return (
      <div className="">
        <h4>To do List</h4>
        {this.props.toDoList.map(ele =>
          <List>
            <ListItem>
              <ListItemText primary={ele.title}
                secondary={ele.status}>
              </ListItemText>
            </ListItem>
          </List>
        )}
      </div>
    );
  }
}

export default ToDoList;