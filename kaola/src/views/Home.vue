<template>
  <div class="box">
    <header class="header">
      <router-link tag="div" to="/search" class="search"  >
        <van-icon name="search" size="0.18rem" color="red"/>
        <span class="info">anh套装</span>
      </router-link>
      <div class="login" @click="goLogin">
        登录
      </div>
      <van-icon name="cart-o" size="0.24rem" class="cart" @click="goCart"/>
    </header>

    <div class="content">
      <van-swipe :autoplay="3000" indicator-color="white" class="swipe">
        <van-swipe-item v-for="(item, index) in bannerList" :key="index">
          <a :href="item.linkUrl">
            <img :src="item.imgUrl"/>
          </a>
        </van-swipe-item>
      </van-swipe>
      <div class="my-promise" @click="goPromise">
        <img src="http://haitao.nos.netease.com/8Bmnhqys9uRTOq9kXnPHly6tECwVp4TwT1806271503_1125_68.png" alt="">
      </div>

      <div class="kind">
        <ul>
          <li v-for="(kindItem, kindIndex) in kindList" :key="kindIndex">
            <a :href="kindItem.linkUrl"><img :src="kindItem.imgUrl"/></a>
          </li>
        </ul>
      </div>

      <div class="newPeople-one">
        <img :src="list1.imageUrl" alt="">
      </div>

      <div class="newPeople-two">
        <div class="newPeople-two-left">
          <img :src="newPeopleList[0].imageUrl" alt="">
        </div>
        <div class="newPeople-two-right">
          <img :src="newPeopleList[1].imageUrl" alt="">
          <img :src="newPeopleList[2].imageUrl" alt="">
        </div>
      </div>

      <div class="mother">
        <img :src="motherList.imageUrl" alt="">
      </div>
      <div class="full-reduce">
        <img :src="reduceList.imageUrl" alt="">
      </div>

      <div class="special-1">
        <a>
          <img  :src="specialList1.firstImgItem.imgUrl" alt="">
        </a>
        <a>
          <img :src="specialList1.secondImgItem.imgUrl" alt="">
        </a>
      </div>
      <div class="special-2">
        <a>
          <img :src="specialList2.firstImgItem.imgUrl" alt="">
        </a>
        <a>
          <img :src="specialList2.secondImgItem.imgUrl" alt="">
        </a>
      </div>
      <div class="tuijian">
        <img src="https://haitao.nosdn1.127.net/61556274-32ef-44bf-84af-b3d4485ac157.png" alt="">
      </div>
      <div class="all-prolist">
        <Prolist v-bind:prolist="prolist"/>
      </div>
      <footer class="footer">这是首页底部</footer>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import axios from 'axios'
import Prolist from '@/components/common/Prolist.vue'
export default {
  components: {
    Prolist
  },
  data () {
    return {
      homeList: [],
      newPeopleList: [{ imageUrl: '' }, { imageUrl: '' }, { imageUrl: '' }],
      list1: [],
      motherList: '',
      reduceList: '',
      specialList1: { firstImgItem: { imgUrl: '' }, secondImgItem: { imgUrl: '' } },
      specialList2: { firstImgItem: { imgUrl: '' }, secondImgItem: { imgUrl: '' } },
      prolist: []
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.getKindList()
    })
    next()
  },
  computed: {
    kindList () {
      return this.homeList[2].itemList
    },
    ...mapState({
      bannerList: ({ home }) => home.bannerList,
      kindList: ({ home }) => home.kindList
    })
  },
  mounted () {
    this.getBannerList()
    this.getKindList()
    axios.get('/home/home/index.html?t=1559545229160&pageNo=1')
      .then(res => {
        this.homeList = res.data.data.home
        this.newPeopleList = res.data.data.home[4].itemList
        this.list1 = res.data.data.home[3]
        this.motherList = res.data.data.home[5]
        this.reduceList = res.data.data.home[6]
        this.specialList1 = res.data.data.home[8]
        this.specialList2 = res.data.data.home[9]
      })
      .catch(err => {
        console.log(err)
      })

    // 请求商品列表
    axios.get('/home/home/index.html?t=1559545229160&pageNo=4')
      .then(res => {
        this.prolist = res.data.data.home[1].globalGoodsItemList
      })
      .catch(err => {
        console.log(err)
      })
  },
  methods: {
    ...mapActions({
      getBannerList: 'getBannerList',
      getKindList: 'getKindList'
    }),
    goLogin () {
      this.$router.push('/login')
    },
    goCart () {
      console.log(this.kindList)
    },
    goPromise () {
      console.log('goPromise')
    }
  }
}
</script>

<style lang="scss">
@import '@/lib/reset.scss';
.header {
  @include flexbox();
  align-items: center;
  .search {
    width: 2rem;
    height: 0.3rem;
    border: 0.02rem solid red;
    border-radius: 0.15rem;
    margin-left: 0.14rem;
    .van-icon {
      float: left;
      display: block;
      margin-left: 0.05rem;
      margin-top: 0.05rem;
    }
    .info {
      line-height: 0.3rem;
      display: block;
      float: left;
      margin-left: 0.05rem;
    }
  }
  .login {
    width: 0.4rem;
    height: 0.22rem;
    border: 0.01rem solid red;
    font: 0.1rem/0.22rem "";
    text-align: center;
    margin-left: 0.14rem;
    color: red;
  }
  .cart {
    margin-left: 0.14rem;
  }
}
.content {
  .swipe {
    height: 2rem;
    background: skyblue;
  }
  img {
    width: 100%;
    height: 2rem;
  }
  .my-promise {
    width: 100%;
    height: 0.2rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .kind {
    ul {
      overflow: hidden;
      li {
        float: left;
        a {
          display: block;
          overflow: hidden;
          img {
            width: 0.64rem;
            height: 0.73rem;
          }
        }
      }
    }
  }
  .newPeople-one {
    width: 100%;
    height: 0.73rem;
    img {
      width: 100%;
      height:0.73rem;
    }
  }
  .newPeople-two {
    overflow: hidden;
    .newPeople-two-left {
      float: left;
      width: 1.6rem;
      height: 1.6rem;
      img {
        width: 1.6rem;
        height: 1.6rem;
      }
    }
    .newPeople-two-right {
      float: left;
      width: 1.6rem;
      height: 1.6rem;
      img {
        width: 1.6rem;
        height: 0.8rem;
      }
    }
  }
  .mother {
    width: 100%;
    height: 1.38rem;
    img {
      width: 100%;
      height: 1.38rem;
    }
  }
  .full-reduce {
    height: 0.19rem;
    img {
      height: 0.19rem;
    }
  }
  .special-1 {
    width: 100%;
    height: 0.62rem;
    display: flex;
    a {
      overflow: hidden;
      img {
        width: 1.6rem;
        height: 0.62rem;
      }
    }
  }
  .special-2 {
    width: 100%;
    height: 0.62rem;
    display: flex;
    a {
      overflow: hidden;
      img {
        width: 1.6rem;
        height: 0.62rem;
      }
    }
  }
  .tuijian {
    width: 100%;
    height: 0.52rem;
    img {
      width: 100%;
      height: 0.52rem;
    }
  }
  .all-prolist {
    overflow: hidden;
    background: #f2f2f2;
  }
}
</style>
