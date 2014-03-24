define('collections/task', ['backbone', 'namespace', 'models/task'], function(Backbone, App) {
  'use strict';

  App.Collections.TaskCollection = Backbone.Collection.extend({

    url: 'http://localhost:3000/tasks',

    model: App.Models.TaskModel,

    parse: function(res) {
      return res;
    }

  });

  return App.Collections.TaskCollection;
});
