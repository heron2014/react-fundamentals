import React from 'react';
import ReactDOM from 'react-dom';

let Mixin = InnerComponent => class extends React.Component {
  constructor () {
    super();
    this.state = {val: 0};
    this.update = this.update.bind(this);
  }
  update() {
    this.setState({val: this.state.val + 1})
  }

  componentWillMount() {
    console.log('will mount');
  }

  render () {
    return (
      <InnerComponent update={this.update}
      {...this.state}
      {...this.props} />
    )
  }

  componentDidMount() {
    console.log('mounted');
  }
}

//stateless component
const Button = (props) => <button onClick={props.update}>{props.txt} - {props.val}</button>

const Label = (props) => <label onMouseMove={props.update}>{props.txt} - {props.val}</label>


//mix funtionality from Mixin function into Button
let ButtonMixed = Mixin(Button);
let LabelMixed = Mixin(Label);

class App7 extends React.Component {
  render () {
    return (
    <div>
      <ButtonMixed txt="Button" />
      <LabelMixed txt="Label" />
    </div>
    )
  }
}

ReactDOM.render(<App7 />, document.getElementById('app'));
