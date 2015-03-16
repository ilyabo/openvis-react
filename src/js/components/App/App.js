var React = require('react');
var Store = require('stores/Store');
let Slideshow = require('./Slideshow');

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
    return <div className='App'>
      <Slideshow {...this.state}>

        <div className="Slide">
          <h1>Data viz with React</h1>
          Hello
        </div>

        <div>world</div>
      </Slideshow>
    </div>;


  }
});

module.exports = App;