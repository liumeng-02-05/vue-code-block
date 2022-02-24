<template>
  <div >
    vue3-demo
    <div @click="changeValue">{{message}}</div>
  </div>
</template>

<script>
import { ref} from 'vue'

  export default {
    setup(){
      const message = ref('hello vue3-demo')
      const changeValue = () =>{
        message.value = '修改后的值'
      }
      return{
        message,
        changeValue
      }
    }
  }
</script>

<style scoped>

</style>