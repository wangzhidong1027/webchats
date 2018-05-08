<template>
<div id="invite">
  <div class="outside">
      <p>扫一扫分店快捷入驻</p>
      <div class="code_box">
        <img :src="codesrc" alt="">
      </div>
      <div class="hint">
        该链接24小时内有效
      </div>
  </div>
</div>
</template>

<script>
  export default{
    name: 'Invite',
    data() {
      return {
        codesrc:'',
      }
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
#invite{
  width: 100%;
  height: 100%;
  background: linear-gradient(#ecbf71, #e6b559);
  .outside{
    background: #fff;

  }
}
</style>
