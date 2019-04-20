import React, { Component } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Home from './View/Home'
import JsCallWasm from './View/JsCallWasm'
import WasmCallJs from './View/WasmCallJs'
import './App.css'

class App extends Component {
  public render() {
    return (
      <BrowserRouter>
        <Route exact={true} path="/" component={Home} />
        <Route path="/js-call-wasm" component={JsCallWasm} />
        <Route path="/wasm-call-js" component={WasmCallJs} />
      </BrowserRouter>
    );
  }
}

export default App
