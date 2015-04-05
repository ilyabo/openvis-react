var ChoroplethMap = React.createClass({
  render: function() {
    var geoPath = d3.geo.path().projection(d3.geo.mercator());
    var x = d3.scale.quantize()
      .domain(this.props.features.map(function(d) { return d.properties.value; }))
      .range([0, 400]);

    return (
      <svg width={400} height={400}>
      { this.props.features
          .map(function(feature) {
            return (
              <path d={geoPath(feature)}
                    fill={color(feature.properties.value} />
            )
          })
      }
      </svg>
    );
  }
});d