/*global App, Backbone, JST*/

App.Views = App.Views || {};

(function () {
  'use strict';

  App.Views.HomeView = Backbone.View.extend({

    tagName: 'div',

    className: 'page',

    id: 'home',

    template: JST['app/scripts/templates/home.ejs'],

    initialize: function() {
    },

    render: function() {
      var json = { title: 'foo', content: 'bar' };
      var html = this.template(json);
      this.$el.html(html);
      return this;
    }

  });

})();
