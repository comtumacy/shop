// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value: "",
    guessContent: ["运动品类日", "网络巅峰", "防疫", "攻坚", "除菌空调", "水溶肥", "手机服务", "运动户外", "低价手机", "百货节"]
  },

  search: function (res) {
    console.log(res.detail)
  },

  enterGuess: function (res) {
    console.log(res.currentTarget.dataset.enterguesschild)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '搜索'
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