const getWebFont = require("./utils/getWebFont.js")
App({

  onLaunch: () => {
    // 网络字体加载
    // getWebFont.getWebFont().then((res) => {
    //   console.log(res)
    // })
  },
  globalData: {
    userInfo: null
  }
})