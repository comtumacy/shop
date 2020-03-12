let app = getApp()

Component({
  externalClasses: ['sp-class'],
  created() {},
  attached(res) {},
  ready() {},
  moved() {},
  detached() {},
  error() {},
  properties: {
    imgUrl: {
      "type": String,
      "value": `${app.globalData.url}activity/5.png`
    },
    height: {
      "type": String,
      "value": "170"
    },
    borderRadius: {
      "type": String,
      "value": "20"
    }
  },
  data: {},

  methods: {
    click(res) {
      let imgUrl = this.data.imgUrl
      this.triggerEvent('enterActivity', {
        imgUrl
      });
    }
  }
})