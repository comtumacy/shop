const getPhoneInfo = require('../../utils/getPhoneInfo.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    contentNotUse: [
      {
        "price": 20,
        "enoughPrice": 199,
        "title": "仅限趣便购拼图商品",
        "timeStart": "2019.04.17",
        "timeEnd": "2019.04.24",
        conpouCartRightSign: "品类券"
      },
      {
        "price": 16,
        "enoughPrice": 199,
        "title": "仅限趣便购拼图商品",
        "timeStart": "2019.04.17",
        "timeEnd": "2019.04.24",
        conpouCartRightSign: "品类券"
      },
      {
        "price": 16,
        "enoughPrice": 199,
        "title": "仅限趣便购拼图商品",
        "timeStart": "2019.04.17",
        "timeEnd": "2019.04.24",
        conpouCartRightSign: "品类券"
      },
      {
        "price": 16,
        "enoughPrice": 199,
        "title": "仅限趣便购拼图商品",
        "timeStart": "2019.04.17",
        "timeEnd": "2019.04.24",
        conpouCartRightSign: "品类券"
      },
      {
        "price": 16,
        "enoughPrice": 199,
        "title": "仅限趣便购拼图商品",
        "timeStart": "2019.04.17",
        "timeEnd": "2019.04.24",
        conpouCartRightSign: "品类券"
      },
      {
        "price": 16,
        "enoughPrice": 199,
        "title": "仅限趣便购拼图商品",
        "timeStart": "2019.04.17",
        "timeEnd": "2019.04.24",
        conpouCartRightSign: "品类券"
      },
      {
        "price": 16,
        "enoughPrice": 199,
        "title": "仅限趣便购拼图商品",
        "timeStart": "2019.04.17",
        "timeEnd": "2019.04.24",
        conpouCartRightSign: "品类券"
      },
      {
        "price": 16,
        "enoughPrice": 199,
        "title": "仅限趣便购拼图商品",
        "timeStart": "2019.04.17",
        "timeEnd": "2019.04.24",
        conpouCartRightSign: "品类券"
      },
      {
        "price": 16,
        "enoughPrice": 199,
        "title": "仅限趣便购拼图商品",
        "timeStart": "2019.04.17",
        "timeEnd": "2019.04.24",
        conpouCartRightSign: "品类券"
      }
    ],
    contentUsed: [
      {
        "price": 20,
        "enoughPrice": 199,
        "title": "仅限趣便购拼图商品",
        "timeStart": "2019.04.17",
        "timeEnd": "2019.04.24",
        conpouCartRightSign: "品类券"
      },
      {
        "price": 16,
        "enoughPrice": 199,
        "title": "仅限趣便购拼图商品",
        "timeStart": "2019.04.17",
        "timeEnd": "2019.04.24",
        conpouCartRightSign: "品类券"
      },
      {
        "price": 16,
        "enoughPrice": 199,
        "title": "仅限趣便购拼图商品",
        "timeStart": "2019.04.17",
        "timeEnd": "2019.04.24",
        conpouCartRightSign: "品类券"
      },
      {
        "price": 16,
        "enoughPrice": 199,
        "title": "仅限趣便购拼图商品",
        "timeStart": "2019.04.17",
        "timeEnd": "2019.04.24",
        conpouCartRightSign: "品类券"
      },
      {
        "price": 16,
        "enoughPrice": 199,
        "title": "仅限趣便购拼图商品",
        "timeStart": "2019.04.17",
        "timeEnd": "2019.04.24",
        conpouCartRightSign: "品类券"
      },
      {
        "price": 16,
        "enoughPrice": 199,
        "title": "仅限趣便购拼图商品",
        "timeStart": "2019.04.17",
        "timeEnd": "2019.04.24",
        conpouCartRightSign: "品类券"
      },
      {
        "price": 16,
        "enoughPrice": 199,
        "title": "仅限趣便购拼图商品",
        "timeStart": "2019.04.17",
        "timeEnd": "2019.04.24",
        conpouCartRightSign: "品类券"
      },
      {
        "price": 16,
        "enoughPrice": 199,
        "title": "仅限趣便购拼图商品",
        "timeStart": "2019.04.17",
        "timeEnd": "2019.04.24",
        conpouCartRightSign: "品类券"
      },
      {
        "price": 16,
        "enoughPrice": 199,
        "title": "仅限趣便购拼图商品",
        "timeStart": "2019.04.17",
        "timeEnd": "2019.04.24",
        conpouCartRightSign: "品类券"
      }
    ],
    contentOverdue: [
      {
        "price": 20,
        "enoughPrice": 199,
        "title": "仅限趣便购拼图商品",
        "timeStart": "2019.04.17",
        "timeEnd": "2019.04.24",
        conpouCartRightSign: "品类券"
      },
      {
        "price": 16,
        "enoughPrice": 199,
        "title": "仅限趣便购拼图商品",
        "timeStart": "2019.04.17",
        "timeEnd": "2019.04.24",
        conpouCartRightSign: "品类券"
      },
      {
        "price": 16,
        "enoughPrice": 199,
        "title": "仅限趣便购拼图商品",
        "timeStart": "2019.04.17",
        "timeEnd": "2019.04.24",
        conpouCartRightSign: "品类券"
      },
      {
        "price": 16,
        "enoughPrice": 199,
        "title": "仅限趣便购拼图商品",
        "timeStart": "2019.04.17",
        "timeEnd": "2019.04.24",
        conpouCartRightSign: "品类券"
      },
      {
        "price": 16,
        "enoughPrice": 199,
        "title": "仅限趣便购拼图商品",
        "timeStart": "2019.04.17",
        "timeEnd": "2019.04.24",
        conpouCartRightSign: "品类券"
      },
      {
        "price": 16,
        "enoughPrice": 199,
        "title": "仅限趣便购拼图商品",
        "timeStart": "2019.04.17",
        "timeEnd": "2019.04.24",
        conpouCartRightSign: "品类券"
      },
      {
        "price": 16,
        "enoughPrice": 199,
        "title": "仅限趣便购拼图商品",
        "timeStart": "2019.04.17",
        "timeEnd": "2019.04.24",
        conpouCartRightSign: "品类券"
      },
      {
        "price": 16,
        "enoughPrice": 199,
        "title": "仅限趣便购拼图商品",
        "timeStart": "2019.04.17",
        "timeEnd": "2019.04.24",
        conpouCartRightSign: "品类券"
      },
      {
        "price": 16,
        "enoughPrice": 199,
        "title": "仅限趣便购拼图商品",
        "timeStart": "2019.04.17",
        "timeEnd": "2019.04.24",
        conpouCartRightSign: "品类券"
      }
    ],
    height: 0
  },
  // 动态获取高度
  getHeight: function () {
    getPhoneInfo.info().then((res) => {
      let heightContent1 = 110 * this.data.contentNotUse.length * 2
      let heightContent2 = 110 * this.data.contentUsed.length * 2
      let heightContent3 = 110 * this.data.contentOverdue.length * 2
      let heightContent = Math.max(heightContent1, heightContent2, heightContent3)
      let phoneHeight = res.windowHeight * 2
      if (heightContent < phoneHeight) {
        this.setData({
          height: phoneHeight
        })
      } else {
        this.setData({
          height: heightContent
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getHeight()
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