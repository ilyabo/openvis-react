var AppDispatcher = require('dispatcher/AppDispatcher');
var _ = require('underscore');
var {EventEmitter} = require('events');

var currentSlide = 1;


var Store = _.extend(EventEmitter.prototype, {
  emitChange() {
    this.emit('change');
  },

  addChangeListener(callback) {
    this.on('change', callback);
  },

  removeChangeListener(callback) {
    this.removeListener('change', callback);
  },

  getCurrentSlide() {
    return currentSlide;
  },

  dispatcherIndex: AppDispatcher.register(function(payload) {
    var {action} = payload;

    switch (action.actionType) {
      case 'JUMP_TO':
        currentSlide = action.slide;
        break;
      case 'NEXT':
        currentSlide++;
        break;
      case 'PREV':
        if (currentSlide > 1) currentSlide--;
        break;
      default:
        return true;
    }
    
    Store.emitChange();
  })
});

module.exports = Store;
