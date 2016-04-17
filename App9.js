import React from 'react';
import ReactDOM from 'react-dom';


class App9 extends React.Component {
  constructor () {
    super();

    this.state = {data: [
      {id:1, name: 'Simon Bailey'},{id:2, name: 'Thomas Burlson'},
      {id:3, name: 'Will Smith'},{id:4, name: 'Maggie Adams'},
      {id:5, name: 'Kent Dood'},{id:6, name: 'Aaron Frost'},
      {id:7, name: 'Kate Mini'},
      {id:8, name: 'Joe Doe'},
      {id:9, name: 'Robert Tylor'},{id:10, name: 'Lukas Penner'}
    ]}
  }
  render () {
    let rows = this.state.data.map(person => {
      return <PersonRow key={person.id} data={person} />
    })
    return (
       <table>
        <tbody>{rows}</tbody>
       </table>
    )
  }
}

const PersonRow = (props) => {
  return (
    <tr>
      <td>{props.data.id}</td>
      <td>{props.data.name}</td>
    </tr>
  )
}

ReactDOM.render(<App9 />, document.getElementById('app'));
