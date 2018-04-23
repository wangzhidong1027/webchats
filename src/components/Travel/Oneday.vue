<template>
<div class="oneday">
<header>
  <div class="contianer">
    <nav><span>{{day}}</span><span class="checklist">全部收入<!--<b class="iconfont icon-jiantou"></b><ul><li>dasdas</li></ul>--></span><span></span></nav>
    <h4><b>{{data.money}}</b>元</h4>
    <p>共计<b>{{allnum}}</b>笔</p>
  </div>
</header>
<div class="deal">
  <ul>
    <li v-for="item in data.order">
      <div class="title"><p class="number">{{item.orderid}}</p><p class="time">{{item.paytime}}</p></div>
      <div class="dealType">信用卡分期</div>
      <div class="money">+{{item.pmoney}}</div>
    </li>
  </ul>
</div>
</div>
</template>

<script>
import axios from 'axios'
import qs from 'qs'
  export default{
    name: 'Oneday',
    data() {
      return {
        token:'',
        data:[],
        allmoney:'',
        allnum:0,
        day:''

      }
    },
    methods: {},
    mounted() {
      var that =this
      this.day=this.$route.params.date
      this.token = localStorage.getItem('tenant')
      axios.post(BASE_URL+'/index.php?r=YinjiaStage/GetOrderPass',qs.stringify({
        token:this.token,
        paytime:this.day
      })).then(function(res){
        var a =JSON.parse(Base64.decode(res.data))
        if(a.code==10000){
          if(a.data.err==10000){
            that.data=a.data.data
            that.allnum=a.data.data.order.length
          }else{
            Toast(a.msg)
          }
        }else{
          Toast(a.info)
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
.oneday{
  display: flex;
  flex-flow: column;
  header{
    width: 100%;
    height: 6.25rem;
    background: #efc37d;
    padding:1rem 0.75rem 0 0.75rem;
    z-index: 999;
  }
  .contianer{
    background: #fff;
    width: 100%;
    height: 7.5rem;
    border-radius: 8px;
    box-shadow:0px 0px 50px rgba(0,0,0,0.1);
    nav{
      display: flex;
      justify-content: space-between;
      padding-top: 0.75rem;
      .checklist{
        position: relative;
        ul{
          position: absolute;
          top: 1rem;
          left: 0;
          background: #fff;
          border: 1px solid #eee;
          width: 100%;
          text-align: center;
          -webkit-border-radius: 4px;
          -moz-border-radius: 4px;
          border-radius: 4px;
          line-height: 2rem;
        }
      }
      span{
        font-size: 0.7rem;
        color: #666666;
        flex: 1;
        text-align: center;
      }
    }
    h4{
      font-size: 0.7rem;
      color: #333;
      text-align: center;
      b{
        line-height: 4.4rem;
        font-size: 2rem;
      }
    }
    p{
      text-align: center;
      font-size:0.7rem;
      color: #666;
      b{
        color: #333333;
        padding: 3px;
      }
    }
  }
  .deal{
    background: #fff;
    ul{
      padding: 0 0.75rem;
       padding-top: 3rem;
      li{
        display: flex;
        font-size: 0.7rem;
        justify-content: space-between;
        border-top: 1px solid #eee;
        height: 3rem;
        .dealType,.money{
          line-height: 3rem;
          font-size: 0.7rem;
        }
        .dealType{
          color: #999;
        }
        .money{
          color: #333333;
        }
        .title{
          display: flex;
          flex-flow: column;
          padding-top: 0.5rem;
          .time{
            color: #999;
          }
        }
      }
    }
  }
}

</style>
