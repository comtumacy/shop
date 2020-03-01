const login = () => {
  return new Promise((resolve, reject) => {
    wx.login({
      // console.log(res)
      success: (res) => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        let openId = res.data.code
        resolve(openId)
      },
      fail: () => {
        reject("error")
      }
    })
  })
}

module.exports = {
  login: login
}