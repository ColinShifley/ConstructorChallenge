import React, { Component } from 'react';

import Table1 from './Table1';

class Ticket extends Component {
  constructor(props) {
    super(props);
    this.state = {
      protein: '',
      drink: '',
      side: '',
    };
  }

  render() {
    return (
      <div>
        <h2>
          <Table1 big={this.state} />
        </h2>
      </div>
    );
  }
}

export default Ticket;
