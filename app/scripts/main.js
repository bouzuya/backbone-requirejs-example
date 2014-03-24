require({
  paths: {
    jquery: '../bower_components/jquery/dist/jquery',
    underscore: '../bower_components/underscore/underscore',
    backbone: '../bower_components/backbone/backbone',
  },
  shim: {
    templates: {
      init: function() {
        return this.JST;
      }
    }
  }
},
['jquery', 'app'],
function($, App) {
  'use strict';

  $(document).ready(function () {
    App.init();
  });
});
