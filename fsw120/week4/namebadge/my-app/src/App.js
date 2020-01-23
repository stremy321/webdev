import React from 'react';

import './App.css';
class App extends Component {
  state = {
    fields: {}
  }
  onSubmit = (fields) => {
    this.setState({fields})
  }

  render() {
    return (
      <div className="App">
        <Form onSubmit={fields => this.onSubmit(fields)}/>
      </div>
    )
  }
}

export default App;
