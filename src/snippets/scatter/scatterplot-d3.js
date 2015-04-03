var ScatterPlot = React.createClass({
  render: function() {
    var x = d3.scale.linear()
      .domain([0, 1])
      .range([0, 400]);

    var y = d3.scale.linear()
      .domain([0, 1])
      .range([400, 0]);

    var r = d3.scale.sqrt()
      .domain([0, 1])
      .range([0, 20]);

    return (
      <svg width={400} height={400}>
      { this.props.points
          .map(function(d) {
            return (
              <circle
                cx={x(d.a)} cy={y(d.b)}
                r={r(d.c)}/>
            )
          })
      }
      </svg>
    );
  }
});d