/*global App, Backbone, JST*/

App.Views = App.Views || {};

(function () {
  'use strict';

  App.Views.TaskView = Backbone.View.extend({

    tagName: 'li',

    className: 'task',

    template: JST['app/scripts/templates/task.ejs'],

    events: {
      'click .title': 'onClickTitleLabel',
      'click button.save': 'onClickSaveButton',
      'click button.delete': 'onClickDeleteButton'
    },

    initialize: function() {
      this.model.on('change', this.onChange, this);
      this.model.on('destroy', this.onDestroy, this);
    },

    render: function() {
      var json = this.model.toJSON();
      var html = this.template(json);
      this.$el.html(html);
      return this;
    },

    onChange: function(model) {
      console.log('App.Views.TaskView#onChange');
      this.render();
    },

    onDestroy: function(model) {
      console.log('App.Views.TaskView#onDestroy');
    },

    onClickTitleLabel: function() {
      this.$el.addClass('editing');
    },

    onClickSaveButton: function(e) {
      e.preventDefault();
      var title = this.$('input[name="title"]').val();
      var done = this.$('input[name="done"]').attr('checked') === 'checked';
      this.model.set('title', title);
      this.model.set('done', done);
      this.model.save(null, {
        success: (function() {
          this.$el.removeClass('editing');
        }).bind(this)
      });
    },

    onClickDeleteButton: function(e) {
      e.preventDefault();
      this.model.destroy();
    },



  });

})();
