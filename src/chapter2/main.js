/* eslint-disable no-undef */

console.group('app init');
const list = [
  { id: 1, name: 'スライム', hp: 100 },
  { id: 2, name: 'ゴブリン', hp: 200 },
  { id: 3, name: 'ドラゴン', hp: 500 },
];
const app = new Vue({
  el: '#app',
  data: {
    name: '',
    list,
  },
  methods: {
    doAdd() {
      const max = this.list.reduce((a, b) => {
        return a > b.id ? a : b.id;
      }, 0);
      this.list.push({
        id: max + 1,
        name: this.name,
        hp: 500,
      });
    },
    doRemove(index) {
      this.list.splice(index, 1);
      // this.list[0] = { id: 1, name: 'hoge', hp: 100 };
      // this.$set(this.list, 0, { id: 1, name: 'hoge', hp: 100 });
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
console.groupEnd('app init');
