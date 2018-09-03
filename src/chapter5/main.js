/* eslint-disable no-undef */

console.group('app init');

const myComponent = {
  template: '<p>{{user.name}} <slot>指定なし</slot></p>',
  props: {
    user: {
      type: Object,
    },
  },
  beforeMount: function() {
    this.user.name = 'hogehoge'; // 直接変えてはいけない
  },
};

const app = new Vue({
  el: '#app',
  components: {
    'my-component': myComponent,
  },
  data: {
    width: 800,
    user: { name: 'howdy39', age: 42 },
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
