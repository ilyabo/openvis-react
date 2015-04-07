const React = require('react');
const d3 = require('d3');


require('./Slider.scss');

var Slider = React.createClass({

  props: {
    width: React.PropTypes.number.isRequired,
    height: React.PropTypes.number.isRequired,
    title: React.PropTypes.string.isRequired,
    value: React.PropTypes.number.isRequired,
    onValueChange: React.PropTypes.func.isRequired
  },

  render() {
    var width = this.props.width,
        height = this.props.height,
        value = this.props.value,
        title = this.props.title;
    return (
      <svg className="Slider" width={width} height={height}>
        <rect className="Slider-fill" 
              width={width * value} 
              height={height} />
        <rect className="Slider-border"
              width={width} 
              height={height} />
        <text x={width/2} y={height/2}>{
          value.toFixed(1)
        }</text>
      </svg>
    );
  },

  handleDrag() {
    var posY = d3.mouse(this.getDOMNode())[0],
        newValue = Math.max(0, Math.min(100,
          posY / this.props.width
        ));
    this.props.onValueChange(newValue);
  },

  componentDidMount() {
    var drag = d3.behavior.drag()
      .on('drag', this.handleDrag);

    d3.select(this.getDOMNode())
      .call(drag);
  }
});



module.exports = Slider;