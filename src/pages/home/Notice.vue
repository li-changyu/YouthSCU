<template>
  <div class="news">
    <div class="news-title">
      <h2 class="title">活动预告</h2>
      <div class="line"></div>
    </div>
    <swiper :options="swiperOption" ref="swiper" class="swiper">
      <swiper-slide>
        <div class="slide slide1 hvr-radial-out">
          <div class="content">
            <div class="title">活动名称</div>
            <div class="line"></div>
            <div class="detail btn">DETAIL ></div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="slide slide2 hvr-radial-out">
          <div class="content">
            <div class="title">活动名称</div>
            <div class="line"></div>
            <div class="detail btn">DETAIL ></div>
          </div>
        </div>
        </swiper-slide>
      <swiper-slide>
        <div class="slide slide3 hvr-radial-out">
          <div class="content">
            <div class="title">活动名称</div>
            <div class="line"></div>
            <div class="detail btn">DETAIL ></div>
          </div>
        </div>
        </swiper-slide>
      <swiper-slide>
        <div class="slide slide4 hvr-radial-out">
          <div class="content">
            <div class="title">活动名称</div>
            <div class="line"></div>
            <div class="detail btn">DETAIL ></div>
          </div>
        </div>
        </swiper-slide>
      <swiper-slide>
        <div class="slide slide5 hvr-radial-out">
          <div class="content">
            <div class="title">活动名称</div>
            <div class="line"></div>
            <div class="detail btn">DETAIL ></div>
          </div>
        </div>
        </swiper-slide>
      <swiper-slide>
        <div class="slide slide6 hvr-radial-out">
          <div class="content">
            <div class="title">活动名称</div>
            <div class="line"></div>
            <div class="detail btn">DETAIL ></div>
          </div>
        </div>
        </swiper-slide>
      <div class="swiper-pagination swiper-pagination-white" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swiperOption: {
        slidesPerView: 4,
        spaceBetween: 30,
        loop: true
      }
    }
  },
}
</script>

<style lang="scss" scoped>
  .news {
    .news-title {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      padding-top: 100px;
      padding-bottom: 30px;
      .title {
        display: inline-block;
        color: black;
        font-size: 38px;
      }
      .line {
        border-bottom: 1px solid black;
        width: 10%;
        padding-bottom: 20px;
      }
    }
    .swiper {
      width: 95%;
      height: 350px;
      position: relative;
      .swiper-slide {
        width: 300px;
      }
    }
  }
  .slide {
    background-size: cover;
    height: 100%;
    display: block!important;
    .content {
      position: relative;
      top: 100px;
      text-align: center;
      font-size: 30px;
      height: 100%;
      opacity: 0;
      color: white;
      &:hover {
        opacity: 1;
        z-index: 100;
      }
      .title {
        padding-bottom: 20px;
      }
      .line {
        position: relative;
        left: 35%;
        text-align: center;
        width: 30%;
        border-bottom: 1px solid white;
      }
      .btn {
        font-size: 16px;
        margin-top: 20px;
        width: 40%;
        position: relative;
        left: 30%;
        height: 40px;
        background: white;
        color: black;
        text-align: center;
        line-height: 40px;
        &:hover {
          background: rgb(226, 226, 226);
          cursor: pointer;
        }
      }
    }
  }
  .hvr-radial-out:before {
    background: black;
  }
  .slide1 {
    background-image: url(../../assets/img/bg1.png);
  }
  .slide2 {
    background: url(../../assets/img/bg2.png);
  }
  .slide3 {
    background: url(../../assets/img/bg3.png);
  }
  .slide4 {
    background: url(../../assets/img/bg4.png);
  }
  .slide5 {
    background: url(../../assets/img/bg5.png);
  }
  .slide6 {
    background: url(../../assets/img/bg6.png);
  }
</style>
