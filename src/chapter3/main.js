/* eslint-disable no-undef */

console.group('app init');
const app = new Vue({
  el: '#app',
  data: {
    show: false,
    text: '',
    scrollY: 0,
    timer: null,
  },
  methods: {
    handleScroll() {
      if (this.timer === null) {
        this.timer = setTimeout(() => {
          this.scrollY = window.scrollY;
          clearTimeout(this.timer);
          this.timer = null;
        }, 200);
      }
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
