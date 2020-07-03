import React, { Component } from 'react';


import Table1 from './Table1';


class Ticket extends Component {
    constructor(props) {
        super(props);
        this.state = {
            protein: 'beef',
            drink: '',
            side: ''
        };
    };

    enterOrder() {
        console.log('hello i work')
        this.setState({
            protein: 'beef',
            drink: 'Coke',
            side: 'Broccoli'
        })
    }

        render()
        {
            return (
                <div>
                    <h2>
                        <Table1 big={this.state.protein} takeOrder={this.enterOrder}/>
                    </h2>
                </div>
            );
        }
    };



export default Ticket;
