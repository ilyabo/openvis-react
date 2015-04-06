var ScatterPlot = React.createClass({
  render() {
    var x = d3.scale.linear().domain([0, 1]).range([0, 400]),
        y = d3.scale.linear().domain([0, 1]).range([400, 0]),
        r = d3.scale.sqrt().domain([0, 1]).range([0, 20]);

    return (
      <svg width={400} height={400}>
        <React.addons.TransitionGroup
            transitionName="fade"
            component="g">
        { this.props.points
            .map((d, i) =>
                <Dot key={Math.random()}
                  x={x(d.a)}
                  y={y(d.b)}
                  r={r(d.c)} />
            )
        }
        </React.addons.TransitionGroup>
      </svg>
    );
  }
});

var Dot = React.createClass({
  render() {
    return <circle cx={this.props.x}
                   cy={this.props.y}
                   r={this.props.r} />
  },

  componentWillEnter(done) {
    d3.select(this.getDOMNode())
      .style('opacity', 0)
    .transition('fade-in')
      .duration(750)
      .style('opacity', 1)
    .each('end', done)
  },

  componentWillLeave(done) {
    d3.select(this.getDOMNode())
    .transition('fade-out')
      .duration(750)
      .style('opacity', 0)
    .each('end', done)
  }
});

