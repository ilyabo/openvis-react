var SomeRecord = Immutable.Record({ foo: null });
var x = new SomeRecord({ foo: 'bar'  });
var y = x.set('foo', 'baz');
x === y; // false

...

shouldComponentUpdate: function(nextProps) {
  return this.props.someRecord !== nextProps.someRecord;
}