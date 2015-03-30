const React = require('react');
const Player = require('./../player/Player');
const Slide = require('./../slide/Slide');
const Figure = require('./figure/Figure');
const Highlight = require('react-highlight');


require('../../../../node_modules/highlight.js/styles/github.css');
require('./Slideshow.scss');

let Slideshow = React.createClass({

  propTypes: {
    currentSlide: React.PropTypes.number.isRequired
  },

  render() {
    let ww1 = (
      <Slide>
        <iframe src="interactive/ww1/index.html" width="955" height="894" style={{transform: 'scale(0.8)'}}/>
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
            <Figure name="rock-art.jpg" />
          </Slide>


          <Slide name="civil-war">
            <Figure name="history-of-civil-war.png" />
          </Slide>



          <Slide>
            <h1>{'Why interactivity?'}</h1>
            <ul>
              <li>Show one facet of data at a time</li>
              <li>Tell a personal story</li>
              <li>Engage the audience</li>
            </ul>
          </Slide>


          { ww1 }

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

          <Slide>
            <p className="center">
            {'\u2a0d'}: DATA  {'\u2192'} geom objects
            </p>
          </Slide>

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


          <Slide>
            <p className="center">
              D3 is fantastic
            </p>
          </Slide>

          <Slide>
            <p className="center">
              D3 has great support for interaction
            </p>
          </Slide>


          <Slide>
            <p className="center">
              Works great for small projects
            </p>
          </Slide>

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
            <Figure name="react-diff.svg"/>
          </Slide>

          <Slide>
            <Highlight>
            { require('raw!../../../snippets/hello/hello.jsx') }
            </Highlight>
          </Slide>



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
