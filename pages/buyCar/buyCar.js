// pages/buyCar/buyCar.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodsbarHeaderSign: false,
    shopGoodBarNumber: 2,
    popupShow: true
  },
  changeStepper: function(res) {
    console.log(res.detail)
  },
  selectGood: function (res) {
    console.log(res)
  },
  // 打开内容弹出层
  showPopup() {
    this.setData({ popupShow: true });
  },
  // 关闭内容弹出层
  onClose() {
    this.setData({ popupShow: false });
  },
  onPageScroll: function() {
    // const query = wx.createSelectorQuery()
    // query.select('.buyCarClass').boundingClientRect()
    // query.selectViewport().scrollOffset()
    // query.exec(function (res) {
    //   console.log(res);
    // })
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
        active: 1
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