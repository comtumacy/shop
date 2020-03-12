let app = getApp()

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
      "value": [`${app.globalData.url}submenuClassification/1.png`, `${app.globalData.url}submenuClassification/2.png`, `${app.globalData.url}submenuClassification/3.png`, `${app.globalData.url}submenuClassification/4.png`, `${app.globalData.url}submenuClassification/5.png`]
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