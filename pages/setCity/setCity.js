var utils = require('../..//utils/util.js')
var app = getApp()
Page({
  data: {
    area:[]
  },

  onShow: function () {
    var data = {}
    utils.sendRrquest('getarea', 1, data)
      .then((res) => {
        this.setData({
          area:res.data.data
        })
      })
  },
  back:function(e){
    app.globalData.area_name = e.target.dataset.area_name
    app.globalData.getareaid = e.target.dataset.id
    wx.navigateBack({
      delta:1
    })
  }
})