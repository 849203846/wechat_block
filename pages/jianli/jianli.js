var utils = require('../..//utils/util.js')
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username: '未登录',
    userAg0: '点击头像可登录/注册',
    avatarUrl: "/images/my_light.png",
    phonenum:'18230039253',
    weChatUserphone:'wanglinjs1',
    wantedstatus:'在职/月内到岗',
    myadvantagetext:'月内到岗月内到岗月内到岗月内到岗月内到岗月内到岗月内到岗月内到岗月内到岗月内到岗月内到岗月内到岗月内到岗月内到岗月内到岗月内到岗月内到岗月内到岗月内到岗月内到岗月内到岗月内到岗月内到岗月内到岗月内到岗月内到岗月内到岗月内到岗月内到岗月内到岗月内到岗月内到岗月内到岗月内到岗月内到岗月内到岗月内到岗月内到岗月内到岗月内到岗月内到岗月内到岗月内到岗月内到岗月内到岗'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (app.globalData.userInfo) {
      this.setData({
        introduce: app.globalData.userInfo.introduce,
        username: app.globalData.userInfo.nickName,
        avatarUrl: app.globalData.userInfo.avatarUrl,
        userAg0: '24岁 男 4年',
      })
    }
  },
  onShow:function(){
    utils.sendRrquest('getwilllist', 1, {})
    .then((res)=>{
      console.log(res)
      //求职意向接口
      if(res.data.status==='200'){
        this.setData({
          willlist:res.data.data
        })
      }
    })
  },
  wantedstatus:function(){
    wx.showActionSheet({
      itemList: ['离职-随时到岗', '在职-暂不考虑', '在职-考虑机会','在职-月内到岗'],
      success:  (res) => {
        this.setData({
          wantedstatus:res.tapIndex
        })
        var data={
          work_status: res.tapIndex
        }
        utils.sendRrquest('saveworkstatus', 1, data)
        .then((res)=>{
          console.log(res)
          if(res.status==='200'){
            app.globalData.userInfo.work_status = res.tapIndex
            wx.showToast({
              title: '修改成功',
              icon: 'success',
              duration: 500
            })
          }
        })
      },
      fail: function (res) {
        console.log(res.errMsg)
      }
    })
  },
  gotomyname:function(){
    wx.navigateTo({
      url: '../personaldata/personaldata',
    })
  },
  gomyadvantage:function(){
    wx.navigateTo({
      url: '../myadvantage/myadvantage',
    })
  },
  addintention:function(e){
    var id = e.target.dataset.id
    if(id){
      var willlist=this.data.willlist
      for (var i = 0; i < willlist.length;i++){
        debugger
        if(id==willlist[i].id){
          app.globalData.id = willlist[i].id
          app.globalData.fidname = willlist[i].job_name
          app.globalData.fid = willlist[i].fid
          app.globalData.trade_name_one = willlist[i].trade_name_one
          app.globalData.trade_name_two = willlist[i].trade_name_two
          app.globalData.trade_name_three = willlist[i].trade_name_three
          app.globalData.pay_start = willlist[i].pay_start
          app.globalData.pay_end = willlist[i].pay_end
          app.globalData.trade_id_one = willlist[i].trade_id_one
          app.globalData.trade_id_two = willlist[i].trade_id_two
          app.globalData.trade_id_three = willlist[i].trade_id_three
          break
        }
        
      }
      
    }else{

    }
    wx.navigateTo({
      url: '../addintention/addintention',
    })
    
  }
})