Component({
  externalClasses: ['sp-class'],

  properties: {
    value: {
      type: String
    },
    city: {
      type: String,
      value: "玉林"
    },
    addressLess: {
      type: String,
      value: "国际软件园"
    },
    placeholder: {
      type: String,
      value: "小主，请输入关键字搜索"
    }
  },

  data: {
    url: "../../../image/icon/icon.png"
  },

  method: {
    onSearch() {
      console.log(1)
      console.log(this.data.value)
      // if (this.data.value) return false;
      // this.triggerEvent('bindsearch', this.data.value);
    },
  }
})