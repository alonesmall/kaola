<template>
  <div class="footer">
    <van-goods-action>
      <van-goods-action-icon
        icon="like-o"
        text="收藏"
        @click="onClickIcon"
      />
      <van-goods-action-icon
        icon="cart-o"
        text="购物车"
        @click="onClickIcon"
      />
      <van-goods-action-button
        type="warning"
        text="加入购物车"
        @click="onClickButton"
      />
      <van-goods-action-button
        type="danger"
        text="立即购买"
        @click="onClickButton"
      />
    </van-goods-action>
  </div>
</template>
<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    onClickIcon () {

    },
    onClickButton () {
      console.log(1)
    }
  }
}
</script>
