<template>
<div id="travelPay">
  <header>
    <div class="tenantImg">
      <img :src="logo" alt="">
    </div>
    <p class="toname">付款给 <span>{{name}}</span></p>
    <p class="money">￥<b>{{money}}</b></p>
  </header>
  <div class="typelist" v-if="paytypelist.length">
    <!-- 信用卡分期 -->
    <div class="creditcard" v-for="type in paytypelist">
      <div class="name" @click="changetype(type.catid,type.cat)"><span><img :src='"../../assets/images/travel/paytype"+ type.catid + ".png"' alt="">{{type.cat}}</span><b :class="paytype==type.catid?'selsect':''"></b></div>
       <div class="numlist" v-show="selectType==type.catid" >
          <div class="list"  v-for="item in type.stage"  @click="changePeriods(item.catid,type.catid,item.cat,type.cat)"  :class="selectPeriods== item.catid&& paytype== type.catid? 'periods':''">
            <p>{{money}}元x{{item.cat}}</p>
            <p>含服务费***元/期</p>
          </div>
         <!--<h4>应还总额<span>xxx</span>元</h4>-->
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
  <div class="wxcode" v-if="showWX">
        <section>
          <h6><i class="iconfont icon-guanbi" @click="cloceWXcode"></i></h6>
          <div><span><img src="../../assets/images/travel/paytype9.png" alt=""></span>微信支付</div></section>
        <img :src="codeurl" alt="">
        <p>长按二维码识别</p>
  </div>
  <button class="gopay" @click="gopay">确定付款</button>
  <div class="v-modal" v-if="showWX"></div>
</div>
</template>

<script>
  import axios from 'axios'
  import qs from 'qs'
  import {Toast,Indicator} from 'mint-ui'
  export default{
    name: 'Pay',
    data() {
      return {
        order:'',
        id:'',
        paytypelist:'',
        money:'',
        selectType:'',
        paytype:'',
        selectPeriods:'',//支付期数
        paytitle:'',
        payContent:"",
        name:'',
        logo:'',
        showWX:false,
        codeurl:''
      }
    },
    methods: {
      changetype(id,typecat){
        if(this.selectType==id){
          this.selectType='';
        }else{
          this.selectType=id;
          if(id==9){
            this.paytype=id;
            this.paytitle=typecat;
            this.selectPeriods=''
            this.payContent=''
          }
        }
      },
      cloceWXcode(){
        this.showWX = false
      },
      changePeriods(catid,type,cat,typecat){
        this.selectPeriods=catid;
        this.paytype=type;
        this.paytitle=typecat;
        this.payContent=cat;
      },
      gopay(){
        if(!this.paytype){
          Toast('请选择支付方式')
          return
        }
        Indicator.open()
        var that =this
        axios.post(BASE_URL+'/index.php?r=YinjiaStage/WayAllPay',qs.stringify({
          token:this.token,
          productId:this.id,
          money:this.money,
          payWay:this.paytype,
          stageWay:this.selectPeriods,
          stageTitle:this.paytitle,
          stageContent:this.payContent
        })).then(function(res){
          var data = JSON.parse(Base64.decode(res.data))
          Indicator.close()
          if(data.code==10000){
            if(data.data.err=10000){
              if(that.paytype==9){
                that.codeurl=data.data.data.code_url
                that.showWX=true
              }else {
                window.location.href = '#/travel/userinfo/' + that.token + '/' + data.data.data.orderid
              }
            }else{
              Toast(data.data.msg)
            }
          }else{
            Toast(data.info)
          }

        }).catch(function(err){

        })
      }
    },
    mounted() {
      // var token = localStorage.getItem('tenant')
      var paylist =this.$route.params.order
      this.order=paylist.split('&')
      this.token=this.order[0].toString().split('=')[1].replace('@','/')
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
        token: this.token,
        productId: this.id
      })).then(function (res) {
          var a=JSON.parse(Base64.decode(res.data))
        if(a.code==10000){
          if(a.data.err==10000){
            that.paytypelist=a.data.data.payWay
            that.name=a.data.data.companyname,
            that.logo=a.data.data.logo
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

<style  lang="scss">
#travelPay{
  width: 100%;
  height: 100%;
  background: #fff;
  overflow: scroll;
  header{
    display: flex;
    flex-flow: column;
    background: #fff;
    .tenantImg{
      padding-top: 2.1rem;
      width: 100%;
      margin-bottom: 0.5rem;
      img{
        display: block;
        width: 3rem;
        margin: 0 auto;
        border-radius: 8px;
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
      line-height: 4.5rem;
      b{
        font-size: 2rem;
      }
    }
  }
  .typelist{
    padding: 0 0.75rem;
    padding-bottom:2.25rem;
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
  .gopay{
    height:2.25rem;
    position: fixed;
    bottom: 0;
    left: 0;
    border: none;
    background: #ff3737;
    color: #fff;
    font-size: 0.8rem;
    width: 100%
   }
  .wxcode{
    position: fixed;
    top: 50%;
    left: 0;
    width: 80%;
    margin-left: 10%;
    margin-top: -50%;
    z-index: 100;
    background: #fff;
    border-radius: 8px;
    section{
      padding-top: 0.75rem;
      h6{
        text-align: right;
        padding:0 0.7rem;
        color: #ddd;
      }
      div{
        display: flex;
        justify-content: center;
        color: #333;
        font-size:1rem;
        img{
          width: 1.5rem;
          margin-right: 0.3rem;
        }
      }

    }
    img{
      display: block;
      margin: 0 auto;
      width: 70%;
    }
    p{
      height: 3rem;
      background: #3cb034;
      font-size: 0.9rem;
      text-align: center;
      color: #fff;
      line-height:3rem;
    }
  }

}

</style>
