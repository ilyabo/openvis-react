...

shouldComponentUpdate(nextProps, nextState) {
  var {x, y, z} = this.props;
  var {geoms} = this.state;

  return (
    (nextState.geoms !== geoms)  ||
    (nextProps.x !== x  ||  nextProps.y !== y  ||  nextProps.z !== z);
  );
}

...