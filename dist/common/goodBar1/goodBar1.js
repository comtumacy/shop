let app = getApp()

Component({
  externalClasses: ['sp-class'],
  created() {},
  attached() {},
  ready() {},
  moved() {},
  detached() {},
  error() {},
  properties: {
    // 头部显示控制
    goodsbarHeaderSign: {
      "type": Boolean,
      "value": true
    },
    // 时间控件显示
    goodsbarTimeSign: {
      "type": Boolean,
      "value": false
    },
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
    contentFour: {
      "type": ArrayBuffer,
      "value": [
        {
          "imgs": `${app.globalData.url}goodsbar/fruits/apple.png`,
          "discountImgs": `${app.globalData.url}goodsbar/discount/discount.jpg`,
          "discountText": "立省4元",
          "titleText": "烟台红富士苹果过长文字过长文字",
          "priceType": {
            "title": "秒杀价",
            "color": "#ed3f14"
          },
          "priceTypeSign": true,
          "price": 29.9,
          "oldPrice": 10,
          "company": "/份"
        },
        {
          "imgs": `${app.globalData.url}goodsbar/fruits/banana.png`,
          "discountImgs": `${app.globalData.url}goodsbar/discount/discount.jpg`,
          "discountText": "立省6元",
          "titleText": "都乐进口香蕉2kg装过长文字过长文字过长文字过长文字",
          "priceType": {
            "title": "团购价",
            "color": "#19be6b"
          },
          "priceTypeSign": true,
          "price": 24.6,
          "oldPrice": 10,
          "company": "/箱"
        },
        {
          "imgs": `${app.globalData.url}goodsbar/fruits/cherry.png`,
          "discountImgs": `${app.globalData.url}goodsbar/discount/discount.jpg`,
          "discountText": "立省14元",
          "titleText": "山东大樱桃智利车厘子过长文字过长文字过长文字过长文字",
          "priceType": {
            "title": "团购价",
            "color": "#19be6b"
          },
          "priceTypeSign": true,
          "price": 29.9,
          "oldPrice": 10,
          "company": "/盒"
        },
        {
          "imgs": `${app.globalData.url}goodsbar/fruits/jujube.png`,
          "discountImgs": `${app.globalData.url}goodsbar/discount/discount.jpg`,
          "discountText": "立省10元",
          "titleText": "福建牛奶青枣2kg一装过长文字过长文字过长文字过长文字",
          "priceType": {
            "title": "会员价",
            "color": "#ff9900"
          },
          "priceTypeSign": true,
          "price": 26.6,
          "oldPrice": 10,
          "company": "/箱"
        }
      ]
    },
    contentThree: {
      "type": ArrayBuffer,
      "value": [
        {
          "imgs": `${app.globalData.url}goodsbar/fruits/apple.png`,
          "discountImgs": `${app.globalData.url}goodsbar/discount/discount.jpg`,
          "discountText": "立省4元",
          "titleText": "烟台红富士苹果过长文字过长文字",
          "priceType": {
            "title": "秒杀价",
            "color": "#ed3f14"
          },
          "priceTypeSign": true,
          "price": 29.9,
          "oldPrice": 10,
          "company": "/份"
        },
        {
          "imgs": `${app.globalData.url}goodsbar/fruits/banana.png`,
          "discountImgs": `${app.globalData.url}goodsbar/discount/discount.jpg`,
          "discountText": "立省6元",
          "titleText": "都乐进口香蕉2kg装过长文字过长文字过长文字过长文字",
          "priceType": {
            "title": "团购价",
            "color": "#19be6b"
          },
          "priceTypeSign": true,
          "price": 24.6,
          "oldPrice": 10,
          "company": "/箱"
        },
        {
          "imgs": `${app.globalData.url}goodsbar/fruits/cherry.png`,
          "discountImgs": `${app.globalData.url}goodsbar/discount/discount.jpg`,
          "discountText": "立省14元",
          "titleText": "山东大樱桃智利车厘子过长文字过长文字过长文字过长文字",
          "priceType": {
            "title": "团购价",
            "color": "#19be6b"
          },
          "priceTypeSign": true,
          "price": 29.9,
          "oldPrice": 10,
          "company": "/盒"
        }
      ]
    },
    contentTwo: {
      "type": ArrayBuffer,
      "value": [
        {
          "imgs": `${app.globalData.url}goodsbar/fruits/apple.png`,
          "discountImgs": `${app.globalData.url}goodsbar/discount/discount.jpg`,
          "discountText": "立省4元",
          "titleText": "烟台红富士苹果过长文字过长文字过长文字过长文字",
          "priceType": {
            "title": "秒杀价",
            "color": "#ed3f14"
          },
          "priceTypeSign": true,
          "price": 20.0,
          "oldPrice": 10,
          "company": "/份"
        },
        {
          "imgs": `${app.globalData.url}goodsbar/fruits/banana.png`,
          "discountImgs": `${app.globalData.url}goodsbar/discount/discount.jpg`,
          "discountText": "立省6元",
          "titleText": "都乐进口香蕉2kg装过长文字过长文字过长文字过长文字过长文字过长文字",
          "priceType": {
            "title": "团购价",
            "color": "#19be6b"
          },
          "priceTypeSign": true,
          "price": 24.6,
          "oldPrice": 10,
          "company": "/箱"
        }
      ]
    },
    // 单位
    priceColLeftcompany: {
      "type": ArrayBuffer,
      "value": ["/份", "/", "/份", "/个"]
    },

    // 样式设置
    // 购物车商品栏类名
    buyCarClass: {
      "type": String,
      "value": ""
    },
    // 左右边距控制
    marginLeftAndRight: {
      "type": String,
      "value": "0"
    },
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
      "value": "20"
    },
    goodsbarSecondTitleColor: {
      "type": String,
      "value": "#80848F"
    },
    goodImgBorderRaduis: {
      "type": String,
      "value": "20"
    }
  },
  data: {
    // 开启毫秒计算
    millisecond: true,
    disCountImg: `${app.globalData.url}goodsbar/discount/discount.jpg`
  },

  methods: {
    onChange(res) {
      this.setData({
        timeData: res.detail
      });
    }
  }
})