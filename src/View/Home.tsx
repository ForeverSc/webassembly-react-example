import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Home extends Component {
  public render() {
    return (
        <ul style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <li>
            <Link to="/js-call-wasm">js调用WebAssembly</Link>
          </li>
          <li>
            <Link to="/wasm-call-js">WebAssembly调用js</Link>
          </li>
        </ul>
    );
  }
}

export default Home
