let app = getApp()
const getPhoneInfo = require('../../utils/getPhoneInfo.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl: '../../image/start/start.jpg',
    height: 0,
    time: 2000
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    getPhoneInfo.info().then((res) => {
      let height = res.windowHeight
      this.setData({
        height: height
      })
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    let time = this.data.time
    // 获取用户信息
    wx.getSetting({
      success: res => {
        // 已经授权则直接获取
        if (res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              app.globalData.userInfo = res.userInfo
              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
              setTimeout(() => {
                wx.switchTab({
                  url: '/pages/index/index'
                })
              }, time)
            }
          })
        } else {
          setTimeout(() => {
            wx.navigateTo({
              url: '/pages/login/login'
            })
          }, time)
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})