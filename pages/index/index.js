// pages/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {},
  // 返回搜索框输入内容
  onSearch: (res) => {
    console.log(res)
  },
  // 返回分类组件的选择内容
  onChange: (res) => {
    console.log(res)
  },
  // 返回分类组件的按钮事件
  clickClass: (res) => {
    console.log(res)
  },
  // 返回点击轮播图点击事件
  swiperChange: (res) => {
    console.log(res)
  },
  // 返回活动点击事件
  enterActivity: (res) => {
    console.log(res)
  },
  // 返回时间控制事件
  onChangeTime: function(res) {
    console.log(res)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        active: 0
      })
    }
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})