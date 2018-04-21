<template>
  <div class="main">
    <ul>
      <li><a href="#/travel/income"><span ><i class="recode"></i>收款记录</span><b class="iconfont icon-jiantou-copy"></b></a></li>
      <li><a href="#/travel/refund"><span><i class="refund"></i>退款</span><b class="iconfont icon-jiantou-copy"></b></a></li>
    </ul>
    <div class="out_box">
      <button @click="loginout">退出登录</button>
    </div>
    <travel-tab :selectedpage="'我的'"></travel-tab>
  </div>
</template>

<script>
  import TravelTab from './TravelTab'
  import {MessageBox} from 'mint-ui'
  export default{
    name: 'Main',
    data() {
      return {}
    },
    methods: {
      loginout(){
        MessageBox.confirm('确定退出','提示').then(action=>{
          localStorage.removeItem("tenant");
          window.location.href='#/travel/login'
        }, action => {
          return false
        })
      }
    },
    mounted() {


    },
    updated() {

    },
    activated() {

    },
    components: {
      'travel-tab':TravelTab
    }
  }
</script>

<style scoped lang="scss">
  .main {
    width: 100%;
    height: 100%;
    position: relative;
    ul {
      a{
        padding: 0 0.75rem;
        font-size: 0.75rem;
        color: #333;
        display: flex;
        justify-content:space-between;
        border-bottom: 1px solid #f5f5f5;
        background: #fff;
        height: 2.5rem;
        line-height: 2.5rem;
        span{
          display: flex;
          height: 100%;
          align-items: center;
        }
        i{
          width: 1rem;
          height: 100%;
          display: flex;
          display: inline-block;
          margin-right: 0.75rem;
        }
        .recode{
          background-image: url("../../assets/images/travel/collectionrecord.png");
          -webkit-background-size: 100%;
          background-size: 100%;
          background-repeat: no-repeat;
          background-position: center center;
        }
        .refund{
          background-image: url("../../assets/images/travel/refund.png");
          -webkit-background-size: 100%;
          background-size: 100%;
          background-repeat: no-repeat;
          background-position: center center;
        }
        b{
          color: #dedede;
        }
      }
      li:last-child{
        border-bottom: none;
      }
    }
    .out_box{
      position: absolute;
      bottom: 2.5rem;
      left: 0;
      padding:0.75rem  2.25rem;
      width: 100%;
      button{
        width: 100%;
        /*background: #ebbd6d;*/
        line-height: 2.25rem;
        border: none;
        color: #fff;
        font-size: 0.8rem;
        background:linear-gradient(#f0c47d,#e3b151);
        background: -moz-linear-gradient(#f0c47d,#e3b151);
        background: -webkit-linear-gradient(#f0c47d,#e3b151); /* Safari 5.1 - 6.0 */
        background: -o-linear-gradient(#f0c47d,#e3b151); /* Opera 11.1 - 12.0 */
        outline: none;
      }
    }
  }

</style>
