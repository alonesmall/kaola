<template>
  <div class="box-detail">
    <!-- 导航部分 -->
    <div class="all-nav">
      <div class="go-back">
        <van-icon name="arrow-left" size="0.18rem" class="arrow-left" @click="goback"/>
      </div>
      <div class="nav">
        <a href="" class="active">商品</a>
        <a href="">评价</a>
        <a href="">推荐</a>
        <a href="">详情</a>
      </div>
      <div class="go-home">
        <van-icon name="wap-home"  size="0.2rem" @click="gohome"/>
      </div>
    </div>

    <!-- 轮播图部分 -->
    <div class="banner">
      <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(item, index) in bannerList" :key="index">
          <img :src="item.imageUrl" alt="">
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="n-color">
      <div class="main-img">
        <img src="https://haitao.nosdn1.127.net/f06f8272705e45f699c53eb0264a7c1f1554203462566jtzom2s410105.jpg?imageView&thumbnail=750x0&quality=75&type=webp" alt="">
      </div>

      <span>颜色：</span>
      <div class="mycolor">
        <img src="https://haitao.nosdn1.127.net/f06f8272705e45f699c53eb0264a7c1f1554203462566jtzom2s410105.jpg?imageView&thumbnail=750x0&quality=75&type=webp" alt="">
        <img src="https://haitao.nosdn1.127.net/f06f8272705e45f699c53eb0264a7c1f1554203462566jtzom2s410105.jpg?imageView&thumbnail=750x0&quality=75&type=webp" alt="">
        <img src="https://haitao.nosdn1.127.net/f06f8272705e45f699c53eb0264a7c1f1554203462566jtzom2s410105.jpg?imageView&thumbnail=750x0&quality=75&type=webp" alt="">
      </div>
    </div>
    <div class="n-price">
      <div class="n-price-left">
        <span class="curprice">
          ￥
          <i class="curnum">{{ skuPrice.currentPrice }}</i>
          起
        </span>
        <span class="mrkprice">
          ￥{{ skuPrice.marketPrice }}
        </span>
        <div class="if-tag">

          <span class="tag" v-for="(promotionItem, promotionIndex) in promotionTag" :key="promotionIndex" >
            {{ promotionItem }}
          </span>
        </div>
      </div>
    </div>

    <!-- vip部分 -->
    <div class="n-membertip">
      <div class="mline1">
        <img src="https://haitao.nosdn1.127.net/6dc03e40-5452-4a3e-a039-1ae8badbce2e_120_45.png?klsize=120x45&imageView&thumbnail=0x26&quality=90" alt="">
        <span class="maintxt" v-html="maintext">
        </span>
        <img src="https://haitao.nosdn1.127.net/79336f9f-4623-47e8-ada8-7292668a8006_48_48.png?imageView&thumbnail=39x39&quality=100" alt="" class="mpoint" @click="warn">
      </div>
      <div class="mline2">
        <span class="subtxt">
          {{ subText }}
        </span>
      </div>
      <div class="mlink">
        <span class="mtxt"> {{ openCardText }}</span>
      </div>
    </div>
    <h4 class="n-title">
      {{ msgtitle }}
    </h4>
    <div class="n-tagbox">
      <div class="n-taginfo">
        <img src="https://haitao.nos.netease.com/1077833fa2854dcb97502084f24f449d1419659976324i46kw8bh10001.png?imageView&thumbnail=32x0&quality=75" alt="" class="v-flaging">
        <span class="tagtxt">美国品牌</span>
        <img src="https://haitao.nos.netease.com/183cb5b6-0edd-45d5-9218-3f5d3ab33244.png?imageView&thumbnail=32x0&quality=75" alt="" class="v-flaging">
        <span class="tagtxt">网易自营</span>
        <img src="https://haitao.nosdn2.127.net/13bd59e6e29a4f06b278c586629e690d.png?imageView&thumbnail=32x0&quality=75" alt="" class="v-flaging">
        <span class="tagtxt">跨境商品</span>
      </div>
    </div>
    <p class="v-seperate"></p>
    <ul class="n-activitybox">
      <li class="itm n-selectprops">
        <div class="name">
          请选择：
        </div>
        <div class="cnt propinfo">
          <p>尺码</p>
        </div>
        <van-icon name="arrow" />
      </li>
      <li class="itm n-salepromotion">
        <div class="name">
          促&nbsp;&nbsp;销：
        </div>
        <div class="cnt propinfo">
          <p>111</p>
        </div>
      </li>
      <li class="itm n-distribution">
        <div class="name">
          配&nbsp;&nbsp;送：
        </div>
        <div class="cnt propinfo">
          <p>111</p>
        </div>
      </li>
      <li class="itm n-expressinfo">
        <div class="name">
          运&nbsp;&nbsp;费：
        </div>
        <div class="cnt propinfo">
          <p>111</p>
        </div>
      </li>
      <li class="itm n-description">
        <div class="name">
          说&nbsp;&nbsp;明：
        </div>
        <div class="cnt propinfo">
          <p>111</p>
        </div>
      </li>
    </ul>

    <p class="v-seperate"></p>

    <div class="shopStore">
      <div class="n-brandboxBrand">
        <div class="branwrap">
          <img :src="shopbrand.brandLogo" alt="" class="shoplogo">
          <div class="shopname">
            <p class="p-title">{{ shopbrand.brandName }}</p>
            <p class="p-txt">
              在售商品
              <span>{{ shopbrand.brandGoodsAmount }}</span>
              件
            </p>
          </div>
          <div class="shoplink">
            进入品牌
            <van-icon name="shop-o" size=".14rem" class="shopIcon"/>
          </div>
        </div>
      </div>

      <!-- 该店展示商品 -->
      <div class="listwrap" v-if="shopGoodsList">
        <ul>
          <li v-for="shopItem in shopGoodsList" :key="shopItem.goodsId">
            <a>
              <img :src="shopItem.imageUrl" alt="">

              <div class="promotionLabel">{{ shopItem.promotionLabel }}</div>
              <p class="title">{{ shopItem.title }}</p>
              <p class="price">￥{{ shopItem.price }}</p>
            </a>
          </li>

        </ul>
      </div>
    </div>

    <p class="v-seperate"></p>

    <Tuijian />
    <Footer />
  </div>
