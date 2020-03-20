Component({
  externalClasses: ['sp-class'],

  properties: {
    // 文本位置
    //left center right
    contentPosition: {
      "type": String,
      "value": "center"
    },
    // 细线
    dividerHairLine: {
      "type": String,
      "value": true
    },
    // 字体颜色
    dividerColor: {
      "type": String,
      "value": "#80848f"
    },
    // 线条颜色
    dividerBorderColor: {
      "type": String,
      "value": "#80848f"
    },
    // 字体大小
    dividerFontSize: {
      "type": String,
      "value": "24"
    },
    // 默认文本
    dividerText: {
      "type": String,
      "value": "分割线"
    },
  },
  created() { },
  attached() { },
  ready() { },
  detached() { },
  moved() { },

  data: {},

  methods: {
  }
})