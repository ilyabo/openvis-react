var VectorTile = React.createClass({

  propTypes: {
    x: React.PropTypes.number.isRequired,
    y: React.PropTypes.number.isRequired,
    z: React.PropTypes.number.isRequired
  },

  getInitialState() {
    return { geoms: null };
  },

  shouldComponentUpdate(nextProps, nextState) {
    var {x, y, z} = this.props;
    var {geoms} = this.state;

    return (
      (nextState.geoms !== geoms)  ||
      (nextProps.x !== x  ||  nextProps.y !== y  ||  nextProps.z !== z)
    );
  },


  getProjection() {
    var {x, y, z} = this.props;
    var k = Math.pow(2, z) * 256; // size of the world in pixels
    return d3.geo.mercator()
      .translate([k / 2 - x * 256, k / 2 - y * 256]) // [0°,0°] in pixels
      .scale(k / 2 / Math.PI);
  },

  render() {
    var {geoms} = this.state;
    var {x, y, z} = this.props;

    var tilePath = d3.geo.path()
      .projection(this.getProjection());

    return (
      <svg className="VectorTile" width={256} height={256}
           style={{left: x * 256, top: y * 256}}>
        {!geoms ? null  :
            geoms.map(d => <path key={d.id} d={tilePath(d)}
                                 className={d.properties.kind} />)
        }
      </svg>
    )
  },

  tileUrl() {
    return 'http://a.tile.openstreetmap.us/vectiles-highroad/' +
                   this.props.z + '/' + this.props.x + '/' + this.props.y + '.json';
  },

  componentDidMount() {
    var tile = this;
    this._xhr = request(this.tileUrl(), function(error, features) {
      tile.setState({ geoms: features });
    });
  },

  componentWillUnmount() {
    if (this._xhr) {
      this._xhr.abort();
    }
  }
});



var cache = {};
function request(url, callback) {
  if (cache[url]) {
    console.log('hit for ',url);
    callback(null, cache[url]);
    return;
  }
  console.log('miss for ',url);
  return d3.json(url, function(error, json) {
    var features = json.features.sort((a, b) =>
      a.properties.sort_key - b.properties.sort_key
    );
    cache[url] = features;
    callback(null, features)
  });
}
