<template>
  <div class="search-box">
    <div class="my-search">
      <van-icon name="arrow-left" class="arrow-left" size="0.2rem" @click="goback"/>
      <van-search
        v-model="value"
        placeholder="请输入搜索关键词"
        show-action
        shape="round"
        @search="onSearch"
      >
        <div slot="action" @click="onSearch">搜索</div>
      </van-search>
    </div>

    <div class="hotWord">
      <h3>热门搜索</h3>
      <a href="" v-for="(item, index) in searchList" :key="index">
        {{ item.name }}
      </a>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  data () {
    return {
      value: '',
      active: 'true'
    }
  },
  computed: {
    ...mapState({
      searchList: ({ home }) => home.searchList
    })
  },
  methods: {
    ...mapActions({
      getSearchList: 'getSearchList'
    }),
    onSearch () {
      console.log(this.searchList)
    },
    goback () {
      this.$router.go(-1)
    }
  },
  mounted () {
    this.getSearchList()
  }
}
</script>

<style lang="scss">
@import '@/lib/reset.scss';
.my-search {
  @include flexbox();
  .arrow-left {
    align-self: center;
    margin-left: 0.1rem;
  }
}
.hotWord {
  overflow: hidden;
  padding-left: 0.12rem;
  h3 {
    font: 0.14rem/0.3rem "";
    color: #666;
  }
  a {
    display: block;
    float: left;
    font: 0.12rem/0.16rem "";
    color: #333;
    border: 0.01rem solid #333;
    padding: 0.03rem 0.08rem;
    border-radius: 0.03rem;
    margin: 0.04rem 0.1rem 0.1rem 0
  }
}
</style>
