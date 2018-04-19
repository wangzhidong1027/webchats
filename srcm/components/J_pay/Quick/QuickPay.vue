<template>
  <div class="transaction_page">
    <div class="information">
      <p><label>储蓄卡卡号：</label><span>2114***5566</span></p>
      <p><label>持卡人：</label><span class="clro">王*</span></p>
      <p><label>身份证号：</label><span class="clrt">2205***1417</span></p>
    </div>
    <div class="content">
      <div><label>金额：</label><span>5000.00元</span></div>
      <div><label>信用卡：</label><i>2111***8899</i></div>
      <div><label>CVV2码：</label><input type="text" value="" placeholder="请输入CVV2码 "/></div>
      <div><label>有效期：</label><input type="text" value="" placeholder="请选择有效期号 "/></div>
      <div><label>手机号：</label><i>1831***2362</i></div>
    </div>
    <div class="cos">
      <button>确认提交</button>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{

      }
    }
  }
</script>

<style scoped>
  div.transaction_page div.information{padding:0.75rem 0.75rem  0rem 0.75rem; margin-bottom: 0.75rem; background-color: #fff;}
  div.transaction_page div.information p{ padding-bottom: 0.75rem;}
  div.transaction_page div.information p label{font-size: 0.7rem; color: #666666;}
  div.transaction_page div.information p span{font-size: 0.7rem; color: #ff3737;}
  div.transaction_page div.information p span.clro{ color: #333333;}
  div.transaction_page div.information p span.clrt{ color: #666666;}
  div.transaction_page div.content{background-color: #fff; }
  div.transaction_page div.content div{padding: 0.75rem 0.75rem; border-bottom: 0.025rem solid #e3e5e9;}
  div.transaction_page div.content div label{font-size: 0.7rem; color: #666666;}
  div.transaction_page div.content div span{font-size: 0.7rem;  color: #ff3737;}
  div.transaction_page div.content div input{font-size: 0.7rem;  color: #666666; border: none; }
  div.transaction_page div.content div i{font-size: 0.7rem;  color: #333333; }
  div.transaction_page div.cos{margin: 0.75rem 0.75rem 2.5rem 0.75rem;}
  div.transaction_page div.cos button{ width:100%; padding:0.75rem 0rem; background-color: #ff3737; color: #fff; text-align: center; font-size:0.7rem; border: none; border-radius: 0.1rem;}
</style>
