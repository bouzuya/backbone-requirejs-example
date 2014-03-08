/* global App, Backbone */

App.Collections = App.Collections || {};

(function () {
  'use strict';

  App.Collections.TaskCollection = Backbone.Collection.extend({

    url: 'http://localhost:3000/tasks',

    model: App.Models.TaskModel,

    parse: function(res) {
      return res;
    }

  });

})();
