const React = require('react');


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
  }


});

module.exports = Slide;
