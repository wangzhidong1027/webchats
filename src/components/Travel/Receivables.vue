<template>
<div id="receivables">
	<div class="receivablesbox">
		<p class="pfont">扫一扫，向我付款</p>
		<div class="img">
			<img :src='imgsrc'/>
		</div>
		<div class="money">
			<span>￥</span>
      <p @click="changemoney()" ><label for="money">{{message}}</label></p>
      <input  type='number' id="money"   ref="money"  v-model="message" @blur="change()">
		</div>
		<div class="content" v-text="name"></div>
		<div class="operation">
			<a class="modify" @click="changemoney()">修改金额</a>
			<a class="preservation">长按图片保存</a>
		</div>
	</div>
	<a class="jump" href="#/travel/Settlement">查看结算账户</a>
</div>
</template>

<script>
  import axios from 'axios'
  import qs from 'qs'
  import {Toast,MessageBox,Indicator} from 'mint-ui'
export default{
  name:'Receivables',
  data() {
    	return {
        	message:'',
          goodid:'',
          token:'',
          imgsrc:'',
          name:''
      	}
    },
    methods:{
      setmoney(){
        var that =this
        if(this.message==0){
          Toast('请输入正确金额')
          return
        }
        Indicator.open()
        axios.post(BASE_URL+'/index.php?r=YinjiaStage/PayQrcode',qs.stringify({
          token:this.token,
          productId:this.goodid,
          money:this.message
        })).then(function (res) {
          var a =JSON.parse(Base64.decode(res.data))
          Indicator.close()
          if(a.code==10000){
            if(a.data.err==10000){
              Toast("二维码获取成功")
              that.imgsrc= a.data.data.codeUrl
              that.name=a.data.data.pname
            }else{
              MessageBox.alert(a.data.msg,'提示')
            }
          }else{
            Toast(a.msg)
          }
        }).catch(function (err) {

        })
      },
      changemoney(){
          this.$refs.money.focus()
      },
      change(){
        this.setmoney()
      }

    },

    mounted(){
      this.goodid =this.$route.params.id
      this.token = localStorage.getItem('tenant')
      var that =this
      Indicator.open()
      axios.post(BASE_URL+'/index.php?r=YinjiaStage/GetGoods',qs.stringify({
        token:this.token,
        id:this.goodid,
      })).then(function (res) {
        var a =JSON.parse(Base64.decode(res.data))
        Indicator.close()
        if(a.code==10000){
          if(a.data.err==10000){
            that.message=a.data.data.money
            that.setmoney()
          }else{
            MessageBox.alert(a.data.msg,'提示')
          }
        }else{
          Toast(a.msg)
        }
      }).catch(function (err) {

      })
      this.setmoney()
    }
 }
</script>

<style scoped lang="scss">
#receivables{
  background: -webkit-linear-gradient(#ecbf71, #e6b559); /* Safari 5.1 - 6.0 */
  background: -o-linear-gradient(#ecbf71, #e6b559); /* Opera 11.1 - 12.0 */
  background: -moz-linear-gradient(#ecbf71, #e6b559); /* Firefox 3.6 - 15 */
  background: linear-gradient(#ecbf71, #e6b559); /* 标准的语法 */
  padding:1rem 1rem;
  height: 100%;
}
#receivables .receivablesbox{width:16.75rem; margin: 0 auto 3.12rem auto; background-color: #fff; padding:2rem 0; border-radius: 0.15rem;}
.receivablesbox p.pfont{ font-size: 0.8rem; color: #333333; margin-bottom: 2rem; text-align: center;}
.receivablesbox div.img{width:8.92rem; height: 8.92rem; margin: 0 auto 1.25rem auto;}
.receivablesbox div.img img{ width:100%; height: 100%;}
.receivablesbox div.money{ text-align: center; color: #333333;font-size:1.75rem;}
.receivablesbox div.money label{/*display: inline-block;*/ }
/*.receivablesbox div.money input{*/
	/*text-align: center;*/
	/*width:90%;*/
	/*border: none;*/
	/*font-weight: bold;*/
	/*font-size: 1.75rem;*/
	/*font-family: tahoma,Helvetica,*/
	/*Arial,"\5FAE\8F6F\96C5\9ED1";*/
/*}*/

.receivablesbox div.content{font-size: 0.65rem; color: #999999; text-align: center; margin-bottom: 2.37rem;}
.receivablesbox div.operation{width:9.1rem; margin: 0 auto;}
.receivablesbox div.operation a{ display: inline-block; font-size: 0.7rem; color: #333333;}
.receivablesbox div.operation a.modify{width:4.47rem; height:30px; line-height:30px; text-align:left; border-right:0.02rem solid #c7c7c7;}
.receivablesbox div.operation a.preservation{width:4.3rem; height:30px; line-height:30px; text-align:right; }
#receivables a.jump{font-size: 0.7rem; display: block; text-align: center; text-align: center; color: #fff;}
.receivablesbox{
  .money{
    display: flex;
    justify-content: center;
    align-items: center;
    span{
      font-weight:normal;
      font-size: 1.5rem;
    }
    p{
      width: auto;
      max-width:100%;
      font-weight: bold;
      padding: 0;
      margin: 0;
      outline: none;
      padding-right: 1rem;
    }
  }
  input[type=number]::-webkit-inner-spin-button,
  input[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    appearance: none;
    margin: 0;
  }
  #money{
    margin-left: -0.1rem;
    width: 0.1rem;
    border: none;
    opacity: 0;
  }

}


</style>
