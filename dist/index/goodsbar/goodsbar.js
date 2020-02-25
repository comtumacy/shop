Component({
  externalClasses: ['sp-class'],
  created() { },
  attached(res) { },
  ready() { },
  moved() { },
  detached() { },
  error() { },
  properties: {
    time: {
      "type": Number,
      "value": 30 * 60 * 60 * 1000
    },
    timeData: {
      "type": Object
    },
    Title: {
      "type": String,
      "value": "今日秒杀"
    },
    SecondTitle: {
      "type": String,
      "value": "每晚22点自动更新"
    },
    SecondTitleSign: {
      "type": Boolean,
      "value": true
    },
    more: {
      "type": String,
      "value": "更多"
    }
  },
  data: {
  },

  methods: {
    onChange (res) {
      this.setData({
        timeData: res.detail
      });
    }
  }
})