var ScatterPlot = React.createClass({
  render() {
    var x = d3.scale.linear().domain([0, 1]).range([0, 400]),
        y = d3.scale.linear().domain([0, 1]).range([400, 0]),
        r = d3.scale.sqrt().domain([0, 1]).range([0, 20]);

    return (
      <svg width={400} height={400}>
        { this.props.points
            .map((d, i) =>
                <Dot key={i} x={x(d.a)} y={y(d.b)}
                     r={r(d.c)} />
            )
        }
      </svg>
    );
  }
});

var Dot = React.createClass({
  render() {
    return <circle />
  },

  transition(duration) {
    d3.select(this.getDOMNode())
      .transition()
      .duration(duration)
        .attr('cx', this.props.x)
        .attr('cy', this.props.y)
        .attr('r', this.props.r);
  },

  componentDidMount() {
    this.transition(0);
  },

  componentDidUpdate() {
    this.transition(500);
  }

});



