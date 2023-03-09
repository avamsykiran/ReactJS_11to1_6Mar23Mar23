import { Component } from 'react';

class StockPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items:[
                {id:1,name:"Rice",unit:"25 Kg Bag",quantity:50},
                {id:2,name:"Wheat",unit:"15 Kg Bag",quantity:120},
                {id:3,name:"Channa Dal",unit:"1 Kg Packet",quantity:200},
                {id:4,name:"Urd Dal",unit:"1 Kg Packet",quantity:250},
                {id:5,name:"Sugar",unit:"500g Packet",quantity:450}
            ]
        };
    }

    render() {
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
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.items.map(
                                item => (
                                    <tr>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.quantity}</td>
                                        <td>{item.unit}</td>
                                    </tr>
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