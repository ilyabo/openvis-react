var data = [
  { a: 0.1, b: 0.7, c: 0.3 },
  { a: 0.3, b: 0.5, c: 0.4 },
  { a: 0.4, b: 0.5, c: 0.5 },
  { a: 0.5, b: 0.4, c: 0.7 },
  { a: 0.7, b: 0.7, c: 0.8 }
];

var ScatterPlot = React.createClass({
  render: function() {
    return (
      <svg width={400} height={400}>
        { this.props.points
            .map((d, i) =>
              <circle key={i}
                cx={d.a * 400}
                cy={400 - d.b * 400}
                r={Math.sqrt(d.c) * 20}/>
            )
        }
      </svg>
    );
  }
});

React.render(
  <ScatterPlot points={data} />,
  document.body
);
