import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const ToDoList = (props) => {

  const createItem = (item) => {
    return (
      <li key={item.id}>{item.txt}</li>
    );
  };

  return (
    <ul>
     {props.items.map(createItem)}
    </ul>
  )
}

class App10 extends Component {
  constructor(props) {
    super(props);

    this.state = {items: [], txt: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    var nextItems = this.state.items.concat({txt: this.state.txt, id: Date.now()})
    var nextText = '';
    this.setState({items: nextItems,txt: nextText});
  }
  render () {
    return (
      <div>
        <h1>ToDO</h1>
        <ToDoList items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <input
            value={this.state.txt}
            onChange={event => this.setState({txt: event.target.value})} />
          <button>{'Add #' + (this.state.items.length + 1)}</button>
        </form>
      </div>
    )
  }
}


ReactDOM.render(<App10 />, document.getElementById('app'));
