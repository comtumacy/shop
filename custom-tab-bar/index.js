const requestGet = require('../utils/requestAll.js')

Component({
  externalClasses: ['sp-class'],

  properties: {
    // tabbar个数
    tabbarNumber: {
      "type": Number,
      "value": 3
    },
    // 当前激活index
    active: {
      "type": Number,
      "value": 0
    },
    // 红点控制
    dot1: {
      "type": Boolean,
      "value": true
    },
    dot2: {
      "type": Boolean,
      "value": false
    },
    dot3: {
      "type": Boolean,
      "value": false
    },
    dot4: {
      "type": Boolean,
      "value": false
    },
    dot5: {
      "type": Boolean,
      "value": false
    },
    // 标签文字控制
    text1: {
      "type": String,
      "value": "首页"
    },
    text2: {
      "type": String,
      "value": "购物车"
    },
    text3: {
      "type": String,
      "value": "我的"
    },
    text4: {
      "type": String,
      "value": "测试4"
    },
    text5: {
      "type": String,
      "value": "测试5"
    },
    // pages列表
    list: {
      "type": ArrayBuffer,
      "value": [
        "/pages/index/index",
        "/pages/buyCar/buyCar",
        "/pages/user/user",
        "/pages/logs/logs",
        "/pages/getuser/getuser"
      ]
    },
    // 图标右上角提示数字信息
    info1: {
      "type": String,
      "value": ""
    },
    info2: {
      "type": String,
      "value": "2"
    },
    info3: {
      "type": String,
      "value": ""
    },
    info4: {
      "type": String,
      "value": ""
    },
    info5: {
      "type": String,
      "value": ""
    },
  },
  created() {
  },
  attached() {
  },
  ready() {
  },
  detached() {
  },
  moved() {
  }, 

  data: {
  },

  methods: {
    // 路由切换选择变量控制
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