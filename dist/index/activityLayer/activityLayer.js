Component({
  externalClasses: ['sp-class'],
  created() { },
  attached(res) { },
  ready() { },
  moved() { },
  detached() { },
  error() { },
  properties: {
    imgUrl: {
      "type": String,
      "value": "../../../image/activity/activity.jpg"
    },
    height: {
      "type": String,
      "value": "130"
    },
    borderRadius: {
      "type": String,
      "value": "20"
    }
  },
  data: {},

  methods: {
    click (res) {
      let imgUrl = this.data.imgUrl
    this.triggerEvent('enterActivity', {
      imgUrl
    });
    }
  }
})