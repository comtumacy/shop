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
    firstTitle: {
      "type": String,
      "value": "今日菜品"
    },
    title2: {
      "type": String,
      "value": "私房菜"
    },
    title3: {
      "type": String,
      "value": "家常菜"
    },
    title4: {
      "type": String,
      "value": "新口味"
    },
    moreText: {
      "type": String,
      "value": "全部"
    }
  },
  data: {
  },

  methods: {
    enterPage: function () {
      wx.navigateTo({
        url: '/pages/eatWhatclassify/eatWhatclassify'
      })
    }
  }
})