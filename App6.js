import React from 'react';
import ReactDOM from 'react-dom';

class App6 extends React.Component {
  constructor () {
    super();
    this.update = this.update.bind(this);
    this.state = {increasing: false};
  }
  update () {
    ReactDOM.render(
      <App6 val={this.props.val + 1} />,
      document.getElementById('app')
    );
  }

  componentWillReceiveProps(nextProps) {
    this.setState({increasing: nextProps.val > this.props.val})
  }
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.val % 5 === 0;
  }

  render() {
    console.log(this.state.increasing);
    return (
      <button onClick={this.update}>
      {this.props.val}
      </button>
    )
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('prevProps', prevProps);
  }
}

App6.defaultProps = {val: 0};

ReactDOM.render(<App6 />, document.getElementById('app'));
