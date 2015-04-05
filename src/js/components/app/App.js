const React = require('react');
const Store = require('stores/Store');
const Slideshow = require('./../slideshow/Slideshow');

require('../../../styles/normalize.css');
require('../../../styles/main.scss');
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
    return (
      <div className='App'>
        <Slideshow {...this.state}/>
      </div>
    );
  },

  componentDidUpdate() {
    window.location.hash = Store.getCurrentSlide();
  }
});

module.exports = App;