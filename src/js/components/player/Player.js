const React = require('react/addons');
const _ = require('underscore');
const Actions = require('actions/Actions');
const Hammer = require('react-hammerjs');

require('./Player.scss');

const KEYS = _.invert({
  left: 37,
  right: 39,
  space: 32
});

let Player = React.createClass({

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
      <Hammer className="Player" onSwipe={this.handlePan}>
        { !children ? null :
          <React.addons.TransitionGroup transitionName="slide" component="div">
            { React.addons.cloneWithProps(children[currentSlide - 1],
              {
                key: currentSlide,   // to ensure that a new element is created each time so that
                                     // componentWillEnter and componentWillLeave are triggered on
                                     // each slide change
                scale: scale
              }) }
          </React.addons.TransitionGroup>
          }
        <div className="Player-current">
          {currentSlide} of {children.length}
        </div>
      </Hammer>
    );
  },

  handlePan(e) {
    console.log(e.deltaX);
    if (e.deltaX < -200) {
      this.handleNext();
    }
    else if (e.deltaX > 200) {
      this.handlePrev();
    }
  },

  handlePrev() {
    let {children, currentSlide} = this.props;
    if (currentSlide > 1) Actions.prev(); else Actions.jumpTo(children.length);
  },

  handleNext() {
    let {children, currentSlide} = this.props;
    if (currentSlide < children.length) Actions.next(); else Actions.jumpTo(1);
  },

  handleKeydown(event) {
    switch (KEYS[event.which]) {
      case 'left':
        this.handlePrev();
        break;

      case 'right':
      case 'space':
        this.handleNext();
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
    window.focus();  // for keystrokes to work without having to click first
  },

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeydown);
    window.removeEventListener('resize', this.handleResize, this);
  }



});

module.exports = Player;
