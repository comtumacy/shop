let app = getApp()

Component({
  externalClasses: ['sp-class'],
  created() { },
  attached() {
    this.setData({
      url: app.globalData.userInfo.avatarUrl
    })
  },
  ready() { },
  detached() { },
  moved() { },
  properties: {
    value: {
      "type": String
    },
    // 城市名
    city: {
      "type": String,
      "value": "玉林"
    },
    // 具体地址
    addressLess: {
      "type": String,
      "value": "国际软件园"
    },
    // 搜索框文字
    text: {
      "type": String,
      "value": "搜索菜谱、食材"
    },
    url: {
      "type": String,
      "value": ""
    }
  },

  data: {
  },

  methods: {
    clickImg: function() {
      this.triggerEvent('clickImg', {})
    },
    
    enterSearchPage: function () {
      wx.navigateTo({
        url: '/pages/search/search'
      })
    }
  }
})