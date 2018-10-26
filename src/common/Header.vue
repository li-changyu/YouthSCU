<template>
  <div  :class="{isOpacity: isOpacity}" class="nav">
    <div class="width w">
      <div class="brand">
        <div class="logo"></div>
        <div class="site-name">青春川大</div>
      </div>
      <div class="list">
        <ul>
          <li><router-link to="/" class="hvr-underline-from-center">团委介绍</router-link></li>
          <li><router-link to="/" class="hvr-underline-from-center">团内档案</router-link></li>
          <li><router-link to="/" class="hvr-underline-from-center">活动专题</router-link></li>
          <li><router-link to="/" class="hvr-underline-from-center">办事指南</router-link></li>
          <li><router-link to="/" class="hvr-underline-from-center">学生组织</router-link></li>
          <li><router-link to="/" class="hvr-underline-from-center">到梦空间</router-link></li>
          <li><router-link to="/" class="hvr-underline-from-center">书记信箱</router-link></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpacity: true
    }
  },
  mounted () {
    // 监听scroll事件 如果滑动则执行回调，将nav变为半透明
    window.addEventListener('scroll', this.navChange)
  },
  methods: {
    navChange () {
      let scrollTop = document.documentElement.scrollTop ||document.body.scrollTop
      this.isOpacity = scrollTop > 0 ? false : true
    }
  }
}
</script>

<style lang="scss">
  .isOpacity {
    background-color: transparent!important;
    transition: all 1s ease;
  }
  .nav {
    width: 100%;
    position: fixed;
    height: 80px;
    background-color: rgba(255, 255, 255, .8);
    z-index: 100;
    transition: all 1s ease;
    .width {
      .brand {
        line-height: 80px;
        display: inline-block;
        font-size: 24px;
      }
      .list {
        line-height: 80px;
        float: right;
        ul {
          li {
            float: left;
            padding: 0 22px;
            color: #000;
            a {
              color: #000;
            }
          }
        }
      }
    }
  }
  .hvr-underline-from-center::before {
    background: #000;
  }
</style>
