const React = require('react');
const Store = require('stores/Store');
const Player = require('./Player');
const Slide = require('./Slide');

require('../../styles/normalize.css');
require('../../styles/main.scss');
require('./App.scss');


function getStoreState() {
  return {
    currentSlide: Store.getCurrentSlide()
  };
}

var App = React.createClass({
  getInitialState() {
    return getStoreState();
  },

  componentDidMount() {
    Store.addChangeListener(this.handleChange);
  },

  componentWillUnmount() {
    Store.removeChangeListener(this.handleChange);
  },

  handleChange() {
    this.setState(getStoreState());
  },

  render() {
    let {currentSlide} = this.state;

    return <div className='App'>
      <Player currentSlide={currentSlide}>

        <Slide className="title">
          <h1>Interactive Datavis with React</h1>
          <h2>Taming the Complexity of the Changing State</h2>
        </Slide>


        <Slide>world</Slide>


      </Player>
    </div>;


  }
});

module.exports = App;