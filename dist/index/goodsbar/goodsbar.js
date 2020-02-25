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