define('views/app', ['templates', 'backbone', 'namespace', 'collections/task', 'views/home', 'views/task-collection'], function(JST, Backbone, App, TaskCollection, HomeView, TaskCollectionView) {
  'use strict';

  App.Views.AppView = Backbone.View.extend({

    tagName: 'div',

    // className: '',

    id: 'app',

    events: {
      'click #reload': 'onClickReloadButton',
      'click #save': 'onClickSaveButton'
    },

    // template: JST['app/scripts/templates/app.ejs'],

    initialize: function() {
      this.taskCollection = new App.Collections.TaskCollection();
      this.homeView = new App.Views.HomeView();
      this.taskCollectionView = new App.Views.TaskCollectionView({
        collection: this.taskCollection
      });
    },

    render: function() {
      this.$el.empty();
      this.$el.append($('<button id="reload">reload</button>'));
      this.$el.append($('<input type="text" id="title" value="title" /><button id="save">save</button>'));
      this.$el.append(this.homeView.render().$el);
      this.$el.append(this.taskCollectionView.render().$el);

      this.taskCollection.fetch();
      return this;
    },

    onClickReloadButton: function(e) {
      e.preventDefault();
      this.taskCollection.fetch();
    },

    onClickSaveButton: function(e) {
      e.preventDefault();
      this.taskCollection.create({
        title: $('#title').val(),
        done: false
      });
    },
  });

  return App.Views.AppView;
});
