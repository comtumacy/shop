const getContent = () => {
  let content = []
  return new Promise((resolve, reject) => {
    wx.request({
      url: 'https://yitongli.cn/newsApi/get/news_get1',
      header: {
        'content-type': 'application/json',
        'page': 0
      },
      success: (res) => {
        let result = res.data
        resolve(result)
      },
      fail: () => {
        reject("系统异常，请重试！")
      }
    })
  })
}

module.exports = {
  getContent: getContent
}