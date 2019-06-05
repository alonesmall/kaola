<template>
  <ul class="prolist">
    <li v-for="item in prolist" :key="item.goodsId" @click="goDetail(item.goodsId)">
      <img :src="item.imageUrl" alt="">
      <div class="text-info">
        <div class="title">
          <p>{{ item.title }}</p>
        </div>
        <div class="price">
          <p class="currentMoneyIcon">￥</p>
          <p>{{ item.currentPrice }}</p>
        </div>
      </div>
    </li>

  </ul>
</template>

<script>
export default {
  props: ['prolist'],
  methods: {
    goDetail (id) {
      this.$router.push(`/detail/${id}`)
    }
  }
}
</script>

<style lang="scss">
.prolist {
  overflow: hidden;
  li {
    border: 0.01rem solid #ececec;
    border-radius: 0.02rem;
    width: 1.47rem;
    height: 2.11rem;
    background: #fff;
    margin: 0.1rem 0 0.09rem 0.09rem;
    float: left;
    img {
      width: 1.45rem;
      height: 1.45rem;
    }
    .text-info {
      margin-top: 0.05rem;
      overflow: hidden;
      padding: 0 0.05rem;
      .title {
        height: 0.36rem;
        overflow: hidden;
        p {
          font: 0.14rem/0.17rem "";
          height: 0.36rem;
        }
      }
      .price {
        display: flex;
        .currentMoneyIcon {
          color:red;
        }
        p {
          font: 700 0.14rem/0.18rem "";
          color:red;
        }
      }
    }
  }
}
</style>
