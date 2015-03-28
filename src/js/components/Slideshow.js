const React = require('react');
const _ = require('underscore');
const Actions = require('actions/Actions');

require('./Slideshow.scss');

const KEYS = _.invert({
  left: 37,
  right: 39,
  space: 32
});

let Slideshow = React.createClass({

  propTypes: {
    currentSlide: React.PropTypes.number.isRequired
  },

  render() {
    let {children, currentSlide} = this.props;
    return (
      <div className="Slideshow">
      { children ? children[currentSlide - 1] : null }
        <div className="Slideshow-current">
          {currentSlide} of {children.length}
        </div>
      </div>
    );
  },

  handleKeydown(event) {
    let {children, currentSlide} = this.props;
    switch (KEYS[event.which]) {
      case 'left':
        if (currentSlide > 1) Actions.prev();
        break;

      case 'right':
      case 'space':
        if (currentSlide < children.length) Actions.next();
        break;
    }
  },

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeydown);
  },

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeydown);
  }



});

module.exports = Slideshow;
