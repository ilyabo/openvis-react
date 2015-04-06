var ScatterPlot = React.createClass({
  render() {
    var x = d3.scale.linear().domain([0, 1]).range([0, 400]),
        y = d3.scale.linear().domain([0, 1]).range([400, 0]),
        r = d3.scale.sqrt().domain([0, 1]).range([0, 20]);

    return (
      <svg width={400} height={400}>
      { this.props.points
          .map((d, i) =>
            <circle key={i}
              data-cx={x(d.a)} data-cy={y(d.b)}
              data-r={r(d.c)}/>
          )
      }
      </svg>
    );
  },

  componentDidUpdate() {
    d3.select(this.getDOMNode())
    .selectAll('circle')
      .transition()
      .duration(500)
        .attr('cx', function() { return d3.select(this).attr('data-cx') })
        .attr('cy', function() { return d3.select(this).attr('data-cy') })
        .attr('r', function() { return d3.select(this).attr('data-r') });
  },


});
