<template>
  <div class="addcredit">
    <div class="creditcard">
      <p><span>信用卡卡号：</span><input type="tel" placeholder="请输入信用卡卡号" v-model="bank" @blur="changeCount"></p>
      <p><span>预留手机号：</span><input type="tel" placeholder="请输入预留手机号" v-model="mobile"></p>
      <p><span>有效期：</span><i class="data" v-text="date" @click="selectDate" ></i></p>
      <p><span>CVV2码：</span><input type="tel" placeholder="CVV2码" v-model="cvv"><b @click="explain">说明</b></p>
    </div>
    <div class="btn">
      <p @click="sub" >提交</p>
      <!--<p >提交</p>-->
    </div>
    <div class="cvv" v-if="showcvv2">
      <div class="CVVpic">
        <img src="../../../assets/images/jpay/cvv2code.png" alt="">
      </div>
      <p class="text">CVV2码为银行卡背面如图所示位置末位三位</p>
      <p class="butto" @click="explain">确定</p>
    </div>
    <div class="verifications" v-if="showver">
    	<p class="title">请输入验证码</p>
    	<div class="box">
    		<input type="number" value="" >
    		<input type="number" value="" >
    		<input type="number" value="" >
    		<input type="number" value="" >
    		<input type="number" value="" >
    		<input type="number" value="">
    		<span class="clear"></span>
    	</div>
    	<p class="tips">提示:若无法获取验证码，请稍后再试！</p>
    	<p class="button">确定</p>
    </div>
    <div class="zhezhao" v-if="showcvv2"></div>
    <div class="vzhezhao" v-if="showver"></div>
    <mt-datetime-picker
      ref="picker"
      type="date"
      year-format="{value} 年"
      month-format="{value} 月"
      date-format="{value} 日"
      :startDate="new Date('1970-01-01')"
      :endDate="new Date('2070-12-31')"
      @confirm="handleConfirm">
    </mt-datetime-picker>
  </div>
</template>

<script>
  import {MessageBox} from 'mint-ui'
  import {Toast} from 'mint-ui'
  import { DatetimePicker } from 'mint-ui';
  import axios from "axios";
  import qs from "qs";
  import { Indicator } from "mint-ui";

  export default{
    name: 'AddCredit',
    data() {
      return {
        date:'请选择有效期号',
        showcvv2:false,
        showver:false,
        bank:'',//银行
        mobile:'',//手机号
        time:'',//有效期
        cvv:'',//cvv2
        format:'',//有效期对应
        verification:'',//获取银行卡信息
        //verificationid:''
      }
    },
    methods: {
      selectDate(){
        this.$refs.picker.open();
      },
      handleConfirm(date){
        var y = date.getFullYear();
        var m = date.getMonth() + 1;
        m = m < 10 ? '0' + m : m;
        var d = date.getDate();
        d = d < 10 ? ('0' + d) : d;
        this.date = y + '-' + m + '-' + d;
        this.format =this.date
      },
      explain(){
        this.showcvv2 = !this.showcvv2
      },
			vheck(){
				this.showver=!this.showver
			},
      changeCount(){
        var token = localStorage.getItem("token");
        var that=this
        axios.post(BASE_URL+'/index.php?r=CardjPay/CheckCard',qs.stringify({
          token:token,
          type:'2',
          cardNo:that.bank
        }))
          .then(function (res) {
            var edoc = Base64.decode(res.data)
            edoc = JSON.parse(edoc)

            if(edoc.data.err==10000){
              that.verification=edoc.data.data.id
              //	that.verificationid=edoc.data.data.id
              //	console.log(edoc.data.data)
            }else{
              Toast(edoc.data.msg)
              that.bank=''
            }
          })
          .catch(function (err) {
          });
      },
      sub(){
        var token = localStorage.getItem("token");
        var that=this
        if(this.bank==''){
          Toast('请填写正确银行号码')
          this.bank = ""
          return
        } else if((!(/(^1[3|4|5|7|8]\d{9}$)|(^09\d{8}$)/.test(this.mobile)))&&(this.mobile=='')){
          Toast('请填写正确手机号码')
          this.mobile = ""
          return
        }else if(this.date!=this.format ) {
          Toast('请选择有效期日期')
          this.date = ""
          return
        }else if((!(/^\d{3}$/.test(this.cvv)))&&(this.cvv=='')){
          Toast('请填写正确cvv2码')
          this.cvv = ""
          return
        }
        else{
        	this.showver=!this.showver
          axios.post(BASE_URL+'/index.php?r=CardjPay/Addcreditcard',qs.stringify({
            token:token,
            phone:that.mobile,
            period:that.date,
            cvv2:that.cvv,
            cardnum:that.bank,
            bank:that.verification
          }))
            .then(function (res) {
              var edoc = Base64.decode(res.data)

              edoc = JSON.parse(edoc)
              //	console.log(edoc.info)
              if(edoc.code==10000){
                Toast(edoc.info)
                window.location.href="/?#/jpay/main/credit";
              }else{
                Toast(edoc.info)
              }

            })
            .catch(function (err) {
            });
        }
      },

    },
    mounted() {

    },
    updated() {

    },
    activated() {

    },
    components: {}
  }
