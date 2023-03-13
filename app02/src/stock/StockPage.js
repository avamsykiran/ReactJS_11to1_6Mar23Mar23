import { Component } from 'react';
import ItemInputRow from './ItemInputRow';

import ItemRow from './ItemRow';

class StockPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                { id: 1, name: "Rice", unit: "25 Kg Bag", quantity: 50 },
                { id: 2, name: "Wheat", unit: "15 Kg Bag", quantity: 120 },
                { id: 3, name: "Channa Dal", unit: "1 Kg Packet", quantity: 200 },
                { id: 4, name: "Urd Dal", unit: "1 Kg Packet", quantity: 250 },
                { id: 5, name: "Sugar", unit: "500g Packet", quantity: 450 }
            ],
            nextId: 6
        };
    }

    add = item => this.setState({ 
        items: [...this.state.items, { ...item, id: this.state.nextId }], 
        nextId: this.state.nextId + 1 
    });

    remove = id => this.setState({ items: this.state.items.filter(i => i.id !== id) });

    markEditable = id => this.setState({ items: this.state.items.map( i => i.id!==id ? i : {...i,isEditing:true}) });

    unMarkEditable = id => this.setState({ items: this.state.items.map( i => i.id!==id ? i : {...i,isEditing:undefined}) });

    update = item => this.setState({ items: this.state.items.map( i => i.id!==item.id ? i : {...item,isEditing:undefined}) });

    render() {

        let { items } = this.state;

        return (
            <section className='container-fluid p-3'>
                <div className="col-sm-9 mx-auto">
                    <h5>Stock Details</h5>
                    <table className='table table-bordered table-striped'>
                        <thead>
                            <tr>
                                <th>Item#</th>
                                <th>Name</th>
                                <th>Quantity</th>
                                <th>Unit</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            <ItemInputRow save={this.add} />

                            {(!items || items.length === 0) &&
                                <tr>
                                    <td colSpan="5" className='fw-bold text-center'>
                                        Inventory has no stock.
                                    </td>
                                </tr>
                            }
                            {(items && items.length > 0) && items.map(
                                item => (
                                    item.isEditing ? 
                                    <ItemInputRow key={item.id} item={item} save={this.update} cancel={this.unMarkEditable} /> :
                                    <ItemRow key={item.id} item={item} remove={this.remove} markEditable={this.markEditable} />
                                )
                            )}
                        </tbody>
                    </table>
                </div>
            </section>
        );
    }
}

export default StockPage;