import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(props){
        console.log("Counter.js constructeur")
        super(props)
        this.state={
            counter:0
        }
    }

    
    
    componentDidMount(){
        console.log("Counter.js componentDidMount")
    }
    
    // componentWillUnmount(){
    //     console.log("Counter.js componentWillUnmount")
    // }

    componentDidUpdate(){
        console.log("Counter.js componentDidUpdate")
    }

    shouldComponentUpdate(nextProps, nextState){
        // console.log(this.state.counter, nextState)
        // return true
        // console.log('nextState', nextState)
        // console.log('this.state.counter==nextState', this.state.counter==nextState)
        if(this.state.counter===nextState.counter){
            return false
        }
        return true
    }
    
        inc=()=>this.setState({counter:this.state.counter+1})
        dec=()=>this.setState({counter:this.state.counter-1})
        reset=()=>this.setState({counter:0})

    render() {
        console.log("Counter.js render")
        return (
            <div>
                <h1>Counter: {this.state.counter}</h1>

                <button onClick={this.inc}>+</button>
                <button onClick={this.dec}>-</button>
                <button onClick={this.reset}>reset</button>
            </div>
        )
    }
}
