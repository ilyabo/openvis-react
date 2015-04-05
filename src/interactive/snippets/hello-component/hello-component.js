var Greeting = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired
  },
  render: function() {
     return (
       <div className="greeting">
         Hello, {this.props.name}!
       </div>
     );
  }
});

React.render(
  <Greeting name="John!" />,
  document.body
);
