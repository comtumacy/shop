// 获取设备部分信息
const info = () => {
  return new Promise((resolve, reject) => {
    wx.getSystemInfo({
      success: (res) => {
        // tarbar高恒定50px
        // 屏幕宽度、高度，去除手机状态栏与小程序状态栏与tabbar可用宽度、高度，手机状态栏高度
        // safeArea:安全区域，去除手机状态栏与全面屏下面误触区域
        // left、right为安全区域横坐标区间，top、bottom为安全区域纵坐标区间，width、height为安全区域的宽高
        let content = {
          "screenWidth": null,
          "screenHeight": null,
          "windowWidth": null,
          "windowHeight": null,
          "statusBarHeight": null,
          "safeArea": null
        }
        content.screenWidth = res.screenWidth
        content.screenHeight = res.screenHeight
        content.windowWidth = res.windowWidth
        content.windowHeight = res.windowHeight
        content.statusBarHeight = res.statusBarHeight
        content.safeArea = res.safeArea
        resolve(content)
      },
      fail: () => {
        reject("error")
      }
    })
  })
}

module.exports = {
  info: info
}