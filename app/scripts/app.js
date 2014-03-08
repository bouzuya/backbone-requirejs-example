/* global $, App */
'use strict';

(function() {
  App.init = function() {
    var view = new App.Views.AppView();
    view.render().$el.appendTo($('body'));

    Backbone.history.start();
  };
})();
