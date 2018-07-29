var utils = require('../..//utils/util.js')
var app = getApp()
Page({
  data: {
    trades:[]
  },
  onLoad:function(){
    var data={

    }
    utils.sendRrquest('gettrades', 1, data)
    .then((res)=>{
      console.log(res.data.data)
      this.setData({
        trades:res.data.data
      })
    })
  },
  back:function(e){
    console.log(e.target.dataset.trade)
    app.globalData.trade = e.target.dataset.trade
    app.globalData.trade_id = e.target.dataset.id
    wx.navigateBack({
      delta:1
    })
  }
})