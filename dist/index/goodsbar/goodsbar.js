Component({
  externalClasses: ['sp-class'],
  created() {},
  attached(res) {},
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
    // 开启小标题开关
    SecondTitleSign: {
      "type": Boolean,
      "value": false
    },
    more: {
      "type": String,
      "value": "更多"
    },
    // 是否自动开始倒计时
    autoStart: {
      "type": Boolean,
      "value": true
    },
    imgs: {
      "type": ArrayBuffer,
      "value": ["../../../image/goodsbar/fruits/apple.png", "../../../image/goodsbar/fruits/banana.png", "../../../image/goodsbar/fruits/cherry.png", "../../../image/goodsbar/fruits/jujube.png"]
    },
    fourDiscountText: {
      "type": ArrayBuffer,
      "value": ["立省4元", "立省6元", "立省14元", "立省10元"]
    }
  },
  data: {
    // 开启毫秒计算
    millisecond: true,
    disCountImg: "../../../image/goodsbar/discount/discount.png"
  },

  methods: {
    onChange (res) {
      this.setData({
        timeData: res.detail
      });
    }
  }
})