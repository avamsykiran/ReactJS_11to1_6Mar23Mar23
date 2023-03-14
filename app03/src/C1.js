import { Component } from 'react';

class C1 extends Component {
    constructor() {
        super();
        this.state = { msgs: [] };
    }

    componentDidMount(){
        this.setState({msgs:['Component Did Mount Is Invoked']});
    }

    componentDidUpdate(){
        if((this.state.msgs.length+1)%5==0){
            this.setState({msgs:[...this.state.msgs,'Message from ComponentDidUpdate']});
        }
    }

    render() {
        let { msgs } = this.state;

        return (
            <div>
                <h3>C1 Messages </h3>
                <ol>
                    {msgs && msgs.length > 0 && (msgs.map(msg => <li>{msg}</li>))}
                </ol>
                <button type="button" 
                    onClick={e => this.setState({msgs:[...msgs,'A New Message @ ' + (new Date())]})}>
                            Add A Message
                </button>
            </div>
        );
    }
}

export default C1;