var App = React.createClass({
  render() {
    return (
      <div className="App">

        <Slider width={200} height={35} 
                title="Density"
                value={AppState.getDensity()} 
                onValueChange={AppState.setDensity} />

        <Slider width={200} height={35} 
                title="Opacity"
                value={AppState.getOpacity()} 
                onValueChange={AppState.setOpacity} />

        <ScatterPlot width={200} height={200}
                points={AppState.getPoints()}
                opacity={AppState.getOpacity()}/>

      </div>
    );
  }
});