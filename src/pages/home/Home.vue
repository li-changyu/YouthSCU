<template>
  <div>
    <!-- 首页的轮播图 -->
    <div class="swiper-content">
      <swiper :options="swiperOption" ref="swiper" class="swiper">
        <swiper-slide class="slide1">
          <div class="text-content w">
            <div class="title">青年大学习</div>
            <div class="line"></div>
            <div class="sub-title">网上主题团课</div>
          </div>
          <div class="imagery">
            <div class="img1 animated fadeInUp"></div>
            <div class="img2 animated fadeInLeft"></div>
            <div class="img3 animated fadeInRight"></div>
          </div>
        </swiper-slide>
        <swiper-slide class="slide2">
          <div class="text-content w">
            <div class="title">第二个分页</div>
            <div class="line"></div>
            <div class="sub-title">这里要占一行字</div>
          </div>
          <div class="imagery">
            <div class="img1 animated fadeInUp"></div>
            <div class="img2 animated fadeInLeft"></div>
            <div class="img3 animated fadeInRight"></div>
          </div>
        </swiper-slide>
        <div class="swiper-pagination swiper-pagination-white" slot="pagination"></div>
      </swiper>
    </div>
    <!-- 公告组件 -->
    <News></News>
    <!-- 活动预告组件 -->
    <Notice></Notice>
    <!-- 团情快讯组件 -->
    <Flash></Flash>
  </div>
</template>

<script>
import News from './News'
import Notice from './Notice'
import Flash from './Flash'
export default {
  components: {
    News,
    Notice,
    Flash
  },
  data() {
    return {
      swiperOption: {
        autoplay: true,
        speed: 400,
        effect: 'fade',
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      }
    }
  },
}
</script>

<style lang="scss" scoped>
.swiper-content {
  height: 100vh;
  .swiper {
    height: 100%;
    background-size: cover;
    .slide1 {
      background-color: #F9ECE3;
      .text-content {
        position: absolute;
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        z-index: 90;
        .title {
          font-size: 55px;
          font-weight: 500;
          margin-bottom: 20px;
        }
        .line {
          border-bottom: 1px solid black;
          width: 20%;
        }
        .sub-title {
          font-size: 40px;
          margin-top: 20px;
        }
      }
      .imagery {
        height: 100%;
        position: relative;
        .img1 {
          position: absolute;
          left: 27.5%;
          width: 17.5%;
          top: 0;
          height: 263px;
          width: 236px;
          background: white;
          background-image: url(../../assets/img/bg1.png);
          background-size: cover;
        }
        .img2 {
          position: absolute;
          left: 0;
          top: 60%;
          width: 26%;
          height: 351px;
          width: 234px;
          background: white;
          background-image: url(../../assets/img/bg2.png);
          background-size: cover;
        }
        .img3 {
          position: absolute;
          right: 0;
          width: 30%;
          bottom: 0;
          height: 253px;
          width: 405px;
          background: white;
          background-image: url(../../assets/img/bg3.png);
          background-size: cover;
        }
      }
    }
    .slide2 {
      background-color: #F0F0F0;
      .text-content {
        position: absolute;
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        z-index: 90;
        z-index: 90;
        .title {
          font-size: 55px;
          font-weight: 500;
          margin-bottom: 20px;
        }
        .line {
          border-bottom: 1px solid black;
          width: 20%;
        }
        .sub-title {
          font-size: 40px;
          margin-top: 20px;
        }
      }
      .imagery {
        height: 100%;
        position: relative;
        .img1 {
          position: absolute;
          left: 18.5%;
          width: 20%;
          top: 0;
          height: 230px;
          width: 236px;
          background: white;
          background-image: url(../../assets/img/bg4.png);
          background-size: cover;
        }
        .img2 {
          position: absolute;
          left: 0;
          top: 50%;
          width: 26%;
          height: 351px;
          width: 250px;
          background: white;
          background-image: url(../../assets/img/bg5.png);
          background-size: cover;
        }
        .img3 {
          position: absolute;
          right: 0;
          width: 30%;
          bottom: 30px;
          height: 253px;
          width: 355px;
          background: white;
          background-image: url(../../assets/img/bg6.png);
          background-size: cover;
        }
      }
    }
  }
}
</style>
