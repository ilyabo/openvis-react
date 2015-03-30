var Greeting = React.createClass({
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
