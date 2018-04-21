<template>
<div class="history">
  <div class="all">
     <div class="historylist">
    <p class="date"><span>3月12日</span><span>></span></p>
    <div class="allnumber">
      <p><b>4</b><span>笔数</span></p>
      <p><b>4250.00</b><span>金额（元）</span></p>
    </div>
  </div>
  </div>
</div>
</template>
<script>
  import axios from 'axios'
  import qs from 'qs'
  export default{
    name: 'History',
    data() {
      return {}
    },
    methods: {},
    mounted() {
      var that =this
      var token = localStorage.getItem('tenant')
      axios.post(BASE_URL+'/index.php?r=YinjiaStage/GetOrderInfo',qs.stringify({
        token:token
      })).then(function(res){
        var data =JSON.parse(Base64.decode(res.data))
        console.log(data)

        if(data.code==10000){
          if(data.data.err==10000){
            that.data=data.data.data
            that.getallMoney()
          }
        }
      }).catch(function(err){

      })

    },
    updated() {

    },
    activated() {

    },
    components: {}
  }
</script>

<style scoped lang="scss">
.history{
  width: 100%;
  height: 100%;
  .all{
    padding:  0.75rem;
  }
  .historylist{
    background: #fff;
    border-radius: 8px;
    .date{
      display:flex;
      justify-content: space-between;
      padding:0 0.5rem;
      line-height:1.7rem;
      font-size: 0.7rem;
      border-bottom: 1px solid #eeeeee;
    }
    .allnumber{
      padding: 1.25rem 0;
       display: flex;
        justify-content: space-around;
      p{

        display: flex;
        flex-flow: column;
        text-align: center;
        b{
          font-size: 1.25rem;
          color: #333;
        }
        span{
          font-size: 0.7rem;
          color: #999;
        }
      }
    }
  }

}


</style>
