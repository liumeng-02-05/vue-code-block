<template>
  <div @click="changeValue">
    vue-demo1
    <div>{{mesage}}</div>
  </div>
</template>

<script>
  export default {
    data(){
      const mesage = 'hellow vue-block'
      return {
        mesage
      }
    },
    methods:{
      changeValue (){
        this.mesage = '改变message的值'
      }
    }
  }
</script>

<style  scoped>

</style>