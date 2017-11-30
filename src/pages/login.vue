<template>
  <a @click="addUser" href="#">登录1</a>
</template>
<script>
  export default {
    name: 'hello',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        userName: '',
        age: ''
      };
    },
    methods: {
      addUser () {
        const name = this.userName;
        const age = this.age;
        this.$http.post('/api/user/login', {
          username: name,
          age: age
        }, {}).then((response) => {
          console.log(response);
        });
      }
    }
  };
</script>
