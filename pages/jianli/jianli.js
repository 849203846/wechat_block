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
        username: app.globalData.userInfo.nickName,
        avatarUrl: app.globalData.userInfo.avatarUrl,
        userAg0: '24岁 男 4年',
      })
    }
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
  addintention:function(){
    wx.navigateTo({
      url: '../addintention/addintention',
    })
  }
})