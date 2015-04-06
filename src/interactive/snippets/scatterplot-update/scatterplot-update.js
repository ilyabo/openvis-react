var ScatterPlot = React.createClass({
  render() {
    var x = d3.scale.linear()
      .domain([0, 1])
      .range([0, 400]),

    y = d3.scale.linear()
      .domain([0, 1])
      .range([400, 0]),

    r = d3.scale.sqrt()
      .domain([0, 1])
      .range([0, 20]);

    return (
      <svg width={400} height={400}
           onClick={update}>
      { this.props.points
          .map((d,i) =>
            <circle key={i}
              cx={x(d.a)} cy={y(d.b)}
              r={r(d.c)}/>
          )
      }
      </svg>
    );
  }
});

function update() {
  React.render(
    <ScatterPlot points={generateRandomData()} />,
    document.body
  );
}

update();
