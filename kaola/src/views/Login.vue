<template>
  <div class="login">
    <div class="logo"></div>
    <ul class="selectbox">
      <li class="login-phone">
        <span class="iconfont icon-shouji"></span>
        手机号登录
      </li>
      <li class="login-email">
        <span class="iconfont icon-icon-test"></span>
        邮箱登录
      </li>
      <li class="register-phone">
        手机号一键注册
      </li>
    </ul>
    <div class="thirdlogin">
      <p>
        <span class="txt">或用以下方式登录</span>
      </p>
      <div class="link">
        <a class="iconfont icon-weibo" ></a>
        <a class="iconfont icon-QQ"></a>
        <a class="iconfont icon-zhifubao"></a>
      </div>
    </div>
    <div class="xieyi">
      登录即代表您已同意
      <a>“隐私权相关政策”</a>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.login {
  .logo {
    width: 3.2rem;
    height: 1.3rem;
    background: url(//haitao.nos.netease.com/f866dd18-12f0-4bb2-be6d-5cac85cf2627.png) center .73rem no-repeat;
    background-size: 1.61rem;
  }
  .selectbox {
    width: 3rem;
    margin: 0 auto;
    li {
      font: .14rem/.16rem "";
      padding: .12rem;
      border: .01rem solid #666;
      width: 3rem;
      border-radius: .03rem;
      text-align: center;
      margin-bottom: .15rem;
      span {
        font-size: .16rem;
      }
      &.register-phone {
        background: #000;
        color: #ffffff;
        font-weight: bold;
      }
    }
  }
  .thirdlogin {
    margin-top: .6rem;
    p {
      width: 2.6rem;
      margin: 0 auto;
      border-bottom: .01rem solid #eee;
      position: relative;
      span {
        position: absolute;
        left: 0;
        right: 0;
        margin: auto;
        width: 1.14rem;
        top: -.08rem;
        text-align: center;
        background: #fff;
        font-size: .12rem;
        color: #999;
        padding: 0 .05rem;
      }
    }
  }
  .link {
    width: 2.8rem;
    margin: 0 auto;
    text-align: center;
    padding: .27rem 0 0;
    a {
      width: .31rem;
      height: .31rem;
      font-size: .31rem;
      margin: 0 .29rem;
    }
  }
  .xieyi {
    font-size: .12rem;
    text-align: center;
    color: #999;
    margin-top: .2rem;
    a {
      color: #999;
      text-decoration: underline;
    }
  }
}
</style>
