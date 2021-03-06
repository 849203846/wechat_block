var utils = require('../..//utils/util.js')
const app = getApp()

Page({
  data: {
    page:'1',
    imgUrls: [
      '/images/banner1.jpg',
      '/images/banner2.jpg',
    ],
    interval: 5000,
    duration: 1000
  },
  //事件处理函数
  gotosousuo: function() {
    wx.navigateTo({
      url: '../sousuo/sousuo'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  onShow:function(){
    app.getuser()
    // if (this.data.job_id==undefined||this.data.job_id=='undefined'){
    //   wx.showModal({
    //     title: '温馨提示',
    //     content: '您还未添加求职意向,请前往我的简历添加求职意向',
    //     success:function(){
    //       wx.navigateTo({
    //         url: '../jianli/jianli',
    //       })
    //     }
    //   })
    //   return;
    // }
    // console.log(this.data.job_id)
    // var data={
    //   job_id: this.data.job_id,//
    // }
    // getposition
    utils.sendRrquest('getposition', 1, {})
    .then((res)=>{
      console.log(res.data.data.data)
      this.setData({
        list:res.data.data.data,
        page:'1'
      })
    })
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  gotopositionItel:function(e){
    console.log(e)
    wx.navigateTo({
      url: '../positionItel/positionItel?id=' + e.target.dataset.id
    })
  },
  onReachBottom: function () {
    var page = ++this.data.page
    var data={
      page: page
    }
    utils.sendRrquest('getposition', 1, data)
      .then((res) => {
        this.setData({
          page: page,
          list: [...this.data.list, ...res.data.data.data]
        })
      })
  }
})
