<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
@import '@/lib/reset.scss';
#app {
  @include rect(100%, 100%);
  overflow: auto;
  .box {
    @include rect(100%, 100%);
    .header {
      @include rect(100%, 0.6rem);
    }
    .content {
      overflow: auto;
      @include flex();
      @include rect(100%, 100%);
      .footer {
        height: 1rem;
        background: #9999;
      }
    }
  }
}
</style>
