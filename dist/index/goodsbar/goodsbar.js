Component({
  externalClasses: ['sp-class'],
  created() {},
  attached(res) {},
  ready() {},
  moved() {},
  detached() {},
  error() {},
  properties: {
    // 时间设置
    time: {
      "type": Number,
      "value": 30 * 60 * 60 * 1000
    },
    // 自定义时间构建对象
    timeData: {
      "type": Object
    },
    goodsNumber: {
      "type": Number,
      "value": 3
    },
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
    // 是否自动开始倒计时
    autoStart: {
      "type": Boolean,
      "value": true
    },
    // 图片路径
    imgs: {
      "type": ArrayBuffer,
      "value": ["../../../image/goodsbar/fruits/apple.png", "../../../image/goodsbar/fruits/banana.png", "../../../image/goodsbar/fruits/cherry.png", "../../../image/goodsbar/fruits/jujube.png"]
    },
    // 图片优惠文字设置
    DiscountText: {
      "type": ArrayBuffer,
      "value": ["立省4元", "立省6元", "立省14元", "立省10元"]
    },
    // 商品标题
    TitleText: {
      "type": ArrayBuffer,
      "value": ["烟台红富士苹果", "都乐进口香蕉2kg装", "山东大樱桃智利车厘子", "福建牛奶青枣2kg一装"]
    },
    // 优惠类型
    priceType: {
      "type": ArrayBuffer,
      "value": [{
          "title": "秒杀价",
          "color": "#ed3f14"
        },
        {
          "title": "团购价",
          "color": "#19be6b"
        },
        {
          "title": "会员价",
          "color": "#ff9900"
        }
      ]
    },
    // 选用优惠类型标志
    priceTypeSign: {
      "type": Number,
      "value": 0
    },
    // 现价
    priceColLeftNew: {
      "type": ArrayBuffer,
      "value": [10, 23.3, 45.2, 30]
    },
    // 原价
    priceColLeftOld: {
      "type": ArrayBuffer,
      "value": [10, 23.3, 45.2, 30]
    },
    // 单位
    priceColLeftCompany: {
      "type": ArrayBuffer,
      "value": ["/份", "/箱", "/份", "/个"]
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
    // 小标题外边距、字体大小、 字体颜色
    goodsbarSecondTitleMarginLeft: {
      "type": String,
      "value": "20"
    },
    goodsbarSecondTitleMarginTop: {
      "type": String,
      "value": "10"
    },
    goodsbarSecondTitleFontSize: {
      "type": String,
      "value": "16"
    },
    goodsbarSecondTitleColor: {
      "type": String,
      "value": "#80848F"
    }
  },
  data: {
    // 开启毫秒计算
    millisecond: true,
    disCountImg: "../../../image/goodsbar/discount/discount.png"
  },

  methods: {
    onChange(res) {
      this.setData({
        timeData: res.detail
      });
    }
  }
})