<template>
  <div class="n-recommendbox">
    <h4 class="tit">小考拉推荐</h4>
    <div class="listwrap">
      <ul>
        <li v-for="tuiItem in tuijianList" :key="tuiItem.goodsId">
          <a>
            <img :src="tuiItem.imageUrl" alt="">
            <p class="title">{{ tuiItem.title }}</p>
            <p class="price">
              <span class="currprice">￥{{ tuiItem.currentPrice }}</span>
              <span class="mrkprice">￥{{ tuiItem.marketPrice }}</span>
            </p>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      tuijianList: ''
    }
  },
  mounted () {
    let { id } = this.$route.params
    axios.get(`/detail/product/getGoodsRecommendInfo.json?t=1559727959633&goodsId=${id}&recommendType=2`)
      .then(res => {
        console.log(res.data.data)
        this.tuijianList = res.data.data
      })
  }
}
</script>

<style lang="scss" scoped>
  .n-recommendbox {
    overflow:hidden;
    margin-bottom: .1rem;
    .tit {
      font: .14rem/.32rem "";
      color: #333;
      margin-top: .05rem;
      padding: 0 .1rem;
    }
    .listwrap {
      margin: 0 0 .1rem .1rem;
      overflow: auto;
      ul {
        display: flex;
        li {
          width:1.06rem;
          float: left;
          margin-right: .1rem;
          a{
            display: block;
            img {
              display: block;
              width: 1.06rem;
              height: 1.06rem;
            }
            .title {
              font: .12rem/.13rem "";
              color: #333;
              word-break: break-word;
              white-space: normal;
              overflow: hidden;
              height: .26rem;
              margin: .06rem 0 .04rem;
              text-align: center;
            }
            .price {
              height:.24rem;
              text-align: center;
              .currprice {
                font-size: 0.13rem;
                color: red;
                margin-right: .05rem;
              }
              .mrkprice {
                font-size: .13rem;
                text-decoration: line-through;
                color: #999;
              }
            }
          }
        }
      }
    }
  }
</style>
