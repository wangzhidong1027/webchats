<template>
<div id="publish">
 <div class='name'><input type="text" placeholder="标题 输入商品名称" id="tittle"></div>
 <div class='price'><input type="tel" id="price" placeholder="价格 输入商品的价格"></div>
 <div class="content">
    <div class='presentation'>
      <textarea id="presentation" placeholder="商品简介（40字以内）"></textarea>
    </div>
    <div class="upimg">
      <div class="logo">
        <p><span>+</span></p>
        <p>添加</p>
      </div>
    </div>
 </div>

 <button class="isok">确定发布</button>
</div>
</template>

<script>
  export default{
    name: 'Publish',
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
#publish{
  width: 100%;
  height: 100%;
  background: #fff;
  display: flex;
  flex-flow: column;
  .name,.price{
     padding:0 0.75rem;
    height: 2.73rem;
    border-bottom: 1px solid #eee;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    input{
      font-size: 0.7rem;
      flex: 1;
      height: 1.5rem;
      border: none;
      color: #333;
    }
    input::placeholder{
      color: #999;
    }
  }
  .content{
    padding:0 0.75rem;
    flex: 1;
    position: relative;
    .presentation{
      textarea{
        width: 100%;
        height: 15rem;
        font-size: 0.7rem;
        color: #333;
        border:none;
        padding-top:1rem;
      }
      textarea::placeholder{
        color: #999;
      }
    }
    .upimg{
      position: absolute;
      width: 4rem;
      height: 4rem;
      background: #f3f5f9;
      left: 0.75rem;
      bottom:1.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      .logo{
        color: #999;
        font-size: 0.55rem;
        p{
          display: flex;
          justify-content: center;
          span{
            display: block;
            width: 1rem;
            height: 1rem;
            border-radius: 50%;
            border: 1px solid #999;
            text-align: center;
            line-height: 0.7rem;
          }
        }
      }
    }
  }
  .isok{
    height: 2.5rem;
    background: #e9c1b6;
    border: none;
    font-size: 0.7rem;
    color: #fff;
  }

 
 
  
}

</style>
