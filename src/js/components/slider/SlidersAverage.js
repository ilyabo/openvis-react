const React = require('react');
const Slider = require('./Slider');
const d3 = require('d3');

require('./SlidersAverage.scss');

var SlidersAverage = React.createClass({

  getInitialState() {
    return {};
  },

  getAverage() {
    return d3.mean(d3.values(this.state)) || 0;
  },

  render() {
    return (
      <div className="SlidersAverage">
        {
          d3.range(5).map(i =>
              <Slider width={200} height={40}
                      value={this.state[i] || 0}
                      onValueChange={(v) => this.handleChange(i, v)} />
            )
        }

        <div className="SlidersAverage-average">
          <span className="SlidersAverage-average-label">Average value:</span>
          <span className="SlidersAverage-average-value">
            { this.getAverage().toFixed(2) }
          </span>
        </div>

      </div>
    );
  },

  handleChange(i, val) {
    var obj = {}; obj[i] = val;
    this.setState(obj);
  }

});



module.exports = SlidersAverage;