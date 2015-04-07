const React = require('react');
const Player = require('./../player/Player');
const Slide = require('./../slide/Slide');
const Figure = require('./figure/Figure');
const Snippet = require('./snippet/Snippet');
const SlidersAverage = require('../slider/SlidersAverage');


require('./Slideshow.scss');



let Attribution = React.createClass({
    render() {
      return <div className="Slide-attribution">{this.props.children}</div>
    }
});

let Columns = React.createClass({
    render() {
      return <div className="Columns">
        {this.props.children.map(child =>
          <div className="Column">{child}</div>
        )}
      </div>
    }
});

let Slideshow = React.createClass({

  propTypes: {
    currentSlide: React.PropTypes.number.isRequired
  },

  render() {
    return (
      <div className="Slideshow">
        <Player currentSlide={this.props.currentSlide}>



          <Slide name="title">
            <h1>Interactive Datavis with React</h1>
            <hr/>
            <h2>Taming the Complexity of the Changing State</h2>
          </Slide>


          <Slide>
            <h2>Interactive Things</h2>
            <Figure name="jeremy-and-peter.png" width={950} />
          </Slide>

          <Slide name="self-intro">
            <p className="center">
              <div className="intro">
                <div className="intro-innner">
                  <div>Ilya Boyandin</div>
                  <div className="role">Data Visualization Engineer</div>
                  <div className="company">Teralytics</div>
                </div>
              </div>
            </p>
          </Slide>

          <Slide>
            <Figure height={550} names={[
              'past/Flowstrates-2012.png',
              'past/summerseries/wald.png',
              'past/cb1.png',
              'past/us-migrants-complexity-bundled.png',
              'past/summerseries/restaurants.png',
              'past/cgvis_onmac7.png',
              'past/berlin/dot-map.png',
              'past/summerseries/sbb.png',
              'past/plot_input_data__zoomed.png',
              'past/birdeye-graphs-4.png',
              'past/aiddata2.png',
              'past/flowstrates-totals-in-maps4.png',
              'past/horizon3-tooltip.png',
              'past/berlin/edge-map.png',
              'past/summerseries/porsche.png',
              'past/summerseries/schweizen2.png',
              'past/ballot2.png',
              'past/summerseries/distanzen.jpg',
              'past/cb2.png',
              'past/interaction-timeline.png',
              'past/summerseries/ch-migration.png',
              'past/snf.png',
              'past/summerseries/wetter.png',
              'past/2012-orangevaya-zaraza3-crop.png',
              'past/trains-stations-zoom2.png',
              'past/remittances.png',
              'past/summerseries/strompreise.png',
              'past/gemeinwohl.png',
              'past/ww1.png',
              'past/ballot.png',
              'past/world-trade.png',
              'past/edge.png'
            ]} />          </Slide>

          <Slide>
            <Figure name="rock-art.jpg" />
          </Slide>


          <Slide name="civil-war">
            <Figure name="history-of-civil-war.png" />
          </Slide>



          <Slide name="_interactivity">
            <h1>{'Why interactivity?'}</h1>
              <ul>
                <li>Faceted exploration</li>
                <li>Personal stories</li>
                <li>Engaging</li>
              </ul>
          </Slide>

          <Slide>
            <h1>It's hard</h1>
            <Figure name="past/comp-browser.gif" height={450} />
          </Slide>

          <Slide>
            <h1>{'Why is it hard?'}</h1>
            <Figure name="state-transitions.svg" />
          </Slide>

          <Slide>
            <h1>{'Really?'}</h1>
            <Figure name="state-transitions.svg" />
          </Slide>

          <Slide>
            <Figure name="gog.jpg" width={980}/>
          </Slide>


          <Slide>
            <Figure name="gog-example.png" width={800}/>
          </Slide>


          <Slide>
            <p className="center">
            {'\u2a0d'}: DATA  {'\u2192'} DOM objects
            </p>
          </Slide>

          <Slide>
            <p className="center">
              ggplot, Protovis, D3, Bokeh, vega...
            </p>
          </Slide>


          <Slide>
            <p className="center">
             {'Does it scale?'}
            </p>
          </Slide>

          {
            <Slide>
              <iframe src="interactive/ww1/index.html"
                  width="955" height="894" style={{transform: 'scale(0.8)', border: 'none'}}
                  scrolling="no" />
            </Slide>
          }


          <Slide>
            <h1>D3 reusable chart</h1>
            <Columns>
              <Snippet name="reusable-chart" font={0.6} />
              <ul>
                <li>{'Component model?'}</li>
                <li>{'How to handle state?'}</li>
                <li>{'Data flow?'}</li>
              </ul>
            </Columns>
          </Slide>

          <Slide>
            <Figure name="component-dependencies.svg" />
          </Slide>

          <Slide>
            <h1>MVC</h1>
            <Figure name="mvc-simple.svg"/>
          </Slide>

          <Slide>
            <Figure name="mvc-complex.svg"/>
          </Slide>




          <Slide>
            <h1>Better</h1>
            <ol>
              <li>Get the app state right</li>
              <li>Define how any state is rendered</li>
            </ol>

          </Slide>


          <Slide>
            <Figure name="app-state.svg"/>
          </Slide>



          <Slide>
            <p className="center">
            {'\u2a0d'}: DATA  {'\u2192'} DOM objects
            </p>
          </Slide>



          <Slide>
            <p className="center">
            <div>{'\u2a0d'}: APP STATE  {'\u2192'} DOM objects</div>
            </p>
          </Slide>



          <Slide>
            <p className="center">
              <div>{'\u2a0d'}: APP STATE 1 {'\u2192'} DOM objects</div>
              <div>{'\u2a0d'}: APP STATE 2 {'\u2192'} DOM objects</div>
              <div>{'\u2a0d'}: APP STATE 3 {'\u2192'} DOM objects</div>
              <div>...</div>
              <div> t {'\u2193'}</div>
            </p>
          </Slide>




          <Slide>
            <Figure name="app-state.svg"   />
            <p className="smaller center">{'Why haven\'t we always being doing this so far?'}</p>
          </Slide>


          <Slide>
            <p className="center">
            full render on each state change
            </p>
          </Slide>

          <Slide>
            <Figure name="react.png"/>
          </Slide>

          <Slide>
            <Figure name="virtual-dom-1.svg"/>
          </Slide>

          <Slide>
            <Figure name="react-diff.svg"/>
          </Slide>

          <Slide>
            <p className="center">
            full re-render is affordable
            </p>
          </Slide>

          <Slide>
            <Snippet title="Hello, world" name="hello" font={0.7}/>
          </Slide>

          <Slide>
            <Snippet title="JSX" name="hello2" font={0.7}/>
          </Slide>

          <Slide>
            <Snippet title="Components" name="hello-component"  font={0.7} output={true}/>
          </Slide>

          <Slide>
            <Snippet title="Vis" name="scatterplot" font={0.6}  output={true} />
          </Slide>

          <Slide>
            <Snippet title="React + D3" name="scatterplot-d3" font={0.6} output={true} />
          </Slide>


          <Slide>
            <Snippet title="Update" name="scatterplot-update" font={0.6} output={true}  />
          </Slide>

          <Slide>
            <h3>Animation</h3>
          </Slide>



          <Slide>
            <h3>React</h3>
            <iframe src="interactive/herrstucki/anim-react/index.html"
                width="800" height="500"  style={{transform: 'scale(0.8)', border: 'none'}}
                scrolling="no" />
            <Attribution>bl.ocks.org/herrstucki</Attribution>
          </Slide>

          <Slide>
            <h3>D3</h3>
            <iframe src="interactive/herrstucki/anim-d3/index.html"
                width="800" height="500"  style={{transform: 'scale(0.8)', border: 'none'}}
                scrolling="no" />
            <Attribution>bl.ocks.org/herrstucki</Attribution>
          </Slide>



          <Slide>
            <Snippet title="React/D3 Animation" name="scatterplot-anim" font={0.6} output={true}  />
          </Slide>

          <Slide>
            <Snippet title="Enter/exit transitions" name="scatterplot-anim2" font={0.6} output={true}  />
          </Slide>

          <Slide>
            <h3>in the works</h3>
            <Attribution>github.com/chenglou/react-tween-state</Attribution>
          </Slide>

          <Slide>
            <iframe src="http://lab.interactivethings.com/global-trade-africa/"
                width="955" height="700"
                style={{transform: 'scale(1)', border: 'none', background:'white'}}
                scrolling="no" />
          </Slide>


          <Slide>
            <Snippet title="Slider" name="slider" font={0.6} output={true}  />
          </Slide>


          <Slide>
            <Snippet title="Slider app" name="slider2" font={0.6} output={true}  />
          </Slide>


          <Slide>
            <Snippet title="More complex app" name="app" font={0.6} output={true}  />
          </Slide>

          <Slide>
            <Figure name="app-state.svg"/>
          </Slide>

          <Slide>
            <h1>Flux</h1>
            <Figure name="flux.svg"/>
          </Slide>

          <Slide>
            <h1>Relay</h1>
            <Figure name="relay.png" height="400"/>
          </Slide>




          <Slide>
            <Snippet title="Slippy map" name="slippy-map-slow" font={0.6} output={true} />
          </Slide>


          <Slide>
            <Snippet title="Slippy map" name="slippy-map-fast" font={0.6} output={true} />
          </Slide>


          <Slide>
            <Snippet name="should-component-update" />
          </Slide>

          <Slide>
            <Snippet title="Immutable-js" name="immutable" />
          </Slide>


          <Slide>
            <h3>Server-side rendering</h3>
          </Slide>

          <Slide>
            <Snippet title="Server-side rendering" name="server-side-rendering" />
          </Slide>

          <Slide>
            <h3>React Canvas, React Native</h3>
            <ul>
              <li><Attribution>github.com/Flipboard/react-canvas</Attribution></li>
              <li><Attribution>facebook.github.io/react-native</Attribution></li>
              <li><Attribution>github.com/reactjs/react-art</Attribution></li>
            </ul>
          </Slide>

          <Slide>
            <h3>React Developer Tools</h3>
          </Slide>


          <Slide>
            <h3>Hot code reloading</h3>
            <Attribution>gaearon.github.io/react-hot-loader/</Attribution>
          </Slide>


          <Slide>
            <SlidersAverage />
          </Slide>



          <Slide>
            <Figure name="om-vs-backbone.png" height={650}/>
            <Attribution>swannodette.github.io/2013/12/17/the-future-of-javascript-mvcs/</Attribution>
          </Slide>


          <Slide>
            <h2>React enables an architecture that...</h2>
            <ul>
              <li>
                <ul>
                  <li>is easy to reason about</li>
                  <li>scales to large applications</li>
                  <li>performs well when care is taken</li>
                  <li>is fun to use</li>
                </ul>
              </li>
            </ul>
          </Slide>

          <Slide>
            <h1>Thank you!</h1>
            <br/>
            <br/>
            @ilyabo
            <br/>
            <br/>
            github.com/ilyabo/openvis-react
          </Slide>

        </Player>
      </div>
    );

  }

});

module.exports = Slideshow;
