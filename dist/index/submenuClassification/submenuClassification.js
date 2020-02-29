Component({
  externalClasses: ['sp-class'],
  created() {},
  attached(res) {},
  ready() {},
  moved() {},
  detached() {},
  error() {},
  properties: {
    contents: {
      "type": ArrayBuffer,
      "value": ["特价爆款", "预售爆款", "每日赚钱", "趣赚红花", "新手宝典"]
    },
    icons: {
      "type": ArrayBuffer,
      "value": ["xiaohonghua", "xiaohonghua", "xiaohonghua", "xiaohonghua", "xiaohonghua"]
    },
    backgroundColor: {
      "type": ArrayBuffer,
      "value": ["rgb(255,158,154)", "rgb(120,239,233)", "rgb(255,232,0)", "rgb(254,168,93)", "rgb(127,205,255)"]
    }
  },
  data: {},

  methods: {
    // changeItem(res) {
    // let item = res.target.dataset.item
    // this.triggerEvent('clickSwiper', {
    //   item
    // });
    // }
  }
})