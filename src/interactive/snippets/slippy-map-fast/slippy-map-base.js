var SlippyMap = React.createClass({

  propTypes: {
    width: React.PropTypes.number.isRequired,
    height: React.PropTypes.number.isRequired,
    center: React.PropTypes.array.isRequired,
  },

  getInitialState() {
    return {
      scale: (1 << 19),
      translate: [-this.props.width / 2, -this.props.height / 2]
    };
  },

  componentDidMount() {
    var {width, height, center} = this.props;
    var {scale, translate} = this.state;

    var projection = this.getProjection();

    var zoom = d3.behavior.zoom()
      .scale(scale)
      .scaleExtent([1 << 18, 1 << 25])
      .translate(projection(center).map(x => -x))
      .on('zoom', this.zoomed);

    d3.select(this.getDOMNode())
      .call(zoom);

    this.zoom = zoom;
    this.zoomed();
  },

  zoomed() {
    this.setState({
      scale: this.zoom.scale(),
      translate: this.zoom.translate()
    });
  },


  getProjection() {
    return d3.geo.mercator()
      .scale(this.state.scale / 2 / Math.PI)
      .translate(this.state.translate);
  },

  getTransform(scale, translate) {
    var k = scale / 256, r = scale % 1 ? Number : Math.round;
    return 'matrix3d(' + [k, 0, 0, 0, 0, k, 0, 0, 0, 0, k, 0,
        r(translate[0] * scale), r(translate[1] * scale), 0, 1 ] + ')';
  },

  render() {
    var {width, height} = this.props;
    var {scale, translate} = this.state;

    var projection = this.getProjection();
    var tiler = d3.geo.tile()
        .size([width, height])
        .scale(scale)
        .translate(translate);

    var tiles = tiler();




    return (
      <div className="TileMap" style={{width: width, height: height}}>
        <div className="TileMap-layer"
             style={{
              transform: this.getTransform(tiles.scale, tiles.translate),
              '-webkit-transform': this.getTransform(tiles.scale, tiles.translate) }}>
            {tiles.map(d =>
                <RasterTile key={d.join('|')} x={d[0]} y={d[1]} z={d[2]} />
            )}
            {tiles.map(d =>
                <VectorTile key={d.join('|')} x={d[0]} y={d[1]} z={d[2]} />
            )}
            </div>
      </div>
    );

  }
});







var RasterTile = React.createClass({

  propTypes: {
    x: React.PropTypes.number.isRequired,
    y: React.PropTypes.number.isRequired,
    z: React.PropTypes.number.isRequired,
  },

  render() {
    var {x, y, z} = this.props;
    return (
      <img className="RasterTile"
           src={'http://a.www.toolserver.org/tiles/bw-mapnik/'+z+'/'+x+'/'+y+'.png'}
           style={{left: x * 256, top: y * 256}}
           width={256} height={256} />
    );
  }

});


var cache = {};
function request(url, callback) {
  if (cache[url]) {
    console.log('hit for ',url);
    callback(null, cache[url]);
    return;
  }
  return d3.json(url, function(error, json) {
    var features = json.features.sort((a, b) =>
      a.properties.sort_key - b.properties.sort_key
    );
    cache[url] = features;
    callback(null, features)
  });
}
