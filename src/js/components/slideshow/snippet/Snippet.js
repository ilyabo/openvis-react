const React = require('react');
const Highlight = require('react-highlight');
const {PureRenderMixin} = require('react/addons').addons;


require('../../../../../node_modules/highlight.js/styles/color-brewer.css');
require('./Snippet.scss');

let Snippet = React.createClass({

  propTypes: {
    title: React.PropTypes.string,
    font: React.PropTypes.number,
    path: React.PropTypes.string.isRequired,
    output: React.PropTypes.bool
  },

  mixins: [PureRenderMixin],


  getDefaultProps() {
    return {
      font: 0.8
    }
  },

  render() {
    let {font, title, path, output} = this.props;
    return (
      <div className="Snippet">
        {!title ? null :
          <div className="Snippet-title">{title}</div>
        }

        <table>
          <td>
            <div style={{fontSize: font+'rem'}}>
              <Highlight>
              { require('raw!../../../../interactive/snippets/' + path + '/' + path + '.js') }
              </Highlight>
            </div>
          </td>
        {!output ? null :
          <td style={{verticalAlign:'top'}}>
            <iframe  className="Snippet-output"
              src={'../../../../interactive/snippets/' + path + '/index.html'}
              width="400" height="400"
              scrolling="no" />
          </td>
        }
        </table>
      </div>
    );
  }

});

module.exports = Snippet;
