<template>
  <div class="main_all">
    <span class="word">{{wordAnm}}</span>
  </div>
</template>

<script>
    export default {
        name: "Tmain",
        components:{
        },
      data(){
          return{
            wordAnm:'',
            dataList:['我是111','我是222','我是33'],
            interval:''
          }
      },
      mounted() {
        this.interval=window.setInterval(this.getData,3000)
      },
      methods:{
        getData(){
          this.wordAnm=this.dataList[0]
          this.dataList.push(this.dataList[0])
          this.dataList.splice(0,1)
        }
      }

    }
</script>

<style scoped>
.main_all{
  padding: 0;
  position: relative;
  width: 100%;
  height: 100%;
}
.word{
  font-size: 50px;
  color:transparent;
  background:-webkit-linear-gradient(left,#147B96,#E6D205 25%,#147B96 50%,#E6D205 75%,#147B96);
  -webkit-background-clip:text;
}
</style>
