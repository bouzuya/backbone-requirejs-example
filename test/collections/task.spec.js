/*global describe, beforeEach, assert, it  */
'use strict';

// event  | HTTP method  | method
// -------+--------------+----------
// create | POST         | save() ( isNew() is truthy )
// update | PUT          | save()
// patch  | PATCH        | save() ( options.patch is truthy)
// delete | DELETE       | destroy()
// read   | GET          | fetch()
//
// var methodMap = {
//     'create': 'POST',
//     'update': 'PUT',
//     'patch':  'PATCH',
//     'delete': 'DELETE',
//     'read':   'GET'
// };
describe('Task Collection', function () {

  beforeEach(function () {
    this.Task = new App.Collections.TaskCollection();
  });



  // describe('', function() {
  //   it('works', function(done) {
  //     this.Task.on('add', function(model) { console.log('onadd'); }, this);
  //     this.Task.on('remove', function(model) { console.log('onremove'); }, this);
  //     this.Task.on('reset', function(model) { console.log('onreset'); }, this);
  //     this.Task.on('sort', function(model) { console.log('onsort'); }, this);
  //     this.Task.on('destroy', function(model) { console.log('ondestroy'); }, this);
  //     this.Task.on('request', function(model) { console.log('onrequest'); }, this);
  //     this.Task.on('sync', function(model) { console.log('onsync'); }, this);
  //     this.Task.on('error', function(model) { console.log('onerror'); }, this);

  //     this.Task.fetch({
  //       success: function(collection, response, options) {
  //         expect(collection).to.be.ok;
  //         console.log(collection);
  //         done();
  //       },
  //       error: function(collection, response, options) {
  //         console.log(response);
  //         done(new Error());
  //       }
  //     });
  //   });
  // });

  describe('twice', function() {
    it('works', function(done) {
      this.Task.on('add', function(model) { console.log('onadd'); }, this);
      this.Task.on('remove', function(model) { console.log('onremove'); }, this);
      this.Task.on('reset', function(model) { console.log('onreset'); }, this);
      this.Task.on('sort', function(model) { console.log('onsort'); }, this);
      this.Task.on('destroy', function(model) { console.log('ondestroy'); }, this);
      this.Task.on('request', function(model) { console.log('onrequest'); }, this);
      this.Task.on('sync', function(model) { console.log('onsync'); }, this);
      this.Task.on('error', function(model) { console.log('onerror'); }, this);

      var self = this;
      this.Task.fetch({
        success: function(collection, response, options) {
          expect(collection).to.be.ok;
          console.log(collection);
          self.Task.fetch({
            success: function(collection, response, options) {
              expect(collection).to.be.ok;
              console.log(collection);
              done();
            },
            error: function(collection, response, options) {
              console.log(response);
              done(new Error());
            }
          });
        },
        error: function(collection, response, options) {
          console.log(response);
          done(new Error());
        }
      });

    });
  });

  describe('Collection#create', function() {
    it('works', function(done) {
      var task = this.Task.create({
        title: 'foo',
        done: false
      }, {
        success: (function() {
          expect(this.Task.length).to.equal(1);
          done();
        }).bind(this)
      });
    });
  });
});
