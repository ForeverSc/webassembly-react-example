import React, { Component, FormEvent, ChangeEvent } from 'react'
import './App.css'
import wasmAdd from './add.wasm'

class App extends Component {
  public state = {
    answer: 0,
    a: 0,
    b: 0
  }

  private handleWasmAddClick = async () => {
    const { instance, module } = await wasmAdd()
    const { add } = instance.exports
    const { a, b } = this.state;

    this.setState({
      answer: add(a, b)
    })
  }

  private handleChangeAValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      a: e.target.value
    })
  }

  private handleChangeBValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      b: e.target.value
    })
  }

  public render() {
    const {
      answer,
      a,
      b
    } = this.state

    return (
      <div className="App">
        <p>
          a:
          <input type="text" value={a} onChange={this.handleChangeAValue}/>
        </p>
        <p>
          b:
          <input type="text" value={b} onChange={this.handleChangeBValue}/>
        </p>
        <p>answer: {answer}</p>
        <button onClick={this.handleWasmAddClick}>click me to show wasm add answer</button>
      </div>
    );
  }
}

export default App
