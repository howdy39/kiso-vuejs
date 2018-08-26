/* eslint-disable no-undef */

console.group('app init');
const app = new Vue({
  el: '#app',
  data: {
    width: 800,
  },
  computed: {
    halfWidth() {
      return this.width / 2;
    },
    computedData() {
      return Math.random();
    },
  },
  methods: {
    methodsData() {
      return Math.random();
    },
  },
  beforeCreate: function() {
    console.info('beforeCreate');
  },
  created: function() {
    console.info('created');
    // ハンドラを登録
    window.addEventListener('scroll', this.handleScroll);
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
    window.removeEventListener('scroll', this.handleClick);
  },
  destroyed: function() {
    console.info('destroyed');
  },
});
console.groupEnd('app init');
