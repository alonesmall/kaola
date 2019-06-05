module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'https://m.kaola.com',   //代理接口
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''    //代理的路径
        }
      },
      '/home': {
        target: 'https://m-element.kaola.com',   //代理接口
        changeOrigin: true,
        pathRewrite: {
          '^/home': ''    //代理的路径
        }
      },
      '/home2': {
        target: 'https://m-element.kaola.com',   //代理接口
        changeOrigin: true,
        pathRewrite: {
          '^/home2': ''    //代理的路径
          // https://m-element.kaola.com/home/index.html?t=1559565488067&pageNo=2
        }
      },
      '/detail': {
        target: 'https://m-goods.kaola.com',   //代理接口
        changeOrigin: true,
        pathRewrite: {
          '^/detail': ''    //代理的路径
          // 轮播图接口
          // https://m-goods.kaola.com/product/invalidGoodsDetailFlowData.json?t=1559632070812&goodsId=1330333&provinceCode=0&cityCode=0&districtCode=0
        }
      }
    }
  }
}
// 首页数据接口
// https://m-element.kaola.com/home/index.html?t=1559545229160&pageNo=1

// 
// https://m-goods.kaola.com/product/getGoodsRecommendInfo.json?t=1559616312094&goodsId=2891991&recommendType=2

// 当前商品详情信息接口
// https://m-goods.kaola.com/product/getWapGoodsDetailDynamic.json?t=1559628442257&goodsId=1631904&provinceCode=310000&cityCode=310100&districtCode=310101

// 使用心得接口
// https://community.kaola.com/api/article/goods/detail/page/for/wap?goodsId=21384&t=1559629302881

// 底部安全说明接口
// https://cms-docs.kaola.com/publish/getPublishContentByKey.html?key=product_goodsdetail_rule

// 商家信息接口
// https://m-goods.kaola.com/product/getGoodsAttachment.json?t=1559629302827&goodsId=21384

// 小考拉推荐接口
// https://m-goods.kaola.com/product/getGoodsRecommendInfo.json?t=1559629302824&goodsId=21384&recommendType=2