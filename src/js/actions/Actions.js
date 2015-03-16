var AppDispatcher = require('dispatcher/AppDispatcher');

module.exports = {

  jumpTo(slide) {
    return AppDispatcher.handleViewAction({
      actionType: 'JUMP_TO',
      slide: slide
    });
  },

  next() {
    return AppDispatcher.handleViewAction({
      actionType: 'NEXT'
    });
  },

  prev() {
    return AppDispatcher.handleViewAction({
      actionType: 'PREV'
    });
  }

};
