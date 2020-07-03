import React, {Component} from 'react';

import Order from "./Order";

class Ticket extends Component {
    constructor(protein, drink, side, toppings, directions) {
        super();
        this.protein = protein;
        this.drink = drink;
        this.side = side;
        this.toppings = toppings;
        this.directions = directions;
    }

    render() {
        return (
            <h2>
                <Ticket protein={'burger'} drink={'Coke'} side={'broccoli'} toppings={'Onions'}
                        directions={'Hold pickles'}/>
            </h2>
        )
    }

}
class PersonOrder extends Ticket {
    constructor(protein, drink, side, toppings, directions) {
        super(protein, drink, side);
        this.toppings = toppings;
        this.directions = directions;
    }
}

export default Ticket;
export default PersonOrder;