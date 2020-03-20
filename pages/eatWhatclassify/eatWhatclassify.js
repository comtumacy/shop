let app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    content1Title: "热门分类",
    content1: [
      {
        "img": `${app.globalData.url}eatWhat/classify/homeDishes.jpg`,
        "title": "家常菜",
        "bgColor": "#bc3313"
      },
      {
        "img": `${app.globalData.url}eatWhat/classify/nextMeal.jpg`,
        "title": "下饭菜",
        "bgColor": "#ffe27e"
      },
      {
        "img": `${app.globalData.url}eatWhat/classify/baking.jpg`,
        "title": "烘焙",
        "bgColor": "#72311f"
      },
      {
        "img": `${app.globalData.url}eatWhat/classify/meat.jpg`,
        "title": "肉类",
        "bgColor": "#f39d9b"
      },
      {
        "img": `${app.globalData.url}eatWhat/classify/breakfast.jpg`,
        "title": "早餐",
        "bgColor": "#b48d54"
      },
      {
        "img": `${app.globalData.url}eatWhat/classify/vegetables.jpg`,
        "title": "蔬菜",
        "bgColor": "#eacf0e"
      },
      {
        "img": `${app.globalData.url}eatWhat/classify/soupPorridge.jpg`,
        "title": "汤粥主食",
        "bgColor": "#ead79d"
      }
    ],
    content2Title: "菜式",
    content2: [
      {
        "img": `${app.globalData.url}eatWhat/classify/kwaiChi.jpg`,
        "title": "快手菜",
        "bgColor": "#F3CD86"
      },
      {
        "img": `${app.globalData.url}eatWhat/classify/vegetableDish.jpg`,
        "title": "素菜",
        "bgColor": "#54AE31"
      },
      {
        "img": `${app.globalData.url}eatWhat/classify/dessertDiet.jpg`,
        "title": "甜品饮食",
        "bgColor": "#F6DC8F"
      },
      {
        "img": `${app.globalData.url}eatWhat/classify/snack.jpg`,
        "title": "小吃",
        "bgColor": "#812F09"
      },
      {
        "img": `${app.globalData.url}eatWhat/classify/snacks.jpg`,
        "title": "零食",
        "bgColor": "#723E17"
      },
      {
        "img": `${app.globalData.url}eatWhat/classify/lazyCookbook.jpg`,
        "title": "懒人食谱",
        "bgColor": "#eacf0e"
      },
      {
        "img": `${app.globalData.url}eatWhat/classify/goesWithLiquor.jpg`,
        "title": "下酒菜",
        "bgColor": "#DB4C00"
      },
      {
        "img": `${app.globalData.url}eatWhat/classify/saladSalad.jpg`,
        "title": "沙拉凉菜",
        "bgColor": "#883C5E"
      }
    ],
    content3Title: "场景",
    content3: [
      {
        "img": `${app.globalData.url}eatWhat/classify/oneManFood.jpg`,
        "title": "一人食",
        "bgColor": "#AA7813"
      },
      {
        "img": `${app.globalData.url}eatWhat/classify/banquets.jpg`,
        "title": "宴客",
        "bgColor": "#F3A579"
      },
      {
        "img": `${app.globalData.url}eatWhat/classify/afternoonTea.jpg`,
        "title": "下午茶",
        "bgColor": "#F3F3F8"
      },
      {
        "img": `${app.globalData.url}eatWhat/classify/bento.jpg`,
        "title": "便当",
        "bgColor": "#E1BDA5"
      },
      {
        "img": `${app.globalData.url}eatWhat/classify/cookingMethod.jpg`,
        "title": "烹调方式",
        "bgColor": "#D5AA5C"
      },
      {
        "img": `${app.globalData.url}eatWhat/classify/dormitory.jpg`,
        "title": "宿舍",
        "bgColor": "#9F2709"
      },
      {
        "img": `${app.globalData.url}eatWhat/classify/nightSnack.jpg`,
        "title": "宵夜",
        "bgColor": "#87240C"
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '菜品分类'
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