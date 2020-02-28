import Dialog from '../../vant/dialog/dialog'

Component({
  externalClasses: ['sp-class'],

  properties: {
    allowItemSelected: {
      "type": Boolean,
      "value": true
    },
    swipeNotDisabled: {
      "type": Boolean,
      "balue": false
    },
    img: {
      "type": String,
      "value": "../../../image/carBar/ipad.jpg"
    },
    title: {
      "type": String,
      "value": "Apple iPad 平板电脑 （32G WLAN版/iPadOS系统/Retina显示屏/MW762CH/A）金色"
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
      this.triggerEvent('click', {'Select': select});
    },
  }
})