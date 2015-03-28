const React = require('react');
const Store = require('stores/Store');
const Slideshow = require('./Slideshow');
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
      <Slideshow currentSlide={currentSlide}>

        <Slide>
          <h1>Data viz with React</h1>
          Hello
        </Slide>


        <Slide>world</Slide>


      </Slideshow>
    </div>;


  }
});

module.exports = App;