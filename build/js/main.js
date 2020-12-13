"use strict";

barba.init({
  debug: true,
  transitions: [{
    name: 'index',
    beforeOnce: function beforeOnce() {
      console.log('beforeOnce');
    },
    once: function once() {
      console.log('once');
    },
    afterOnce: function afterOnce() {
      console.log('aftereOnce');
    }
  }, {
    name: 'blog',
    to: {
      namespace: ['blog']
    },
    leave: function leave() {},
    enter: function enter() {}
  }]
});