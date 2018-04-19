<template>
<div id="travelPay">
  <header>
    <div class="tenantImg">
      <img src="../../assets/images/travelTest/use.jpg" alt="">
    </div>
    <p class="toname">付款给 <span>携程旅行网北京分公司</span></p>
    <p class="money">￥<b>{{money}}</b></p>
  </header>
  <div class="typelist">
    <!-- 信用卡分期 -->
    <div class="creditcard" v-for="type in paytypelist">
      <div class="name" @click="changetype(type.catid)"><span><img src="../../assets/images/travel/信用卡.png" alt="">{{type.cat}}</span><b :class="selectType==type.catid?'selsect':''"></b></div>
       <div class="numlist" v-show="selectType==type.catid" >
          <div class="list"  v-for="item in type.stage"  @click="changePeriods(item.catid)"  :class="selectPeriods== item.catid ? 'periods':''">
            <p>{{money}}元x{{item.cat}}</p>
            <p>含服务费***元/期</p>
          </div>
         <h4>应还总额<span>xxx</span>元</h4>
      </div>
  </div>
    <!--<div class="creditcard">-->
    <!--<div class="name"><span><img src="../../assets/images/travel/蚂蚁花呗.png" alt="">蚂蚁花呗</span><b></b></div>-->
      <!--<div class="numlist">-->
      <!--<div class="list">-->
        <!--<p>xxx元x6期</p>-->
        <!--<p>含服务费***元/期</p>-->
        <!--<p>费率x.x%/月</p>-->
      <!--</div>-->
        <!--<div class="list">-->
        <!--<p>xxx元x6期</p>-->
        <!--<p>含服务费***元/期</p>-->
        <!--<p>费率x.x%/月</p>-->
      <!--</div>-->
        <!--<div class="list">-->
        <!--<p>xxx元x6期</p>-->
        <!--<p>含服务费***元/期</p>-->
        <!--<p>费率x.x%/月</p>-->
      <!--</div>-->
        <!--<div class="list">-->
        <!--<p>xxx元x6期</p>-->
        <!--<p>含服务费***元/期</p>-->
        <!--<p>费率x.x%/月</p>-->
      <!--</div>-->
    <!--</div>-->
    <!--<h4>应还总额<span>xxx</span>元</h4>-->
  <!--</div>-->
     <!--<div class="creditcard">-->
      <!--<div class="name"><span><img src="../../assets/images/travel/微信支付.png" alt="">微信支付</span><b></b></div>-->
    <!--</div>-->
  </div>
</div>
</template>

<script>
  import axios from 'axios'
  import qs from 'qs'
  export default{
    name: 'Pay',
    data() {
      return {
        order:'',
        id:'',
        paytypelist:'',
        money:'',
        selectType:'',//支付方式
        selectPeriods:''//支付期数
      }
    },
    methods: {
      changetype(id){
        if(this.selectType==id){
          this.selectType=''
        }else{
          this.selectType=id
        }
      },
      changePeriods(catid){
        this.selectPeriods=catid
      }
    },
    mounted() {
      var token = localStorage.getItem('tenant')
      var paylist =this.$route.params.order
      this.order=paylist.split('&')
      var goodid=this.order[1].toString().split('=')
      var ordermoney=this.order[2].toString().split('=')
      this.money=ordermoney[1]
      this.id=goodid[1]
      // var goodid=this.$route.params.id.split('=')
      // this.id=goodid[1]
      // var ordermoney=this.$route.params.money.split('=')
      // this.money=ordermoney[1]
      var that =this
      axios.post(BASE_URL +'/index.php?r=YinjiaStage/GetMerchatPay',qs.stringify({
        token:token,
        productId: this.id
      })).then(function (res) {
          var a=JSON.parse(Base64.decode(res.data))
        if(a.code==10000){
          if(a.data.err==10000){
            that.paytypelist=a.data.data
          }
        }
      }).catch(function (err) {

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
#travelPay{
  width: 100%;
  height: 100%;
  background: #fff;
  header{
    display: flex;
    flex-flow: column;
    background: #fff;
    .tenantImg{
      padding-top: 2.1rem;
      width: 100%;
      img{
        display: block;
        width: 3rem;
        margin: 0 auto;
      }
    }
    .toname{
      width: 100%;
      text-align: center;
      font-size: 0.7rem;
      color: #333;
    }
    .money{
      font-size: 1.5rem;
      color: #333;
      font-weight: bold;
      text-align: center;
      line-height: 5rem;
      b{
        font-size: 2rem;
      }
    }
  }
  .typelist{
    padding: 0 0.75rem;
    .creditcard{
      box-shadow:0px 0px 30px rgba(0,0,0,0.1);
      margin-bottom:0.75rem;
      .name{
        padding: 0 0.75rem;
        height: 2.75rem;
        align-items: center;
        display: flex;
        justify-content: space-between;
        span{
          font-size: 0.7rem;
          color: #333;
          img{
            width: 1.2rem;
            margin-right: 0.4rem;
          }
        }
        b{
          border: 1px solid #333;
          width: 1rem;
          height: 1rem;
          border-radius: 50%;
        }
        .selsect{
          background-image: url(../../assets/images/travel/select.png);
          background-size: 100%;
          border: none;
        }
      }
      .numlist{
        padding:0 0.75rem;
        display: flex;
        justify-content: space-between;
        flex-wrap:wrap;
        .list{
          border: 1px solid #eee;
          background: #fbfbfb;
          border-radius: 3px;
          width: 7.6rem;
          text-align: center;
          padding:0.4rem 0;
          margin-bottom: 0.3rem;
          color: #333;
          p{
            font-size: 0.7rem;
          }
        }
        .periods{
          color: #ff3737;
          border:1px solid #ff3737;
        }
      }
        h4{
          text-align: center;
          width: 100%;
          font-size: 0.7rem;
          font-weight: normal;
          line-height: 1.5rem;
          span{
            color: #FF3737;
          }
        }
    }
  }
}

</style>
