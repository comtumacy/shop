Component({
  externalClasses: ['sp-class'],

  properties: {
    buttonContent1: {
      type: String,
      value: "精选"
    },
    buttonContent2: {
      type: String,
      value: "开业大酬宾"
    },
    current: {
      type: String,
      value: ""
    },
    contentClassify: {
      type: ArrayBuffer,
      value: ['水果', '沙拉', '测试', '农产品', '肉类', '蛋糕']
    }
  },

  data: {
    url: "../../../image/icon/icon.png"
  },

  methods: {
  }
})