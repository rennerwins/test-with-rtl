import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  state = {
    name: 'React',
    inputValue: '',
  }

  handleChange = e => {
    this.setState({ inputValue: e.target.value })
  }

  hanldeClick = () => {
    this.setState({
      name: this.state.inputValue,
      inputValue: '',
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Hello, {this.state.name}!</h1>
          <input
            type="text"
            placeholder="Type here"
            aria-label="name-field"
            value={this.state.inputValue}
            onChange={this.handleChange}
          />
          <button onClick={this.hanldeClick}>Change Name</button>
        </header>
      </div>
    )
  }
}

export default App
