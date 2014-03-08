/*global App, Backbone*/

App.Models = App.Models || {};

(function () {
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

})();
