/* eslint-disable no-undef */

console.group('app');
const app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue.js!',
    list: ['りんご', 'ばなな', 'いちご'],
  },
  methods: {
    handleClick: function(event) {
      alert(event.target);
    },
  },
  beforeCreate: function() {
    console.info('beforeCreate');
  },
  created: function() {
    console.info('created');
  },
  beforeMount: function() {
    console.info('beforeMount');
  },
  mounted: function() {
    console.info('mounted');
  },
  beforeUpdate: function() {
    console.info('beforeUpdate');
  },
  updated: function() {
    console.info('updated');
  },
  beforeDestroy: function() {
    console.info('beforeDestroy');
  },
  destroyed: function() {
    console.info('destroyed');
  },
});
console.groupEnd('app');

console.group('app2');
new Vue({
  beforeCreate: function() {
    console.info('beforeCreate');
  },
  created: function() {
    console.info('created');
  },
  beforeMount: function() {
    console.info('beforeMount'); // elがないので呼ばれない
  },
  mounted: function() {
    console.info('mounted'); // elがないので呼ばれない
  },
});
console.groupEnd('app2');
