let app = getApp()

Component({
  externalClasses: ['sp-class'],
  created() { },
  attached() {
    console.log(app.globalData.userInfo)
    this.setData({
      url: app.globalData.userInfo.avatarUrl,
      nickName: app.globalData.userInfo.nickName
    })
  },
  ready() { },
  moved() { },
  detached() { },
  error() { },
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
  },
  data: {
  },

  methods: {
  }
})