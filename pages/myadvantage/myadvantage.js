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
  setintroduce:function(e){
    console.log(e)
      this.setData({
        introduce: e.detail.value
      })
  },
  submit:function(){
    var data={
      introduce: this.data.introduce
    }
    utils.sendRrquest('saveintroduce', 1, data)
    .then((res)=>{
      console.log(res)
      if(res.status==='200'){
        app.globalData.userInfo.introduce = this.data.introduce
        wx.showToast({
          title: '修改成功',
          icon: 'success',
          duration: 500
        })
        wx.navigateBack({
          delta:1
        })
      }else{
        wx.showToast({
          title: '修改失败',
          icon: 'success',
          duration: 500
        })
        wx.navigateBack({
          delta:1
        })
      }
    })
  }

})