var utils=require('../..//utils/util.js')
var app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    wechat:'',
    tankuangstatus:'none',
    Sex:'点我选择',
    realname:'未获取到',
    selectorArray: ['男', '女'],
  },
  onShow:function(){
    console.log(app.globalData.userInfo)
      this.setData({
        brith_at: app.globalData.userInfo.birthday,
        workday: app.globalData.userInfo.work_at,
        gender: app.globalData.userInfo.gender,
        wechat: app.globalData.userInfo.wechat,
        realname: app.globalData.userInfo.realname
      })

 
  },
  bindMultiPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      DateOfNirth: e.detail.value
    })
  },
  bindMultiPickerChanges: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      DateOfNirths: e.detail.value
    })
  },
  bindPickerChange:function(e){
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      Sex: e.detail.value
    })
  },
  cloce:function(){
    this.setData({
      tankuangstatus: 'none'
    })
  },
  opensetname:function(){
    this.setData({
      tankuangstatus: 'block'
    })
  },
  setname:function(e){
    console.log(e.detail.value)
    this.setData({
      name: e.detail.value
    })
  },
  setnames:function(){
    this.setData({
      real_name:this.data.name
    })
    this.cloce()
  },
  bindDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },
  bindbrith_atChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      brith_at: e.detail.value
    })
  },
  set:function(){
    var data={
      real_name: this.data.real_name,
      wx_gender:++this.data.Sex,
      brith_at: this.data.brith_at,
      work_at: this.data.date,
      wechat: this.data.wechat
    }
    console.log(data)
    debugger
    utils.sendRrquest('saveuser', 1, data)
    .then((res)=>{
      if (res.status==='200'){
        wx.showToast({
          title: '成功',
          icon: 'success',
          duration: 500
        })
      }
    })
  }
})