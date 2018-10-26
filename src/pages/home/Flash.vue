<template>
  <div>
    <!-- 标题有一个视差滚动效果，本来用vue-parallaxy发现有bug，暂时用backgroung-attachment实现一下 -->
    <div class="title">
      <h1>团情快讯</h1>
    </div>
    <div class="content">
      <parallax-container class="img horizontal-card">
          <parallax-element class="inner-container" :parallaxStrength="15" :type="'translation'">
            <div class="inner"></div>
          </parallax-element>
          <parallax-element class="background-image" :parallaxStrength="-10" :type="'translation'">
          </parallax-element>  
      </parallax-container>
      <div class="lists">
        <ul>
          <li v-for="(item, index) in newsLists" :key="index">{{item}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
// import Parallax from 'vue-parallaxy'
export default {
  data() {
    return {
      newsLists: [
        '四川大学“第二课堂成绩单”制度 专题培训会成功举办',
        '校团委“团团请你吃午餐“交流活动成功举办',
        '校团委秘书处第一期“启航”训练营成功举办',
        '校团委举办学生干部作风建设推进会',
        '川大学子在2018年“创青春”全国大学生创业大赛国际名校邀...'
      ]
    }
  },
}
</script>

<style lang="scss" scoped>
  .title {
    margin-top: 90px;
    margin-bottom: 90px;
    width: 100%;
    height: 300px;
    background-image: url(https://placekitten.com/g/800/600);
    background-attachment: fixed;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    h1 {
      color: rgba(255,255,255,1);
      font-size: 38px;
      font-weight: 500;
      text-shadow: 0 0 5px #000;
    }
  }
  .content {
    display: flex;
    justify-content: center;
    .img {
      width: 500px;
      height: 400px;
      margin-right: 30px;
      position: relative;
      .inner-container {
        width: 300px;
        height: 400px;
        box-shadow: 0 1.8vw 4vw -0.7vw rgba(0,0,0,.2);
        position: absolute;
        top: 20px;
        left: -20px;
        background: url(../../assets/img/bg1.png);
        background-size: cover;
        z-index: 100;
      }
      .background-image {
        height: 100%;
        background: url(../../assets/img/bg3.png);
        background-size: cover;
      }
    }
    .lists {
      width: 500px;
      margin-left: 30px;
      ul {
        li {
          font-size: 18px;
          line-height: 40px;
          border-bottom: 1px solid #eee;
          &:hover {
            background: #eee;
            cursor: pointer;
            transition: all 1s ease;
          }
        }
      }
    }
  }
</style>
