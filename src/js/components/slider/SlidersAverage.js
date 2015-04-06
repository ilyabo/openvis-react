const React = require('react');
const Slider = require('./Slider');
const d3 = require('d3');

require('./SlidersAverage.scss');

var SlidersAverage = React.createClass({

  getInitialState() {
    return {
      apples: 0.5,
      oranges: 0.5,
      bananas: 0.5
    };
  },

  render() {
    return (
      <div className="SlidersAverage">

        <Slider width={200} height={40}
                title="Apples"
                value={this.state.apples}
                onValueChange={(v) => this.setState({apples: v})} />

        <Slider width={200} height={40}
                title="Oranges"
                value={this.state.oranges}
                onValueChange={(v) => this.setState({oranges: v})} />

        <Slider width={200} height={40}
                title="Bananas"
                value={this.state.bananas}
                onValueChange={(v) => this.setState({bananas: v})} />


        <div className="SlidersAverage-average">
          <span className="SlidersAverage-average-label">Average:</span>
          <span className="SlidersAverage-average-value">
          { d3.mean([this.state.apples, this.state.oranges, this.state.bananas]).toFixed(2) }
          </span>
        </div>

      </div>
    );
  }

});



module.exports = SlidersAverage;