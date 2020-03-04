Component({
  externalClasses: ['sp-class'],

  properties: {
    // 商品栏
    allowItemSelected: {
      "type": Boolean,
      "value": false
    },
    swipeNotDisabled: {
      "type": Boolean,
      "balue": false
    },
    img: {
      "type": String,
      "value": "../../../image/carBar/vivo.jpg"
    },
    title: {
      "type": String,
      "value": "vivo X30 Pro双模5G新品手机官方旗舰店官网新款限量版，(4000mAh-5999mAh)"
    },
    goodBarNewPrice: {
      "type": String,
      "value": "2499"
    },
    goodBarOldPrice: {
      "type": String,
      "value": "3000"
    },
    goodNumber: {
      "type": String,
      "value": "1"
    },
    // 样式
    allowBorderColor: {
      "type": String,
      "value": "#19be6b"
    },
    allowItemSelectedColor: {
      "type": String,
      "value": "#19be6b"
    },
    allowBorderRadius: {
      "type": String,
      "value": "40"
    },
    goodBarImgBorderRadius: {
      "type": String,
      "value": "20"
    },
    goodBarContentTopFontSize: {
      "type": String,
      "value": "26"
    },
    goodBarOldPriceColor: {
      "type": String,
      "value": "#80848f"
    },
    outButtonColor: {
      "type": String,
      "value": "#ffffff"
    },
    outButtonBgLeftColor: {
      "type": String,
      "value": "#19be6b"
    },
    outButtonBgRightColor: {
      "type": String,
      "value": "#ed3f14"
    }
  },
  created() { },
  attached() { },
  ready() { },
  detached() { },
  moved() { },

  data: {},

  methods: {
    // 禁止滚动
    catchtouchmove: function() {
    },
    // 按钮点击事件
    enterPurchased: function () {
      let content = this.data.title
      this.triggerEvent('enterPurchased', content)
    }
  }
})