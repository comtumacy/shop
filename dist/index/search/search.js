Component({
  externalClasses: ['sp-class'],

  properties: {
    value: {
      type: String
    },
    // 城市名
    city: {
      type: String,
      value: "玉林"
    },
    // 具体地址
    addressLess: {
      type: String,
      value: "国际软件园"
    },
    // 搜索框文字
    placeholder: {
      type: String,
      value: "请输入关键字搜索"
    }
  },

  data: {
    url: "../../../image/icon/icon.jpg"
  },

  methods: {
  }
})