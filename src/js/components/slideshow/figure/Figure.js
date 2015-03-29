const React = require('react');
const {PureRenderMixin} = require('react/addons').addons;


require('./Figure.scss');

let Figure = React.createClass({

  propTypes: {
    name: React.PropTypes.string.isRequired,
    width: React.PropTypes.number,
    height: React.PropTypes.number
  },

  mixins: [PureRenderMixin],


  render() {
    let {name, width, height} = this.props;
    return (
      <div className="Figure">
        <img src={"images/"+ name} width={width} height={height}/>
      </div>
    );
  }

});

module.exports = Figure;
