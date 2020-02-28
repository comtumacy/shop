Component({
  externalClasses: ['sp-class'],

  properties: {
    //left center right
    contentPosition: {
      "type": String,
      "value": "center"
    },
    dividerHairLine: {
      "type": String,
      "value": true
    },
    dividerColor: {
      "type": String,
      "value": "#80848f"
    },
    dividerBorderColor: {
      "type": String,
      "value": "#80848f"
    },
    dividerFontSize: {
      "type": String,
      "value": "24"
    },
    dividerText: {
      "type": String,
      "value": "你可能还想买"
    },
  },
  created() { },
  attached() { },
  ready() { },
  detached() { },
  moved() { },

  data: {},

  methods: {
  }
})