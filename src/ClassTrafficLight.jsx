import { Component } from "react";

export class ClassTrafficLight extends Component {
  state = {
    index: 0
  }

  btnNext = () => {
    if(this.state.index < 2) {
      this.setState({index: this.state.index + 1})
    } else this.setState({index: 0})
    console.log(this.state.index)
  }

  render() {
    const lightColors = ['red', 'green', 'yellow']
    const trafficLight = lightColors[this.state.index]

    return (
      <div className="traffic-light-box">
        <h2>Class Traffic Light</h2>
        <div className="traffic-light">
          {/* Background color can be black | yellow | red | green */}
          <div className={`circle ${trafficLight === 'red' ? 'red' : 'black'}`}></div>
          <div className={`circle ${trafficLight === 'yellow' ? 'yellow' : 'black'}`}></div>
          <div className={`circle ${trafficLight === 'green' ? 'green' : 'black'}`}></div>
        </div>
        <button onClick={this.btnNext} className="next-state-button">Next State</button>
      </div>
    );
  }
}
