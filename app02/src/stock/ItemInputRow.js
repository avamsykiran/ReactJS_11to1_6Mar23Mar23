import { Component } from "react";

class ItemInputRow extends Component{
    constructor(props){
        super(props);
        this.state = {id:0,name:'',quantity:0,unit:''};
    }

    submitBtnClick = e => {
        this.props.save({...this.state});
        this.setState({id:0,name:'',quantity:0,unit:''});
    };

    render(){
        let {id,name,unit,quantity} = this.state;

        return (
            <tr>
                <td>
                   {id}
                </td>
                <td>
                    <input type="text" className="form-control" value={name} 
                    onChange={ e => this.setState({name:e.target.value}) } />
                </td>
                <td>
                    <input type="number" className="form-control" value={quantity}
                    onChange={ e => this.setState({quantity:parseFloat(e.target.value)}) } />
                </td>
                <td>
                    <input type="text" className="form-control" value={unit}
                    onChange={ e => this.setState({unit:e.target.value}) } />
                </td>
                <td>
                    <button type="button" className="btn btn-sm btn-primary" onClick={this.submitBtnClick}>ADD</button>
                </td>
            </tr>
        )
    }
}

export default ItemInputRow;