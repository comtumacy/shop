import Dialog from '../../vant/dialog/dialog'

Component({
  externalClasses: ['sp-class'],

  properties: {
    // 换购栏
    repurchaseLeft: {
      "type": String,
      "value": "换购"
    },
    // 形容词，动词，数量
    describe1: {
      "type": String,
      "value": "满"
    },
    describe2: {
      "type": String,
      "value": "差"
    },
    number1: {
      "type": String,
      "value": "3"
    },
    number2: {
      "type": String,
      "value": "1"
    },
    number3: {
      "type": String,
      "value": "1"
    },
    company1: {
      "type": String,
      "value": "件"
    },
    company2: {
      "type": String,
      "value": "件"
    },
    company3: {
      "type": String,
      "value": "件"
    },
    verb: {
      "type": String,
      "value": "换购"
    },
    // 右边按钮文字
    repurchaseRightText: {
      "type": String,
      "value": "凑单"
    },
    // 样式
    repurchaseLeftFontSize: {
      "type": String,
      "value": "20"
    },
    repurchaseLeftPadingUD: {
      "type": String,
      "value": "4"
    },
    repurchaseLeftPadingLR: {
      "type": String,
      "value": "20"
    },
    repurchaseLeftBackgroundColor: {
      "type": String,
      "value": "#19be6b"
    },
    repurchaseLeftColor: {
      "type": String,
      "value": "#ffffff"
    },
    repurchaseLeftBorderRadius: {
      "type": String,
      "value": "80"
    },
    repurchaseMiddleFontSize: {
      "type": String,
      "value": "24"
    },
    repurchaseMiddleColor: {
      "type": String,
      "value": "#19be6b"
    },
    repurchaseRightFontSize: {
      "type": String,
      "value": "28"
    },
    // 商品栏
    goodBarNumber: {
      "type": Number,
      "value": 3
    },
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
      "type": ArrayBuffer,
      "value": ["vivo X30 Pro双模5G新品手机官方旗舰店官网新款限量版，(4000mAh-5999mAh)", "vivo X30 Pro双模5G新品手机官方旗舰店官网新款限量版，(4000mAh-5999mAh)", "vivo X30 Pro双模5G新品手机官方旗舰店官网新款限量版，(4000mAh-5999mAh)"]
    },
    goodBarNewPrice: {
      "type": ArrayBuffer,
      "value": [2499, 2499, 2499]
    },
    goodBarOldPrice: {
      "type": ArrayBuffer,
      "value": [3000, 3000, 3000]
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
  created() {},
  attached() {},
  ready() {},
  detached() {},
  moved() {},

  data: {},

  methods: {
    onClose: function(event) {
      const {
        position,
        instance
      } = event.detail;
      switch (position) {
        case 'left':
        case 'cell':
          Dialog.alert({
            message: '收藏成功'
          }).then(() => {
            instance.close();
          }).catch(() => {
            instance.close();
          })
          break;
        case 'right':
          Dialog.confirm({
            message: '确定删除吗？'
          }).then(() => {
            instance.close();
          }).catch(() => {
            instance.close();
          })
          break;
      }
    },
    selectGood: function() {
      let selected = !this.data.allowItemSelected
      this.setData({
        allowItemSelected: selected
      })
      let select = this.data.title
      this.triggerEvent('click', {'Select': select})
    },
    openpopup: function() {
      this.triggerEvent('popupOpen', {})
    }
  }
})