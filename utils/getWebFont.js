const getWebFont = () => {
  return new Promise((resolve, reject) => {
    wx.loadFontFace({
      family: 'PingFangNew',
      // source: 'url("https://yitongli.cn/PingFangSC/PingFangSC.ttf")',
      source: 'url("https://mask.km26.com/maskImage/PingFangSC.ttf")',
      global: true,
      success: res => {
        console.log('网络字体加载成功')
        resolve(res)
      },
      fail: res => {
        console.log('网络字体加载失败')
        reject(res)
      }
    })
  })
}

module.exports = {
  getWebFont: getWebFont
}