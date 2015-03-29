const React = require('react');
const d3 = require('d3');
const FADE_DURATION = 750;

require('./Slide.scss');

let Slide = React.createClass({

  propTypes: {
    scale: React.PropTypes.number.isRequired,
    className: React.PropTypes.string
  },

  render() {
    let {children, scale, className} = this.props;
    return (
      <div className={'Slide'+(className ? ' '+className : '')}
           style={{transform: 'translate(-50%, -50%) scale('+scale+')'}}>
        <div className="Slide-content">
          { children }
        </div>
      </div>
    );
  },

  componentWillEnter(done) {
    d3.select(this.getDOMNode())
      .style('opacity', 0)
    .transition()
      .duration(FADE_DURATION)
      .style('opacity', 1);

    // Using setTimeout here to ensure that 'done' is always called. With .each('end', done)
    // done isn't called if another transition is scheduled on the same element while the original
    // one is running. This can happen when quickly clicking on a tag filter button multiple times.
    setTimeout(done, FADE_DURATION);
  },


  componentWillLeave(done) {
    d3.select(this.getDOMNode())
    .transition()
      .duration(FADE_DURATION)
      .style('opacity', 0);

    setTimeout(done, FADE_DURATION);
  }


});

module.exports = Slide;
