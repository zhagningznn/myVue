<template>
  <div>
    <div>
      <h1>hello!!</h1>
    </div>
    <div style="background-color: coral;width: 500px;height: 200px;margin: 0 auto;">
      <span>测试路由</span>
       <boss></boss>
    </div>
  </div>
</template>

<script>
  import boss from '@/views/medium.vue'
    export default {
        name: "Tmain",
        components:{
          boss
        },

    }
</script>

<style scoped>

</style>
