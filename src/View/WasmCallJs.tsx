import React, { Component } from 'react'
import wasmCallJs from '../Wasm/callJs.wasm'

class JsCallWasm extends Component {
  public state = {
    value: 0
  }

  private handleWasmCallJsClick = async () => {
    const { instance, module } = await wasmCallJs({
      callJs: {
        alert: window.alert
      }
    })
    const { showAlert } = instance.exports
    const { value } = this.state

    console.log(showAlert(value));
  }

  private changeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      value: e.target.value
    })
  }

  public render() {
    const {
      value
    } = this.state

    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h1>WebAssembly调用Js</h1>
        <p>
          value:
          <input type="text" value={value} onChange={this.changeValue}/>
        </p>
        <button onClick={this.handleWasmCallJsClick}>click me to call js alert by wasm</button>
      </div>
    );
  }
}

export default JsCallWasm