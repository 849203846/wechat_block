var utils = require('../..//utils/util.js')
var app = getApp()
Page({
  data: {
    introduce:''
  },
  onLoad:function(){
    this.setData({
     introduce:app.globalData.userInfo.introduce||''
    })
  },
  submit:function(){
    var data={
      introduce: this.data.introduce
    }
    utils.sendRrquest('saveintroduce', 1, data)
    .then((res)=>{
      console.log(res)
    })
  }

})