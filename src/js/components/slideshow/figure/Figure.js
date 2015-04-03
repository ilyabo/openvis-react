const React = require('react');
const SCROLL_SPEED = 0.1;

require('./Figure.scss');

let Figure = React.createClass({

  propTypes: {
    name: React.PropTypes.string,
    names: React.PropTypes.arrayOf(React.PropTypes.string),
    width: React.PropTypes.number,
    height: React.PropTypes.number
  },

  getInitialState() {
    return {
      currentIndex: 0
    }
  },

  handleClick(ev) {
    let {names} = this.props;
    let {currentIndex} = this.state;

    this.setState({
      currentIndex: Math.min(names.length - 1, currentIndex + 1)
    });
  },

  render() {
    let {names, name, width, height} = this.props;
    let {currentIndex} = this.state;
    if (!names && name) {
      names = [name];
    }
    return (
      <div className="Figure" onClick={this.handleClick}>
      {
        <img src={"images/"+ names[currentIndex]} width={width} height={height}/>
      }
      </div>
    );
  }

});

module.exports = Figure;
