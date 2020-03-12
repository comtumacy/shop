const requestGet = require('../utils/requestAll.js')

Component({
  externalClasses: ['sp-class'],

  properties: {
    // tabbar个数
    tabbarNumber: {
      "type": Number,
      "value": 4
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
      "value": "吃什么"
    },
    text4: {
      "type": String,
      "value": "我的"
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
        "/pages/eatWhat/eatWhat",
        "/pages/user/user",
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
    // 图片链接
    icon1: {
      "type": String,
      "value": "wap-home-o"
    },
    icon2: {
      "type": String,
      "value": "shopping-cart-o"
    },
    icon3: {
      "type": String,
      "value": "good-job-o"
    },
    icon4: {
      "type": String,
      "value": "friends-o"
    },
    icon5: {
      "type": String,
      "value": "friends-o"
    },
    // 激活时图片链接
    iconActive1: {
      "type": String,
      "value": "wap-home-o"
    },
    iconActive2: {
      "type": String,
      "value": "shopping-cart-o"
    },
    iconActive3: {
      "type": String,
      "value": "good-job-o"
    },
    iconActive4: {
      "type": String,
      "value": "friends-o"
    },
    iconActive5: {
      "type": String,
      "value": "friends-o"
    },
    // 选中标签的颜色
    activeColor: {
      "type": String,
      "value": "#1989fa"
    },
    // 未选中标签的颜色
    inactiveColor: {
      "type": String,
      "value": "#7d7e80"
    },
    // 是否为 iPhoneX 留出底部安全距离
    safeAreaInsetBottom: {
      "type": Boolean,
      "value": true
    }
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