<template>
  <div id="goods-details">
    <card-data v-if=titshow v-show=!isshowtext :selectGoods=selectGoods :canAdd=canAdd  :tit.sync=tit  :showtext=showtext  :carnumber=carnumber  :detaildsinit="detaildsinit"></card-data>
    <card-tit v-if=isshowtext :param=param :introduction=introduction :hiddentext=hiddentext :selectGoods=selectGoods></card-tit>
    <car-tab :nice=nice></car-tab>
  </div>
</template>

<script>
  import Vue from 'vue'
  import CarTab from '../../JD/CarTab'
  import CardData from './CardData'
  import CardTit from './CardTit'
  import { Indicator } from 'mint-ui';
  import { Loadmore } from 'mint-ui';
  import axios from 'axios';
  import qs from 'qs';
  import {mapActions} from 'vuex'
  import { MessageBox } from 'mint-ui';
  import { Toast } from 'mint-ui';
  export default{
    name: 'CardDetails',
    data () {
      return {
        isshowtext:false,
        titshow:false,
        tit:{},
        id:'',
        param:'',
        introduction:'',
        selectGoods:[{img:'',frontPrice:'',sku:'',name:'',number:1 ,options:'',store:'',wxgoodshref:''}],
        addcar:true
      }
    },
    methods:{
      ...mapActions({
        addCar:'addCar',
      }),
      canAdd(str){
        if(str=='无货'){
          this.addcar=false
        }
      },
      showtext(){
        this.isshowtext=true
      },
      hiddentext(){
        this.isshowtext=false
      },
      detaildsinit(){
        var that = this
        // this.id=this.$route.prams.id
        axios.post(BASE_URL+'/index.php?r=cpsgoods/view',qs.stringify({
          id:this.id,
        })).then(function(res){
          Indicator.close()
          var a =res.data.data.product.cpsgoods
              that.tit=a
              that.titshow=true
              that.introduction=a.content
              /*--拼接购物车信息--*/
              that.selectGoods[0].sku=a.id;
              that.selectGoods[0].name=a.name;
              that.selectGoods[0].frontPrice=a.jiage;
              that.selectGoods[0].img="http://image.yifuka.com/"+a.imgurl;
              that.selectGoods[0].wxgoodshref='#/carddetails/'+Base64.encode(a.id);
              that.selectGoods[0].store=res.data.data.product.carttype
          //   that.selectGoods[0].options=str;
          //   that.param=that.tit.product.product.param
        }).catch(function(err){
          Indicator.close()
          Toast('获取商品信息失败');
        });
      },
      carnumber(n){
        this.selectGoods[0].number = n
      },
      nice(){
        if(this.addcar){
          if(this.selectGoods[0].sku){
            this.addCar(this.selectGoods)
          }else{
            return
          }
        }else {
          Toast('该商品此地区无货');
        }
      },
    },
    mounted(){
      document.title = '商品详情'
      Indicator.open()
      this.id=Base64.decode(this.$route.params.id);
      // this.getoptions(id)
      this.detaildsinit()
    },
    updated(){

    },
    activated(){

    },
    components:{
      'car-tab':CarTab,
      "card-data":CardData,
      'card-tit':CardTit,
    }
  }

</script>

<style scoped lang="scss">
  #goods-details{
    background: #f5f5f5;
    height: 100%;
    width: 100%;
  }


</style>
