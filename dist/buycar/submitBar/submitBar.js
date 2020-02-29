const util = require('../../../utils/getUserInfo.js')

Component({
  externalClasses: ['sp-class'],

  properties: {
    allowItemSelected: {
      "type": Boolean,
      "value": false
    },
    allNumber: {
      "type": Number,
      "value": 2
    },
    newPrice: {
      "type": Number,
      "value": 3000.00
    },
    discountPrice: {
      "type": Number,
      "value": 501.00
    },
    // 样式
    submitBarIndexBorderRadius: {
      "type": String,
      "value": "30"
    },
    allowBorderColor: {
      "type": String,
      "value": "#bbbec4"
    },
    allowItemSelectedColor: {
      "type": String,
      "value": "#19be6b"
    },
    allowBorderRadius: {
      "type": String,
      "value": "40"
    },
  },
  created() {},
  attached() {
    util.info().then((res) => {
      let bottom = (res.screenHeight - res.safeArea.bottom + 65) * 2
      this.setData({
        submitIndexBottom: bottom
      })
    })
  },
  ready() {},
  detached() {},
  moved() {},

  data: {
    submitIndexBottom: 120
  },

  methods: {}
})