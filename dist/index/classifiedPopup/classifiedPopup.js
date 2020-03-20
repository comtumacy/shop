Component({
  externalClasses: ['sp-class'],
  created() { },
  attached() { },
  ready() { },
  moved() { },
  detached() { },
  error() { },
  properties: {
    content: {
      "type": ArrayBuffer,
      "value": ["运动品类日", "网络巅峰", "防疫", "攻坚", "除菌空调", "水溶肥", "手机服务", "运动户外", "低价手机", "百货节"]
    }
  },
  data: {},

  methods: {
    enterClassified: function (res) {
      console.log(res)
      // this.triggerEvent('myevent', res.currentTarget.dataset.enterguesschild)
    }
  }
})