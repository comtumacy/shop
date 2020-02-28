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
      "value": ["../../../image/swiper/swiper.jpg", "../../../image/swiper/swiper2.jpg", "../../../image/swiper/swiper3.jpg", "../../../image/swiper/swiper1.jpg"]
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