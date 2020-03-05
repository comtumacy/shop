//logs.js
const util = require('../../utils/util.js')
const request = require('../../utils/requestAll.js')

Page({
  data: {
    logs: []
  },
  onLoad: function() {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
    console.log(request.getContent())
  }
})