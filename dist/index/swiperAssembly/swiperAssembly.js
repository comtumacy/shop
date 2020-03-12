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
    images: {
      "type": ArrayBuffer,
      "value": [`${app.globalData.url}swiper/1.png`, `${app.globalData.url}swiper/2.png`, `${app.globalData.url}swiper/3.png`, `${app.globalData.url}swiper/4.png`]
    },
    swiperIndexBorderRadius: {
      "type": String,
      "value": "40"
    }
  },
  data: {
    url: "../../../image/icon/icon.jpg"
  },

  methods: {
    changeItem(res) {
      let item = res.target.dataset.item
      this.triggerEvent('clickSwiper', {
        item
      });
    }
  }
})