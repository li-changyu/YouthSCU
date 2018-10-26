<template>
  <div class="news">
    <div class="news-title">
      <h2 class="title">公告</h2>
      <div class="line"></div>
    </div>
    <swiper :options="swiperOption" ref="swiper" class="swiper">
      <swiper-slide class="slide1">
        <div class="slide-img slide-img1"></div>
        <div class="content">
          <div class="slide-title">育由专音同集议着任老</div>
          <div class="sub-title">2018/10/26</div>
          <div class="slide-content">斯着于转们日作，具养易济，力该特着情。 快用由据类办般太证酸，响算东内8子条价。 现它很叫已制干单大色，基府候议音型各及，只度86亲东克吼。 何强青想革众世，易把科代最照，几V具律音。 几米器细军级却府所，决织该律里计非保，众了更铁建枝九。</div>
          <div class="btn">DETAIL ></div>
        </div>
      </swiper-slide>
      <swiper-slide class="slide2">
        <div class="slide-img slide-img2"></div>
        <div class="content">
          <div class="slide-title">统力能边千适设往造市军例变</div>
          <div class="sub-title">2018/10/26</div>
          <div class="slide-content">进过实断于按极装制，写类量还表义，便约建何县支却。 真运已多反心容第提，目们林农何整种，展求肃事族做伶。 叫流放段全况则，半原林会切复，断陕口时再。 三利响而条精及放月，话高土山里通其广人，目辰联最雨立范。</div>
          <div class="btn">DETAIL ></div>
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
        spaceBetween: 30,
        effect: 'fade',
        loop: true,
        mousewheel: {
          invert: false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        }
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
      max-width: 900px;
      height: 350px;
      border: 1px solid black;
      position: relative;
      overflow: visible;
      .slide-img {
        width: 300px;
        height: 300px;
        position: absolute;
        top: 20px;
        left: -20px;
      }
      .content {
        position: absolute;
        padding-top: 20px;
        padding-right: 40px;
        height: 100%;
        left: 300px;
        background-color: white;
        .slide-title {
          font-size: 20px;
          font-weight: 400;
          padding-bottom: 20px;
          color: black;
        }
        .sub-title {
          color: #767676;
          padding-bottom: 20px;
        }
        .slide-content {
          color: black;
          line-height: 2;
        }
        .btn {
          width: 140px;
          height: 40px;
          background: black;
          color: white;
          text-align: center;
          line-height: 40px;
          position: absolute;
          bottom: 30px;
          &:hover {
            background: rgb(31, 31, 31);
            cursor: pointer;
          }
        }
      }
    }
  }
  .slide-img1 {
    background-image: url(../../assets/img/bg3.png);
    background-size: cover;
  }
  .slide-img2 {
    background-image: url(../../assets/img/bg6.png);
    background-size: cover;
  }
  .slide-img {
    box-shadow: 0 1.8vw 4vw -0.7vw rgba(0,0,0,.2);
  }
</style>
