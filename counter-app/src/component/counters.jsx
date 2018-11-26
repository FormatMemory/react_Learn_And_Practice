import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    deafultCounters: [
      { id: 1, value: 0 },
      { id: 2, value: 4 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ],
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 4 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  };

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index].value++;
    this.setState({ counters });
  };

  handleReset = () => {
    // const counters = [
    //   { id: 1, value: 0 },
    //   { id: 2, value: 4 },
    //   { id: 3, value: 0 },
    //   { id: 4, value: 0 }
    // ];
    this.setState({ counters: this.state.deafultCounters });
  };

  render() {
    return (
      <div>
        <button className="btn btn-secondary btn-sm" onClick={this.handleReset}>
          Reset
        </button>
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
