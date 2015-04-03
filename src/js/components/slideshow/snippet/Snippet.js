const React = require('react');
const Highlight = require('react-highlight');
const {PureRenderMixin} = require('react/addons').addons;


require('../../../../../node_modules/highlight.js/styles/color-brewer.css');
require('./Snippet.scss');

let Snippet = React.createClass({

  propTypes: {
    title: React.PropTypes.string,
    font: React.PropTypes.number,
    path: React.PropTypes.string.isRequired
  },

  mixins: [PureRenderMixin],


  getDefaultProps() {
    return {
      font: 0.8
    }
  },

  render() {
    let {font, title, path} = this.props;
    return (
      <div className="Snippet">
        {!title ? null :
          <div className="Snippet-title">{title}</div>
        }
        <div style={{fontSize: font+'rem'}}>
          <Highlight>
          { require('raw!../../../../snippets/' + path) }
          </Highlight>
        </div>
      </div>
    );
  }

});

module.exports = Snippet;
