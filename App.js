import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor () {
    super();
    this.state = {txt: 'this is a state value'}
  }
  render() {
    return <h1>{this.state.txt}</h1>
  }
}

// App.propTypes = {
//   txt: React.PropTypes.string,
//   cat: React.PropTypes.number.isReguired
// }
//
// App.defaultProps = {
//   txt: 'this is a default value'
// }
// export default App

ReactDOM.render(<App />, document.getElementById('app'));
