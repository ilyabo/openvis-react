var {Dispatcher} = require('flux');
var _ = require('underscore');


var AppDispatcher = _.extend(new Dispatcher(), {
  handleViewAction(action) {
    this.dispatch({
        source: 'VIEW_ACTION',
        action
    });
  }
});

module.exports = AppDispatcher;