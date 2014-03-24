define('models/task', ['backbone', 'namespace'], function(Backbone, App) {
  'use strict';

  App.Models.TaskModel = Backbone.Model.extend({

    idAttribute: '_id', // for MongoDB

    initialize: function() {
    },

    defaults: {
    },

    validate: function(attrs, options) {
    },

    parse: function(response, options)  {
      return response;
    }
  });

  return App.Models.TaskModel;
});
