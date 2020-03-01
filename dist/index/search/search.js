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
    placeholder: {
      "type": String,
      "value": "请输入关键字搜索"
    },
    url: {
      "type": String,
      "value": "../../../image/icon/icon.jpg"
    }
  },

  data: {
  },

  methods: {
    clickImg: function() {
      this.triggerEvent('clickImg', {})
    }
  }
})