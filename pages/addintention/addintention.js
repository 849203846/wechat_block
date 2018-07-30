var utils = require('../..//utils/util.js')
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    area_name:'北京',
    multiArray: [
      ['1k', '2k'],
       ['3k', '4k', '5k', '6k', '7k']],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onShow: function (options) {
    console.log(app.globalData.area_name)
    if (app.globalData.area_name){
      this.setData({
        fidname: app.globalData.fidname,
        area_name:app.globalData.area_name
      })
    }
  },

  bindMultiPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      multiIndex: e.detail.value
    })
  },
  submit:function(){
    console.log(app.globalData)
    var data={
      area_id: app.globalData.getareaid,
      job_id: app.globalData.fid,
      trade_id_one: app.globalData.trade_id,
      trade_id_two:'',
      trade_id_three:'',
      pay_start: this.data.multiArray[0][this.data.multiIndex[0]].split('k')[0],//最低薪资
      pay_end: this.data.multiArray[1][this.data.multiIndex[1]].split('k')[0],
    }
    console.log(data)
    if(true){
      
      utils.sendRrquest('savewill', 1, data)
      .then((res)=>{
          if(res.data.status==='200'){
            
          }
      })
    }
    utils.sendRrquest('addwill', 1, data)
    .then((res)=>{
      console.log(res)
      if(res.data.status==='200'){
        wx.showToast({
          title: '成功',
          icon: 'success',
          duration: 500
        })
        wx.navigateBack({
          delta:1
        })
      }else{
        wx.showModal({
          title: '温馨提示',
          content: '保存失败',
        })
      }
    })
  }
})