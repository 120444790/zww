<template>
  <div class="hello">
    <p><slot name="header"></slot></p>
    <slot></slot>
    <p><slot name="footer"></slot></p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
      return {
          list: [
              {title: 'title 1'},
              {title: 'title 2'},
              {title: 'title 3'},
              {title: 'title 4'},
              {title: 'title 5'},
              {title: 'title 6'},
              {title: 'title 7'},
              {title: 'title 8'},
              {title: 'title 9'},
          ]
      }
  },
  created() {
      console.log('组件的 created')
  },
  methods: {
      onReachBottom() {
          this.list.push(...[
              {title: Math.random()},
              {title: Math.random()},
              {title: Math.random()},
              {title: Math.random()},
              {title: Math.random()},
          ])
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
