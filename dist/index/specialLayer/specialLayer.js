Component({
  externalClasses: ['sp-class'],

  properties: {
    // 大标题
    Title: {
      "type": String,
      "value": "今日秒杀"
    },
    // 子标题
    SecondTitle: {
      "type": String,
      "value": "每晚22点自动更新"
    },
    // 开启小标题开关
    SecondTitleSign: {
      "type": Boolean,
      "value": false
    },
    // “更多”文字设置
    more: {
      "type": String,
      "value": "更多"
    },
    // 样式设置
    // 大标题字体大小与颜色
    TitleFontSize: {
      "type": String,
      "value": "35"
    },
    TitleColor: {
      "type": String,
      "value": "#000"
    },
    // 两个分类栏组件文字
    specialContentTwoText: {
      "type": ArrayBuffer,
      "value": ["用劵立减", "超级爆品"]
    },
    // 两个分类栏组件图片地址
    specialContentTwoImage: {
      "type": ArrayBuffer,
      "value": ["../../../image/special/apple.png", "../../../image/special/banana.png"]
    },
    // 两个分类栏组件按钮名称
    specialContentTwoButtonText: {
      "type": String,
      "value": "点击进入"
    },
    // 小标题外边距、字体大小、 字体颜色
    specialSecondTitleMarginLeft: {
      "type": String,
      "value": "20"
    },
    specialSecondTitleMarginTop: {
      "type": String,
      "value": "10"
    },
    specialSecondTitleFontSize: {
      "type": String,
      "value": "16"
    },
    specialSecondTitleColor: {
      "type": String,
      "value": "#80848F"
    }
  },

  data: {},

  methods: {}
})