let app = getApp()

Component({
  externalClasses: ['sp-class'],

  properties: {
    // 2商品循环次数
    specialContentTwoNumber: {
      "type": Number,
      "value": 1
    },
    // 3商品循环次数
    specialContentThreeNumber: {
      "type": Number,
      "value": 1
    },
    // 大标题
    Title: {
      "type": String,
      "value": "今日秒杀"
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
    // 三个分类栏组件文字
    specialContentThreeText: {
      "type": ArrayBuffer,
      "value": ["特价尝鲜", "9块9任选", "买赠专区"]
    },
    // 两个分类栏组件图片地址
    specialContentTwoImage: {
      "type": ArrayBuffer,
      "value": [`${app.globalData.url}goodsbar/fruits/apple.png`, `${app.globalData.url}goodsbar/fruits/banana.png`]
    },
    // 三个分类栏组件图片地址
    specialContentThreeImage: {
      "type": ArrayBuffer,
      "value": [`${app.globalData.url}goodsbar/fruits/cherry.png`, `${app.globalData.url}goodsbar/fruits/orange.png`, `${app.globalData.url}goodsbar/fruits/kiwifruit.png`]
    },
    // 两个分类栏组件按钮名称
    specialContentTwoButtonText: {
      "type": ArrayBuffer,
      "value": ["点击进入", "点击进入"]
    },
    // 三个分类栏组件按钮名称
    specialContentTwoButtonText: {
      "type": ArrayBuffer,
      "value": ["点击进入", "点击进入", "点击进入"]
    },
    // 样式
    // 2栏图片圆角边距
    specialContentTwoImageBorderRadius: {
      "type": String,
      "value": "20"
    },
    // 3栏图片圆角边距
    specialContentThreeImageBorderRadius: {
      "type": String,
      "value": "20"
    }
  },

  data: {},

  methods: {}
})