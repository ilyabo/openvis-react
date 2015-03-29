const React = require('react');
const Player = require('./../player/Player');
const Slide = require('./../slide/Slide');
const Figure = require('./figure/Figure');

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
              <li>{'Event system?'}</li>
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
              <li>Hard to reason about state transitions
              </li>
            </ul>
          </Slide>


          <Slide>
            <h1>Better</h1>
            <ol>
              <li>Model the whole app state</li>
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
            {'\u2a0d'}: APP STATE  {'\u2192'} DOM objects
            </p>
          </Slide>




          <Slide>
            <h2>{'Could this fly?'}</h2>
            <Figure name="app-state.svg"/>
          </Slide>


          <Slide>
            <p className="center">
            Yes, but...
            </p>
          </Slide>

          <Slide>
            <p className="center">
            full render on each state change
            </p>
          </Slide>

          <Slide>
            <p className="center">
            {'Maybe there is a trick?'}
            </p>
          </Slide>


          <Slide>
            <code>
            {"React.render(React.DOM.h1({id: 'Hello'}, 'Hello World'), document.body);"}
            </code>
          </Slide>

        </Player>
      </div>
    );

    //<Slide name="big-data">
    //  <h1>BIG DATA</h1>
    //  Summarization + Interactivity
    //</Slide>


  }

});

module.exports = Slideshow;
