let app = getApp()

Component({
  externalClasses: ['sp-class'],
  created() { },
  attached() { },
  ready() { },
  moved() { },
  detached() { },
  error() { },
  properties: {
    text: {
      "type": String,
      "value": "搜索菜谱、食材"
    },
    sign: {
      "type": String,
      "value": "1"
    }
  },
  data: {},

  methods: {
    enterSearchPage: function() {
      wx.navigateTo({
        url: '/pages/search/search'
      })
    }
  }
})