</template>
<script>
import axios from 'axios'
import Tuijian from '@/components/detail/Tuijian'
import Footer from '@/components/detail/Footer'
export default {
  components: {
    Tuijian,
    Footer
  },
  data () {
    return {
      bannerList: [],
      skuPrice: '',
      promotionTag: [],
      vipLayoutInfo: [],
      msgtitle: '',
      shopbrand: '',
      shopGoodsList: ''
    }
  },
  computed: {
    maintext () {
      return this.vipLayoutInfo.mainText
    },
    subText () {
      return this.vipLayoutInfo.subText
    },
    openCardText () {
      return this.vipLayoutInfo.openCardText
    }
  },
  mounted () {
    let { id } = this.$route.params
    // console.log(this.$route.params)
    // console.log(id)
    axios.get(`/detail/product/invalidGoodsDetailFlowData.json?t=1559632070812&goodsId=${id}&provinceCode=0&cityCode=0&districtCode=0`)
      .then(res => {
        // console.log(res.data.data)
        this.bannerList = res.data.data
      })

    axios.get(`/detail/product/getWapGoodsDetailDynamic.json?t=1559628442257&goodsId=${id}&provinceCode=310000&cityCode=310100&districtCode=310101`)
      .then(res => {
        // console.log(res.data.data.skuPrice)
        // console.log(res.data.data)
        this.skuPrice = res.data.data.skuPrice
        this.promotionTag = res.data.data.promotionTag
        if (!res.data.data.vipLayoutInfo) {
          this.vipLayoutInfo = { maintext: '暂无信息' }
        } else {
          this.vipLayoutInfo = res.data.data.vipLayoutInfo
        }
        // console.log(res.data.data)
      })
      .catch(err => {
        console.log(err)
      })
    axios.get(`/detail/product/invalidGoodsDetailFlowData.json?t=1559636223573&goodsId=${id}&provinceCode=0&cityCode=0&districtCode=0`)
      .then(res => {
        this.msgtitle = res.data.data[0].title
      })
      .catch(err => {
        console.log(err)
      })
    // 请求商家推荐信息
    axios.get(`/detail/product/getGoodsAttachment.json?t=1559723476953&goodsId=${id}`)
      .then(res => {
        this.shopbrand = res.data.data.brand
        this.shopGoodsList = res.data.data.goodsList
      })
  },
  methods: {
    goback () {
      this.$router.go(-1)
    },
    gohome () {
      this.$router.push('/')
    },
    myproduct () {
      console.log(2)
    },
    warn () {
      console.log(1)
    }
  }
}
</script>

