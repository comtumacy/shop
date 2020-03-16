const getWebFont = require("./utils/getWebFont.js")
App({

  onLaunch: () => {
    // 网络字体加载
    // getWebFont.getWebFont().then((res) => {
    //   console.log(res)
    // })
  },
  globalData: {
    userInfo: null,
    // 使用静态网络地址
    url: 'https://yitongli.cn/shopImage/'
  }
})