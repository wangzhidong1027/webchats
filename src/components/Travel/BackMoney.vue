<template>
  <div class="back_money">
    <div class="container">
      <div class="input_box">
        <label for="oriderid"><i>*</i>填写订单号</label><input type="tel" id="oriderid" placeholder="请填写订单编号">
      </div>
      <div class="goods">
        <div class="order_contaner">
          <div class="order_img">
            <img src="../../assets/images/travelTest/goods.jpg" alt="">
          </div>
          <div class="order_text">
            <p>后来看客户客户</p>
            <div class="order_msg">
              大师傅沙发的萨达烦死哒尴尬死的刚度
            </div>
            <div class="order_money">
              ￥<b>5000.</b>00
            </div>
          </div>
        </div>
      </div>
      <div class="cause_box">
        <p><i>*</i>退款原因</p>
        <textarea name="" id="" cols="30" rows="10"></textarea>
      </div>
      <div class="money"><i>*</i>退款金额 <span>525241.00</span></div>
      <div class="img">
        <img src="../../assets/images/travelTest/goods.jpg" alt="">
        <div class="upimg"></div>
      </div>
    </div>
    <button>确定提交</button>
  </div>
</template>
<script>
  export default {
    name: 'BackMoney',
    data() {
      return {}
    },
    methods: {},
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
  .back_money {
    width: 100%;
    height: 100%;
    overflow: scroll;
    background: #fff;
    .container {
      padding: 0 0.75rem;
      .input_box {
        display: flex;
        align-items: center;
        height: 2.25rem;
        border-bottom: 1px solid #eee;
        label {
          font-size: 0.7rem;
          font-weight: 800;
          margin-right: 0.75rem;
          i {
            color: #ff0000;
          }
        }
        input {
          border: none;
          font-size: 0.7rem;
        }
      }
     .order_contaner{
      display: flex;
      justify-content: space-around;
      padding: 0.75rem;
      overflow: hidden;
      height: 5.5rem;
      box-shadow:0px 0px 5px #f5f5f5;
      .order_img{
        width: 4rem;
        img{
          width: 100%;
        }
      }
      .order_text{
        display: flex;
        flex: 1;
        flex-flow: column;
        padding-left: 0.5rem;
        p{
          font-size: 0.65rem;
          color: #333;
          font-weight: bold;
          height: 1.05rem;
        }
        .order_msg{
          font-size: 0.55rem;
          color: #999;
          display: flex;
          flex: 1;
        }
        .order_money{
          height: 0.9rem;
          font-size: 0.6rem;
          font-weight: bold;
          color: #ff3636;
          b{
            font-size: 0.85rem;
          }
        }
        }
      }

    }
  }

</style>
