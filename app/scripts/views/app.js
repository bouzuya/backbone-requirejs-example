/*global App, Backbone, JST*/

App.Views = App.Views || {};

(function () {
  'use strict';

  App.Views.AppView = Backbone.View.extend({

    tagName: 'div',

    // className: '',

    id: 'app',

    events: {
      'click #read': 'onClickReadButton',
      'click #create': 'onClickCreateButton',
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
      this.$el.append($('<button id="create">create</button>'));
      this.$el.append($('<button id="read">read</button>'));
      this.$el.append($('<input type="text" id="_id" value="0" /><input type="text" id="title" value="title" /><input type="checkbox" id="done" checked="checked" /><button id="save">save</button>'));
      this.$el.append(this.homeView.render().$el);
      this.$el.append(this.taskCollectionView.render().$el);
      return this;
    },

    onClickReadButton: function() {
      this.taskCollection.fetch();
    },

    onClickCreateButton: function() {
      this.taskCollection.create({
        title: 'title' + this.taskCollection.length,
        done: false
      });
    },

  });

})();
