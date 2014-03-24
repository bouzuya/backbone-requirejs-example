define('app', ['backbone', 'namespace', 'views/app'], function(Backbone, App, AppView) {
  'use strict';

  App.init = function() {
    var view = new App.Views.AppView();
    view.render().$el.appendTo($('body'));

    Backbone.history.start();
  };

  return App;
});
