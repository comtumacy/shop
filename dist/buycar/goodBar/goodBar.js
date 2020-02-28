import Dialog from '../../vant/dialog/dialog'

Component({
  externalClasses: ['sp-class'],

  properties: {
    img: {
      "type": String,
      "value": "../../../image/carBar/ipad.png"
    },
    title: {
      "type": String,
      "value": "Apple iPad 平板电脑 （32G WLAN版/iPadOS系统/Retina显示屏/MW762CH/A）金色"
    },
    // 样式
    allowColor: {
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
            title: '提示',
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
    }
  }
})