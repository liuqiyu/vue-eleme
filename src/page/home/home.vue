<template>
  <div>
    <!-- 头部 -->
    <v-header-top>
      <span slot='logo' class="head_logo" @click="reload()">ele.me</span>
    </v-header-top>

    <!-- 选择城市-->
    <nav class="city_nav">
      <div class="city_tip">
        <span>当前定位城市：</span>
        <span>定位不准时，请在城市列表选择</span>
      </div>
      <router-link :to="'/city/' + guessCityid" class="guess_city">
        <span>{{ guessCity }}</span>
        <svg class="arrow_right">
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right"></use>
        </svg>
      </router-link>
    </nav>

    <!-- 热门城市 -->
    <section id="hot_city_container">
      <h4 class="city_title">热门城市</h4>
      <ul class="citylistul clear">
        <router-link tag="li" v-for="(item,index) in hotcity" :to="'/city/' + item.id" :key="item.id">
          {{item.name}}
        </router-link>
      </ul>
    </section>

    <!--  城市列表 -->
    <section class="group_city_container">
      <ul class="letter_classify">
        <li v-for="(value, index) in sortgroupcity" class="letter_classify_li">
          <h4 class="city_title">{{value.initial}}
            <span v-if="index == 0">（按字母排序）</span>
          </h4>
          <ul class="groupcity_name_container citylistul clear">
            <router-link tag="li" v-for="item in value.list" :to="'/city/' + item.id" :key="item.id" class="ellipsis">
              {{item.name}}
            </router-link>
          </ul>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
  import headerTop from '../../components/header/header.vue'
  var jsonp = require('jsonp');

  export default {
    data(){
      return {
        guessCityid: '', // 当前城市id
        guessCity: "", // 当前城市名
        hotcity: [], // 热门城市
        sortgroupcity: [] // 按字母排序的全部城市
      }
    },
    components: {
      'v-header-top': headerTop
    },
    methods: {
      reload: function () {
        window.location.reload();
      }
    },
    mounted(){
      var vm = this;
      this.$nextTick(function () {
        // 获取锁在城市

        // 获取热门城市
        this.$http.get('./static/data/hotcity.json').then(function (response) {
          vm.hotcity = response.data;
          vm.guessCityid = response.data[0].id;
          vm.guessCity = response.data[0].name;
        }).catch(function (error) {
          console.log(error);
        });

        // 获取全部城市
        this.$http.get('./static/data/allcity.json').then(function (response) {
          vm.sortgroupcity = response.data;
        }).catch(function (error) {
          console.log(error);
        });
      });
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../style/mixin';

  .head_logo {
    left: 0.4rem;
    font-weight: 400;
    @include sc(0.55rem, #fff);
    @include wh(2.3rem, 0.7rem);
    @include ct;
  }

  .city_nav {
    padding-top: 1.3rem;
    border-top: 1px solid $bc;
    background-color: #fff;
    margin-bottom: 0.4rem;
    .city_tip {
      @include fj;
      line-height: 0.8rem;
      padding: 0 0.45rem;
      span:nth-of-type(1) {
        @include sc(0.36rem, #666);
      }
      span:nth-of-type(2) {
        font-weight: 900;
        @include sc(0.3rem, #9f9f9f);
      }
    }

    .guess_city {
      @include fj;
      align-items: center;
      height: 1.1rem;
      padding: 0 0.45rem;
      position: relative;
      @include font(0.43rem, 1rem);
      &:before {
        height: 1px;
        content: '';
        width: 100%;
        border-top: 1px solid $bc;
        position: absolute;
        top: -1px;
        right: 0;
        transform: scaleY(0.5);
        -webkit-transform: scaleY(0.5);
      }
      &:after {
        height: 2px;
        content: '';
        width: 100%;
        border-top: 1px solid #666;
        position: absolute;
        bottom: -1px;
        right: 0;
        transform: scaleY(0.5);
        -webkit-transform: scaleY(0.5);
      }
      span:nth-of-type(1) {
        color: $blue;
      }
      .arrow_right {
        @include wh(.6rem, .6rem);
        fill: #999;
      }
    }
  }

  #hot_city_container {
    background-color: #fff;
    margin-bottom: 0.2rem;
  }

  .citylistul {
    li {
      float: left;
      text-align: center;
      color: $blue;
      border-bottom: 0.025rem solid $bc;
      border-right: 0.025rem solid $bc;
      @include wh(25%, 0.8rem);
      @include font(0.35rem, 0.8rem);
    }
    li:nth-of-type(4n) {
      border-right: none;
    }
  }

  .city_title {
    color: #666;
    font-weight: 400;
    text-indent: 0.45rem;
    position: relative;
    &:before {
      height: 2px;
      content: '';
      width: 100%;
      border-top: 1px solid #666;
      position: absolute;
      top: -1px;
      right: 0;
      transform: scaleY(0.5);
      -webkit-transform: scaleY(0.5);
    }
    &:after {
      height: 1px;
      content: '';
      width: 100%;
      border-top: 1px solid #999;
      position: absolute;
      bottom: -1px;
      right: 0;
      transform: scaleY(0.5);
      -webkit-transform: scaleY(0.5);
    }
    @include font(0.35rem, 0.9rem, "Helvetica Neue");
    span {
      @include sc(0.28rem, #999);
    }
  }

  .letter_classify_li {
    margin-bottom: 0.4rem;
    background-color: #fff;
    border-bottom: 1px solid $bc;
    .groupcity_name_container {
      li {
        color: #666;
      }
    }
  }

</style>
