const React = require('react');
const Player = require('./../player/Player');
const Slide = require('./../slide/Slide');
const Figure = require('./figure/Figure');
const Snippet = require('./snippet/Snippet');


require('./Slideshow.scss');

let Slideshow = React.createClass({

  propTypes: {
    currentSlide: React.PropTypes.number.isRequired
  },

  render() {
    let ww1 = (
      <Slide>
        <iframe src="interactive/ww1/index.html"
            width="955" height="894" style={{transform: 'scale(0.8)', border: 'none'}}
            scrolling="no" />
      </Slide>
    );

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
              <Figure height={550} names={[
                'past/edge.png',

                'past/Flowstrates-2012.png',
                'past/summerseries/wald.png',
                'past/cb1.png',
                //'past/aiddata-Argentina-correlation.png',
                'past/us-migrants-complexity-bundled.png',
                'past/summerseries/restaurants.png',
                'past/cgvis_onmac7.png',
                'past/berlin/dot-map.png',
                'past/summerseries/sbb.png',
                'past/plot_input_data__zoomed.png',
                //'past/birdeye-graphs-4.png',
                //'past/summerseries/verkehr.png',
                'past/aiddata2.png',
                'past/flowstrates-totals-in-maps4.png',
                //'past/summerseries/anthems.png',
                'past/horizon3-tooltip.png',
                'past/berlin/edge-map.png',
                'past/summerseries/porsche.png',
                'past/berlin/od-map_20-crop.png',
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
              ]} />
            </p>
          </Slide>

          <Slide>
            <Figure name="rock-art.jpg" />
          </Slide>


          <Slide name="civil-war">
            <Figure name="history-of-civil-war.png" />
          </Slide>



          <Slide name="_interactivity">
            <h1>{'Why interactivity?'}</h1>
              <ul>
                <li>Facets</li>
                <li>Exploration</li>
                <li>Personal stories</li>
                <li>Engage</li>
              </ul>
          </Slide>

          <Slide>
            <h1>It's hard</h1>
            <Figure name="past/comp-browser.gif" height={450} />
          </Slide>

          <Slide>
            <h1>{'Why is it hard?'}</h1>
            <Figure name="state-transitions.svg" />
          { /*
             we have to model the state transitions between all pairs of states

             when the state changes we  need to update the visual
             representation differently depending on what the previous state was
           */}
          </Slide>

          <Slide>
            <h1>{'Really?'}</h1>
            <Figure name="state-transitions.svg" />
          </Slide>




          {
            //ww1
            }

          <Slide>
            <Figure name="gog.jpg" width={980}/>
          </Slide>


          <Slide>
            <Figure name="gog-example.png" width={800}/>
          </Slide>


          <Slide>
            <p className="center">
            DATA {'\u2192'} aesthetic attrs of geom objects
            </p>
          </Slide>

        {

          //<Slide>
          //  <p className="center">
          //  {'\u2a0d'}: DATA  {'\u2192'} geom objects
          //  </p>
          //</Slide>
          }

          <Slide>
            <p className="center">
            {'\u2a0d'}: DATA  {'\u2192'} DOM objects
            </p>
          </Slide>

          <Slide>
            <p className="center">
              ggplot2, Protovis, D3, Bokeh
            </p>
          </Slide>


        {
          //<Slide>
          //  <p className="center">
          //    D3 is fantastic
          //  </p>
          //</Slide>
          //
          //<Slide>
          //  <p className="center">
          //    D3 has great support for interaction
          //  </p>
          //</Slide>
          }

         {
          //<Slide>
          //  <p className="center">
          //    Works great for small projects
          //  </p>
          //</Slide>
          }

          <Slide>
            <p className="center">
             {'Does it scale well?'}
            </p>
          </Slide>

          { ww1 }


          <Slide>
            <h1>Towards Reusable Charts</h1>
            <ul>
              <li>{'Component model?'}</li>
              <li>{'Event system?'}</li>  { /* we still end up with too many dependencies, or full render */ }
              <li>{'How to handle state?'}</li>  { /* it doesn't tell us, have to come up with something ad hoc */ }
            </ul>
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
            <h1>MVC</h1>
            <ul>
              <li>Models are designed for views</li>
              <li>State is scattered and redundant</li>
              <li>Many dependencies</li>
              <li>Hard to reason about state transitions</li>
             {
            //=>
            //   <li>Inconsistent state</li>
            //   <li>Requires lots of debugging</li>
            // Partial updates and mutable state stored in the DOM also contribute to the complexity often leading to inconsistent representations of the application state.
             }
            </ul>
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


        {
          //<Slide>
          //  <p className="center">
          //    <div>Important: transitions between states are simpler
          //    because we don't have to model transitions between each pair of states
          //    </div>
          //  </p>
          //</Slide>
          }



          <Slide>
            <Figure name="app-state.svg"  // So can this work?
                   />
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
            <h2>David Nolen's Todo MVC test</h2>
            <Figure name="om-vs-backbone.png" height={700}/>
          </Slide>

          <Slide>
            <Figure name="react-diff.svg"/>
          </Slide>

          <Slide>
            <Snippet title="Hello, world" path="hello" />
          </Slide>

          <Slide>
            <Snippet title="JSX" path="hello2"/>
          </Slide>

          <Slide>
            <Snippet title="Components" path="hello-component"/>
          </Slide>

          <Slide>
            <Snippet title="Vis" path="scatterplot" font={0.65}  output={true} />
          </Slide>

          <Slide>
            <Snippet title="React + D3" path="scatterplot-d3" font={0.7} output={true} />
          </Slide>

          <Slide>
            { /* same thing could be done with d3,
                 but with react it scales to the whole app */}
            <Snippet title="Update" path="scatterplot-update" font={0.6} output={true}  />
          </Slide>


          <Slide>
            <iframe src="interactive/herrstucki/anim-d3/index.html"
                width="800" height="500"  style={{transform: 'scale(0.8)', border: 'none'}}
                scrolling="no" />
          </Slide>

          <Slide>
            <iframe src="interactive/herrstucki/anim-react/index.html"
                width="800" height="500"  style={{transform: 'scale(0.8)', border: 'none'}}
                scrolling="no" />
          </Slide>



          <Slide>
            <Snippet title="Animation" path="scatterplot-anim" font={0.6} output={true}  />
          </Slide>

        {
          //<Slide>
          //  <Snippet title="Choropleth map" path="choropleth/choropleth.js" font="0.75" />
          //</Slide>
          //
          //<Slide>
          //  <Snippet title="Component inner state" path="choropleth/choropleth.js" font="0.75"
          //      // slider
          //    />
          //</Slide>

        //<Slide>
        //  <Snippet title="Animated CSS transition" path="choropleth/choropleth.js" font="0.75" />
        //</Slide>
        //
        //<Slide>
        //  <Snippet title="Animated transition" path="choropleth/choropleth.js" font="0.75" />
        //</Slide>
        //
        //<Slide>
        //  <Snippet title="Animated enter/exit" path="choropleth/choropleth.js" font="0.75" />
        //</Slide>
          }


          <Slide>
            {
             //immutability + shouldComponentUpdate  slippy map
            }
            <Snippet title="Slippy vector tile map" path="choropleth" font={0.75} />
          </Slide>



        {
          //<Slide>
          //  <h1>MVC -> Flux</h1>
          //  Data flow in one direction
          //    <ul>
          //      <li>Models -> Views</li>  { /* https://speakerdeck.com/jviereck/introduction-to-flux #22 */}
          //      <li>View -> Controller</li>
          //      <li>Controller -> Models</li>
          //    </ul>
          //</Slide>
          //
          //<Slide>
          //  <h1>Flux</h1>
          //
          //  <ul>
          //    <li>Store: AppState + Business Logic</li>
          //    <li>Action: Explicit update expression</li>
          //    <li>Dispatcher:
          //      <ul>
          //        <li>Single action at any point in time, prevent cascading
          //          (view A updates Store S, view B updates Store Q)</li>
          //      </ul>
          //    </li>
          //    <li></li>
          //  </ul>
          //</Slide>
          //
          //
          //<Slide>
          //  <h1>Flux</h1>
          //  <Figure name="flux.svg"/>
          //</Slide>





          //<Slide>
          //server-side-rendering.js    + isomorphic
          //</Slide>

          //<Slide>
          // responsive
          //</Slide>

          }

        </Player>
      </div>
    );
          //<Slide>
          //  <code>
          //  {"React.render(React.DOM.h1({id: 'Hello'}, 'Hello World'), document.body);"}
          //  </code>
          //</Slide>

    //<Slide name="big-data">
    //  <h1>BIG DATA</h1>
    //  Summarization + Interactivity
    //</Slide>


  }

});

module.exports = Slideshow;
