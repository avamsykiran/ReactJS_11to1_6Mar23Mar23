import { Component } from "react";

class ItemInputRow extends Component {
    constructor(props) {
        super(props);
        this.state = this.props.item ? { ...this.props.item } : { id: 0, name: '', quantity: 0, unit: '' };
    }

    submitBtnClick = e => {
        this.props.save({ ...this.state });
        this.setState({ id: 0, name: '', quantity: 0, unit: '' });
    };

    render() {
        let { id, name, unit, quantity, isEditing } = this.state;

        return (
            <tr>
                <td>
                    {id}
                </td>
                <td>
                    <input type="text" className="form-control" value={name}
                        onChange={e => this.setState({ name: e.target.value })} />
                </td>
                <td>
                    <input type="number" className="form-control" value={quantity}
                        onChange={e => this.setState({ quantity: parseFloat(e.target.value) })} />
                </td>
                <td>
                    <input type="text" className="form-control" value={unit}
                        onChange={e => this.setState({ unit: e.target.value })} />
                </td>

                {isEditing ?
                    (
                        <td>
                            <button type="button" className="btn btn-sm btn-secondary me-1"
                                onClick={this.submitBtnClick}>SAVE</button>
                            <button type="button" className="btn btn-sm btn-danger"
                                onClick={e => this.props.cancel(id)}>CANCEL</button>
                        </td>
                    ) :
                    <td>
                        <button type="button" className="btn btn-sm btn-primary" onClick={this.submitBtnClick}>ADD</button>
                    </td>
                }
            </tr>
        )
    }
}

export default ItemInputRow;