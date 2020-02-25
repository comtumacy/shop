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
      "value": ["../../../image/swiper/swiper.png", "../../../image/swiper/swiper2.png", "../../../image/swiper/swiper3.png", "../../../image/swiper/swiper1.png"]
    }
  },
  data: {
    url: "../../../image/icon/icon.png"
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