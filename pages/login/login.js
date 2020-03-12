let app = getApp()
const getPhoneInfo = require('../../utils/getPhoneInfo.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgBottomUrl: `${app.globalData.url}login/login.jpg`,
    backImgHeight: null,
    iconImgSize: null,
    buttonWidth: null,
    iconUrl: `${app.globalData.url}icon/icon.jpg`
  },
  // 获取用户信息
  bindGetUserInfo: function(res) {
    this.setData({
      iconUrl: res.detail.userInfo.avatarUrl
    })
    app.globalData.userInfo = res.detail.userInfo
    setTimeout(() => {
      wx.switchTab({
        url: "/pages/index/index"
      })
    }, 1000)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    getPhoneInfo.info().then((res) => {
      let backImgHeight = res.safeArea.height * 0.3 * 2
      let iconImgSize = res.safeArea.width * 0.2 * 2
      let buttonWidth = res.safeArea.width * 0.6 * 2
      this.setData({
        backImgHeight: backImgHeight,
        iconImgSize: iconImgSize,
        buttonWidth: buttonWidth
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