<template>
  <header id="head_top">
    <slot name="logo"></slot>
    <slot name="search"></slot>
    <section class="head_goback" v-if="goBack" @click="$router.go(-1)">
      <span><</span>
    </section>
    <section class="title_head ellipsis" v-if="headTitle">
      <span class="title_text">{{headTitle}}</span>
    </section>

    <slot name="edit"></slot>
    <slot name="msiteTitle"></slot>
    <slot name="changeCity"></slot>
    <slot name="changeLogin"></slot>
  </header>
</template>

<script>

  export default {
    data(){
      return {}
    },
    mounted(){
      // 获取用户信息
    },
    props: ['goBack', 'headTitle']
  }
</script>

<style lang="scss" scoped>

  @import '../../style/mixin';

  #head_top {
    background-color: $blue;
    position: fixed;
    z-index: 100;
    left: 0;
    top: 0;
    @include wh(100%, 1.2rem);
  }

  .head_goback {
    left: 0.4rem;
    @include wh(0.6rem, 1rem);
    line-height: 1.2rem;
    margin-left: .4rem;
    span {
      @include font(0.6rem, 1.2rem, '幼圆');
      font-weight: bolder;
      color: #fff;
    }
  }

  .head_login {
    right: 0.55rem;
    @include sc(0.65rem, #fff);
    @include ct;
    .login_span {
      color: #fff;
    }
    .user_avatar {
      fill: #fff;
      @include wh(.8rem, .8rem);
    }
  }

  .title_head {
    @include center;
    width: 50%;
    color: #fff;
    text-align: center;
    .title_text {
      @include sc(0.5rem, #fff);
      text-align: center;
      font-weight: bold;
    }
  }

</style>
