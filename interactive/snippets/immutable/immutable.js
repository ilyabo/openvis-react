var value1 = Immutable.Map({ foo: null });
var value2 = value1.set('foo', 'baz');
value1 === value2; // false

...

shouldComponentUpdate: function(nextProps) {
  return this.props.value !== nextProps.value;
}