const React = require('react');
const Player = require('./Player');
const Slide = require('./Slide');

require('./Slideshow.scss');

let Slideshow = React.createClass({

  propTypes: {
    currentSlide: React.PropTypes.number.isRequired
  },

  render() {
    return (
      <div className="Slideshow">
        <Player currentSlide={this.props.currentSlide}>

          <Slide className="title">
            <h1>Interactive Datavis with React</h1>
            <h2>Taming the Complexity of the Changing State</h2>
          </Slide>


          <Slide>world</Slide>


        </Player>
      </div>
    );
  }

});

module.exports = Slideshow;
