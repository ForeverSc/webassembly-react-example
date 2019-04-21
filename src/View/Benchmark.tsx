import React, { Component } from 'react'
import wasmFib from '../Wasm/fib.wasm'
import _ from 'lodash'
import process from 'process';

const benchmark = require('benchmark')
const Benchmark = benchmark.runInContext({ _, process });

(window as any).Benchmark = Benchmark

function jsFib(n: number): number {
  if (n === 1 || n === 2) {
    return n
  }

  return jsFib(n - 1) + jsFib(n - 2)
}

class BenchmarkView extends Component {
  public state = {
    benchs: [],
    fatest: ''
  }
  private suite = new Benchmark.Suite();

  public async componentDidMount() {
    const { instance } = await wasmFib()
    const { fib } = instance.exports
    const benchs: string[] = []

    this.suite
      .add('JS Fib', () => {
        jsFib(40)
      })
      .add('Wasm Fib', () => {
        fib(40)
      })
      .on('cycle', (event: any) => {
        console.log(String(event.target))
        benchs.push(String(event.target))
      })
      .on('complete', () => {
        this.setState({
          benchs: benchs,
          fatest: this.suite.filter('fastest').map('name')
        })
      })
  }

  private handleStartTest = () => {
    this.suite.run({ async: true });
  }

  public render() {
    const {
      benchs,
      fatest
    } = this.state;

    return (
      <div>
        <h1>Benchmark</h1>
        {benchs.map(it => <p key={it}>{it}</p>)}
        <p>Fastest is: {fatest}</p>
        <button onClick={this.handleStartTest}>start test</button>
      </div>
    )
  }
}

export default BenchmarkView