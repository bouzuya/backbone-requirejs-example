/*global App, Backbone, JST*/

App.Views = App.Views || {};

(function () {
  'use strict';

  App.Views.TaskCollectionView = Backbone.View.extend({

    tagName: 'ul',

    className: 'tasks',

    // id: '',

    events: {},

    // template: JST[],

    initialize: function() {
      this.views = [];
      this.listenTo(this.collection, 'add', this.onAdd);
      this.listenTo(this.collection, 'remove', this.onRemove);
      this.listenTo(this.collection, 'reset', this.onReset);
      this.listenTo(this.collection, 'sync', this.onSync);
    },

    render: function() {
      console.log('App.Views.TaskCollectionView#render');
      return this;
    },

    onAdd: function(model) {
      console.log('App.Views.TaskCollectionView#onAdd');
      var modelView = new App.Views.TaskView({ model: model });
      this.views.push(modelView);
      this.$el.append(modelView.render().$el);
    },

    onRemove: function(model, collection, options) {
      console.log('App.Views.TaskCollectionView#onRemove');
      this.views[options.index].remove();
      this.views.splice(options.index, 1);
    },

    onReset: function() {
      console.log('App.Views.TaskCollectionView#onReset');
      this.views.forEach(function(view) {
        view.remove();
      }, this);
      this.views = [];
      this.$el.empty();
    },

    onSync: function() {
      console.log('App.Views.TaskCollectionView#onSync');
    },

  });

})();
