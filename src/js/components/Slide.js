const React = require('react');


require('./Slide.scss');

let Slide = React.createClass({

  propTypes: {
    scale: React.PropTypes.number.isRequired
  },

  render() {
    let {children, scale} = this.props;
    return (
      <div className="Slide" style={{transform: 'translate(-50%, -50%) scale('+scale+')'}}>
        <div className="Slide-content">
          { children }
        </div>
      </div>
    );
  }


});

module.exports = Slide;