<style lang="scss">
.box-detail {
  overflow: auto;
  .all-nav {
    height: 0.45rem;
    display: flex;
    justify-content: space-around;
    border-bottom: 0.01rem solid #ececec;
    .go-back {
      display: flex;
      .arrow-left {
        align-self: center;
      }
    }
    .nav {
      width: 70%;
      a {
        display: block;
        float: left;
        font: 0.15rem/0.45rem "";
        padding: 0 0.12rem;
        color: #333;
      }
      .active {
        color: red;
      }
    }
    .go-home {
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
  }
  .banner {
    width: 100%;
    height: 2.56rem;
    .van-swipe {
      width: 100%;
      height: 2.56rem;
      img {
        width: 100%;
        height: 2.56rem;
      }
    }
  }
  .n-color {
    width: 100%;
    height: 0.4rem;
    background: #ececec;
    display: flex;
    align-items: center;
    overflow: auto;
    .main-img {
      width: 0.3rem;
      height: 0.3rem;
      margin-left: 0.1rem;
      margin-right: .2rem;
      img {
        width: 0.3rem;
        height: 0.3rem;
      }
    }
    span {
      width: .6rem;
      height: 0.3rem;
      font: 0.12rem/0.3rem "";
      text-align: center;
    }
    .mycolor {
      display: flex;
      img {
        width: 0.3rem;
        height: .3rem;
        margin-left: .1rem;
      }
    }
  }
  .n-price {
    width: 100%;
    height: .5rem;
    .n-price-left {
      padding-left: .1rem;
      .curprice {
        font: .14rem/.5rem "";
        color: red;
        i {
          font: 700 0.24rem/.5rem "";
        }
      }
      .mrkprice {
        text-decoration: line-through;
      }
    }
    .if-tag {
      display: inline-block;
      .tag {
        height: 0.2rem;
        background: pink;
        font: 0.12rem/0.15rem "";
        color: #fff;
        padding: 0 0.06rem;
        border-radius: .03rem;
        margin-left: .1rem;
      }
    }
  }
  .n-membertip {
    width: 3rem;
    height: .55rem;
    background: #f7f7f7;
    margin: .05rem .1rem .1rem;
    position: relative;
    padding: .05rem;
    .mline1 {
      width: 2.3rem;
      height: .21rem;
      img {
        width: .4rem;
        height: .15rem;
      }
      .mpoint {
        width: 0.13rem;
        height: 0.13rem;
        margin-left: 0.1rem;
      }
    }
    .mline2 {
      width: 2.3rem;
      height: .21rem;
      .subtxt {
        font: 0.12rem/0.21rem "";
        color: #999;
      }
    }
    .mlink {
      width: .55rem;
      height: .55rem;
      position: absolute;
      right: 0;
      top: 0;
      background: #f3eee3;
      display: flex;
      align-items: center;
      justify-content: center;
      .mtxt {
        flex: 0 0 .26rem;
        line-height: .16rem;
        font-size: .12rem;
        color: #333;
      }
    }
  }
  .n-title {
    width: 3rem;
    height: .47rem;
    font: 700 0.14rem/0.18rem "";
    padding-top: 0.1rem;
    border-top: 0.01rem solid #f0f0f0;
    margin: 0 auto;
    overflow: hidden;
  }
  .n-tagbox {
    width: 100%;
    height: .36rem;
    margin-bottom: 0.1rem;
    .n-taginfo {
      width: 3rem;
      height: .36rem;
      background: #f7f7f7;
      margin: 0.1rem 0.1rem 0;
          padding: 9px 0 9px 10px;
      img {
        width: 0.16rem;
        height: 0.16rem;
        margin-left: 0.1rem;
      }
      span {
        font-size: 0.12rem;
        margin-left: 0.1rem;
      }
    }
  }
  .v-seperate {
    width: 100%;
    height: 0.1rem;
    background: #f1f1f1;
  }
  .n-activitybox {
    width: 100%;
    height: 3.06rem;
    padding: 0 .1rem;
    li {
      padding: 9px 0;
      border-bottom: 1px solid #f0f0f0;
      position: relative;
      .name {
        height: .24rem;
        font-size: 0.13rem;
        line-height: 0.24rem;
        float: left
      }
      .propinfo {
        padding-top: 0.02rem;
        padding-right: 0.1rem;
      }
      .van-icon-arrow {
        float: left;
        display: block;
        width: 0.1rem;
        height: 0.1rem;
        position: absolute;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
      }
    }
  }
  .shopStore {
    overflow: hidden;
    .n-brandboxBrand {
      .branwrap {
        overflow: hidden;
        padding: .1rem .1rem;
        img {
          display: block;
          float: left;
          height: .5rem;
          width: 0.5rem;
        }
        .shopname {
          float: left;
          margin-left: .12rem;
          margin-top:.05rem;
          p {
            span {
              color: red;
            }
          }
        }
        .shoplink {
          width: .9rem;
          height: .28rem;
          border: .01rem solid #ddd;
          float: right;
          border-radius: .05rem;
          font-size: .12rem;
          line-height: .28rem;
          position: relative;
          padding-left: .3rem;
          margin-top: .1rem;
          .shopIcon {
            display: block;
            position: absolute;
            left: .1rem;
            top: .06rem;
          }
        }
      }
    }
    .listwrap {
      overflow: auto;
      margin: 0 0 .1rem .1rem;
      ul {
        display: flex;
        li {
          float: left;
          margin-right: .1rem;
          a {
            display: block;
            width: 1.06rem;
            height: 1.57rem;
            position: relative;
            img {
              width: 1.07rem;
              height: 1.07rem;
              display: block;
            }
            .promotionLabel {
              position: absolute;
              font: .12rem/.22rem "";
              color: red;
              border: .01rem solid red;
              position: absolute;
              top: .83rem;
              background: #fff;
            }
            .title {
              font: .12rem/0.13rem "";
                word-break: break-word;
                white-space: normal;
                height: .26rem;
                overflow: hidden;
                color: #333;
                text-align: center;
            }
            .price {
              color: red;
              text-align: center;
            }
          }
        }
      }
    }
  }
}
</style>
