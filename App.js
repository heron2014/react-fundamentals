import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor () {
    super();
    this.state = {txt: 'this is a state value'}
  }

  update(e) {
    this.setState({txt: e.target.value})
  }
  render() {
    return (
      <div>
        <input type="text" onChange={this.update.bind(this)} />
        <h1>{this.state.txt}</h1>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