</script>

<style scoped lang="scss">
  .addcredit{
    width: 100%;
    height: 100%;
    .creditcard{
      background: #fff;
      margin-bottom: 0.75rem;
      p{
        padding: 0 0.75rem;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #eee;
        input{
          flex: 1;
          border: none;
          font-size: 0.7rem;
          color: #666;
        }
        span{
          font-size: 0.7rem;
          line-height: 2.45rem;
        }
        b{
          font-size: 0.7rem;
          line-height: 2.45rem;
          font-weight: normal;
          color: #ff3737;
        }
        i{
          font-style: normal;
          font-weight: normal;
          line-height: 2.45rem;
          flex: 1;
          font-size: 0.7rem;
          color: #666;
        }
      }

    }
    .btn{
      padding: 0.75rem;
      p{
        background: #ff3737;
        color: #fff;
        text-align: center;
        line-height: 2.45rem;
        font-size: 0.8rem;
        border-radius: 4px;
      }
    }
    .zhezhao{
      width: 100%;
      height: 100%;
      background: #000;
      position: fixed;
      top: 0;
      left: 0;
      opacity:0.6;
    }
    .vzhezhao{
    	width: 100%;
      height: 100%;
      background: #000;
      position: fixed;
      top: 0;
      left: 0;
      opacity:0.6;
    }
    .cvv{
      -webkit-border-radius: 4px;
      -moz-border-radius: 4px;
      border-radius: 4px;
      height:12.5rem;
      position: fixed;
      top: 50%;
      background: #fff;
      z-index: 111;
      margin:0 1rem;
      margin-top: -7rem;
      img{
        width: 100%;
        height: 100%;
      }
      .CVVpic{
        padding: 1.8rem 3.4rem;
        padding-bottom: 0;
      }
      .text{
        font-size: 0.7rem;
        text-align: center;
        color:#666;
        line-height: 2.5rem;
      }
      .butto{
        width: 100%;
        background: #ff3737;
        text-align: center;
        color: #fff;
        font-size: 0.9rem;
        line-height: 2.45rem;
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
      }
    }
    .verifications{
    	-webkit-border-radius: 4px;
      -moz-border-radius: 4px;
      border-radius: 4px;
      position: fixed;
      top: 50%;
      left: 50%;
      width:15.75rem;
      margin-left:-7.875rem ;
      background: #fff;
      z-index: 111;
      margin-top: -7rem;
    	padding-top: 1.5rem;
    	.title{
    		font-size: 0.8rem;
    		color: #333;
    		text-align: center;
    		margin-bottom: 1.125rem;
    	}
    	.box{
    		margin: 0rem 1.75rem;
    		border: 0.025rem solid #000000;
    		border-right: none;
    		input{
    			display: block;
    			width:2.038rem;
    			height: 1.94rem;
    			text-align: center;
    			color: #333;
    			margin: 0rem;
    			padding:0rem ;
    			float: left;
    			border: none;
    			border-right:0.025rem solid #000000;
    		}

    		.clear{
    			clear: both;
    		}
    	}
    	.tips{
    		margin-top: 0.625rem;
    		font-size: 0.55rem;
    		color: #999999;
    		text-align: center;
    	}
    	.button{
    		border-top: 0.025rem #eeeeee solid;
    		padding: 0.625rem 0rem 1.25rem 0rem;
    		border-radius:0 0 4px 4px;
    		font-size: 0.85rem;
    		text-align: center;
    		color: #ff3737;
    		margin-top: 1rem;
    	}
    }
  }



</style>
