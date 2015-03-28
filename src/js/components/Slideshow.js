const React = require('react/addons');
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

  getInitialState() {
    return { scale: 1 };
  },

  render() {
    let {children, currentSlide} = this.props;
    let {scale} = this.state;
    return (
      <div className="Slideshow">
        { children ?
            React.addons.cloneWithProps(children[currentSlide - 1], {scale: scale})
          : null
          }
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

  handleResize() {
    this.setState({
      scale: Math.min(window.innerWidth / 1024, window.innerHeight / 768)
    });
  },

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeydown);
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  },

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeydown);
    window.removeEventListener('resize', this.handleResize, this);
  }



});

module.exports = Slideshow;
