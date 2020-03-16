let app = getApp()

Component({
  externalClasses: ['sp-class'],
  created() {},
  attached() {},
  ready() {},
  moved() {},
  detached() {},
  error() {},
  properties: {
    iconFirst: {
      "type": ArrayBuffer,
      "value": [{
          "img": `${app.globalData.url}my/Icon/payment.png`,
          "text": "待付款"
        },
        {
          "img": `${app.globalData.url}my/Icon/delivered.png`,
          "text": "待配送"
        },
        {
          "img": `${app.globalData.url}my/Icon/deliveryGoods.png`,
          "text": "待提货"
        },
        {
          "img": `${app.globalData.url}my/Icon/deliveried.png`,
          "text": "已提货"
        },
        {
          "img": `${app.globalData.url}my/Icon/payment.png`,
          "text": "全部订单"
        }
      ]
    },
    firstSign: {
      "type": ArrayBuffer,
      "value": [
        "couponHall", "myCoupon", "selectRegiment", "apply", "applyInfo", "refund", "integralShoppingMall", "distributionCenter", "questions", "qualifications", "customerService", "supplierRecruitment"
      ]
    },
    firstContent: {
      "type": Object,
      "value": {
        "couponHall": {
          "img": `${app.globalData.url}my/Icon/couponHall.png`,
          "text": "优惠券大厅"
        },
        "myCoupon": {
          "img": `${app.globalData.url}my/Icon/myCoupon.png`,
          "text": "我的优惠券"
        },
        "selectRegiment": {
          "img": `${app.globalData.url}my/Icon/selectRegiment.png`,
          "text": "选择团长"
        },
        "apply": {
          "img": `${app.globalData.url}my/Icon/apply.png`,
          "text": "申请团长"
        },
        "applyInfo": {
          "img": `${app.globalData.url}my/Icon/applyInfo.png`,
          "text": "团员信息"
        },
        "refund": {
          "img": `${app.globalData.url}my/Icon/refund.png`,
          "text": "售后退款"
        },
        "integralShoppingMall": {
          "img": `${app.globalData.url}my/Icon/integralShoppingMall.png`,
          "text": "积分商城"
        },
        "distributionCenter": {
          "img": `${app.globalData.url}my/Icon/distributionCenter.png`,
          "text": "分销中心"
        },
        "questions": {
          "img": `${app.globalData.url}my/Icon/questions.png`,
          "text": "常见问题"
        },
        "qualifications": {
          "img": `${app.globalData.url}my/Icon/qualifications.png`,
          "text": "资质中心"
        },
        "customerService": {
          "img": `${app.globalData.url}my/Icon/customerService.png`,
          "text": "联系客服"
        },
        "supplierRecruitment": {
          "img": `${app.globalData.url}my/Icon/supplierRecruitment.png`,
          "text": "供应商招募"
        }
      }
    }
  },
  data: {},

  methods: {}
})