var AppState = (function() {
  var density = 0.5;
  return {
    getDensity() {
      return density;
    },
    setDensity(newDensity) {
      density = newDensity;
      renderApp();
    }
  };

})();


var App = React.createClass({
  render() {
    return (
      <div className="App">

        <Slider width={200} height={40} 
                title="Density"
                value={AppState.getDensity()} 
                onValueChange={AppState.setDensity} />

      </div>
    );
  }
});

function renderApp() {
  React.render( <App />, document.body);
}

renderApp();