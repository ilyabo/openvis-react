function generatePoints(n) {
  var nextRandom = d3.random.normal(0.5, 0.14);
  return d3.range(n).map(function() {
    return {
      a: nextRandom(),
      b: nextRandom()
    };
  });
}

var POINTS = generatePoints(3000);



var AppState = (function() {
  var density = 0.5, opacity = 0.5,
      points = null;
  
  function updatePoints() {
    points = POINTS.slice(0, Math.floor(density * POINTS.length));
  }
  updatePoints();  

  return {
    getPoints() {
      return points;
    },
    getDensity() {
      return density;
    },
    setDensity(newDensity) {
      density = newDensity;
      updatePoints();
      renderApp();
    },
    getOpacity() {
      return opacity;
    },
    setOpacity(newOpacity) {
      opacity = newOpacity;
      renderApp();
    }
  };

})();


// var Histogram = React.createClass({
//   render() {

//   }
// });


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

function renderApp() {
  React.render( <App />, document.body);
}

renderApp();

