import React, { Component } from 'react';
import List from "./List.js"

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      todo: '',
      items: []
    }
  }

  handleOnChange=(event) => {
    this.setState({
      todo: event.target.value
    })
  }

  handleSubmit=(e)=>{
    e.preventDefault();
    this.setState({
      todo: '',
      items: this.state.items.concat(this.state.todo)
    })
  }

  render() {
    return (
      <div >
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.todo} onChange={this.handleOnChange}/>
          <button>Add Todo</button>
        </form>
        <List items={this.state.items} />
      </div>
    );
  }
}

export default App;
