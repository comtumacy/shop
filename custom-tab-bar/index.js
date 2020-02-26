Component({
  externalClasses: ['sp-class'],

  properties: {},

  data: {
    active: 0,
    color: "#7A7E83",
    selectedColor: "#3cc51f",
    list: [
      "/pages/index/index",
      "/pages/buyCar/buyCar",
      "/pages/user/user"
    ]
  },

  methods: {
    onChange(e) {
      let url = this.data.list[e.detail];
      wx.switchTab({
        url
      });
      this.setData({
        active: e.detail
      })
    }
  }
})