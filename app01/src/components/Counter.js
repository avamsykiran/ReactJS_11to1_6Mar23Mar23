import { Component } from 'react';

class Counter extends Component {
    constructor(props){
        super(props);
        this.state = {
            count:0
        };
    }

    stepUp = event => this.setState({count: this.state.count+1});

    stepDown = event => this.setState({count: this.state.count-1});

    render(){
        return (
            <span>
                <button onClick={this.stepDown}>--</button>
                {this.state.count}
                <button onClick={this.stepUp}>++</button>
            </span>
        );
    }
}

export default Counter;