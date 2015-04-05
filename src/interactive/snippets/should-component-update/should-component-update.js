shouldComponentUpdate: function(nextProps, nextState) {
  return this.props.value !== nextProps.value;
}