import React from 'react';
import TodoList from'./components/TodoList';
import TodoForm from './components/TodoForm';
import './components/Todo.css';

//Setting Tasks
const dataTodo = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    done: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    done: false
  }
];

class App extends React.Component {
  //Setting State
  constructor() {
      super();
      this.state = {dataTodo: dataTodo};
    }
// To CLear Tasks
//    clearTasks = data.filter(function (e) {
//   return e.done == true;
// })

//Toggling Item as Checked or Not Checked
toggleCompleted = itemId => {
  this.setState({
    dataTodo: this.state.dataTodo.map(item => {
      if (item.id === itemId) {
        return {
          ...item,
          completed: !item.completed
        };
      }

      return item;
    })
  });
};

//Adding new Item to the List
addItem = itemName => {
  this.setState({
    dataTodo: [
      ...this.state.dataTodo,
      {
        task: itemName,
        completed: false,
        id: Date.now()
      }
    ]
  });
};

clearCompleted = () => {
    console.log("bk: index.js: App: clearPurchased");
    this.setState({
      dataTodo: this.state.dataTodo.filter(item => {
        return !item.completed;
      })
    });
  };

  render() {
    return (
      <div className="container">
      <TodoForm addItem={this.addItem} />
        <h2>Aaron's Honey-DO List!</h2>
        <TodoList
          TodoList={this.state.dataTodo}
          toggleCompleted={this.toggleCompleted}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  };
}

export default App;
