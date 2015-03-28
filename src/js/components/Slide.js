const React = require('react');
const {PureRenderMixin} = require('react/addons').addons;


require('./Slide.scss');

let Slide = React.createClass({

  propTypes: {},

  mixins: [PureRenderMixin],


  render() {
    let {children} = this.props;
    return (
      <div className="Slide">
        { children }
      </div>
    );
  }

});

module.exports = Slide;
