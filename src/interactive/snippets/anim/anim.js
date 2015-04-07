var Anim = React.createClass({
  getInitialState() {
    return {
      t: 0
    }
  },

  componentDidMount() {
    d3.timer(t => this.setState({t}));
  },

  render() {
    return (
      <svg>
        {this.props.data.map((d) => {
          var alpha = TAU / d.f * (this.state.t % d.f);
          return <circle
            cx={d.x + Math.cos(alpha) * d.r}
            cy={d.y + Math.sin(alpha) * d.r}
            fill={color(d.color)} r={d.size} key={d.id} />
        })}
      </svg>
    );
  }
})
