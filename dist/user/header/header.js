let app = getApp()

Component({
  externalClasses: ['sp-class'],
  created() {},
  attached() {
    this.setData({
      url: app.globalData.userInfo.avatarUrl,
      nickName: app.globalData.userInfo.nickName
    })
  },
  ready() {},
  moved() {},
  detached() {},
  error() {},
  properties: {
    url: {
      "type": String,
      "value": ""
    },
    nickName: {
      "type": String,
      "value": ""
    },
    headerIconRightBottomText: {
      "type": String,
      "value": "超级会员"
    },
    balance: {
      "type": String,
      "value": "299.0"
    },
    integral: {
      "type": String,
      "value": "396"
    },
    coupon: {
      "type": String,
      "value": "3"
    },
    img: {
      "type": String,
      "value": `${app.globalData.url}my/my.jpg`
    }
  },
  data: {},

  methods: {
    enterPage: function() {
      wx.navigateTo({
        url: '/pages/conpou/conpou'
      })
    }
  }
})