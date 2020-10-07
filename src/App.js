import React, { Component } from 'react'
import Counter from './components/Counter'
import './App.css'

export default class App extends Component {

  constructor(props){
    console.log("App.js constructeur")
    super(props)
    this.state={
      mount:true
    }
}

componentDidMount(){
  console.log("App.js componentDidMount")
}

// switch =()=>this.setState({mount: !this.state.mount})

  render() {
    console.log("App.js render")
    return (
      <div className="App">
        <h1>React Lifecycle methods</h1>
        {/* <button onClick={this.switch}>switch</button>
        {this.state.mount ? <Counter/> : null} */}
        <Counter />
      </div>
    )
  }
}

